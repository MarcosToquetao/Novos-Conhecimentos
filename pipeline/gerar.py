#!/usr/bin/env python3
"""gerar.py: pipeline barato de conteúdo do Novos Conhecimentos.

Gera com DeepSeek, fiscaliza com checagens determinísticas + JEV (OpenRouter),
e deixa rascunhos para revisão humana em pipeline/revisar.py.

Uso
  python pipeline/gerar.py licao <id> [<id> ...] [--seco] [--sem-revisao-pro]
  python pipeline/gerar.py licao --todas          lições para todo documento sem lição nem rascunho
  python pipeline/gerar.py grafo [--seco]         subáreas e ligações do mapa do acervo
  python pipeline/gerar.py triagem                JEV marca termos do catálogo sem respaldo suficiente (não apaga)
  python pipeline/gerar.py aprender               resume suas notas em regras novas no estilo.md
  python pipeline/gerar.py status                 fila, sequência de aprovações e custo gasto
  python pipeline/gerar.py teste                  autoteste das checagens, sem chamar API

Chaves em .env na raiz: DEEPSEEK_API_KEY=...  OPENROUTER_API_KEY=...
"""
import datetime, json, pathlib, re, subprocess, sys, time, urllib.error, urllib.request

RAIZ = pathlib.Path(__file__).resolve().parent.parent
PIPE = RAIZ / "pipeline"
RASC = PIPE / "rascunhos"
AVAL = PIPE / "avaliacoes.jsonl"
CUSTOS = PIPE / "custos.jsonl"
ESTILO = PIPE / "estilo.md"

FLASH, PRO, JEV = "deepseek-flash", "deepseek-v4-pro", "typesafe/jev-1.13"
# US$ por milhão de tokens (cache hit, cache miss, saída), preços de pico; fora do pico é metade.
PRECOS = {FLASH: (0.006, 0.30, 1.20), PRO: (0.044, 1.32, 3.96)}
GRADUACAO = 9          # aprovações seguidas de primeira para liberar publicação automática
MARCAS = ["consenso", "emergente"]  # lições só afirmam o que tem respaldo; controverso e especulação ficam de fora
# Limiares do portão JEV. Ajuste com o que `aprender` mostrar sobre os seus veredictos.
LIMIAR = {"ia": 0.5, "marca": 0.6, "ambigua": 0.5, "interesse": 1.5}


# ── infraestrutura ──────────────────────────────────────────────────────
def chave(nome):
    arq = RAIZ / ".env"
    if arq.exists():
        for linha in arq.read_text(encoding="utf-8").splitlines():
            k, _, v = linha.partition("=")
            if k.strip() == nome and v.strip().strip('"'):
                return v.strip().strip('"')
    sys.exit(f"Falta {nome} em .env na raiz do projeto (cole a chave depois do sinal de igual).")


def post(url, corpo, token, tentativas=3):
    req = urllib.request.Request(url, json.dumps(corpo).encode(), {
        "Content-Type": "application/json", "Authorization": f"Bearer {token}"})
    for t in range(tentativas):
        try:
            with urllib.request.urlopen(req, timeout=600) as r:
                return json.loads(r.read())
        except urllib.error.HTTPError as e:
            msg = e.read().decode(errors="replace")[:400]
            if e.code in (429, 500, 502, 503) and t < tentativas - 1:
                time.sleep(5 * (t + 1)); continue
            sys.exit(f"HTTP {e.code} em {url}: {msg}")
        except urllib.error.URLError as e:
            if t < tentativas - 1:
                time.sleep(5); continue
            sys.exit(f"Sem conexão com {url}: {e}")


def pico():
    """DeepSeek cobra preço cheio 01-04h e 06-10h UTC, segunda a sexta."""
    h = datetime.datetime.now(datetime.timezone.utc)
    return h.weekday() < 5 and (1 <= h.hour < 4 or 6 <= h.hour < 10)


