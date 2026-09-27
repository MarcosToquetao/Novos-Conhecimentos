#!/usr/bin/env python3
"""gerar.py: pipeline barato de conteúdo do Novos Conhecimentos.

Gera com DeepSeek, fiscaliza com checagens determinísticas + JEV (OpenRouter),
e deixa rascunhos para revisão humana em pipeline/revisar.py.

Uso
  python pipeline/gerar.py licao <id> [<id> ...] [--seco] [--sem-revisao-pro]
  python pipeline/gerar.py licao --todas          lições para todo documento sem lição nem rascunho
  python pipeline/gerar.py conceito <id> [<id> ...] [--seco] [--retomar]   documento novo a partir de fontes reais (Wikipédia + OpenAlex)
  python pipeline/gerar.py dossie <id> [<id> ...]   só baixa e mostra o dossiê de fontes (pipeline/dossies/)
  python pipeline/gerar.py imagens <id> [<id> ...] [--seco]   fotos e GIFs livres do Wikimedia Commons, escolhidos por um modelo de visão
  python pipeline/gerar.py refazer [<id> ...]      corrige as lições existentes com as regras atuais, as fotos e a nota do editor
  (qualquer comando aceita --openrouter: DeepSeek pelo OpenRouter em vez da API direta)
  python pipeline/gerar.py grafo [--seco]         subáreas e ligações do mapa do acervo
  python pipeline/gerar.py fronteira <id>... | --todas [--seco]   caixas controverso/especulação → seção «Onde a ciência ainda pesquisa»
  python pipeline/gerar.py triagem                JEV marca termos do catálogo sem respaldo suficiente (não apaga)
  python pipeline/gerar.py aprender               resume suas notas em regras novas no estilo.md
  python pipeline/gerar.py status                 fila, sequência de aprovações e custo gasto
  python pipeline/gerar.py teste                  autoteste das checagens, sem chamar API

Chaves em .env na raiz: DEEPSEEK_API_KEY=...  OPENROUTER_API_KEY=...
"""
import concurrent.futures, datetime, io, json, pathlib, re, subprocess, sys, threading, time, urllib.error, urllib.parse, urllib.request

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


_trava, _trava_log = threading.Lock(), threading.Lock()


def registrar_custo(etapa, alvo, modelo, usd, uso):
    with _trava_log, CUSTOS.open("a", encoding="utf-8") as f:
        f.write(json.dumps({"quando": agora(), "etapa": etapa, "alvo": alvo, "modelo": modelo,
                            "usd": round(usd, 6), "uso": uso}, ensure_ascii=False) + "\n")


def agora():
    return datetime.datetime.now().isoformat(timespec="seconds")


ROTA = "deepseek"   # --openrouter troca para os mesmos modelos pelo OpenRouter (mais barato em set/2026 e usa o outro saldo)
NO_OPENROUTER = {FLASH: "deepseek/deepseek-v4.1-flash", PRO: "deepseek/deepseek-v4-pro"}


def via_openrouter(modelo, sistema, usuario, etapa, alvo, max_tokens, pensar):
    corpo = {"model": NO_OPENROUTER[modelo], "max_tokens": max_tokens, "response_format": {"type": "json_object"},
             "reasoning": {"enabled": pensar}, "usage": {"include": True},
             "messages": [{"role": "system", "content": sistema}, {"role": "user", "content": usuario}]}
    for _ in range(3):
        r = post("https://openrouter.ai/api/v1/chat/completions", corpo, chave("OPENROUTER_API_KEY"))
        u = r.get("usage", {})
        registrar_custo(etapa, alvo, corpo["model"], u.get("cost", 0), u)
        texto = re.sub(r"^```(json)?|```$", "", (r["choices"][0]["message"].get("content") or "").strip())
        try:
            return json.loads(texto), u.get("cost", 0)
        except json.JSONDecodeError:
            print(f"  resposta sem json válido de {corpo['model']}, tentando de novo")
    raise RuntimeError(f"{corpo['model']} não devolveu json válido para {alvo}.")


def deepseek(modelo, sistema, usuario, etapa, alvo, max_tokens=8000, pensar=False):
    if ROTA == "openrouter":
        return via_openrouter(modelo, sistema, usuario, etapa, alvo, max_tokens, pensar)
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
            print(f"  resposta sem json válido de {modelo} ({r['choices'][0].get('finish_reason')}, {u.get('completion_tokens')} tokens), tentando de novo")
    raise RuntimeError(f"{modelo} não devolveu json válido para {alvo}.")


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
    html = re.sub(r"</t[dh]>", " | ", html)   # células de tabela não podem grudar ("1/3" + "1/3" viraria "1/31/3")
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


VISUAIS = {"estimar", "etapas", "camadas", "pontos", "ordenar", "comparar", "linha_tempo", "ciclo", "curva", "figura", "foto"}
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
        elif tipo == "foto":
            if t.get("foto") not in {f["n"] for f in doc.get("fotos", [])}:
                erros.append(f"tela {i}: foto {t.get('foto')} não existe no documento")
        elif tipo != "figura":
            erros.append(f"tela {i}: tipo desconhecido {tipo}")
    return erros, avisos


