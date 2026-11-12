#!/usr/bin/env python3
"""revisar.py: servidor local da revisão por pares.

  python pipeline/revisar.py        e abra http://localhost:8766/pipeline/revisar.html

Mostra as duas versões de cada lição (pipeline/candidatas/<id>.a.json e .b.json)
exatamente como o leitor vai ver (js/licao.js). O editor escolhe uma, ou nenhuma.
Escolher publica no js/docs/<id>.js e roda o build. Cada escolha vai para
pipeline/avaliacoes.jsonl (tipo par), de onde o juiz tira o gosto do editor.
As lições no ar podem ser vetadas: saem do app e voltam para a produção.
Também mostra a triagem do catálogo para você decidir o que sai.
"""
import functools, http.server, json, sys
import gerar as g

PORTA = 8766
CURADORIA = g.PIPE / "curadoria.jsonl"


def ler_jsonl(arq):
    return [json.loads(l) for l in arq.read_text(encoding="utf-8").splitlines() if l.strip()] if arq.exists() else []


def ler(arq):
    return json.loads(arq.read_text(encoding="utf-8")) if arq.exists() else None


def registrar(reg):
    with g.AVAL.open("a", encoding="utf-8") as f:
        f.write(json.dumps({**reg, "quando": g.agora()}, ensure_ascii=False) + "\n")


def novo_formato(d):
    telas = (d.get("licao") or {}).get("telas") or []
    return bool(telas) and telas[-1].get("tipo") == "contar"


def embutir_figuras(L):
    """Candidata não passou pelo build: embute aqui o SVG das telas de figura."""
    if L:
        js = (g.RAIZ / "js" / "figuras.js").read_text(encoding="utf-8")
        figuras = json.loads(js[js.index("{"):js.index("\n};") + 2])
        for t in L.get("telas", []):
            if t.get("tipo") == "figura":
                t["svg"] = figuras.get(t.get("fig"), "")
    return L


def pares():
    """Pendentes: conceitos julgados que ainda não estão no ar no formato novo. Publicadas: as que podem ser vetadas."""
    idx = {c["id"]: c for c in g.indice()["conceitos"]}
    item = lambda i: {"id": i, "termo": idx.get(i, {}).get("termo", i), "area": idx.get(i, {}).get("area", "")}
    julgados = sorted(p.name.split(".")[0] for p in g.CAND.glob("*.juiz.json")) if g.CAND.exists() else []
    no_ar = [c["id"] for c in idx.values() if c["licao"] and novo_formato(g.documento(c["id"]))]
    ps = g.pares()
    return {"pendentes": [item(i) for i in julgados if i not in no_ar], "publicadas": [item(i) for i in no_ar],
            "escolhas": len(ps), "concordancia": sum(p.get("juiz") == p["escolha"] for p in ps)}


def par(id_):
    d = g.documento(id_)
    no_ar = novo_formato(d)
    return {"id": id_, "publicada": no_ar, "doc": {k: d.get(k) for k in ("termo", "area", "fontes", "subtitulo", "fotos")},
            "a": d["licao"] if no_ar else embutir_figuras(ler(g.CAND / f"{id_}.a.json")),
            "b": None if no_ar else embutir_figuras(ler(g.CAND / f"{id_}.b.json"))}


def limpar_candidatas(id_):
    for p in g.CAND.glob(f"{id_}.*"):
        p.unlink()


def escolher(corpo):
    id_, e = corpo["id"], corpo["escolha"]
    juiz = (ler(g.CAND / f"{id_}.juiz.json") or {}).get("vencedora")
    if e in ("a", "b"):
        L = ler(g.CAND / f"{id_}.{e}.json")
        erros, _ = g.checar_licao(L, g.documento(id_))
        if erros:
            return 400, {"erro": "A versão escolhida tem problemas: " + "; ".join(erros)}
        g.publicar_licao(id_, L)
    else:
        limpar_candidatas(id_)   # nenhuma serve: o conceito volta para a produção, do zero
    registrar({"tipo": "par", "id": id_, "juiz": juiz, "escolha": e, "comentario": corpo.get("comentario", "")})
    return 200, {"ok": True, "juiz": juiz}


def vetar(corpo):
    id_ = corpo["id"]
    g.despublicar_licao(id_)
    limpar_candidatas(id_)
    registrar({"tipo": "veto", "id": id_, "comentario": corpo.get("comentario", "")})
    return 200, {"ok": True}


def triagem():
    arq = g.PIPE / "triagem.json"
    if not arq.exists():
        return {"itens": []}
    t = json.loads(arq.read_text(encoding="utf-8"))
    decididos = {x["id"]: x["decisao"] for x in ler_jsonl(CURADORIA)}
    idx = {c["id"]: c for c in g.indice()["conceitos"]}
    risco = lambda k: t[k]["p"].get("controverso", 0) + t[k]["p"].get("especulativo", 0)
    itens = [{"id": k, "termo": idx[k]["termo"], "area": idx[k]["area"], "gancho": idx[k]["gancho"], "doc": idx[k]["doc"],
              "risco": round(risco(k), 2), "status": t[k]["status"], "decisao": decididos.get(k)}
             for k in t if k in idx and risco(k) > 0.35]
    return {"itens": sorted(itens, key=lambda x: -x["risco"])}


class Tratador(http.server.SimpleHTTPRequestHandler):
    def responder(self, cod, dados):
        b = json.dumps(dados, ensure_ascii=False).encode()
        self.send_response(cod)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(b)))
        self.end_headers()
        self.wfile.write(b)

    def do_GET(self):
        if self.path == "/api/pares":
            return self.responder(200, pares())
        if self.path == "/api/triagem":
            return self.responder(200, triagem())
        if self.path.startswith("/api/par/"):
            return self.responder(200, par(self.path.rsplit("/", 1)[1]))
        return super().do_GET()

    def do_POST(self):
        corpo = json.loads(self.rfile.read(int(self.headers.get("Content-Length", 0))) or b"{}")
        try:
            if self.path == "/api/escolher":
                return self.responder(*escolher(corpo))
            if self.path == "/api/vetar":
                return self.responder(*vetar(corpo))
            if self.path == "/api/curadoria":
                with CURADORIA.open("a", encoding="utf-8") as f:
                    f.write(json.dumps({"id": corpo["id"], "decisao": corpo["decisao"], "motivo": corpo.get("motivo", ""),
                                        "quando": g.agora()}, ensure_ascii=False) + "\n")
                return self.responder(200, {"ok": True})
        except Exception as e:  # mostra o erro na tela de revisão em vez de derrubar o servidor
            return self.responder(500, {"erro": str(e)})
        self.responder(404, {"erro": "rota desconhecida"})

    def log_message(self, *a):
        pass


class Servidor(http.server.ThreadingHTTPServer):
    allow_reuse_address = False   # no Windows, reusar a porta deixaria dois servidores dividindo a 8766


if __name__ == "__main__":
    import webbrowser
    sys.stdout.reconfigure(encoding="utf-8")
    try:
        srv = Servidor(("127.0.0.1", PORTA), functools.partial(Tratador, directory=str(g.RAIZ)))
    except OSError:
        sys.exit(f"A porta {PORTA} já está em uso: provavelmente a revisão já está aberta em outro terminal.")
    url = f"http://localhost:{PORTA}/pipeline/revisar.html"
    print(f"Revisão em {url}\nDeixe este terminal aberto enquanto revisa. Ctrl+C encerra.")
    webbrowser.open(url)
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("\nRevisão encerrada.")