def registrar_custo(etapa, alvo, modelo, usd, uso):
    with CUSTOS.open("a", encoding="utf-8") as f:
        f.write(json.dumps({"quando": agora(), "etapa": etapa, "alvo": alvo, "modelo": modelo,
                            "usd": round(usd, 6), "uso": uso}, ensure_ascii=False) + "\n")


def agora():
    return datetime.datetime.now().isoformat(timespec="seconds")


def deepseek(modelo, sistema, usuario, etapa, alvo, max_tokens=8000, pensar=False):
    corpo = {"model": modelo, "max_tokens": max_tokens,
             "response_format": {"type": "json_object"},
             "thinking": {"type": "enabled" if pensar else "disabled"},
             "messages": [{"role": "system", "content": sistema}, {"role": "user", "content": usuario}]}
    for _ in range(3):  # a API às vezes devolve conteúdo vazio no modo json
        r = post("https://api.deepseek.com/chat/completions", corpo, chave("DEEPSEEK_API_KEY"))
        u = r.get("usage", {})
        hit, total = u.get("prompt_cache_hit_tokens", 0), u.get("prompt_tokens", 0)
        miss = u.get("prompt_cache_miss_tokens", total - hit)
        p = PRECOS[modelo]
        usd = (hit * p[0] + miss * p[1] + u.get("completion_tokens", 0) * p[2]) / 1e6 * (1 if pico() else 0.5)
        registrar_custo(etapa, alvo, modelo, usd, u)
        texto = r["choices"][0]["message"].get("content") or ""
        try:
            return json.loads(texto), usd
        except json.JSONDecodeError:
            print(f"  resposta sem json válido de {modelo}, tentando de novo")
    sys.exit(f"{modelo} não devolveu json válido para {alvo}.")


def jev(estado, perguntas, etapa, alvo):
    """Faz as perguntas tipadas ao JEV em lotes de 20. Devolve {chave: resposta}."""
    respostas, chaves = {}, list(perguntas)
    for i in range(0, len(chaves), 20):
        lote = {k: perguntas[k] for k in chaves[i:i + 20]}
        r = post("https://openrouter.ai/api/alpha/decisions",
                 {"model": JEV, "state": estado, "questions": lote}, chave("OPENROUTER_API_KEY"))
        registrar_custo(etapa, alvo, JEV, r.get("usage", {}).get("cost", 0), r.get("usage", {}))
        respostas.update(r.get("answers", {}))
    return respostas


def indice():
    return json.loads((RAIZ / "dados" / "indice.json").read_text(encoding="utf-8"))


def documento(id_):
    return json.loads((RAIZ / "dados" / "c" / f"{id_}.json").read_text(encoding="utf-8"))


def avaliacoes():
    if not AVAL.exists():
        return []
    return [json.loads(l) for l in AVAL.read_text(encoding="utf-8").splitlines() if l.strip()]


def sequencia_aprovadas():
    n = 0
    for a in reversed(avaliacoes()):
        if a["veredicto"] != "aprovado":
            break
        n += 1
    return n


def estilo():
    return ESTILO.read_text(encoding="utf-8")


def expressoes_proibidas():
    m = re.search(r"## Expressões proibidas\n(.*?)\n## ", estilo(), re.S)
    return [l[2:].strip().lower() for l in (m.group(1) if m else "").splitlines() if l.startswith("- ")]


def texto_puro(html):
    html = re.sub(r"<svg.*?</svg>", " [figura] ", html, flags=re.S)
    html = re.sub(r'<sup class="cit"><a href="#f(\d+)">\d+</a></sup>', r" [\1]", html)
    html = re.sub(r'<div class="marca (\w+)">', r"\n[marca: \1] ", html)
    html = re.sub(r"</(p|h3|li|div|tr)>", "\n", html)
    html = re.sub(r"<[^>]+>", "", html)
    html = html.replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">")
    return re.sub(r"[ \t]+", " ", re.sub(r"\n\s*\n+", "\n\n", html)).strip()


# ── checagens determinísticas ───────────────────────────────────────────
EMOJI = re.compile("[\U0001F300-\U0001FAFF\u2600-\u27BF]")