# ── portão JEV ──────────────────────────────────────────────────────────
def portao_jev(L, termo, alvo):
    telas = L.get("telas", [])
    estado = {"conceito": termo, "gancho": L.get("gancho", ""), "telas": {}}
    perg = {"gancho_diz": {"type": "noul", "instructions": "O gancho diz, em linguagem simples, de que fenômeno ou assunto o conceito trata?",
                           "criteria": {"true": "a pessoa sabe do que a lição vai falar", "false": "só faz uma pergunta ou provocação solta"}},
            "interesse": {"type": "score",
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
            perg[f"tecnico_{i}"] = {"type": "noul",
                                    "instructions": f"O trecho telas.t{i} exige de um leigo notação, fórmula, jargão ou conta de cabeça?",
                                    "criteria": {"true": "técnico demais para quem é de outra área", "false": "qualquer pessoa curiosa entende"}}
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
            anteriores = ", ".join(f"t{j}" for j in range(1, i)) or "nenhuma"
            perg[f"respondivel_{i}"] = {"type": "noul",
                                        "instructions": f"Quem leu só o gancho e as telas anteriores ({anteriores}) consegue responder à pergunta telas.t{i} raciocinando com o que elas mostraram?",
                                        "criteria": {"true": "a informação necessária já apareceu antes da pergunta",
                                                     "false": "a resposta depende de algo que a lição ainda não mostrou"}}
            perg[f"obvia_{i}"] = {"type": "noul",
                                  "instructions": f"A alternativa certa de telas.t{i} pode ser adivinhada sem ter lido nada, pelo senso comum ou pelo jeito das alternativas?",
                                  "criteria": {"true": "óbvia: acerta quem não leu", "false": "exige ter entendido a lição"}}
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
        elif tipo == "respondivel" and v.get("noul", 1) < 0.5:
            alertas.append(f"tela {n}: a pergunta depende de algo que a lição ainda não mostrou ({v['noul']:.2f})")
        elif tipo == "obvia" and v.get("noul", 0) > 0.6:
            alertas.append(f"tela {n}: resposta óbvia, acerta quem não leu ({v['noul']:.2f})")
        elif tipo == "tecnico" and v.get("noul", 0) > 0.6:
            alertas.append(f"tela {n}: técnico demais para leigo ({v['noul']:.2f})")
        elif k == "gancho_diz" and v.get("noul", 1) < 0.5:
            alertas.append(f"gancho não diz do que o conceito trata ({v['noul']:.2f})")
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
        "Fotos e GIFs reais deste documento (use com tipo foto e foto igual ao número): " +
        ("; ".join(f"{f['n']}: {'GIF animado, ' if f.get('gif') else ''}{f['legenda']}" for f in doc.get("fotos", [])) or "nenhuma"),
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


def gerar_licao(id_, idx, seco=False, revisao_pro=True, partida=None, extras=()):
    """partida: uma lição já feita (rascunho ou publicada) para corrigir em vez de gerar do zero.
    extras: problemas vindos de fora das checagens (nota do editor, fotos não usadas)."""
    sistema, usuario, doc = prompts_licao(id_, idx)
    if seco:
        tok = (len(sistema) + len(usuario)) / 3.2
        print(f"{id_}: ~{tok:,.0f} tokens de entrada, ~3.000 de saída, "
              f"~US$ {(tok * 0.30 + 3000 * 1.20) / 1e6 * (1 if pico() else .5):.4f} no Flash ({'pico' if pico() else 'fora do pico'})")
        return
    if partida is None:
        print(f"{id_}: gerando com {FLASH}")
        L, custo = deepseek(FLASH, sistema, usuario, "licao", id_)
        modelo = FLASH
    else:
        L, custo, modelo = partida, 0, "reaproveitada"
    erros, avisos = checar_licao(L, doc)
    alertas, bruto = portao_jev(L, doc["termo"], id_)
    alertas += list(extras)
    if partida is not None and not erros and not alertas:
        print(f"{id_}: continua como está")
        return None
    rodada = 1
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
                  "Se uma pergunta depende de algo que a lição ainda não mostrou, mostre esse conteúdo numa tela antes dela ou troque a pergunta por uma que as telas anteriores sustentam. "
                  "Se a resposta é óbvia, reescreva as alternativas erradas como erros que alguém que leu com pressa cometeria. "
                  "Se o gancho não diz do que o conceito trata, acrescente uma frase simples dizendo. "
                  "Se uma tela é técnica demais, troque notação e conta por um caso concreto. "
                  "Responda com o objeto json completo da lição corrigida.\n\nProblemas:\n"
                  + "\n".join(f"- {x}" for x in erros + alertas) + "\n\nLição:\n" + json.dumps(L, ensure_ascii=False))
        L2, c2 = deepseek(PRO, sistema, usuario + "\n\n" + pedido, "revisao", id_)
        custo += c2
        rodada += 1
        e2, a2 = checar_licao(L2, doc)
        if len(e2) > len(erros):
            break
        L, erros, avisos, modelo = L2, e2, a2, (f"{FLASH}+{PRO}" if partida is None else f"reaproveitada+{PRO}")
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


def refazer_licao(id_, idx):
    """Parte do rascunho (ou da lição publicada) e só corrige o que as checagens atuais, as fotos novas
    e a nota do editor apontam. Lição limpa não gasta nada além do JEV."""
    doc = documento(id_)
    arq = RASC / f"{id_}.json"
    L = json.loads(arq.read_text(encoding="utf-8"))["licao"] if arq.exists() else doc.get("licao")
    if not L:
        return gerar_licao(id_, idx)
    L = {k: L[k] for k in ("gancho", "telas", "fecho") if k in L}
    for t in L["telas"]:
        t.pop("svg", None)
    extras = []
    if doc.get("fotos") and not any(t.get("tipo") == "foto" for t in L["telas"]):
        extras.append("o documento tem fotos reais e a lição não usa nenhuma: troque de 1 a 3 telas de texto ou fracas por telas foto, a primeira logo depois do gancho")
    nv = sum(t.get("tipo") in VISUAIS for t in L["telas"])
    if nv < 5:
        extras.append(f"só {nv} telas visuais: a regra é pelo menos 5")
    nota = next((a for a in reversed(avaliacoes()) if a.get("id") == id_ and a.get("tipo") == "licao" and a.get("comentario")), None)
    if nota:
        extras.append("nota do editor sobre esta lição: " + " ".join(nota["comentario"].split()))
    return gerar_licao(id_, idx, partida=L, extras=extras)


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


# ── conceito novo: dossiê de fontes reais → documento → síntese e prova ──
DOSSIES = PIPE / "dossies"
UA = {"User-Agent": "NovosConhecimentos/1.0 (https://github.com/marcostoquetao/Novos-Conhecimentos)"}


def get(url, params):
    req = urllib.request.Request(url + "?" + urllib.parse.urlencode(params), headers=UA)
    for t in range(3):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return json.loads(r.read())
        except (urllib.error.URLError, TimeoutError) as e:
            if t == 2:
                raise RuntimeError(f"Sem resposta de {url}: {e}")
            time.sleep(3)


def wiki(lang, titulo=None, busca=None):
    api = f"https://{lang}.wikipedia.org/w/api.php"
    if busca:
        r = get(api, {"action": "query", "list": "search", "srsearch": busca, "srlimit": 1, "format": "json"})
        hits = r["query"]["search"]
        if not hits:
            return None
        titulo = hits[0]["title"]
    r = get(api, {"action": "query", "prop": "extracts|langlinks", "explaintext": 1, "redirects": 1,
                  "lllang": "en", "titles": titulo, "format": "json"})
    pg = next(iter(r["query"]["pages"].values()))
    if "missing" in pg:
        return None
    return {"titulo": pg["title"], "texto": pg.get("extract", ""),
            "en": (pg.get("langlinks") or [{}])[0].get("*"),
            "url": f"https://{lang}.wikipedia.org/wiki/" + urllib.parse.quote(pg["title"].replace(" ", "_"))}


def html_esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def openalex(busca, n=14):
    """Os trabalhos mais citados com a expressão exata no título; se forem poucos, no título ou no resumo."""
    obras = []
    for campo in ("title.search", "title_and_abstract.search"):
        r = get("https://api.openalex.org/works", {
            "filter": f'{campo}:"{busca}",has_doi:true,has_abstract:true,is_retracted:false',
            "sort": "cited_by_count:desc", "per_page": n})
        obras += [w for w in r.get("results", []) if w["id"] not in {o["id"] for o in obras}]
        if len(obras) >= 8:
            break
    saida = []
    for w in obras[:n]:
        pos = sorted((p, pal) for pal, ps in (w.get("abstract_inverted_index") or {}).items() for p in ps)
        autores = [a["author"]["display_name"] for a in w.get("authorships", [])]
        aut = ", ".join(autores[:4]) + (" et al." if len(autores) > 4 else "")
        fonte = ((w.get("primary_location") or {}).get("source") or {}).get("display_name") or ""
        titulo = re.sub(r"<[^>]+>", "", w.get("title") or "")
        saida.append({"tipo": {"review": "revisão", "book": "livro", "book-chapter": "capítulo"}.get(w.get("type"), "artigo"),
                      "ref": html_esc(f"{aut}. '{titulo}'.") + (f" <em>{html_esc(fonte)}</em>," if fonte else "") + f" {w.get('publication_year')}.",
                      "url": w["doi"], "texto": " ".join(p for _, p in pos)[:1500]})
    return saida


def dossie(id_, idx):
    """Verbetes da Wikipédia (pt e en) e os trabalhos mais citados do OpenAlex sobre o tema.
    O documento só pode citar itens daqui: as referências vêm dos metadados, nunca do modelo."""
    arq = DOSSIES / f"{id_}.json"
    if arq.exists():
        d = json.loads(arq.read_text(encoding="utf-8"))
        if not d.get("filtrado"):
            d = filtrar_dossie(d)
            arq.write_text(json.dumps(d, ensure_ascii=False, indent=1), encoding="utf-8")
        return d
    c = next(c for c in idx["conceitos"] if c["id"] == id_)
    # o termo do catálogo é descritivo demais para a busca da Wikipédia: o Flash sugere os verbetes e a expressão de busca
    t, _ = deepseek(FLASH, 'Responda somente com json: {"pt": "título exato do verbete na Wikipédia em português", '
                    '"en": "título exato do verbete na Wikipédia em inglês", "busca": "o nome do conceito em inglês, em 1 a 3 palavras, como aparece em títulos de artigos científicos (ex.: habeas corpus, Maillard reaction)"}',
                    f"{c['termo']} ({c['area']}): {c['gancho']}", "dossie", id_, max_tokens=300)
    # sem busca de reserva: um verbete errado no dossiê é pior do que nenhum
    pt = t.get("pt") and wiki("pt", titulo=t["pt"])
    en = (t.get("en") and wiki("en", titulo=t["en"])) or (pt and pt.get("en") and wiki("en", titulo=pt["en"]))
    itens = []
    for w, lingua, lim in ((pt, "português", 20000), (en, "inglês", 30000)):
        if w:
            itens.append({"tipo": "enciclopédia", "ref": html_esc(f"Wikipédia ({lingua}), verbete '{w['titulo']}'. Consultado em {datetime.date.today():%d/%m/%Y}."),
                          "url": w["url"], "texto": w["texto"][:lim]})
    obras = []
    for b in dict.fromkeys(x for x in (t.get("busca"), en and re.sub(r"\s*\(.*\)$", "", en["titulo"])) if x):
        obras += [o for o in openalex(b) if o["url"] not in {x["url"] for x in obras}]
        if len(obras) >= 8:
            break
    itens += obras[:14]
    for n, it in enumerate(itens, 1):
        it["n"] = n
    d = filtrar_dossie({"id": id_, "termo": c["termo"], "wiki_pt": pt and pt["titulo"], "wiki_en": en and en["titulo"], "busca": t.get("busca"), "itens": itens})
    DOSSIES.mkdir(exist_ok=True)
    arq.write_text(json.dumps(d, ensure_ascii=False, indent=1), encoding="utf-8")
    return d


def filtrar_dossie(d):
    """A busca por citações traz artigos famosos que só esbarram no tema. O JEV tira os que não tratam do conceito."""
    obras = {f"a{i}": it for i, it in enumerate(d["itens"]) if it["tipo"] != "enciclopédia"}
    if obras:
        r = jev({"conceito": d["termo"], "itens": {k: texto_puro(it["ref"]) + " " + it["texto"][:700] for k, it in obras.items()}},
                {k: {"type": "noul", "instructions": f"O trabalho itens.{k} trata do conceito (ou do fenômeno central dele), a ponto de servir de fonte para um texto sobre ele?",
                     "criteria": {"true": "trata do conceito", "false": "outro assunto que só compartilha palavras"}} for k in obras},
                "jev-dossie", d["id"])
        fora = {k for k in obras if r.get(k, {}).get("noul", 0) < 0.5}
        d["itens"] = [it for i, it in enumerate(d["itens"]) if f"a{i}" not in fora]
        for n, it in enumerate(d["itens"], 1):
            it["n"] = n
    d["filtrado"] = True
    return d


def nums_pt(txt):
    s = set()
    for m in re.finditer(r"\d+(?:[.\s]\d{3})*(?:,\d+)?", txt):
        try:
            s.add(float(m.group(0).replace(".", "").replace(" ", "").replace(",", ".")))
        except ValueError:
            pass
    return s


def nums_en(txt):
    return {float(m.group(0).replace(",", "")) for m in re.finditer(r"\d+(?:,\d{3})*(?:\.\d+)?", txt)}


def numeros_sem_respaldo(texto, base):
    """Números acima de 10 no texto que não aparecem na base (com folga de arredondamento)."""
    texto = re.sub(r"\[\d+(?:\s*,\s*\d+)*\]", " ", texto)
    return sorted({v for v in nums_pt(texto) if v > 10 and not any(abs(v - n) <= max(0.5, abs(n) * 0.01) for n in base)})


def regras_de_escrita():
    """As seções do estilo.md que valem para qualquer texto (as de formato da lição ficam de fora)."""
    partes = re.split(r"\n(?=## )", estilo())
    return "\n".join(p for p in partes if not p.startswith(("## Formato da lição", "## Exemplo de lição")))


CAMADAS = ("nucleo", "aprofundamento", "extensao")
PEDIDO_DOC = """## Tarefa: o documento longo (Aprofundar)

As regras acima valem aqui. Você escreve o documento de estudo de um conceito. Quem chega aqui fez a lição curta e quer entender de verdade.

Base: use SOMENTE o que está no dossiê da mensagem do usuário (verbetes e resumos de artigos, numerados). Cada afirmação específica (número, data, nome, resultado de estudo) leva logo depois a citação [n] com o número do item do dossiê que a sustenta, por exemplo [3] ou [2, 5]. Nunca escreva número, data ou porcentagem que não esteja no dossiê: se o dossiê não traz o dado, escreva sem ele. Cite pelo menos 8 itens diferentes, e só itens que tratam do assunto.

Camadas, em html:
- nucleo (800 a 1.200 palavras). Começa com <p class="abre"> trazendo um caso concreto ou uma pergunta. Explica o mecanismo central com exemplos, em 2 a 4 seções <h3> (só a primeira letra maiúscula). Tem uma caixa de consenso.
- aprofundamento (600 a 1.000 palavras): o modo de pensar da área, detalhes técnicos e como o conhecimento foi estabelecido. Use uma <table> se ela ajudar a comparar.
- extensao (300 a 600 palavras): pontes com outras áreas e usos práticos.

HTML permitido: p, h3, ul, ol, li, strong, em, table, thead, tbody, tr, th, td. Caixas de marca: <div class="marca consenso"><span class="rot">Rótulo curto</span><p>...</p></div>. Use consenso para o que é aceito na área e emergente para evidência séria e recente. Nenhuma outra marca.

Hipóteses, debates e dados sem confirmação não entram nas camadas. Eles vão para fronteira, com 0 a 3 itens {tema, html}. O texto de cada item diz com clareza que se trata de linha de pesquisa ou questão em aberto, e o que se sabe hoje. Se o dossiê não traz debate relevante, fronteira é [].

Também:
- subtitulo: 1 ou 2 frases que dizem o que o conceito é e por que importa.
- prerequisitos: 1 ou 2 frases.
- conexoes: 3 a 5 itens {termo, relacao}. O termo vem da lista de vizinhos, e a relacao é uma frase concreta.

Responda somente com json: {"subtitulo": "", "prerequisitos": [""], "conexoes": [{"termo": "", "relacao": ""}], "nucleo": "<p class=\\"abre\\">...", "aprofundamento": "", "extensao": "", "fronteira": []}"""

PEDIDO_ESTUDO = """## Tarefa: síntese, flashcards e prova

As regras acima valem aqui. A partir do documento da mensagem do usuário, escreva o material de estudo. Use só o que está no documento, e todo número que você usar precisa estar nele.

Estrutura:
- sintese.definicoes: 4 a 6 itens {termo, def}.
- sintese.lembrar: 5 ou 6 frases com o que precisa ficar.
- sintese.confusoes: 3 a 5 itens {erro, correcao}, sobre onde a intuição costuma errar.
- sintese.numeros: 3 a 5 frases com os números do documento.
- flashcards: 12 itens {f, v}. A frente é uma pergunta, e o verso responde em 1 a 3 frases.
- prova: 12 questões {camada, q, alts, correta, porque}.
  - camada: 6 de nucleo, 4 de aprofundamento e 2 de extensao.
  - alts: 4 alternativas plausíveis, com uma única correta.
  - correta: índice de 0 a 3, variando entre as questões.
  - porque: explica a resposta certa e o erro da alternativa mais tentadora.

Pergunte sobre compreensão, nunca sobre decoreba de data ou nome.

Responda somente com json: {"sintese": {"definicoes": [], "lembrar": [], "confusoes": [], "numeros": []}, "flashcards": [], "prova": []}"""


def checar_doc(A, n_itens, base):
    erros = []
    for k in ("subtitulo", *CAMADAS):
        if not A.get(k):
            erros.append(f"falta {k}")
    tudo = {"subtitulo": A.get("subtitulo", ""), **{k: A.get(k, "") for k in CAMADAS},
            **{f"fronteira {i + 1}": it.get("tema", "") + " " + it.get("html", "") for i, it in enumerate(A.get("fronteira") or [])},
            **{f"conexão {i + 1}": c.get("relacao", "") for i, c in enumerate(A.get("conexoes") or [])}}
    for onde, s in tudo.items():
        checar_texto(onde, re.sub(r"\[\d+(?:\s*,\s*\d+)*\]", "", s), erros)
        for grupo in re.findall(r"\[(\d+(?:\s*,\s*\d+)*)\]", s):
            erros += [f"{onde}: cita [{n}], que não existe no dossiê" for n in re.split(r"\s*,\s*", grupo) if not 1 <= int(n) <= n_itens]
        if re.search(r'class="marca (?!consenso|emergente)', s):
            erros.append(f"{onde}: marca proibida (só consenso ou emergente)")
        fora = numeros_sem_respaldo(texto_puro(s), base)
        if fora:
            erros.append(f"{onde}: números que não aparecem no dossiê: {', '.join(f'{x:g}' for x in fora)}")
    if len(A.get("conexoes") or []) < 3:
        erros.append(f"{len(A.get('conexoes') or [])} conexões (esperado 3 a 5, da lista de vizinhos)")
    palavras = len(texto_puro(A.get("nucleo", "")).split())
    if palavras < 600:
        erros.append(f"nucleo com {palavras} palavras (mínimo 800)")
    citados = {int(n) for k in CAMADAS for g in re.findall(r"\[(\d+(?:\s*,\s*\d+)*)\]", A.get(k, "")) for n in re.split(r"\s*,\s*", g)}
    if len(citados) < 6:
        erros.append(f"só {len(citados)} itens do dossiê citados (mínimo 8)")
    return erros


def checar_estudo(B, base):
    erros = []
    s = B.get("sintese") or {}
    if len(B.get("flashcards") or []) < 12:
        erros.append(f"{len(B.get('flashcards') or [])} flashcards (esperado 12)")
    if len(B.get("prova") or []) < 10:
        erros.append(f"{len(B.get('prova') or [])} questões (esperado 12)")
    for i, q in enumerate(B.get("prova") or []):
        if len(q.get("alts") or []) != 4 or not isinstance(q.get("correta"), int) or not 0 <= q["correta"] < 4 or q.get("camada") not in CAMADAS:
            erros.append(f"prova {i + 1}: malformada (4 alternativas, correta 0 a 3, camada válida)")
    # nas questões, as alternativas erradas podem ter número fora do documento; o gabarito e a explicação não
    certas = [{"q": q.get("q"), "porque": q.get("porque"),
               "certa": q["alts"][q["correta"]] if isinstance(q.get("correta"), int) and 0 <= q["correta"] < len(q.get("alts") or []) else ""}
              for q in B.get("prova") or []]
    for onde, s_, conferir in [("síntese", json.dumps(s, ensure_ascii=False), None),
                               ("flashcards", json.dumps(B.get("flashcards"), ensure_ascii=False), None),
                               ("prova", json.dumps(B.get("prova"), ensure_ascii=False), json.dumps(certas, ensure_ascii=False))]:
        checar_texto(onde, s_, erros)
        fora = numeros_sem_respaldo(conferir or s_, base)
        if fora:
            erros.append(f"{onde}: números que não aparecem no documento: {', '.join(f'{x:g}' for x in fora)}")
    return erros


def corrigir(sistema, usuario, obj, erros, id_, etapa, max_tokens):
    pedido = ("Corrija só os problemas listados e mantenha o resto igual. Se um número não aparece na base, apague o número "
              "reescrevendo a frase sem ele, ou troque por um número que está na base. Responda com o json completo corrigido.\n\n"
              "Problemas:\n" + "\n".join(f"- {e}" for e in erros) + "\n\nJson atual:\n" + json.dumps(obj, ensure_ascii=False))
    return deepseek(FLASH, sistema, usuario + "\n\n" + pedido, etapa, id_, max_tokens=max_tokens)


def js_doc(id_, c, A, B, fontes):
    tl = lambda h: "`\n" + h.strip().replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${") + "\n`"
    j = lambda x: json.dumps(x, ensure_ascii=False, indent=1)
    cam = ",\n\n".join(f"{k}: {{ minutos: {max(3, round(len(texto_puro(A[k]).split()) / 180))}, html: {tl(A[k])} }}" for k in CAMADAS)
    partes = [f'CONTEUDOS["{id_}"] = {{', f"termo: {j(c['termo'])},", f"area: {j(c['area'])},", f"subtitulo: {j(A['subtitulo'])},",
              f"prerequisitos: {j(A.get('prerequisitos') or [])},", f"conexoes: {j(A.get('conexoes') or [])},", "",
              f"camadas: {{\n\n{cam}\n\n}},", "", f"sintese: {j(B['sintese'])},", "", f"flashcards: {j(B['flashcards'])},", "",
              f"prova: {j(B['prova'])},", "", f"fontes: {j(fontes)},"]
    if A.get("fronteira"):
        partes += ["", "fronteira: " + json.dumps(A["fronteira"], ensure_ascii=False) + ","]
    return "\n".join(partes) + "\n};\n"


def gerar_conceito(id_, idx, seco=False, retomar=False):
    """retomar: parte do texto salvo em pipeline/dossies/<id>.saida.json (corrigido à mão pelo editor), sem gerar de novo.
    Números derivados que o editor conferiu (uma conta feita no texto, por exemplo) vão em "numeros_aceitos" nesse arquivo."""
    c = next(c for c in idx["conceitos"] if c["id"] == id_)
    if (RAIZ / "js" / "docs" / f"{id_}.js").exists():
        return print(f"{id_}: já tem documento")
    d = dossie(id_, idx)
    itens = d["itens"]
    base = set()
    for it in itens:
        base |= nums_pt(it["texto"] + " " + it["ref"]) | nums_en(it["texto"] + " " + it["ref"])
    sistema = regras_de_escrita() + "\n\n" + PEDIDO_DOC
    usuario = "\n".join([f"Conceito: {c['termo']} ({c['area']})", f"Gancho do catálogo: {c['gancho']}",
                         f"Vizinhos no acervo, para conexoes: {', '.join(vizinhos(id_, idx))}", "", "Dossiê:"] +
                        [f"\n[{it['n']}] {texto_puro(it['ref'])}\n{it['texto']}" for it in itens])
    if seco:
        tok = (len(sistema) + len(usuario)) / 3.2
        return print(f"{id_}: dossiê com {len(itens)} itens ({d['wiki_pt']} / {d['wiki_en']}), ~{tok:,.0f} tokens de entrada")
    print(f"{id_}: escrevendo o documento com {FLASH} ({len(itens)} itens no dossiê)")
    salvo = json.loads((DOSSIES / f"{id_}.saida.json").read_text(encoding="utf-8")) if retomar else {}
    base |= set(map(float, salvo.get("numeros_aceitos", [])))
    if retomar:
        A, custo = salvo["A"], 0
    else:
        A, custo = deepseek(FLASH, sistema, usuario, "conceito", id_, max_tokens=16000)
    erros = checar_doc(A, len(itens), base)
    for _ in range(3):
        if not erros:
            break
        print(f"  {id_}: {len(erros)} problema(s) no documento, corrigindo")
        A2, c2 = corrigir(sistema, usuario, A, erros, id_, "conceito-correcao", 16000)
        custo += c2
        e2 = checar_doc(A2, len(itens), base)
        if len(e2) <= len(erros):
            A, erros = A2, e2
    if erros:
        return registrar_conceito(id_, "barrado", erros, custo, saida={"A": A, "B": locals().get("B")})

    # renumera as fontes na ordem da primeira citação e troca [n] pelo carimbo de citação
    ordem = []
    for k in (*CAMADAS, "fronteira"):
        s = json.dumps(A.get(k), ensure_ascii=False)
        for g in re.findall(r"\[(\d+(?:\s*,\s*\d+)*)\]", s):
            ordem += [int(n) for n in re.split(r"\s*,\s*", g) if int(n) not in ordem]
    novo = {n: i for i, n in enumerate(ordem, 1)}
    sup = lambda m: "".join(f'<sup class="cit"><a href="#f{novo[int(n)]}">{novo[int(n)]}</a></sup>' for n in re.split(r"\s*,\s*", m.group(1)))
    cita = lambda s: re.sub(r"\s?\[(\d+(?:\s*,\s*\d+)*)\]", sup, s)
    for k in CAMADAS:
        A[k] = cita(A[k])
    A["fronteira"] = [{"tema": it.get("tema", ""), "html": cita(it.get("html", ""))} for it in A.get("fronteira") or []]
    tira = lambda s: re.sub(r"\s?(?:\[\d+(?:\s*,\s*\d+)*\])+", "", s)   # fora das camadas não há carimbo de citação
    A["subtitulo"] = tira(A["subtitulo"])
    A["prerequisitos"] = [tira(x) for x in A.get("prerequisitos") or []]
    A["conexoes"] = [{"termo": x.get("termo", ""), "relacao": tira(x.get("relacao", ""))} for x in A.get("conexoes") or []]
    por_n = {it["n"]: it for it in itens}
    fontes = [{"n": novo[n], "tipo": por_n[n]["tipo"], "ref": por_n[n]["ref"], "url": por_n[n]["url"]} for n in ordem]

    texto_doc = "\n\n".join(texto_puro(A[k]) for k in CAMADAS)
    base_doc = nums_pt(texto_doc)
    sis_b = regras_de_escrita() + "\n\n" + PEDIDO_ESTUDO
    usu_b = f"Conceito: {c['termo']} ({c['area']})\n\n" + "\n\n".join(f"### Camada {k}\n{texto_puro(re.sub(r'<sup.*?</sup>', '', A[k]))}" for k in CAMADAS)
    B, c2 = deepseek(FLASH, sis_b, usu_b, "estudo", id_, max_tokens=12000)
    custo += c2
    erros = checar_estudo(B, base_doc)
    if erros:
        print(f"  {id_}: {len(erros)} problema(s) na síntese ou prova, corrigindo")
        B2, c2 = corrigir(sis_b, usu_b, B, erros, id_, "estudo-correcao", 12000)
        custo += c2
        e2 = checar_estudo(B2, base_doc)
        if len(e2) <= len(erros):
            B, erros = B2, e2
    if erros:
        return registrar_conceito(id_, "barrado", erros, custo, saida={"A": A, "B": locals().get("B")})

    # JEV: o núcleo é conhecimento estabelecido? alguma questão tem gabarito discutível?
    prova = B["prova"]
    estado = {"conceito": c["termo"], "nucleo": texto_puro(A["nucleo"])[:8000],
              "prova": {f"q{i}": {"q": q["q"], "alts": q["alts"], "gabarito": q["alts"][q["correta"]]} for i, q in enumerate(prova)}}
    perg = {"status": {"type": "choice", "instructions": "Qual é o status do que o texto nucleo afirma, na área do conceito?",
                       "criteria": {"estabelecido": "conhecimento aceito, em livro-texto, com evidência replicada ou fato documentado",
                                    "emergente": "evidência séria e replicada, mas recente",
                                    "controverso": "afirma como fato algo que especialistas competentes disputam",
                                    "especulativo": "afirma como fato hipótese sem teste decisivo"}}}
    perg.update({f"q{i}": {"type": "noul", "instructions": f"A questão prova.q{i} tem gabarito errado ou mais de uma alternativa defensável?",
                           "criteria": {"true": "gabarito errado ou ambíguo", "false": "uma única alternativa correta e o gabarito está certo"}}
                 for i in range(len(prova))})
    r = jev(estado, perg, "jev-conceito", id_)
    p = r.get("status", {}).get("probabilities", {})
    if p.get("controverso", 0) + p.get("especulativo", 0) > 0.35:
        return registrar_conceito(id_, "barrado", [f"JEV: núcleo com risco de não ter respaldo ({p})"], custo, saida={"A": A, "B": B})
    boas = [q for i, q in enumerate(prova) if r.get(f"q{i}", {}).get("noul", 0) < 0.5]
    avisos = [f"{len(prova) - len(boas)} questão(ões) cortadas por gabarito discutível"] if len(boas) < len(prova) else []
    B["prova"] = boas if len(boas) >= 10 else prova

    arq = RAIZ / "js" / "docs" / f"{id_}.js"
    with _trava:   # um documento por vez no disco, para o build de um não ler o arquivo pela metade do outro
        arq.write_text(js_doc(id_, c, A, B, fontes), encoding="utf-8")
        ok = subprocess.run(["node", "build.js", "--checar"], cwd=RAIZ, capture_output=True, text=True)
        erros = [l.strip() for l in ok.stdout.splitlines() if "ERRO" in l and f" {id_}:" in l] if ok.returncode else []
        if erros:
            arq.unlink()
    if erros:
        return registrar_conceito(id_, "barrado", erros, custo, saida={"A": A, "B": locals().get("B")})
    return registrar_conceito(id_, "publicado", avisos, custo, len(fontes), saida={"A": A, "B": B})


def registrar_conceito(id_, resultado, notas, custo, n_fontes=0, saida=None):
    print(f"  {id_}: {resultado} · {n_fontes} fontes · US$ {custo:.4f}" + "".join(f"\n    - {x}" for x in notas))
    if saida:   # o que o modelo escreveu fica para conferir, mesmo quando barrado
        (DOSSIES / f"{id_}.saida.json").write_text(json.dumps(saida, ensure_ascii=False, indent=1), encoding="utf-8")
    with _trava_log, (PIPE / "conceitos.jsonl").open("a", encoding="utf-8") as f:
        f.write(json.dumps({"id": id_, "quando": agora(), "resultado": resultado, "notas": notas, "usd": round(custo, 5)}, ensure_ascii=False) + "\n")
    return resultado


# ── imagens: fotos e GIFs livres do Wikimedia Commons, escolhidas por um modelo de visão ──
VISAO = "google/gemini-3.1-flash-lite"   # US$0,25/M de entrada: cerca de US$0,0005 por imagem avaliada
LICENCA_LIVRE = re.compile(r"^(public domain|cc0( 1\.0)?|cc[ -]by(-sa)?( \d\.\d)?)$", re.I)
NOTA_MINIMA = 7


def baixar(url):
    req = urllib.request.Request(url, headers=UA)
    for t in range(3):
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                return r.read()
        except (urllib.error.URLError, TimeoutError) as e:
            if t == 2:
                raise RuntimeError(f"Não baixei {url}: {e}")
            time.sleep(3)


def commons(busca, gif=False, n=6):
    """Imagens do Commons com licença livre. gif=True procura só GIF animado."""
    r = get("https://commons.wikimedia.org/w/api.php", {
        "action": "query", "generator": "search", "gsrnamespace": 6, "gsrlimit": n * 2, "format": "json",
        "gsrsearch": busca + (" filemime:image/gif" if gif else " filetype:bitmap -filemime:image/gif"),
        "prop": "imageinfo", "iiprop": "url|size|mime|extmetadata" + ("|metadata" if gif else ""), "iiurlwidth": 800})
    saida = []
    for p in sorted((r.get("query") or {}).get("pages", {}).values(), key=lambda p: p.get("index", 0)):
        ii = p["imageinfo"][0]
        m = ii.get("extmetadata") or {}
        campo = lambda k: re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", m.get(k, {}).get("value", ""))).strip()
        quadros = {x["name"]: x["value"] for x in ii.get("metadata") or []}.get("frameCount", 1)
        if not LICENCA_LIVRE.match(campo("LicenseShortName")) or min(ii["width"], ii["height"]) < 250 or (gif and quadros < 2):
            continue
        saida.append({"titulo": p["title"], "url": ii["url"] if gif else (ii.get("thumburl") or ii["url"]), "pagina": ii["descriptionurl"],
                      "licenca": campo("LicenseShortName"), "autor": campo("Artist")[:120] or "autor desconhecido",
                      "descricao": campo("ImageDescription")[:300], "gif": gif, "bytes": ii["size"]})
    return saida[:n]


def preparar(bruto, gif, largura):
    """Reduz e converte para WebP; GIF vira WebP animado (bem mais leve e com as mesmas cores)."""
    from PIL import Image, ImageSequence
    im = Image.open(io.BytesIO(bruto))
    escala = min(1, largura / im.width)
    tam = (round(im.width * escala), round(im.height * escala))
    out = io.BytesIO()
    if gif:
        todos = [q.copy() for q in ImageSequence.Iterator(im)]   # o iterador reaproveita o mesmo objeto
        passo = max(1, round(len(todos) / 45))   # até ~45 quadros: o movimento continua legível e o arquivo cai pela metade
        quadros = [q.convert("RGBA").resize(tam) for q in todos[::passo]]
        dur = im.info.get("duration", 80) * passo
        quadros[0].save(out, "WEBP", save_all=True, append_images=quadros[1:], duration=dur, loop=0, quality=60, method=4)
    else:
        im.convert("RGB").resize(tam).save(out, "WEBP", quality=78, method=4)
    return out.getvalue(), tam


def miniatura(bruto):
    """Primeiro quadro, 512 px, em JPEG base64: é o que o modelo de visão vê."""
    import base64
    from PIL import Image
    im = Image.open(io.BytesIO(bruto)).convert("RGB")
    im.thumbnail((512, 512))
    out = io.BytesIO()
    im.save(out, "JPEG", quality=80)
    return "data:image/jpeg;base64," + base64.b64encode(out.getvalue()).decode()


def visao(conteudo, alvo):
    for tentativa in range(2):   # resposta cortada acontece; na segunda falha, o trecho fica sem imagem
        try:
            return _visao(conteudo, alvo)
        except (json.JSONDecodeError, KeyError) as e:
            print(f"  {alvo}: resposta do modelo de visão ilegível ({e.__class__.__name__}), tentativa {tentativa + 1}")
    return {}


def _visao(conteudo, alvo):
    r = post("https://openrouter.ai/api/v1/chat/completions",
             {"model": VISAO, "messages": [{"role": "user", "content": conteudo}], "max_tokens": 3000,
              "response_format": {"type": "json_object"}, "usage": {"include": True}}, chave("OPENROUTER_API_KEY"))
    registrar_custo("visao", alvo, VISAO, r.get("usage", {}).get("cost", 0), r.get("usage", {}))
    texto = r["choices"][0]["message"].get("content") or "{}"
    return json.loads(re.sub(r"^```(json)?|```$", "", texto.strip()))


def paragrafos(html):
    return re.findall(r"<p[ >].*?</p>", html, re.S)


def gerar_imagens(id_, seco=False):
    """Escolhe de 3 a 5 trechos do documento que ganham com imagem, procura no Commons (foto e GIF),
    deixa o modelo de visão escolher a melhor de cada trecho e grava em img/c/<id>/.
    No documento, a imagem entra como [[FOTO:n]] depois do parágrafo; a lição pode usar a tela «foto»."""
    arq = RAIZ / "js" / "docs" / f"{id_}.js"
    js = arq.read_text(encoding="utf-8")
    if re.search(r"^fotos: ", js, re.M):
        return print(f"{id_}: já tem fotos (apague a linha fotos: e as marcas [[FOTO:n]] para refazer)")
    doc = documento(id_)
    ps = {k: paragrafos(doc["camadas"][k]["html"]) for k in ("nucleo", "aprofundamento") if k in doc["camadas"]}
    lista = "\n".join(f"{k} {i}: {texto_puro(p)[:400]}" for k, l in ps.items() for i, p in enumerate(l))
    plano, _ = deepseek(FLASH, (
        "Você escolhe onde uma imagem real (foto, gravura histórica, micrografia, mapa ou GIF animado) ajudaria um leigo "
        "a materializar o que o texto descreve. Escolha de 3 a 5 parágrafos, de preferência espalhados pelo texto. Só onde existe "
        "algo concreto para ver: o próprio organismo ou objeto, seus estados, um lugar, um fenômeno acontecendo, um experimento, uma obra. "
        "Nada de imagem para ideia abstrata, nada de diagrama esquemático (o app já desenha os seus) e retrato de pessoa só se a pessoa for o assunto. "
        "Para cada um: camada e p (o número do parágrafo), mostrar (em português, o tipo de imagem que serve, sem exigir números nem "
        "detalhes que uma foto real dificilmente teria), buscas (2 termos de 1 a 3 palavras em inglês, como se procura no Wikimedia Commons: "
        "o nome do fenômeno, do organismo ou do objeto, por exemplo 'shrinkflation', 'Toblerone', 'tardigrade'; nunca a descrição de uma cena) e gif (true se um movimento ou uma sequência "
        "ajudaria, como um animal andando ou um processo acontecendo). "
        'Responda somente com json: {"lugares": [{"camada": "nucleo", "p": 0, "mostrar": "", "buscas": ["", ""], "gif": false}]}'),
        f"Conceito: {doc['termo']}\n\nParágrafos:\n{lista}", "imagens-plano", id_, max_tokens=1500)
    lugares = [l for l in plano.get("lugares", []) if l.get("camada") in ps and 0 <= int(l.get("p", -1)) < len(ps[l["camada"]])]
    if seco:
        return print(json.dumps(lugares, ensure_ascii=False, indent=1))
    pasta = RAIZ / "img" / "c" / id_
    fotos, usadas = [], set()
    for lug in lugares:
        cands = []
        dossie_ = DOSSIES / f"{id_}.json"
        nome_en = json.loads(dossie_.read_text(encoding="utf-8")).get("busca") if dossie_.exists() else None
        for b in list(dict.fromkeys(lug.get("buscas", [])[:2] + ([nome_en] if nome_en else []))):   # o nome do conceito sempre entra
            cands += [c for c in commons(b, n=4) if c["titulo"] not in {x["titulo"] for x in cands}]
        # GIF sempre entra na disputa, na frente, para não ser cortado pelo limite de candidatas
        gifs = [c for c in commons(lug["buscas"][-1], gif=True, n=3) if c["bytes"] < 12e6]   # a busca mais geral: GIF é raro
        cands = [c for c in gifs + cands if c["titulo"] not in usadas][:8]
        if not cands:
            print(f"  {id_}: nada livre no Commons para «{lug['mostrar']}»")
            continue
        brutos, conteudo = [], [{"type": "text", "text": (
            f"Texto de um app de divulgação científica sobre «{doc['termo']}». Trecho:\n{texto_puro(ps[lug['camada']][lug['p']])}\n\n"
            f"Imagem ideal: {lug['mostrar']}.\n\nAbaixo vêm imagens candidatas do Wikimedia Commons. Para cada uma, diga em português o que "
            "ela mostra de fato e dê uma nota de 0 a 10 para quanto ela ajuda um leigo a visualizar esse trecho no celular. Nota baixa para: "
            "imagem que não mostra o assunto, qualidade ruim, muito texto em outra língua, diagrama confuso, conteúdo chocante sem necessidade. "
            "Figura de artigo científico com vários painéis, letras e setas vale no máximo 4: o leitor é leigo e está no celular. "
            "Um GIF que mostra o assunto em movimento ganha 1 ponto a mais que uma foto parada equivalente. "
            "Escolha a melhor (0 se nenhuma serve) e escreva a legenda dela: até 20 palavras, dizendo só o que se vê, sem inventar nada "
            "que a imagem e a descrição não sustentem. Sem travessão. "
            'Responda somente com json: {"imagens": [{"k": 1, "mostra": "", "nota": 0}], "melhor": 0, "legenda": ""}')}]
        for k, c in enumerate(cands, 1):
            try:
                bruto = baixar(c["url"])
                conteudo += [{"type": "text", "text": f"Imagem {k}{' (GIF animado, primeiro quadro)' if c['gif'] else ''}: {c['titulo']}. Descrição no Commons: {c['descricao']}"},
                             {"type": "image_url", "image_url": {"url": miniatura(bruto)}}]
                brutos.append((k, c, bruto))
            except Exception as e:   # arquivo corrompido ou fora do ar: segue com as outras
                print(f"  {id_}: pulei {c['titulo']} ({e})")
        r = visao(conteudo, id_)
        notas = {int(x.get("k", 0)): x for x in r.get("imagens", [])}
        k = int(r.get("melhor") or 0)
        if not k or notas.get(k, {}).get("nota", 0) < NOTA_MINIMA or not r.get("legenda"):
            print(f"  {id_}: nenhuma boa para «{lug['mostrar']}» (" + ", ".join(f"{x.get('nota')}" for x in notas.values()) + ")")
            continue
        _, c, bruto = next(x for x in brutos if x[0] == k)
        dados, (w, h) = preparar(bruto, c["gif"], 480 if c["gif"] else 800)
        n = len(fotos) + 1
        pasta.mkdir(parents=True, exist_ok=True)
        (pasta / f"{n}.webp").write_bytes(dados)
        erros = []
        checar_texto("legenda", r["legenda"], erros)
        fotos.append({"n": n, "arquivo": f"img/c/{id_}/{n}.webp", "legenda": r["legenda"].strip(), "alt": notas[k].get("mostra", ""),
                      "autor": c["autor"], "licenca": c["licenca"], "pagina": c["pagina"], "gif": c["gif"], "w": w, "h": h,
                      "camada": lug["camada"], "p": lug["p"], "nota": notas[k].get("nota")})
        usadas.add(c["titulo"])
        print(f"  {id_}: foto {n} ({'GIF' if c['gif'] else 'foto'}, nota {notas[k].get('nota')}, {len(dados) // 1024} KB) {c['titulo']}"
              + (f"  ATENÇÃO legenda: {erros}" if erros else ""))
    if not fotos:
        return
    # [[FOTO:n]] logo depois do parágrafo escolhido, no próprio js/docs (de trás para frente para não deslocar)
    for f in sorted(fotos, key=lambda f: -js.find(ps[f["camada"]][f["p"]])):
        alvo = ps[f["camada"]][f["p"]]
        i = js.find(alvo)
        if i < 0:
            print(f"  {id_}: não achei o parágrafo da foto {f['n']} no js/docs; ela fica só disponível para a lição")
            continue
        js = js[:i + len(alvo)] + f"\n\n[[FOTO:{f['n']}]]" + js[i + len(alvo):]
    linha = "fotos: " + json.dumps([{k: v for k, v in f.items() if k not in ("camada", "p", "nota")} for f in fotos], ensure_ascii=False) + ","
    fim = js.rindex("\n};")
    antes = js[:fim].rstrip()
    js = antes + ("" if antes.endswith(",") else ",") + "\n\n" + linha + js[fim:]
    arq.write_text(js, encoding="utf-8")
    print(f"  {id_}: {len(fotos)} imagem(ns) em img/c/{id_}/ · {sum((pasta / f'{f['n']}.webp').stat().st_size for f in fotos) // 1024} KB")


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
    global ROTA
    if "--openrouter" in flags:
        ROTA = "openrouter"
    if cmd == "licao":
        idx = indice()
        if "--todas" in flags:
            feitos = {p.stem for p in RASC.glob("*.json")} if RASC.exists() else set()
            ids = [c["id"] for c in idx["conceitos"] if c["doc"] and not c["licao"] and c["id"] not in feitos]
        def um(i):
            try:
                gerar_licao(i, idx, seco="--seco" in flags, revisao_pro="--sem-revisao-pro" not in flags)
            except RuntimeError as e:   # uma falha de rede não derruba o lote inteiro
                print(f"  {i}: falhou ({e}); siga com os outros e rode de novo depois")
        with concurrent.futures.ThreadPoolExecutor(4) as ex:
            list(ex.map(um, ids))
    elif cmd in ("conceito", "dossie"):
        idx = indice()
        def um(i):
            try:
                if cmd == "dossie":
                    d = dossie(i, idx)
                    print(f"{i}: {d['wiki_pt']} / {d['wiki_en']} · {len(d['itens'])} itens · " + " | ".join(texto_puro(x['ref'])[:60] for x in d['itens'][2:6]))
                else:
                    gerar_conceito(i, idx, seco="--seco" in flags, retomar="--retomar" in flags)
            except (RuntimeError, KeyError, StopIteration) as e:   # uma falha não derruba o lote
                print(f"  {i}: falhou ({e!r}); rode de novo depois")
        with concurrent.futures.ThreadPoolExecutor(6) as ex:
            list(ex.map(um, ids))
        if cmd == "conceito" and "--seco" not in flags:
            print(subprocess.run(["node", "build.js"], cwd=RAIZ, capture_output=True, text=True).stdout.strip().splitlines()[-1])
    elif cmd == "imagens":
        def um(i):
            try:
                gerar_imagens(i, seco="--seco" in flags)
            except Exception as e:   # uma imagem problemática não derruba o lote
                print(f"  {i}: falhou ({e!r})")
        with concurrent.futures.ThreadPoolExecutor(4) as ex:
            list(ex.map(um, ids or [c["id"] for c in indice()["conceitos"] if c["doc"]]))
        if "--seco" not in flags:
            print(subprocess.run(["node", "build.js"], cwd=RAIZ, capture_output=True, text=True).stdout.strip().splitlines()[-1])
    elif cmd == "refazer":
        idx = indice()
        alvos = ids or [c["id"] for c in idx["conceitos"] if c["doc"]]
        def um(i):
            try:
                refazer_licao(i, idx)
            except RuntimeError as e:
                print(f"  {i}: falhou ({e}); rode de novo depois")
        with concurrent.futures.ThreadPoolExecutor(4) as ex:
            list(ex.map(um, alvos))
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
