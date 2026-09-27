#!/usr/bin/env python3
"""gerar.py: pipeline barato de conteúdo do Novos Conhecimentos.

Gera com DeepSeek, fiscaliza com checagens determinísticas + JEV (OpenRouter),
e deixa rascunhos para revisão humana em pipeline/revisar.py.

Uso
  python pipeline/gerar.py licao <id> [<id> ...] [--seco] [--sem-revisao-pro]
  python pipeline/gerar.py licao --todas          lições para todo documento sem lição nem rascunho
  python pipeline/gerar.py grafo [--seco]         subáreas e ligações do mapa do acervo
  python pipeline/gerar.py fronteira <id>... | --todas [--seco]   caixas controverso/especulação → seção «Onde a ciência ainda pesquisa»
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
            if (e.code == 429 or e.code >= 500) and t < tentativas - 1:
                time.sleep(5 * (t + 1)); continue
            raise RuntimeError(f"HTTP {e.code} em {url}: {msg}")
        except urllib.error.URLError as e:
            if t < tentativas - 1:
                time.sleep(5); continue
            raise RuntimeError(f"Sem conexão com {url}: {e}")


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
    if re.search(r"\[\d+\]", s):
        erros.append(f"{onde}: citação [n] no texto (a fonte vai no campo fonte, que vira carimbo)")
    baixo = s.lower()
    if re.search(r"\bnão (é|são|foi|era|está)\b[^.;:]{0,90}?,? mas\b", baixo):
        erros.append(f"{onde}: estrutura «não é X, mas Y»")
    for e in expressoes_proibidas():
        if re.search(r"\b" + re.escape(e), baixo):  # sem \b no fim: pega plural e flexões
            erros.append(f"{onde}: expressão proibida «{e}»")


VISUAIS = {"estimar", "etapas", "camadas", "pontos", "ordenar", "comparar", "linha_tempo", "ciclo", "curva", "figura"}
VALE_PONTO = {"pergunta", "ordenar"}
FORMAS = {"exponencial", "saturacao", "sino", "queda", "u", "logistica", "linear"}
NUM_EXTENSO = {"dez": 10, "vinte": 20, "trinta": 30, "cem": 100, "cento": 100, "duzentos": 200, "mil": 1000,
               "milhão": 1e6, "milhões": 1e6, "bilhão": 1e9, "bilhões": 1e9}


def numeros_do_documento(doc):
    """Todos os números escritos no documento, em algarismo ou por extenso, para conferir os das telas visuais."""
    txt = " ".join(texto_puro(c.get("html", "")) for c in doc.get("camadas", {}).values())
    txt += " " + json.dumps(doc.get("sintese", {}), ensure_ascii=False)
    nums = set()
    for m in re.finditer(r"\d+(?:[.\s]\d{3})*(?:,\d+)?", txt):
        try:
            nums.add(float(m.group(0).replace(".", "").replace(" ", "").replace(",", ".")))
        except ValueError:
            pass
    for m in re.finditer(r"\b(\d+(?:,\d+)?)?\s*(" + "|".join(NUM_EXTENSO) + r")\b", txt.lower()):
        base = float(m.group(1).replace(",", ".")) if m.group(1) else 1
        nums.add(base * NUM_EXTENSO[m.group(2)])
    return nums


def checar_licao(L, doc):
    erros, avisos = [], []
    fontes = {f["n"] for f in doc.get("fontes", [])}
    telas = L.get("telas") or []
    nums = numeros_do_documento(doc)
    if not L.get("gancho"):
        erros.append("sem gancho")
    elif len(L["gancho"].split()) > 45:
        avisos.append("gancho com mais de 45 palavras")
    if not L.get("fecho"):
        erros.append("sem fecho")
    if not 6 <= len(telas) <= 9:
        erros.append(f"{len(telas)} telas (esperado 6 a 9)")
    pontuam = [t for t in telas if t.get("tipo") in VALE_PONTO]
    if not 2 <= len(pontuam) <= 3:
        erros.append(f"{len(pontuam)} telas que valem ponto (esperado 2 ou 3 entre pergunta e ordenar)")
    visuais = [t for t in telas if t.get("tipo") in VISUAIS]
    if telas and len(visuais) * 2 < len(telas):
        erros.append(f"só {len(visuais)} telas visuais de {len(telas)} (pelo menos metade)")
    checar_texto("gancho", L.get("gancho", ""), erros)
    checar_texto("fecho", L.get("fecho", ""), erros)

    def conferir_numero(i, rotulo, v):
        try:
            v = float(v)
        except (TypeError, ValueError):
            return erros.append(f"tela {i}: {rotulo} não é número")
        if not any(abs(v - n) <= max(0.5, abs(n) * 0.001) for n in nums):
            erros.append(f"tela {i}: {rotulo} {v:g} não aparece no documento (número inventado?)")

    def exigir(i, t, campos):
        for c in campos:
            if t.get(c) in (None, "", []):
                erros.append(f"tela {i}: {t.get('tipo')} sem {c}")

    anterior = None
    for i, t in enumerate(telas, 1):
        tipo = t.get("tipo")
        if t.get("marca") and t["marca"] not in MARCAS:
            erros.append(f"tela {i}: marca {t['marca']} não é permitida (só consenso ou emergente)")
        if t.get("fonte") is not None and t["fonte"] not in fontes:
            erros.append(f"tela {i}: fonte {t['fonte']} não existe no documento")
        if t.get("marca") and t.get("fonte") is None:
            avisos.append(f"tela {i}: marca sem fonte")
        # todo texto visível da tela passa pelas mesmas checagens de escrita
        textos = [v for k, v in t.items() if isinstance(v, str) and k not in ("tipo", "marca", "escala", "forma", "fig")]
        for k in ("alts", "itens", "etapas", "camadas", "linhas", "eventos"):
            for x in t.get(k) or []:
                textos += [x] if isinstance(x, str) else [v for v in x.values() if isinstance(v, str)]
        for s_ in textos:
            checar_texto(f"tela {i}", s_, erros)
        if t.get("legenda") and len(t["legenda"].split()) > 30:
            avisos.append(f"tela {i}: legenda com mais de 25 palavras")

        if tipo == "texto":
            html = t.get("html", "")
            palavras = len(re.sub(r"<[^>]+>", " ", html).split())
            if palavras > 55:
                erros.append(f"tela {i}: {palavras} palavras (máximo 40)")
            elif palavras > 40:
                avisos.append(f"tela {i}: {palavras} palavras (máximo 40)")
            if html.count("<strong>") > 1:
                avisos.append(f"tela {i}: mais de um negrito")
            inicio = re.sub(r"<[^>]+>", "", html).split()[:2]
            if anterior and inicio == anterior:
                avisos.append(f"tela {i}: começa igual à tela anterior")
            anterior = inicio
            continue
        anterior = None
        if tipo == "pergunta":
            alts = t.get("alts") or []
            if len(alts) != 3 or not isinstance(t.get("correta"), int) or not 0 <= t["correta"] < len(alts):
                erros.append(f"tela {i}: pergunta malformada (3 alternativas e correta 0 a 2)")
            exigir(i, t, ["q", "porque"])
            if i > 1 and telas[i - 2].get("tipo") in VALE_PONTO:
                avisos.append(f"tela {i}: duas perguntas seguidas")
        elif tipo == "estimar":
            exigir(i, t, ["q", "resposta", "min", "max"])
            try:
                lo, hi, r = float(t["min"]), float(t["max"]), float(t["resposta"])
                if not lo < r < hi or (t.get("escala") == "log" and lo <= 0):
                    erros.append(f"tela {i}: estimar precisa de min < resposta < max (e min > 0 em escala log)")
            except (KeyError, TypeError, ValueError):
                erros.append(f"tela {i}: estimar com min, max ou resposta inválidos")
            conferir_numero(i, "resposta", t.get("resposta"))
        elif tipo == "etapas":
            et = t.get("etapas") or []
            if not 3 <= len(et) <= 6 or not all(isinstance(e, dict) and e.get("nome") for e in et):
                erros.append(f"tela {i}: etapas precisa de 3 a 6 itens com nome")
        elif tipo == "camadas":
            cs = t.get("camadas") or []
            if not 2 <= len(cs) <= 5 or not all(isinstance(c, dict) and c.get("nome") for c in cs):
                erros.append(f"tela {i}: camadas precisa de 2 a 5 itens com nome")
        elif tipo == "pontos":
            exigir(i, t, ["valor", "frase"])
            if isinstance(t.get("valor"), (int, float)) and not 0 < t["valor"] < 100:
                erros.append(f"tela {i}: pontos precisa de valor entre 0 e 100")
            conferir_numero(i, "valor", t.get("valor"))
        elif tipo == "ordenar":
            exigir(i, t, ["q"])
            if not 3 <= len(t.get("itens") or []) <= 6:
                erros.append(f"tela {i}: ordenar precisa de 3 a 6 itens")
        elif tipo == "comparar":
            exigir(i, t, ["a", "b"])
            if not 2 <= len(t.get("linhas") or []) <= 4:
                erros.append(f"tela {i}: comparar precisa de 2 a 4 linhas")
        elif tipo == "linha_tempo":
            ev = t.get("eventos") or []
            if not 3 <= len(ev) <= 6:
                erros.append(f"tela {i}: linha_tempo precisa de 3 a 6 eventos")
            for e in ev:
                conferir_numero(i, "ano", e.get("ano") if isinstance(e, dict) else None)
        elif tipo == "ciclo":
            if not 3 <= len(t.get("etapas") or []) <= 6:
                erros.append(f"tela {i}: ciclo precisa de 3 a 6 etapas")
        elif tipo == "curva":
            if t.get("forma") not in FORMAS:
                erros.append(f"tela {i}: curva com forma desconhecida ({t.get('forma')})")
            exigir(i, t, ["eixo_x", "eixo_y"])
        elif tipo != "figura":
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
        if t.get("tipo") not in VALE_PONTO:
            # texto e telas visuais: o JEV lê o conteúdo e a legenda, sem os campos técnicos
            conteudo = t.get("html") or json.dumps({k: v for k, v in t.items() if k not in ("tipo", "marca", "fonte", "escala", "forma", "svg", "fig")}, ensure_ascii=False)
            estado["telas"][f"t{i}"] = texto_puro(conteudo)
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
            perg[f"disputa_{i}"] = {"type": "noul",
                                    "instructions": f"O trecho telas.t{i} gira em torno de um debate, controvérsia, mito a desmentir ou evidência contestada?",
                                    "criteria": {"true": "o foco é a disputa, a dúvida ou a desmistificação",
                                                 "false": "o foco é conhecimento estabelecido sobre o conceito"}}
            if t.get("tipo") in VISUAIS - {"figura"}:
                perg[f"encaixe_{i}"] = {"type": "noul",
                                        "instructions": f"A forma visual '{t['tipo']}' combina com o conteúdo de telas.t{i}?",
                                        "criteria": {"true": "combina: etapas é sequência no tempo, ciclo volta ao início, camadas são níveis físicos ou gradiente, curva é tendência descrita, comparar contrasta duas coisas do mesmo tipo",
                                                     "false": "forma forçada: lista de ideias desenhada como camadas, processo linear como ciclo, curva inventada, e parecidos"}}
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
        elif tipo == "disputa" and v.get("noul", 0) > 0.6:
            alertas.append(f"tela {n}: trata de disputa ou evidência contestada ({v['noul']:.2f}); lição só ensina o núcleo estabelecido")
        elif tipo == "encaixe" and v.get("noul", 1) < 0.5:
            alertas.append(f"tela {n}: o tipo visual não combina com o conteúdo ({v['noul']:.2f}); troque de tipo ou use texto")
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
        "Use só informação que está no documento. No documento, [n] marca a fonte de uma afirmação: na lição, ponha esse número " \
        "no campo fonte da tela e nunca escreva [n] dentro do texto. " \
        "Responda somente com um objeto json com as chaves gancho, telas e fecho, no mesmo formato do exemplo."
    ex = exemplos(id_)
    if ex:
        sistema += "\n\n## Outras lições aprovadas pelo editor\n\n" + "\n\n".join(ex)
    s = doc.get("sintese") or {}
    fonte_js = (RAIZ / "js" / "docs" / f"{id_}.js").read_text(encoding="utf-8")
    figuras = re.findall(r"\[\[FIG:([a-z0-9\-]+)\]\]\s*<figcaption>(.*?)</figcaption>", fonte_js, re.S)
    usuario = "\n".join([
        f"Conceito: {doc['termo']} ({doc['area']})",
        "Figuras prontas deste documento (use com tipo figura e fig igual à chave): " +
        ("; ".join(f"{k}: {texto_puro(c)[:140]}" for k, c in figuras) if figuras else "nenhuma"),
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
    # até duas reescritas com o Pro: a primeira para erros e alertas, a segunda só se ainda restarem erros
    while revisao_pro and rodada < 3 and (erros or (alertas and rodada == 1)):
        print(f"  {len(erros)} erro(s), {len(alertas)} alerta(s) do JEV: reescrevendo trechos com {PRO}")
        pedido = ("Corrija só os problemas listados, mantendo o resto da lição igual. "
                  "Se o problema for número de telas, junte ou corte telas secundárias até o array telas ter no máximo 9 itens, perguntas incluídas. "
                  "Se faltam telas visuais, troque telas de texto por um tipo visual que combine com o conteúdo "
                  "(comparar e etapas servem para quase tudo; ou uma figura pronta), ou corte telas de texto. "
                  "Se um número não aparece no documento, troque por um que aparece ou troque o tipo da tela. "
                  "Se uma tela trata de disputa ou evidência contestada, tire-a e ensine no lugar o núcleo estabelecido do conceito. "
                  "Se o tipo visual não combina, troque de tipo ou use texto. "
                  "Responda com o objeto json completo da lição corrigida.\n\nProblemas:\n"
                  + "\n".join(f"- {x}" for x in erros + alertas) + "\n\nLição:\n" + json.dumps(L, ensure_ascii=False))
        L2, c2 = deepseek(PRO, sistema, usuario + "\n\n" + pedido, "revisao", id_)
        custo += c2
        rodada += 1
        e2, a2 = checar_licao(L2, doc)
        if len(e2) > len(erros):
            break
        L, erros, avisos, modelo = L2, e2, a2, f"{FLASH}+{PRO}"
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


# ── fronteira: caixas controverso/especulação viram "onde a ciência ainda pesquisa" ──
CAIXA = re.compile(r'<div class="marca (controverso|especulacao)">(.*?)</div>\n?', re.S)


def fronteira(id_, seco=False):
    """Classifica cada caixa controverso/especulação do documento (JEV): ressalva com base
    estabelecida continua no texto como consenso; questão em aberto sai do texto e vira item
    da seção final, reescrito pelo Flash para ler sozinho e sinalizado como linha de pesquisa."""
    arq = RAIZ / "js" / "docs" / f"{id_}.js"
    js = arq.read_text(encoding="utf-8")
    caixas = list(CAIXA.finditer(js))
    if not caixas:
        return
    doc = documento(id_)
    estado = {"conceito": doc["termo"], "caixas": {f"c{i}": texto_puro(m.group(2)) for i, m in enumerate(caixas)}}
    perg = {f"c{i}": {"type": "choice", "instructions": f"O que é o trecho caixas.c{i}?",
                      "criteria": {"ressalva": "esclarecimento, limite de uma analogia ou correção de um equívoco comum, com base estabelecida na área",
                                   "aberto": "questão em aberto, hipótese, disputa entre especialistas ou dado sem confirmação"}}
            for i in range(len(caixas))}
    r = jev(estado, perg, "jev-fronteira", id_)
    # na dúvida, vai para a seção de pesquisa: carimbar disputa como consenso é o erro caro
    alerta = re.compile(r"disput|controv|especula|hipótese|debate|em aberto|contest|incert", re.I)
    tipos = ["ressalva" if r.get(f"c{i}", {}).get("probabilities", {}).get("ressalva", 0) >= 0.8
             and not alerta.search(texto_puro(m.group(2)).splitlines()[0]) else "aberto"
             for i, m in enumerate(caixas)]
    print(f"{id_}: " + ", ".join(f"{texto_puro(m.group(2)).splitlines()[0][:50]} → {t}" for m, t in zip(caixas, tipos)))
    if seco:
        return
    abertas = [m.group(2) for m, t in zip(caixas, tipos) if t == "aberto"]
    itens = []
    if abertas:
        sistema = estilo() + "\n\n## Tarefa\n\nReescreva cada trecho em aberto de um documento de estudo como item independente da seção " \
            "«Onde a ciência ainda pesquisa». Cada item: tema (título curto, só a primeira letra maiúscula) e html (um ou dois parágrafos <p>). " \
            "Deixe claro no próprio texto que é linha de pesquisa, hipótese ou dado sem confirmação, e qual evidência existe hoje. " \
            "Copie sem mudar as marcações de citação <sup class=\"cit\">...</sup> que aparecem no trecho, com o mesmo número. Não crie citação nova, não invente fonte nem dado. " \
            'Responda somente com json: {"itens": [{"tema": "...", "html": "<p>...</p>"}]}, um item por trecho, na mesma ordem.'
        usuario = f"Conceito: {doc['termo']} ({doc['area']})\n\n" + "\n\n".join(f"Trecho {i + 1}:\n{t.strip()}" for i, t in enumerate(abertas))
        saida, _ = deepseek(FLASH, sistema, usuario, "fronteira", id_, max_tokens=6000)
        itens = saida.get("itens", [])
        erros, fontes = [], {f["n"] for f in doc.get("fontes", [])}
        for k, it in enumerate(itens):
            checar_texto(f"item {k + 1}", it.get("tema", "") + " " + it.get("html", ""), erros)
            erros += [f"item {k + 1}: fonte {n} inexistente" for n in re.findall(r'href="#f(\d+)"', it.get("html", "")) if int(n) not in fontes]
            if re.search(r'href="#f\D', it.get("html", "")):
                erros.append(f"item {k + 1}: citação sem número")
        if erros or len(itens) != len(abertas):
            print(f"  não apliquei: {len(itens)} itens para {len(abertas)} trechos; {erros}")
            return
    # aplica de trás para frente para os índices continuarem válidos
    for m, t in reversed(list(zip(caixas, tipos))):
        novo = m.group(0).replace(f'class="marca {m.group(1)}"', 'class="marca consenso"', 1) if t == "ressalva" else ""
        js = js[:m.start()] + novo + js[m.end():]
    if itens:
        linha = "fronteira: " + json.dumps(itens, ensure_ascii=False) + ","
        if re.search(r"^fronteira: .*$", js, re.M):
            js = re.sub(r"^fronteira: .*$", lambda _: linha, js, count=1, flags=re.M)
        else:
            fim = js.rindex("\n};")
            antes = js[:fim].rstrip()
            js = antes + ("" if antes.endswith(",") else ",") + "\n\n" + linha + js[fim:]
    arq.write_text(js, encoding="utf-8")
    print(f"  {tipos.count('ressalva')} ressalva(s) viraram consenso, {len(itens)} item(ns) na seção de pesquisa")


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
    ruim["telas"][1]["resposta"] = 777
    erros, _ = checar_licao(ruim, doc)
    for esperado in ["travessão", "aspas curvas", "vale ressaltar", "fascinante", "fonte 99", "pergunta malformada", "777 não aparece"]:
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
            try:
                gerar_licao(i, idx, seco="--seco" in flags, revisao_pro="--sem-revisao-pro" not in flags)
            except RuntimeError as e:   # uma falha de rede não derruba o lote inteiro
                print(f"  {i}: falhou ({e}); siga com os outros e rode de novo depois")
    elif cmd == "grafo":
        gerar_grafo(seco="--seco" in flags)
    elif cmd == "triagem":
        triagem()
    elif cmd == "fronteira":
        alvos = sorted(x.stem for x in (RAIZ / "js" / "docs").glob("*.js")) if "--todas" in flags else ids
        for i in alvos:
            try:
                fronteira(i, seco="--seco" in flags)
            except RuntimeError as e:
                print(f"  {i}: falhou ({e})")
        if "--seco" not in flags:
            print(subprocess.run(["node", "build.js"], cwd=RAIZ, capture_output=True, text=True).stdout.strip().splitlines()[-2:])
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