def checar_texto(onde, s, erros):
    if "—" in s or "–" in s or "--" in s:
        erros.append(f"{onde}: travessão ou substituto")
    if re.search("[\u201c\u201d\u2018\u2019]", s):
        erros.append(f"{onde}: aspas curvas")
    if EMOJI.search(s):
        erros.append(f"{onde}: emoji")
    baixo = s.lower()
    for e in expressoes_proibidas():
        if re.search(r"\b" + re.escape(e), baixo):  # sem \b no fim: pega plural e flexões
            erros.append(f"{onde}: expressão proibida «{e}»")


def checar_licao(L, doc):
    erros, avisos = [], []
    fontes = {f["n"] for f in doc.get("fontes", [])}
    telas = L.get("telas") or []
    if not L.get("gancho"):
        erros.append("sem gancho")
    elif len(L["gancho"].split()) > 45:
        avisos.append("gancho com mais de 45 palavras")
    if not L.get("fecho"):
        erros.append("sem fecho")
    if not 6 <= len(telas) <= 9:
        erros.append(f"{len(telas)} telas (esperado 6 a 9)")
    perguntas = [t for t in telas if t.get("tipo") == "pergunta"]
    if not 2 <= len(perguntas) <= 3:
        erros.append(f"{len(perguntas)} perguntas (esperado 2 ou 3)")
    if telas and telas[0].get("tipo") != "texto":
        erros.append("a primeira tela deve ser texto")
    checar_texto("gancho", L.get("gancho", ""), erros)
    checar_texto("fecho", L.get("fecho", ""), erros)
    anterior = None
    for i, t in enumerate(telas, 1):
        tipo = t.get("tipo")
        if tipo == "texto":
            html = t.get("html", "")
            palavras = len(re.sub(r"<[^>]+>", " ", html).split())
            if palavras > 90:
                erros.append(f"tela {i}: {palavras} palavras (máximo 60)")
            elif palavras > 60:
                avisos.append(f"tela {i}: {palavras} palavras (máximo 60)")
            if html.count("<strong>") > 1:
                avisos.append(f"tela {i}: mais de um negrito")
            if t.get("marca") and t["marca"] not in MARCAS:
                erros.append(f"tela {i}: marca {t['marca']} não é permitida (só consenso ou emergente)")
            if t.get("fonte") is not None and t["fonte"] not in fontes:
                erros.append(f"tela {i}: fonte {t['fonte']} não existe no documento")
            if t.get("marca") and t.get("fonte") is None:
                avisos.append(f"tela {i}: marca sem fonte")
            checar_texto(f"tela {i}", html, erros)
            inicio = re.sub(r"<[^>]+>", "", html).split()[:2]
            if anterior and inicio == anterior:
                avisos.append(f"tela {i}: começa igual à tela anterior")
            anterior = inicio
        elif tipo == "pergunta":
            alts = t.get("alts") or []
            if len(alts) != 3 or not isinstance(t.get("correta"), int) or not 0 <= t["correta"] < len(alts):
                erros.append(f"tela {i}: pergunta malformada (3 alternativas e correta 0 a 2)")
            if not t.get("porque"):
                erros.append(f"tela {i}: pergunta sem porque")
            for k, s in [("q", t.get("q", "")), ("porque", t.get("porque", ""))] + [(f"alt {j}", a) for j, a in enumerate(alts)]:
                checar_texto(f"tela {i} {k}", s, erros)
            if i > 1 and telas[i - 2].get("tipo") == "pergunta":
                avisos.append(f"tela {i}: duas perguntas seguidas")
            anterior = None
        else:
            erros.append(f"tela {i}: tipo desconhecido {tipo}")
    return erros, avisos


