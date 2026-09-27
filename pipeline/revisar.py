#!/usr/bin/env python3
"""revisar.py: servidor local da revisão supervisionada.

  python pipeline/revisar.py        e abra http://localhost:8766/pipeline/revisar.html

Mostra cada rascunho de lição exatamente como o leitor vai ver (js/licao.js),
com a rubrica do editor. Aprovar publica no js/docs/<id>.js e roda o build.
Tudo o que você decide vai para pipeline/avaliacoes.jsonl, de onde o
`gerar.py aprender` tira as regras novas e a sequência de aprovações é contada.
Também mostra a triagem do catálogo para você decidir o que sai.
"""
import functools, http.server, json, sys
import gerar as g

PORTA = 8766
CURADORIA = g.PIPE / "curadoria.jsonl"


def ler_jsonl(arq):
    return [json.loads(l) for l in arq.read_text(encoding="utf-8").splitlines() if l.strip()] if arq.exists() else []


def fila():
    idx = {c["id"]: c for c in g.indice()["conceitos"]}
    itens = []
    for p in sorted(g.RASC.glob("*.json")) if g.RASC.exists() else []:
        r = json.loads(p.read_text(encoding="utf-8"))
        c = idx.get(r["id"], {})
        itens.append({"id": r["id"], "termo": c.get("termo", r["id"]), "area": c.get("area", ""),
                      "erros": len(r["erros"]), "alertas": len(r["alertas_jev"]), "avisos": len(r["avisos"])})
    gasto = sum(x["usd"] for x in ler_jsonl(g.CUSTOS))
    return {"itens": itens, "sequencia": g.sequencia_aprovadas(), "graduacao": g.GRADUACAO, "gasto": round(gasto, 4)}


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


def avaliar(corpo):
    id_ = corpo["id"]
    arq = g.RASC / f"{id_}.json"
    r = json.loads(arq.read_text(encoding="utf-8"))
    final = corpo.get("licao") or r["licao"]
    editado = json.dumps(final, sort_keys=True) != json.dumps(r["licao"], sort_keys=True)
    veredicto = corpo["veredicto"]
    if veredicto == "aprovado" and editado:
        veredicto = "editado"   # aprovar depois de mexer não conta como aprovação de primeira
    if veredicto != "rejeitado":
        erros, _ = g.checar_licao(final, g.documento(id_))
        if erros:
            return 400, {"erro": "A lição editada ainda tem problemas: " + "; ".join(erros)}
        g.publicar_licao(id_, final)
    reg = {"tipo": "licao", "id": id_, "quando": g.agora(), "veredicto": veredicto, "notas": corpo.get("notas") or {},
           "comentario": corpo.get("comentario", ""), "modelo": r["modelo"], "alertas_jev": r["alertas_jev"], "erros": r["erros"]}
    if editado:
        reg["editado"] = {"antes": r["licao"], "depois": final}
    if veredicto == "rejeitado":
        reg["rejeitada"] = r["licao"]
    with g.AVAL.open("a", encoding="utf-8") as f:
        f.write(json.dumps(reg, ensure_ascii=False) + "\n")
    arq.unlink()   # rejeitada volta a ser gerada no próximo `licao --todas`, já com o aprendizado
    return 200, {"ok": True, "veredicto": veredicto, "sequencia": g.sequencia_aprovadas()}


class Tratador(http.server.SimpleHTTPRequestHandler):
    def responder(self, cod, dados):
        b = json.dumps(dados, ensure_ascii=False).encode()
        self.send_response(cod)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(b)))
        self.end_headers()
        self.wfile.write(b)

    def do_GET(self):
        if self.path == "/api/fila":
            return self.responder(200, fila())
        if self.path == "/api/triagem":
            return self.responder(200, triagem())
        if self.path.startswith("/api/rascunho/"):
            id_ = self.path.rsplit("/", 1)[1]
            arq = g.RASC / f"{id_}.json"
            if not arq.exists():
                return self.responder(404, {"erro": "rascunho não encontrado"})
            d = g.documento(id_)
            return self.responder(200, {"rascunho": json.loads(arq.read_text(encoding="utf-8")),
                                        "doc": {k: d[k] for k in ("termo", "area", "fontes", "subtitulo")}})
        return super().do_GET()

    def do_POST(self):
        corpo = json.loads(self.rfile.read(int(self.headers.get("Content-Length", 0))) or b"{}")
        try:
            if self.path == "/api/avaliar":
                return self.responder(*avaliar(corpo))
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