# ── portão JEV ──────────────────────────────────────────────────────────
def portao_jev(L, termo, alvo):
    telas = L.get("telas", [])
    estado = {"conceito": termo, "gancho": L.get("gancho", ""), "telas": {}}
    perg = {"interesse": {"type": "score",
                          "instructions": "Para uma pessoa leiga no celular, quanto o gancho desperta vontade de continuar lendo?",
                          "criteria": ["Nenhuma", "Pouca", "Alguma", "Quer ver a próxima tela", "Irresistível"]}}
    for i, t in enumerate(telas, 1):
        if t.get("tipo") == "texto":
            estado["telas"][f"t{i}"] = texto_puro(t.get("html", ""))
            perg[f"ia_{i}"] = {"type": "noul",
                               "instructions": f"O trecho telas.t{i} soa como texto gerado por IA?",
                               "criteria": {"true": "fórmulas vazias, ênfase inflada, abstração sem exemplo concreto, estrutura previsível",
                                            "false": "soa como uma pessoa que conhece o assunto explicando com exemplos concretos"}}
            if t.get("marca"):
                perg[f"marca_{i}"] = {"type": "choice",
                                      "instructions": f"Qual é o grau real de certeza científica da afirmação principal de telas.t{i}?",
                                      "criteria": {"consenso": "amplamente replicado e aceito na área",
                                                   "emergente": "evidência séria mas recente ou não consolidada",
                                                   "controverso": "especialistas competentes discordam",
                                                   "especulacao": "hipótese sem teste empírico decisivo"}}
        elif t.get("tipo") == "pergunta":
            estado["telas"][f"t{i}"] = {"pergunta": t.get("q"), "alternativas": t.get("alts"),
                                        "marcada_como_correta": (t.get("alts") or ["?"])[t.get("correta", 0) or 0]}
            perg[f"ambigua_{i}"] = {"type": "noul",
                                    "instructions": f"A pergunta telas.t{i} tem problema de gabarito?",
                                    "criteria": {"true": "mais de uma alternativa defensável, ou a marcada como correta está errada",
                                                 "false": "exatamente uma alternativa correta, e é a marcada"}}
    r = jev(estado, perg, "jev-licao", alvo)
    alertas = []
    for k, v in r.items():
        tipo, _, n = k.partition("_")
        if tipo == "ia" and v.get("noul", 0) > LIMIAR["ia"]:
            alertas.append(f"tela {n}: soa como IA ({v['noul']:.2f})")
        elif tipo == "ambigua" and v.get("noul", 0) > LIMIAR["ambigua"]:
            alertas.append(f"tela {n}: gabarito suspeito ({v['noul']:.2f})")
        elif tipo == "marca":
            declarada = telas[int(n) - 1].get("marca")
            if v.get("choice") != declarada and v.get("probabilities", {}).get(v.get("choice"), 0) > LIMIAR["marca"]:
                alertas.append(f"tela {n}: marcada {declarada}, JEV diz {v['choice']} ({v['probabilities'][v['choice']]:.2f})")
        elif k == "interesse" and v.get("score", 5) < LIMIAR["interesse"]:
            alertas.append(f"gancho pouco interessante (nota {v['score']:.1f} de 4)")
    return alertas, r


# ── lições ──────────────────────────────────────────────────────────────
def exemplos(excluir, n=2):
    """Lições aprovadas de primeira com melhor nota viram exemplo no prompt."""
    boas = [a for a in avaliacoes() if a["tipo"] == "licao" and a["veredicto"] == "aprovado" and a["id"] != excluir]
    boas.sort(key=lambda a: -sum((a.get("notas") or {}).values()))
    saida = []
    for a in boas[:n]:
        d = documento(a["id"])
        if d.get("licao"):
            L = {k: d["licao"][k] for k in ("gancho", "telas", "fecho")}
            for t in L["telas"]:
                t.pop("svg", None)
            saida.append(f"Conceito: {d['termo']} ({d['area']})\n```json\n{json.dumps(L, ensure_ascii=False)}\n```")
    return saida


def vizinhos(id_, idx):
    ligados = [b if a == id_ else a for a, b in idx["arestas"] if id_ in (a, b)]
    if not ligados:
        area = next(c["area"] for c in idx["conceitos"] if c["id"] == id_)
        ligados = [c["id"] for c in idx["conceitos"] if c["area"] == area and c["id"] != id_][:8]
    termo = {c["id"]: c["termo"] for c in idx["conceitos"]}
    return [termo[i] for i in ligados]


def prompts_licao(id_, idx):
    doc = documento(id_)
    sistema = estilo() + "\n\n## Tarefa\n\nTransforme o documento de estudo aprovado que vem na mensagem do usuário numa lição curta no formato acima. " \
        "Use só informação que está no documento. Cite fontes pelo número n da lista de fontes do documento. " \
        "Responda somente com um objeto json com as chaves gancho, telas e fecho, no mesmo formato do exemplo."
    ex = exemplos(id_)
    if ex:
        sistema += "\n\n## Outras lições aprovadas pelo editor\n\n" + "\n\n".join(ex)
    s = doc.get("sintese") or {}
    usuario = "\n".join([
        f"Conceito: {doc['termo']} ({doc['area']})",
        f"Conceitos vizinhos no acervo, para o fecho: {', '.join(vizinhos(id_, idx))}",
        "", "Fontes do documento:",
        *[f"{f['n']}. {texto_puro(f['ref'])[:160]}" for f in doc.get("fontes", [])],
        "", "Documento:", texto_puro(doc["camadas"]["nucleo"]["html"]),
        texto_puro((doc["camadas"].get("aprofundamento") or {}).get("html", "")),
        "", "O que precisa ser lembrado:", *[f"- {x}" for x in s.get("lembrar", [])],
        "", "Onde a intuição erra:", *[f"- {x['erro']}: {x['correcao']}" for x in s.get("confusoes", [])],
    ])
    return sistema, usuario, doc


def gerar_licao(id_, idx, seco=False, revisao_pro=True):
    sistema, usuario, doc = prompts_licao(id_, idx)
    if seco:
        tok = (len(sistema) + len(usuario)) / 3.2
        print(f"{id_}: ~{tok:,.0f} tokens de entrada, ~3.000 de saída, "
              f"~US$ {(tok * 0.30 + 3000 * 1.20) / 1e6 * (1 if pico() else .5):.4f} no Flash ({'pico' if pico() else 'fora do pico'})")
        return
    print(f"{id_}: gerando com {FLASH}")
    L, custo = deepseek(FLASH, sistema, usuario, "licao", id_)
    erros, avisos = checar_licao(L, doc)
    alertas, bruto = portao_jev(L, doc["termo"], id_)
    rodada, modelo = 1, FLASH
    if (erros or alertas) and revisao_pro:
        print(f"  {len(erros)} erro(s), {len(alertas)} alerta(s) do JEV: reescrevendo trechos com {PRO}")
        pedido = "Corrija só os problemas listados, mantendo o resto da lição igual. " \
                 "Responda com o objeto json completo da lição corrigida.\n\nProblemas:\n" + \
                 "\n".join(f"- {x}" for x in erros + alertas) + "\n\nLição:\n" + json.dumps(L, ensure_ascii=False)
        L2, c2 = deepseek(PRO, sistema, usuario + "\n\n" + pedido, "revisao", id_)
        custo += c2
        e2, a2 = checar_licao(L2, doc)
        if len(e2) <= len(erros):
            L, erros, avisos, rodada, modelo = L2, e2, a2, 2, f"{FLASH}+{PRO}"
            alertas, bruto = portao_jev(L, doc["termo"], id_)
    RASC.mkdir(exist_ok=True)
    rasc = {"id": id_, "tipo": "licao", "criado": agora(), "modelo": modelo, "rodadas": rodada,
            "licao": L, "erros": erros, "avisos": avisos, "alertas_jev": alertas, "jev": bruto,
            "custo_usd": round(custo, 5)}
    (RASC / f"{id_}.json").write_text(json.dumps(rasc, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"  rascunho salvo · {len(erros)} erro(s) · {len(avisos)} aviso(s) · {len(alertas)} alerta(s) JEV · US$ {custo:.4f}")
    return rasc


def publicar_licao(id_, L):
    """Grava licao no js/docs/<id>.js (substitui se já existir) e roda o build."""
    arq = RAIZ / "js" / "docs" / f"{id_}.js"
    js = original = arq.read_text(encoding="utf-8")
    linha = "licao: " + json.dumps({k: L[k] for k in ("gancho", "telas", "fecho")}, ensure_ascii=False) + ","
    if re.search(r"^licao: .*$", js, re.M):
        js = re.sub(r"^licao: .*$", lambda m: linha, js, count=1, flags=re.M)
    else:
        fim = js.rindex("\n};")
        antes = js[:fim].rstrip()
        js = antes + ("" if antes.endswith(",") else ",") + "\n\n" + linha + js[fim:]
    arq.write_text(js, encoding="utf-8")
    r = subprocess.run(["node", "build.js"], cwd=RAIZ, capture_output=True, text=True)
    if r.returncode:
        arq.write_text(original, encoding="utf-8")
        raise RuntimeError("build.js falhou:\n" + r.stdout[-2000:])
    return r.stdout.strip().splitlines()[-2:]


# ── grafo do acervo ─────────────────────────────────────────────────────
def gerar_grafo(seco=False):
    idx = indice()
    linhas = [f"{c['id']} | {c['termo']} | {c['area']}" for c in idx["conceitos"]]
    sistema = ("Você organiza um acervo de conceitos de divulgação científica num mapa de conhecimento. "
               "Para cada área, crie de 2 a 6 subáreas com nomes curtos em minúsculas, em português "
               "(por exemplo, em Biologia: microbiologia, evolução, célula). Atribua cada conceito a uma subárea da sua área. "
               "Para cada conceito, liste de 2 a 5 ids de outros conceitos do acervo mais próximos dele: "
               "entender um ajuda de verdade a entender o outro. Prefira a mesma área, mas ligue áreas diferentes quando a ponte for real "
               "(ex.: termodinâmica de buracos negros com entropia). Use só ids que existem na lista. "
               'Responda somente com json: {"conceitos": {"<id>": {"sub": "<subárea>", "liga": ["<id>", ...]}}}')
    usuario = "Acervo (id | termo | área):\n" + "\n".join(linhas)
    if seco:
        print(f"grafo: ~{(len(sistema) + len(usuario)) / 3.2:,.0f} tokens de entrada, ~15.000 de saída")
        return
    print(f"grafo: pedindo subáreas e ligações ao {FLASH}")
    r, _ = deepseek(FLASH, sistema, usuario, "grafo", "acervo", max_tokens=40000)
    ids = {c["id"]: c for c in idx["conceitos"]}
    g = {i: {"sub": (v.get("sub") or "").strip().lower(), "liga": [x for x in v.get("liga", []) if x in ids and x != i]}
         for i, v in r.get("conceitos", {}).items() if i in ids}
    pares = sorted({tuple(sorted((a, b))) for a, v in g.items() for b in v["liga"]})
    print(f"  {len(g)} conceitos, {len(pares)} ligações; conferindo cada uma com o JEV")
    estado = {"pares": {f"p{k}": f"{ids[a]['termo']} ({ids[a]['area']}) :: {ids[b]['termo']} ({ids[b]['area']})" for k, (a, b) in enumerate(pares)}}
    perg = {f"p{k}": {"type": "noul", "instructions": f"Os dois conceitos do par pares.p{k} são próximos o bastante para que entender um ajude a entender o outro?",
                      "criteria": {"true": "relação conceitual real", "false": "ligação forçada ou só superficial"}} for k in range(len(pares))}
    resp = {}
    for i in range(0, len(pares), 20):  # o estado vai só com os pares do lote, para não pagar o acervo inteiro a cada chamada
        ks = [f"p{k}" for k in range(i, min(i + 20, len(pares)))]
        resp.update(jev({"pares": {k: estado["pares"][k] for k in ks}}, {k: perg[k] for k in ks}, "jev-grafo", "acervo"))
    fracas = {pares[int(k[1:])] for k, v in resp.items() if v.get("noul", 1) < 0.5}
    for a, v in g.items():
        v["liga"] = [b for b in v["liga"] if tuple(sorted((a, b))) not in fracas]
    (RAIZ / "js" / "grafo.json").write_text(json.dumps(g, ensure_ascii=False, indent=0), encoding="utf-8")
    print(f"  {len(fracas)} ligações cortadas pelo JEV. js/grafo.json gravado; rodando build.js")
    print(subprocess.run(["node", "build.js"], cwd=RAIZ, capture_output=True, text=True).stdout.strip().splitlines()[-2:])


# ── triagem do catálogo: só fica tema com respaldo ──────────────────────
def triagem():
    """O JEV avalia se o núcleo de cada termo do catálogo é conhecimento estabelecido.
    Grava pipeline/triagem.json e lista os suspeitos para o editor decidir. Não apaga nada."""
    idx = indice()
    cs = idx["conceitos"]
    resp = {}
    for i in range(0, len(cs), 20):
        lote = cs[i:i + 20]
        estado = {"itens": {c["id"]: f"{c['termo']} ({c['area']}): {c['gancho']}" for c in lote}}
        perg = {c["id"]: {"type": "choice",
                          "instructions": f"Qual é o status do núcleo do conceito itens.{c['id']} na sua área?",
                          "criteria": {"estabelecido": "conhecimento aceito, em livro-texto, com evidência replicada ou fato documentado",
                                       "emergente": "evidência séria e replicada, mas recente",
                                       "controverso": "especialistas competentes discordam sobre o núcleo do conceito",
                                       "especulativo": "hipótese sem teste decisivo, ou afirmação popular sem base"}}
                for c in lote}
        resp.update(jev(estado, perg, "triagem", "catalogo"))
        print(f"  {min(i + 20, len(cs))}/{len(cs)}", end="\r")
    saida = {k: {"status": v.get("choice"), "p": v.get("probabilities", {})} for k, v in resp.items()}
    (PIPE / "triagem.json").write_text(json.dumps(saida, ensure_ascii=False, indent=1), encoding="utf-8")
    risco = lambda k: saida[k]["p"].get("controverso", 0) + saida[k]["p"].get("especulativo", 0)
    suspeitos = sorted((k for k in saida if risco(k) > 0.35), key=lambda k: -risco(k))
    termo = {c["id"]: (c["termo"], c["doc"]) for c in cs}
    print(f"\n{len(suspeitos)} termo(s) com risco de não ter respaldo suficiente (controverso + especulativo > 35%):")
    for k in suspeitos:
        print(f"  {risco(k):.0%}  {'[TEM DOC] ' if termo[k][1] else ''}{termo[k][0]} ({k})")


# ── aprendizado e status ────────────────────────────────────────────────
def aprender():
    avs = avaliacoes()
    marco = next((i for i in range(len(avs) - 1, -1, -1) if avs[i].get("tipo") == "aprendizado"), -1)
    novas = [a for a in avs[marco + 1:] if a.get("comentario") or a.get("editado")]
    if not novas:
        print("Nenhuma nota ou edição nova desde o último aprendizado.")
    else:
        sistema = ("Você mantém o guia de estilo de um app de divulgação científica. A partir das notas e edições do editor, "
                   "escreva de 1 a 8 regras novas, concretas e verificáveis, que ainda não estão no guia. "
                   "Nada de regra vaga como 'escrever melhor'. Sem travessão. "
                   'Responda somente com json: {"regras": ["...", "..."]}')
        usuario = "Guia atual:\n" + estilo() + "\n\nNotas e edições do editor:\n" + "\n\n".join(
            json.dumps({k: a.get(k) for k in ("id", "veredicto", "notas", "comentario", "editado")}, ensure_ascii=False) for a in novas)
        r, _ = deepseek(PRO, sistema, usuario, "aprender", "estilo", max_tokens=3000)
        regras = [x for x in r.get("regras", []) if "—" not in x]
        with ESTILO.open("a", encoding="utf-8") as f:
            f.write(f"\n<!-- {agora()[:10]}, a partir de {len(novas)} revisão(ões) -->\n" + "".join(f"- {x}\n" for x in regras))
        with AVAL.open("a", encoding="utf-8") as f:
            f.write(json.dumps({"tipo": "aprendizado", "id": "-", "veredicto": "-", "quando": agora(), "regras": regras}, ensure_ascii=False) + "\n")
        print(f"{len(regras)} regra(s) nova(s) em pipeline/estilo.md. Confira com git diff antes de commitar:")
        for x in regras:
            print("  -", x)
    # calibração do JEV: com que frequência cada alerta aparece no que você aprova e no que rejeita
    licoes = [a for a in avs if a.get("tipo") == "licao"]
    for rot, grupo in [("aprovadas", [a for a in licoes if a["veredicto"] == "aprovado"]),
                       ("editadas ou rejeitadas", [a for a in licoes if a["veredicto"] != "aprovado"])]:
        if grupo:
            media = sum(len(a.get("alertas_jev", [])) for a in grupo) / len(grupo)
            print(f"JEV: {media:.1f} alerta(s) por lição entre as {rot} ({len(grupo)})")


def status():
    rasc = sorted(p.stem for p in RASC.glob("*.json")) if RASC.exists() else []
    gasto = sum(json.loads(l)["usd"] for l in CUSTOS.read_text(encoding="utf-8").splitlines()) if CUSTOS.exists() else 0
    seq = sequencia_aprovadas()
    print(f"fila de revisão: {len(rasc)} {rasc[:12]}")
    print(f"aprovadas de primeira em sequência: {seq}/{GRADUACAO}" + ("  → publicação automática liberada" if seq >= GRADUACAO else ""))
    print(f"custo acumulado: US$ {gasto:.4f} · agora é {'pico' if pico() else 'fora do pico'} na DeepSeek")


def autoteste():
    """Checagens com a lição de exemplo do estilo.md (deve passar) e uma estragada (deve ser barrada)."""
    import copy
    ex = json.loads(re.search(r"```json\n(.*?)\n```", estilo(), re.S).group(1))
    doc = documento("biofilmes")
    erros, _ = checar_licao(ex, doc)
    assert not erros, erros
    ruim = copy.deepcopy(ex)
    ruim["telas"][0]["html"] = "<p>Vale ressaltar que biofilmes são fascinantes — e “perigosos”.</p>"
    ruim["telas"][2]["fonte"] = 99
    ruim["telas"][3]["correta"] = 5
    erros, _ = checar_licao(ruim, doc)
    for esperado in ["travessão", "aspas curvas", "vale ressaltar", "fascinante", "fonte 99", "pergunta malformada"]:
        assert any(esperado in e for e in erros), (esperado, erros)
    print("autoteste ok:", len(erros), "erros detectados na lição estragada")


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    cmd, flags, ids = a[0], {x for x in a if x.startswith("--")}, [x for x in a[1:] if not x.startswith("--")]
    if cmd == "licao":
        idx = indice()
        if "--todas" in flags:
            feitos = {p.stem for p in RASC.glob("*.json")} if RASC.exists() else set()
            ids = [c["id"] for c in idx["conceitos"] if c["doc"] and not c["licao"] and c["id"] not in feitos]
        for i in ids:
            gerar_licao(i, idx, seco="--seco" in flags, revisao_pro="--sem-revisao-pro" not in flags)
    elif cmd == "grafo":
        gerar_grafo(seco="--seco" in flags)
    elif cmd == "triagem":
        triagem()
    elif cmd == "aprender":
        aprender()
    elif cmd == "status":
        status()
    elif cmd == "teste":
        autoteste()
    else:
        sys.exit(__doc__)


if __name__ == "__main__":
    main()
