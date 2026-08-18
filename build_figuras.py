#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_figuras.py: gera js/figuras.js

Todos os diagramas quantitativos são CALCULADOS aqui, não desenhados à mão.
Isso garante que a curva no gráfico corresponde de fato à matemática descrita
no texto: um diagrama errado é pior que diagrama nenhum.

Rodar:  python3 build_figuras.py
"""
import json, math, os

FIG = {}
W = 600  # largura padrão do viewBox

def svg(h, body, aria=""):
    return (f'<svg viewBox="0 0 {W} {h}" role="img" aria-label="{aria}" '
            f'preserveAspectRatio="xMidYMid meet">{body}</svg>')

def path(pts, cls="svg-a-linha", w=1.8, dash=None):
    d = "M" + " L".join(f"{x:.2f},{y:.2f}" for x, y in pts)
    da = f' stroke-dasharray="{dash}"' if dash else ""
    return f'<path d="{d}" fill="none" class="{cls}" stroke-width="{w}" stroke-linejoin="round"{da}/>'

def txt(x, y, s, cls="svg-rot", anchor="start", size=None):
    st = f' style="font-size:{size}px"' if size else ""
    return f'<text x="{x:.1f}" y="{y:.1f}" class="{cls}" text-anchor="{anchor}"{st}>{s}</text>'

def eixo(x1, y1, x2, y2, cls="svg-l-linha", w=1):
    return f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" class="{cls}" stroke-width="{w}"/>'


# ═══════════════════════════════════════════════════════════════════════
# FOURIER
# ═══════════════════════════════════════════════════════════════════════
def onda_quadrada_parcial(t, n_harm):
    """Soma parcial da série de Fourier da onda quadrada: sen(kx)/k, k ímpar."""
    s = 0.0
    for i in range(n_harm):
        k = 2 * i + 1
        s += math.sin(k * t) / k
    return s * 4 / math.pi

def fig_fourier_decomp():
    h, pad, gap = 300, 34, 8
    faixa = (h - 2 * pad - 2 * gap) / 3
    body = []
    casos = [(1, "1 harmônico"), (3, "3 harmônicos"), (9, "9 harmônicos")]
    for idx, (nh, rot) in enumerate(casos):
        y0 = pad + idx * (faixa + gap) + faixa / 2
        amp = faixa / 2 - 4
        x0, x1 = 118, W - 24
        body.append(eixo(x0, y0, x1, y0))
        # alvo (onda quadrada) só na última faixa, tracejado
        if idx == len(casos) - 1:
            alvo = []
            for i in range(401):
                t = 4 * math.pi * i / 400
                v = 1.0 if (t % (2 * math.pi)) < math.pi else -1.0
                alvo.append((x0 + (x1 - x0) * i / 400, y0 - amp * v * 0.78))
            body.append(path(alvo, "svg-s-linha", 1.1, dash="3 3"))
        pts = []
        for i in range(241):
            t = 4 * math.pi * i / 240
            pts.append((x0 + (x1 - x0) * i / 240, y0 - amp * onda_quadrada_parcial(t, nh) * 0.78))
        body.append(path(pts, "svg-a-linha", 1.9))
        body.append(txt(x0 - 12, y0 + 4, rot, "svg-rot", "end"))
    return svg(h, "".join(body), "Somas parciais da serie de Fourier de uma onda quadrada")

def fig_fourier_dominios():
    h = 272
    body = []
    # painel de cima: sinal no tempo
    x0, x1, y0, amp = 40, W - 24, 74, 44
    body.append(txt(40, 26, "DOMÍNIO DO TEMPO: o que o microfone registra", "svg-rot-p"))
    body.append(eixo(x0, y0, x1, y0))
    pts = []
    for i in range(321):
        t = 2 * math.pi * 3 * i / 320
        v = math.sin(t) + 0.55 * math.sin(4 * t) + 0.3 * math.sin(9 * t)
        pts.append((x0 + (x1 - x0) * i / 320, y0 - amp * v / 1.85))
    body.append(path(pts, "svg-a-linha", 1.8))
    body.append(txt(x1, 138, "tempo →", "svg-rot-p", "end"))

    # painel de baixo: espectro
    yb, hb = 224, 84
    body.append(txt(40, 160, "DOMÍNIO DA FREQUÊNCIA: a mesma informação, outra pergunta", "svg-rot-p"))
    body.append(eixo(x0, yb, x1, yb))
    picos = [(1, 1.0), (4, 0.55), (9, 0.3)]
    for f, a in picos:
        x = x0 + (x1 - x0) * (f / 12.0)
        body.append(f'<rect x="{x-5:.1f}" y="{yb - hb*a:.1f}" width="10" height="{hb*a:.1f}" class="svg-acento" opacity="0.85"/>')
        body.append(txt(x, yb + 16, f"{f}", "svg-rot-p", "middle"))
    body.append(txt(x1, yb + 34, "frequência →", "svg-rot-p", "end"))
    body.append(txt(x0 + 46, yb - hb + 2, "amplitude", "svg-rot-p"))
    return svg(h, "".join(body), "Mesmo sinal representado no tempo e na frequencia")

def fig_fourier_gibbs():
    """O sobressinal de Gibbs vale ~8,95% do TAMANHO DO SALTO. Como o salto
       vai de -1 a +1 (tamanho 2), o pico da soma parcial fica em ~1,179,
       não em 1,09. Confundir as duas leituras é o erro clássico aqui."""
    h = 260
    body = []
    x0, x1 = 76, W - 150
    ytopo, ybase = 66, 196
    vlo, vhi = 0.90, 1.23
    def Y(v): return ybase - (ybase - ytopo) * (v - vlo) / (vhi - vlo)
    t0, t1 = 0.80, 0.9995            # fração de pi
    def X(f): return x0 + (x1 - x0) * (f - t0) / (t1 - t0)

    body.append(txt(40, 24, "ZOOM NA REGIÃO DO SALTO: O SOBRESSINAL NÃO ENCOLHE", "svg-rot-p"))
    body.append(txt(40, 40, "Escala vertical ampliada. Tracejado = valor correto da onda quadrada.", "svg-rot-p"))
    for v in (1.0, 1.1, 1.2):
        body.append(eixo(x0, Y(v), x1, Y(v), "svg-l-linha", 0.6))
        body.append(txt(x0 - 8, Y(v) + 4, f"{v:.1f}", "svg-rot-p", "end"))
    body.append(f'<line x1="{x0}" y1="{Y(1.0):.1f}" x2="{x1}" y2="{Y(1.0):.1f}" class="svg-t-linha" stroke-width="1.2" stroke-dasharray="4 3"/>')

    picos = {}
    for nh, wid, op, rotulo_y in [(9, 1.4, 0.45, 1.196), (49, 2.0, 1.0, 1.171)]:
        segs, atual, pico = [], [], 0.0
        for i in range(1601):
            f = t0 + (t1 - t0) * i / 1600
            v = onda_quadrada_parcial(math.pi * f, nh)
            pico = max(pico, v)
            if vlo <= v <= vhi: atual.append((X(f), Y(v)))
            elif atual: segs.append(atual); atual = []
        if atual: segs.append(atual)
        picos[nh] = pico
        for seg in segs:
            if len(seg) > 1:
                body.append(path(seg, "svg-a-linha", wid).replace("/>", f' opacity="{op}"/>'))

    body.append(f'<line x1="{x0}" y1="{Y(picos[49]):.1f}" x2="{x1+8:.0f}" y2="{Y(picos[49]):.1f}" class="svg-a-linha" stroke-width="0.9" stroke-dasharray="2 3"/>')
    xr = x1 + 14
    body.append(txt(xr, Y(picos[49]) - 6, f"pico = {picos[49]:.3f}", "svg-rot"))
    body.append(txt(xr, Y(picos[49]) + 10, "com 9 harmônicos", "svg-rot-p"))
    body.append(txt(xr, Y(picos[49]) + 23, "e com 49: o mesmo", "svg-rot-p"))
    body.append(txt(xr, Y(picos[49]) + 44, "excesso = 0,179", "svg-rot-p"))
    body.append(txt(xr, Y(picos[49]) + 57, "sobre um salto de 2", "svg-rot-p"))
    body.append(txt(xr, Y(picos[49]) + 70, f"= {(picos[49]-1)/2*100:.2f}% do salto", "svg-rot"))
    body.append(txt(x1, ybase + 20, "→ descontinuidade", "svg-rot-p", "end"))
    body.append(txt(40, 232, "Mais termos estreitam a região do erro. A altura do sobressinal fica onde está.", "svg-rot"))
    return svg(h, "".join(body), "Zoom no fenomeno de Gibbs mostrando o sobressinal persistente de 8,95 por cento do salto")


# ═══════════════════════════════════════════════════════════════════════
# QUATRO FORÇAS: alcance em escala logarítmica
# ═══════════════════════════════════════════════════════════════════════
SOBRE = {"-": "\u207b", "0": "\u2070", "1": "\u00b9", "2": "\u00b2", "3": "\u00b3",
         "4": "\u2074", "5": "\u2075", "6": "\u2076", "7": "\u2077", "8": "\u2078", "9": "\u2079"}
def sobrescrito(n):
    return "".join(SOBRE[c] for c in str(n))

def fig_forcas_alcance():
    h = 254
    body = []
    x0, x1 = 150, W - 30
    # escala log de 10^-18 m a 10^+26 m
    lo, hi = -18.0, 26.0
    def X(e): return x0 + (x1 - x0) * (e - lo) / (hi - lo)
    body.append(txt(40, 24, "ALCANCE DE CADA INTERAÇÃO (metros, escala logarítmica)", "svg-rot-p"))
    for e in range(-18, 27, 4):
        body.append(eixo(X(e), 40, X(e), 200, "svg-l-linha", 0.6))
        body.append(txt(X(e), 220, f"10{sobrescrito(e)}", "svg-rot-p", "middle"))
    linhas = [
        ("Forte", -18, -15, "~10⁻¹⁵ m, o tamanho de um núcleo"),
        ("Fraca", -18, -17.7, "~10⁻¹⁸ m, menor que um próton"),
        ("Eletromagnética", -18, 26, "infinito (cai com 1/r²)"),
        ("Gravitacional", -18, 26, "infinito (cai com 1/r²)"),
    ]
    for i, (nome, a, b, obs) in enumerate(linhas):
        y = 68 + i * 34
        body.append(f'<rect x="{X(a):.1f}" y="{y-7:.1f}" width="{max(X(b)-X(a),3):.1f}" height="14" rx="7" class="svg-acento" opacity="0.8"/>')
        body.append(txt(x0 - 12, y + 4, nome, "svg-rot", "end"))
        if b < 20:
            body.append(txt(X(b) + 10, y + 4, obs, "svg-rot-p"))
        else:
            body.append(txt(X(a) + 10, y - 12, obs, "svg-rot-p"))
    return svg(h, "".join(body), "Alcance das quatro interacoes fundamentais em escala logaritmica")


# ═══════════════════════════════════════════════════════════════════════
# VANTAGEM COMPARATIVA: fronteiras de possibilidade de produção
# ═══════════════════════════════════════════════════════════════════════
def fig_ricardo_ppf():
    """Portugal e Inglaterra, 100 horas de trabalho cada.
       Horas por unidade. Portugal é melhor em ambos (vantagem absoluta)."""
    h = 300
    body = []
    # horas por unidade
    dados = [("PORTUGAL", 80, 90), ("INGLATERRA", 120, 100)]  # (vinho, tecido)
    for k, (nome, hv, ht) in enumerate(dados):
        ox = 40 + k * 300
        oy, alt, larg = 250, 170, 190
        maxv = 100.0 / 80 * 100  # normalizador comum
        vmax = 100.0 / hv        # unidades de vinho se dedicar tudo
        tmax = 100.0 / ht        # unidades de tecido se dedicar tudo
        esc = 130.0              # px por unidade
        body.append(txt(ox, oy - alt - 26, nome, "svg-rot"))
        body.append(txt(ox, oy - alt - 12, f"{hv} h por vinho · {ht} h por tecido", "svg-rot-p"))
        body.append(eixo(ox, oy, ox + larg, oy))
        body.append(eixo(ox, oy, ox, oy - alt))
        px, py = ox + vmax * esc, oy - tmax * esc
        body.append(path([(ox, py), (px, oy)], "svg-a-linha", 2.0))
        body.append(f'<circle cx="{ox:.1f}" cy="{py:.1f}" r="3" class="svg-acento"/>')
        body.append(f'<circle cx="{px:.1f}" cy="{oy:.1f}" r="3" class="svg-acento"/>')
        body.append(txt(ox + 6, py - 6, f"{tmax:.2f} tecido", "svg-rot-p"))
        body.append(txt(px + 6, oy - 6, f"{vmax:.2f} vinho", "svg-rot-p"))
        # custo de oportunidade
        co = hv / ht  # tecido sacrificado para produzir 1 vinho (horas de vinho / horas de tecido)
        body.append(txt(ox, oy + 22, f"custo de 1 vinho = {co:.2f} tecido", "svg-rot"))
    body.append(txt(40, 26, "MESMAS 100 HORAS DE TRABALHO EM CADA PAÍS", "svg-rot-p"))
    body.append(txt(40, 42, "Portugal produz mais dos dois. O que decide a especialização é a inclinação da reta, não a altura dela.", "svg-rot-p"))
    return svg(h, "".join(body), "Fronteiras de possibilidade de producao de Portugal e Inglaterra")


# ═══════════════════════════════════════════════════════════════════════
# BAYES: frequências naturais
# ═══════════════════════════════════════════════════════════════════════
def fig_bayes_icones():
    """1000 mulheres · prevalência 1% · sensibilidade 90% · falso-positivo 9%."""
    h = 424
    body = []
    n, cols = 1000, 50
    r, passo = 2.6, 11.0
    x0, y0 = 40, 60
    doentes = 10
    vp = 9          # 90% de 10
    fp = int(round(0.09 * 990))  # 89
    body.append(txt(x0, 26, "1.000 MULHERES · PREVALÊNCIA 1% · SENSIBILIDADE 90% · FALSO-POSITIVO 9%", "svg-rot-p"))
    body.append(txt(x0, 42, "Cada ponto é uma pessoa. Os cheios receberam resultado positivo.", "svg-rot-p"))
    body.append(f'<defs>'
                f'<circle id="pa" r="{r+0.9:.1f}" class="svg-acento"/>'
                f'<circle id="pt" r="{r:.1f}" class="svg-tinta" opacity="0.55"/>'
                f'<circle id="pv" r="{r:.1f}" fill="none" class="svg-a-linha" stroke-width="1.1"/>'
                f'<circle id="ps" r="{r-0.7:.1f}" class="svg-suave" opacity="0.3"/></defs>')
    for i in range(n):
        cx = x0 + (i % cols) * passo
        cy = y0 + (i // cols) * passo
        ref = "pa" if i < vp else ("pt" if i < vp + fp else ("pv" if i < doentes + fp else "ps"))
        body.append(f'<use href="#{ref}" x="{cx:.0f}" y="{cy:.0f}"/>')
    yb = y0 + (n // cols) * passo + 22
    legendas = [
        (f"{vp} doentes com teste positivo", "acento-cheio"),
        (f"{fp} saudáveis com teste positivo", "tinta-cheio"),
        (f"{doentes-vp} doente com teste negativo", "acento-vazio"),
        (f"{n-doentes-fp} saudáveis com teste negativo", "suave"),
    ]
    for i, (t, tipo) in enumerate(legendas):
        yy = yb + i * 17
        if tipo == "acento-cheio":
            body.append(f'<circle cx="{x0+4}" cy="{yy-4}" r="4" class="svg-acento"/>')
        elif tipo == "tinta-cheio":
            body.append(f'<circle cx="{x0+4}" cy="{yy-4}" r="3" class="svg-tinta" opacity="0.55"/>')
        elif tipo == "acento-vazio":
            body.append(f'<circle cx="{x0+4}" cy="{yy-4}" r="3" fill="none" class="svg-a-linha" stroke-width="1.1"/>')
        else:
            body.append(f'<circle cx="{x0+4}" cy="{yy-4}" r="2.4" class="svg-suave" opacity="0.4"/>')
        body.append(txt(x0 + 16, yy, t, "svg-rot-p"))
    body.append(txt(x0, yb + 4*17 + 14, f"Positivos ao todo: {vp+fp}. Doentes entre eles: {vp}.", "svg-rot"))
    body.append(txt(x0, yb + 4*17 + 32, f"P(doente | positivo) = {vp}/{vp+fp} ≈ {100*vp/(vp+fp):.0f}%, e não os 90% da sensibilidade.", "svg-rot"))
    return svg(h, "".join(body), "Representacao em frequencias naturais do teorema de Bayes")


# ═══════════════════════════════════════════════════════════════════════
# TEMPERAMENTO IGUAL: desvio em cents
# ═══════════════════════════════════════════════════════════════════════
def cents(razao): return 1200 * math.log2(razao)

def fig_temperamento_cents():
    h = 290
    intervalos = [
        ("Uníssono", 1/1, 0), ("2ª maior", 9/8, 2), ("3ª menor", 6/5, 3),
        ("3ª maior", 5/4, 4), ("4ª justa", 4/3, 5), ("Trítono", 45/32, 6),
        ("5ª justa", 3/2, 7), ("6ª menor", 8/5, 8), ("6ª maior", 5/3, 9),
        ("7ª menor", 9/5, 10), ("7ª maior", 15/8, 11), ("Oitava", 2/1, 12),
    ]
    body = []
    x0, xz = 130, 330
    esc = 8.0  # px por cent
    body.append(txt(40, 24, "QUANTO O PIANO SE AFASTA DA AFINAÇÃO NATURAL (em cents)", "svg-rot-p"))
    body.append(txt(40, 40, "Cent = 1/100 de semitom. O ouvido treinado detecta a partir de ~5 cents em notas sustentadas.", "svg-rot-p"))
    body.append(eixo(xz, 54, xz, 268, "svg-l-linha", 1))
    body.append(txt(xz, 50, "0", "svg-rot-p", "middle"))
    for c in (-15, -10, -5, 5, 10, 15):
        body.append(eixo(xz + c * esc, 56, xz + c * esc, 264, "svg-l-linha", 0.4))
        body.append(txt(xz + c * esc, 50, f"{c:+d}", "svg-rot-p", "middle"))
    for i, (nome, razao, semis) in enumerate(intervalos):
        y = 68 + i * 17
        dev = semis * 100 - cents(razao)   # TET menos justo
        body.append(txt(x0 - 10, y + 4, nome, "svg-rot-p", "end"))
        larg = dev * esc
        body.append(f'<rect x="{min(xz, xz+larg):.1f}" y="{y-4.5:.1f}" width="{abs(larg):.1f}" height="9" class="svg-acento" opacity="0.85"/>')
        body.append(txt(xz + larg + (7 if larg >= 0 else -7), y + 4, f"{dev:+.1f}", "svg-rot-p", "start" if larg >= 0 else "end"))
    return svg(h, "".join(body), "Desvio em cents do temperamento igual em relacao a entonacao justa")

def fig_temperamento_comma():
    """Comparação linear é muito mais legível que a espiral: o excesso de
       23,46 cents em 8400 é pequeno demais para ser visto sem ampliação."""
    h = 270
    body = []
    passo = cents(1.5)
    doze = 12 * passo
    sete = 7 * 1200.0
    sobra = doze - sete

    x0, x1 = 60, W - 60
    esc = (x1 - x0) / doze
    body.append(txt(40, 24, "DOZE QUINTAS PURAS NÃO FECHAM SETE OITAVAS", "svg-rot-p"))
    body.append(txt(40, 40, "Ambas as trajetórias deveriam terminar na mesma nota. Não terminam.", "svg-rot-p"))

    # barra 1: sete oitavas
    y1 = 78
    body.append(f'<rect x="{x0}" y="{y1}" width="{sete*esc:.2f}" height="18" rx="4" class="svg-suave" opacity="0.35"/>')
    for k in range(8):
        xx = x0 + k * 1200 * esc
        body.append(eixo(xx, y1 - 5, xx, y1 + 23, "svg-s-linha", 0.9))
    body.append(txt(x0, y1 - 12, f"7 oitavas empilhadas = {sete:.0f} cents", "svg-rot"))

    # barra 2: doze quintas
    y2 = 132
    body.append(f'<rect x="{x0}" y="{y2}" width="{doze*esc:.2f}" height="18" rx="4" class="svg-acento" opacity="0.75"/>')
    for k in range(13):
        xx = x0 + k * passo * esc
        body.append(eixo(xx, y2 - 5, xx, y2 + 23, "svg-a-linha", 0.9))
    body.append(txt(x0, y2 - 12, f"12 quintas puras (3/2) = {doze:.2f} cents", "svg-rot"))

    # marcação da sobra
    xa, xb = x0 + sete * esc, x0 + doze * esc
    body.append(f'<line x1="{xa:.1f}" y1="{y1}" x2="{xa:.1f}" y2="{y2+30:.0f}" class="svg-t-linha" stroke-width="1" stroke-dasharray="3 3"/>')
    body.append(txt(x1, 190, f"sobra = {sobra:.2f} cents (coma pitagórica)", "svg-rot", "end"))

    # inset ampliado 40x
    yi = 218
    amp = 40.0
    xi0 = x0 + 200
    body.append(txt(x0, yi + 4, "ampliação 40×:", "svg-rot-p"))
    body.append(f'<rect x="{xi0}" y="{yi-8}" width="{sobra*esc*amp:.1f}" height="16" class="svg-acento" opacity="0.85"/>')
    body.append(txt(xi0 + sobra*esc*amp + 10, yi + 4, f"{sobra:.2f} cents ≈ um quarto de semitom, perfeitamente audível", "svg-rot-p"))
    body.append(txt(40, 256, "Nenhum ajuste elimina essa sobra: nenhuma potência de 3/2 é igual a uma potência de 2.", "svg-rot-p"))
    return svg(h, "".join(body), "Comparacao entre doze quintas puras e sete oitavas e a coma pitagorica")


# ═══════════════════════════════════════════════════════════════════════
# ÍNDICE GLICÊMICO
# ═══════════════════════════════════════════════════════════════════════
def fig_gi_curvas():
    h = 250
    body = []
    x0, x1, y0, alt = 60, W - 40, 200, 140
    body.append(txt(40, 24, "COMO O ÍNDICE GLICÊMICO É MEDIDO: ÁREA SOB A CURVA, NÃO O PICO", "svg-rot-p"))
    body.append(eixo(x0, y0, x1, y0)); body.append(eixo(x0, y0, x0, y0 - alt))
    body.append(txt(x1, y0 + 34, "minutos após a refeição →", "svg-rot-p", "end"))
    body.append(txt(x0 - 6, y0 - alt - 6, "glicemia acima do jejum", "svg-rot-p"))
    for m in (0, 30, 60, 90, 120):
        body.append(txt(x0 + (x1 - x0) * m / 120, y0 + 16, str(m), "svg-rot-p", "middle"))
    def curva(pico_t, pico_v, decai):
        pts = []
        for i in range(241):
            t = 120 * i / 240
            v = pico_v * (t / pico_t) ** 1.6 * math.exp(1.6 * (1 - t / pico_t)) if t > 0 else 0
            v *= math.exp(-decai * max(0, t - pico_t) / 60)
            pts.append((x0 + (x1 - x0) * t / 120, y0 - alt * min(v, 1.0)))
        return pts
    a = curva(30, 0.92, 0.55)
    b = curva(45, 0.58, 0.25)
    area_a = "M" + " L".join(f"{x:.1f},{y:.1f}" for x, y in a) + f" L{x1:.1f},{y0:.1f} L{x0:.1f},{y0:.1f} Z"
    body.append(f'<path d="{area_a}" class="svg-acento" opacity="0.14"/>')
    body.append(path(a, "svg-a-linha", 2.0))
    body.append(path(b, "svg-t-linha", 1.6, dash="4 3"))
    body.append(f'<line x1="{x0+128:.0f}" y1="{y0-alt*0.94:.0f}" x2="{x0+160:.0f}" y2="{y0-alt-6:.0f}" class="svg-s-linha" stroke-width="0.8"/>')
    body.append(txt(x0 + 164, y0 - alt - 4, "alimento-referência (glicose = 100)", "svg-rot-p"))
    body.append(f'<line x1="{x0+228:.0f}" y1="{y0-alt*0.44:.0f}" x2="{x0+262:.0f}" y2="{y0-alt*0.30:.0f}" class="svg-s-linha" stroke-width="0.8"/>')
    body.append(txt(x0 + 266, y0 - alt * 0.28, "alimento testado (tracejado)", "svg-rot-p"))
    body.append(txt(x0 + 6, 44, "IG = (área do testado ÷ área da referência) × 100", "svg-rot"))
    return svg(h, "".join(body), "Curvas glicemicas e area incremental sob a curva")

def fig_gi_dispersao():
    """Matthan et al. 2016 (AJCN): 63 adultos, mesmo pão branco.
       22 classificados baixo (35-55), 23 intermediário (57-67), 18 alto (70-103)."""
    h = 250
    body = []
    x0, x1, yb = 70, W - 40, 190
    lo, hi = 30, 110
    def X(v): return x0 + (x1 - x0) * (v - lo) / (hi - lo)
    body.append(txt(40, 24, "O MESMO PÃO BRANCO, MEDIDO EM 63 PESSOAS", "svg-rot-p"))
    body.append(txt(40, 40, "Matthan et al., Am J Clin Nutr 2016. Média = 62 (\"médio\"). Mas a média descreve muito pouca gente.", "svg-rot-p"))
    body.append(eixo(x0, yb, x1, yb))
    for v in (30, 40, 50, 60, 70, 80, 90, 100, 110):
        body.append(eixo(X(v), yb, X(v), yb + 5, "svg-l-linha", 0.8))
        body.append(txt(X(v), yb + 18, str(v), "svg-rot-p", "middle"))
    body.append(txt(x1, yb + 34, "índice glicêmico individual medido →", "svg-rot-p", "end"))
    # faixas de classificação
    faixas = [(30, 55, "BAIXO", 22), (55, 69, "MÉDIO", 23), (69, 110, "ALTO", 18)]
    for a, b, rot, n in faixas:
        body.append(f'<rect x="{X(a):.1f}" y="{62}" width="{X(b)-X(a):.1f}" height="{yb-62:.1f}" class="svg-suave" opacity="0.07"/>')
        body.append(txt((X(a) + X(b)) / 2, 76, rot, "svg-rot-p", "middle"))
        body.append(txt((X(a) + X(b)) / 2, 92, f"{n} pessoas", "svg-rot", "middle"))
    # pontos aproximando a distribuição relatada
    import random
    random.seed(7)
    grupos = [(22, 35, 55), (23, 57, 67), (18, 70, 103)]
    pontos = []
    for n, a, b in grupos:
        for i in range(n):
            pontos.append(a + (b - a) * (i + 0.5) / n)
    pilha = {}
    for v in sorted(pontos):
        k = round(X(v) / 7)
        pilha[k] = pilha.get(k, 0) + 1
        body.append(f'<circle cx="{X(v):.1f}" cy="{yb - 6 - (pilha[k]-1)*7:.1f}" r="2.9" class="svg-acento" opacity="0.85"/>')
    body.append(txt(x0, 56, "média oficial: 62", "svg-rot-p"))
    body.append(f'<line x1="{X(62):.1f}" y1="60" x2="{X(62):.1f}" y2="{yb}" class="svg-t-linha" stroke-width="1" stroke-dasharray="3 3"/>')
    return svg(h, "".join(body), "Dispersao dos valores individuais de indice glicemico do pao branco")


# ═══════════════════════════════════════════════════════════════════════
# GESTALT: painéis de demonstração
# ═══════════════════════════════════════════════════════════════════════
def fig_gestalt_principios():
    h = 300
    body = []
    pw, ph = 132, 104
    origens = [(40, 60), (196, 60), (352, 60), (40, 196), (196, 196), (352, 196)]
    rotulos = ["PROXIMIDADE", "SIMILARIDADE", "FECHAMENTO", "CONTINUIDADE", "REGIÃO COMUM", "DESTINO COMUM"]
    for (ox, oy), rot in zip(origens, rotulos):
        body.append(f'<rect x="{ox}" y="{oy}" width="{pw}" height="{ph}" rx="6" fill="none" class="svg-l-linha" stroke-width="1"/>')
        body.append(txt(ox, oy - 8, rot, "svg-rot-p"))

    # 1 proximidade: colunas agrupadas 2 a 2
    ox, oy = origens[0]
    for c in range(6):
        gx = ox + 18 + (c // 2) * 36 + (c % 2) * 14
        for r in range(4):
            body.append(f'<circle cx="{gx}" cy="{oy+22+r*20}" r="4.2" class="svg-tinta"/>')
    # 2 similaridade: alternância de forma por coluna
    ox, oy = origens[1]
    for c in range(5):
        for r in range(4):
            cx, cy = ox + 22 + c * 22, oy + 22 + r * 20
            if c % 2 == 0:
                body.append(f'<circle cx="{cx}" cy="{cy}" r="4.2" class="svg-tinta"/>')
            else:
                body.append(f'<rect x="{cx-3.8}" y="{cy-3.8}" width="7.6" height="7.6" class="svg-acento"/>')
    # 3 fechamento: triângulo implícito por 3 pac-men (arco amostrado, à prova de erro de flag)
    ox, oy = origens[2]
    cx, cy, R, r3 = ox + pw/2, oy + ph/2 + 2, 30, 14
    for ang in (-90, 30, 150):
        a = math.radians(ang)
        px, py = cx + R*math.cos(a), cy + R*math.sin(a)
        theta = math.degrees(math.atan2(cy - py, cx - px))   # boca aponta para o centro
        pts = [(px, py)]
        for k in range(41):
            t = math.radians(theta + 32 + (296 * k / 40))
            pts.append((px + r3*math.cos(t), py + r3*math.sin(t)))
        d = "M" + " L".join(f"{x:.1f},{y:.1f}" for x, y in pts) + " Z"
        body.append(f'<path d="{d}" class="svg-tinta"/>')
    # 4 continuidade: duas curvas que se cruzam no centro
    ox, oy = origens[3]
    p1 = [(ox+12 + i*(pw-24)/40, oy+ph/2 - 30*math.cos(math.pi*i/40)) for i in range(41)]
    p2 = [(ox+12 + i*(pw-24)/40, oy+ph/2 + 30*math.cos(math.pi*i/40)) for i in range(41)]
    body.append(path(p1, "svg-t-linha", 2)); body.append(path(p2, "svg-a-linha", 2))
    body.append(txt(ox + pw/2, oy + ph - 6, "lidas como 2 traços, não 4", "svg-rot-p", "middle"))
    # 5 região comum: mesmos pontos, moldura muda o agrupamento
    ox, oy = origens[4]
    body.append(f'<rect x="{ox+14}" y="{oy+24}" width="50" height="56" rx="6" fill="none" class="svg-a-linha" stroke-width="1.2"/>')
    body.append(f'<rect x="{ox+70}" y="{oy+24}" width="50" height="56" rx="6" fill="none" class="svg-a-linha" stroke-width="1.2"/>')
    for c in range(4):
        for r in range(3):
            body.append(f'<circle cx="{ox+26+c*26}" cy="{oy+36+r*18}" r="4" class="svg-tinta"/>')
    # 6 destino comum: setas
    ox, oy = origens[5]
    for c in range(5):
        for r in range(3):
            x, y = ox + 22 + c*22, oy + 28 + r*24
            dy = -10 if c in (1, 3) else 10
            body.append(f'<circle cx="{x}" cy="{y}" r="3.6" class="svg-tinta"/>')
            body.append(f'<line x1="{x}" y1="{y}" x2="{x}" y2="{y+dy}" class="{"svg-a-linha" if c in (1,3) else "svg-s-linha"}" stroke-width="1.4"/>')
    body.append(txt(40, 30, "SEIS REGRAS QUE O SEU SISTEMA VISUAL APLICA ANTES DE VOCÊ DECIDIR QUALQUER COISA", "svg-rot-p"))
    return svg(h, "".join(body), "Demonstracoes dos principios de agrupamento da Gestalt")


# ═══════════════════════════════════════════════════════════════════════
# HEGEL: movimento da consciência (determinate negation)
# ═══════════════════════════════════════════════════════════════════════
def fig_hegel_movimento():
    h = 280
    body = []
    body.append(txt(40, 26, "COMO O MOVIMENTO DIALÉTICO REALMENTE FUNCIONA EM HEGEL", "svg-rot-p"))
    body.append(txt(40, 42, "Não é tese + antítese = síntese. É um critério que se descobre inadequado ao próprio objeto que ele criou.", "svg-rot-p"))
    caixas = [
        (34, 80, 168, "A consciência propõe\num critério de verdade", "1"),
        (216, 80, 168, "Aplica esse critério\nao seu objeto", "2"),
        (398, 80, 168, "O objeto não corresponde:\ncontradição interna", "3"),
        (180, 196, 240, "Surge uma figura nova e mais rica,\nque conserva o que foi negado", "4"),
    ]
    for x, y, bw, t, n in caixas:
        linhas = t.split("\n")
        bh = 30 + 15 * len(linhas)
        body.append(f'<rect x="{x}" y="{y}" width="{bw}" height="{bh}" rx="8" fill="none" class="svg-l-linha" stroke-width="1.2"/>')
        body.append(f'<circle cx="{x+14}" cy="{y+14}" r="8" class="svg-acento"/>')
        body.append(f'<text x="{x+14}" y="{y+17.5}" class="svg-rot-p" text-anchor="middle" style="fill:var(--papel);font-weight:700">{n}</text>')
        for i, l in enumerate(linhas):
            body.append(txt(x + 28, y + 18 + i * 15, l, "svg-rot-p"))
    seta = '<defs><marker id="pt" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" class="svg-acento"/></marker></defs>'
    body.insert(0, seta)
    for x1_, x2_ in [(202, 216), (384, 398)]:
        body.append(f'<line x1="{x1_}" y1="105" x2="{x2_-6}" y2="105" class="svg-a-linha" stroke-width="1.4" marker-end="url(#pt)"/>')
    body.append('<path d="M482,140 L482,172 L380,172 L380,190" fill="none" class="svg-a-linha" stroke-width="1.4" marker-end="url(#pt)"/>')
    body.append('<path d="M180,222 L100,222 L100,145" fill="none" class="svg-a-linha" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#pt)"/>')
    body.append(txt(34, 262, "O ciclo recomeça em nível superior. Este é o sentido de Aufhebung: suprimir, conservar e elevar ao mesmo tempo.", "svg-rot-p"))
    return svg(h, "".join(body), "Diagrama do movimento dialetico como negacao determinada")


# ═══════════════════════════════════════════════════════════════════════
# COMUNS: matriz de payoff
# ═══════════════════════════════════════════════════════════════════════
def fig_comuns_matriz():
    h = 340
    body = []
    body.append(txt(40, 26, "A ESTRUTURA DE INCENTIVOS QUE HARDIN DESCREVEU", "svg-rot-p"))
    body.append(txt(40, 42, "Dois pastores, um pasto. Números = ganho líquido de cada um.", "svg-rot-p"))
    body.append(txt(40, 56, "O benefício de mais um animal é privado; o custo do pasto degradado é dividido.", "svg-rot-p"))
    x0, y0, cw, ch = 190, 92, 150, 62
    body.append(txt(x0 + cw, 68, "PASTOR B", "svg-rot-p", "middle"))
    body.append(txt(x0 + cw/2, 92, "modera", "svg-rot-p", "middle"))
    body.append(txt(x0 + cw*1.5, 92, "explora", "svg-rot-p", "middle"))
    body.append(f'<text x="{x0-100}" y="{y0+30+ch/2}" class="svg-rot-p" transform="rotate(-90 {x0-100} {y0+30+ch/2})" text-anchor="middle">PASTOR A</text>')
    celulas = [("+3, +3", "+1, +4"), ("+4, +1", "+2, +2")]
    linhas_rot = ["modera", "explora"]
    for i in range(2):
        body.append(txt(x0 - 12, y0 + 30 + ch/2 + i*ch, linhas_rot[i], "svg-rot-p", "end"))
        for j in range(2):
            x, y = x0 + j*cw, y0 + 22 + i*ch
            destaque = (i == 1 and j == 1)
            cls = "svg-acento" if destaque else "svg-suave"
            body.append(f'<rect x="{x}" y="{y}" width="{cw}" height="{ch}" fill="none" class="svg-l-linha" stroke-width="1"/>')
            if destaque:
                body.append(f'<rect x="{x}" y="{y}" width="{cw}" height="{ch}" class="svg-acento" opacity="0.12"/>')
            body.append(txt(x + cw/2, y + ch/2 + 5, celulas[i][j], "svg-rot", "middle"))
    body.append(txt(x0, y0 + 22 + 2*ch + 26, "Explorar é a melhor resposta individual em qualquer cenário,", "svg-rot-p"))
    body.append(txt(x0, y0 + 22 + 2*ch + 40, "e o resultado conjunto (+2, +2) é pior que a cooperação (+3, +3).", "svg-rot-p"))
    body.append(txt(x0 - 100, y0 + 22 + 2*ch + 62, "Ostrom: este é o modelo de um jogo sem comunicação", "svg-rot"))
    body.append(txt(x0 - 100, y0 + 22 + 2*ch + 78, "e sem regras acordadas, não do mundo.", "svg-rot"))
    return svg(h, "".join(body), "Matriz de payoff do dilema dos comuns")


# ═══════════════════════════════════════════════════════════════════════
# WHORF: percepção categórica
# ═══════════════════════════════════════════════════════════════════════
def fig_whorf_fronteira():
    h = 260
    body = []
    body.append(txt(40, 26, "O DESENHO EXPERIMENTAL DOS \"AZUIS RUSSOS\" (Winawer et al., PNAS 2007)", "svg-rot-p"))
    body.append(txt(40, 42, "Tarefa: qual dos dois quadrados de baixo é igual ao de cima? Só muda a distância no espectro.", "svg-rot-p"))
    x0, y = 60, 74
    for i in range(20):
        t = i / 19
        # gradiente sinij (escuro) → goluboj (claro)
        r = int(24 + t * 110); g = int(70 + t * 130); b = int(150 + t * 90)
        body.append(f'<rect x="{x0 + i*24}" y="{y}" width="24" height="26" fill="rgb({r},{g},{b})"/>')
    body.append(f'<line x1="{x0+10*24}" y1="{y-8}" x2="{x0+10*24}" y2="{y+34}" class="svg-t-linha" stroke-width="2"/>')
    body.append(txt(x0 + 10*24, y - 14, "fronteira sinij / goluboj", "svg-rot-p", "middle"))
    body.append(txt(x0, y + 48, "«sinij»: azul-escuro, palavra separada em russo", "svg-rot-p"))
    body.append(txt(x0 + 250, y + 48, "«goluboj»: azul-claro, outra palavra", "svg-rot-p"))

    body.append(txt(40, 154, "RESULTADO ORIGINAL (2007)", "svg-rot"))
    body.append(txt(40, 172, "Russos foram mais rápidos quando os dois tons caíam em categorias diferentes.", "svg-rot-p"))
    body.append(txt(40, 186, "A vantagem desaparecia sob interferência verbal, sugerindo mediação linguística.", "svg-rot-p"))
    body.append(txt(40, 214, "REPLICAÇÃO (Cognition, 2020)", "svg-rot"))
    body.append(txt(40, 232, "Não encontrou a vantagem de tempo de reação. O efeito categórico só apareceu em tarefas", "svg-rot-p"))
    body.append(txt(40, 246, "que exigiam categorização explícita, não em discriminação perceptiva pura.", "svg-rot-p"))
    return svg(h, "".join(body), "Desenho e replicacao do experimento dos azuis russos")


# ═══════════════════════════════════════════════════════════════════════
# EFEITO HIDROFÓBICO: decomposição entálpica/entrópica da energia livre
# ═══════════════════════════════════════════════════════════════════════
def fig_hidrofobico_termo():
    """Transferência gás→água a 25 °C (tabela do documento). ΔG é calculado
       aqui como ΔH + (−TΔS) para cada soluto, não copiado à mão."""
    h = 290
    body = []
    dados = [
        ("Metano",  -11.5, 19.8),
        ("Etano",   -17.5, 25.1),
        ("Butano",  -23.7, 32.3),
        ("Benzeno", -29.6, 26.0),
    ]  # (nome, ΔH, −TΔS) em kJ/mol
    lo, hi = -35.0, 35.0
    x0, x1 = 132, W - 30
    def X(v): return x0 + (x1 - x0) * (v - lo) / (hi - lo)
    body.append(txt(40, 24, "DECOMPOSIÇÃO DA ENERGIA LIVRE DE HIDRATAÇÃO (kJ/mol, 25 °C)", "svg-rot-p"))
    body.append(txt(40, 40, "ΔG = ΔH + (−TΔS). Barra escura = entalpia. Barra clara = termo entrópico.", "svg-rot-p"))
    for v in range(-30, 31, 10):
        body.append(eixo(X(v), 56, X(v), 234, "svg-l-linha", 0.5))
        body.append(txt(X(v), 248, str(v), "svg-rot-p", "middle"))
    body.append(eixo(X(0), 52, X(0), 238, "svg-l-linha", 1.1))
    for i, (nome, dh, mtds) in enumerate(dados):
        y = 78 + i * 46
        dg = dh + mtds
        body.append(txt(x0 - 12, y + 4, nome, "svg-rot", "end"))
        xh0, xh1 = X(0), X(dh)
        body.append(f'<rect x="{min(xh0,xh1):.1f}" y="{y-8:.1f}" width="{abs(xh1-xh0):.1f}" height="16" class="svg-tinta" opacity="0.7"/>')
        xs0, xs1 = X(dh), X(dg)
        body.append(f'<rect x="{min(xs0,xs1):.1f}" y="{y-8:.1f}" width="{abs(xs1-xs0):.1f}" height="16" class="svg-acento" opacity="0.85"/>')
        body.append(eixo(X(dg), y - 13, X(dg), y + 13, "svg-t-linha", 1.4))
        body.append(txt(X(dg) + (6 if dg >= 0 else -6), y - 16, f"ΔG = {dg:+.1f}", "svg-rot", "start" if dg >= 0 else "end"))
    yl = 78 + len(dados) * 46 + 6
    body.append(f'<rect x="{x0}" y="{yl-8}" width="14" height="10" class="svg-tinta" opacity="0.7"/>')
    body.append(txt(x0 + 20, yl, "ΔH (entalpia, favorável)", "svg-rot-p"))
    body.append(f'<rect x="{x0+190}" y="{yl-8}" width="14" height="10" class="svg-acento" opacity="0.85"/>')
    body.append(txt(x0 + 210, yl, "−TΔS (entropia, desfavorável)", "svg-rot-p"))
    return svg(h, "".join(body), "Decomposicao entalpica e entropica da energia livre de hidratacao de quatro hidrocarbonetos")


# ═══════════════════════════════════════════════════════════════════════
# CÉREBRO DIVIDIDO: cruzamento dos campos visuais
# ═══════════════════════════════════════════════════════════════════════
def fig_split_brain_campos():
    h = 310
    body = []
    seta = ('<defs><marker id="sb-seta" markerWidth="7" markerHeight="7" refX="6" refY="3.5" '
            'orient="auto"><path d="M0,0 L7,3.5 L0,7 z" class="svg-acento"/></marker></defs>')
    body.append(seta)
    body.append(txt(40, 24, "PARA ONDE VAI CADA METADE DO CAMPO VISUAL", "svg-rot-p"))
    body.append(txt(40, 40, "Olhar fixo no ponto central. O que aparece à esquerda cruza para o hemisfério direito, e vice-versa.", "svg-rot-p"))

    paineis = [(20, "CÉREBRO INTACTO", True), (320, "CORPO CALOSO SECCIONADO", False)]
    for ox, titulo, intacto in paineis:
        body.append(txt(ox + 130, 66, titulo, "svg-rot", "middle"))
        body.append(f'<circle cx="{ox+130}" cy="86" r="3" class="svg-tinta"/>')
        body.append(txt(ox + 130, 100, "olhar fixo", "svg-rot-p", "middle"))
        body.append(f'<rect x="{ox+16}" y="112" width="92" height="34" rx="4" fill="none" class="svg-l-linha" stroke-width="1"/>')
        body.append(f'<rect x="{ox+152}" y="112" width="92" height="34" rx="4" fill="none" class="svg-l-linha" stroke-width="1"/>')
        body.append(txt(ox + 62, 132, "campo esquerdo", "svg-rot-p", "middle"))
        body.append(txt(ox + 198, 132, "campo direito", "svg-rot-p", "middle"))
        yh = 246
        body.append(f'<circle cx="{ox+80}" cy="{yh}" r="26" fill="none" class="svg-a-linha" stroke-width="1.4"/>')
        body.append(f'<circle cx="{ox+180}" cy="{yh}" r="26" fill="none" class="svg-a-linha" stroke-width="1.4"/>')
        body.append(txt(ox + 80, yh - 2, "HE", "svg-rot", "middle"))
        body.append(txt(ox + 80, yh + 12, "fala", "svg-rot-p", "middle"))
        body.append(txt(ox + 180, yh - 2, "HD", "svg-rot", "middle"))
        body.append(txt(ox + 180, yh + 12, "muda", "svg-rot-p", "middle"))
        body.append(f'<path d="M{ox+62},146 L{ox+178},{yh-27}" fill="none" class="svg-a-linha" stroke-width="1.3" marker-end="url(#sb-seta)"/>')
        body.append(f'<path d="M{ox+198},146 L{ox+82},{yh-27}" fill="none" class="svg-a-linha" stroke-width="1.3" marker-end="url(#sb-seta)"/>')
        if intacto:
            body.append(eixo(ox + 106, yh, ox + 154, yh, "svg-t-linha", 3))
            body.append(txt(ox + 130, yh + 40, "corpo caloso intacto", "svg-rot-p", "middle"))
            body.append(txt(ox + 130, yh + 54, "as duas metades trocam informação", "svg-rot-p", "middle"))
        else:
            body.append(eixo(ox + 106, yh, ox + 122, yh, "svg-t-linha", 3))
            body.append(eixo(ox + 138, yh, ox + 154, yh, "svg-t-linha", 3))
            body.append(txt(ox + 130, yh + 40, "corpo caloso seccionado", "svg-rot-p", "middle"))
            body.append(txt(ox + 130, yh + 54, "nenhuma transferência direta entre as metades", "svg-rot-p", "middle"))
    return svg(h, "".join(body), "Cruzamento dos campos visuais para os hemisferios em cerebro intacto e calosotomizado")


# ═══════════════════════════════════════════════════════════════════════
# SELEÇÃO ADVERSA: espiral de colapso do mercado de limões
# ═══════════════════════════════════════════════════════════════════════
def fig_mercado_limoes():
    """Modelo simplificado sob qualidade uniforme em [0, 100]: compradores
       pagam a média do que resta à venda, vendedores acima do preço saem.
       Sob distribuição uniforme isso é auto-similar: cada corte é metade
       do anterior. A sequência é calculada aqui, não estimada visualmente."""
    h = 290
    body = []
    rodadas = 6
    cortes = [100.0]
    for _ in range(rodadas):
        cortes.append(cortes[-1] / 2)
    x0, x1 = 150, W - 30
    def X(v): return x0 + (x1 - x0) * v / 100.0
    body.append(txt(40, 24, "A ESPIRAL DE AKERLOF, EM VERSÃO SIMPLIFICADA", "svg-rot-p"))
    body.append(txt(40, 40, "Qualidade uniforme entre 0 e 100. A cada rodada, o preço vira a média do que ainda resta à venda.", "svg-rot-p"))
    y0, passo = 62, 27
    for v in range(0, 101, 20):
        body.append(eixo(X(v), y0 - 8, X(v), y0 + rodadas * passo, "svg-l-linha", 0.5))
        body.append(txt(X(v), y0 + rodadas * passo + 16, str(v), "svg-rot-p", "middle"))
    body.append(txt(x1, y0 + rodadas * passo + 32, "qualidade / preço →", "svg-rot-p", "end"))
    for i in range(rodadas):
        y = y0 + i * passo
        corte, preco = cortes[i], cortes[i] / 2
        body.append(txt(x0 - 12, y + 4, f"Rodada {i+1}", "svg-rot", "end"))
        body.append(f'<rect x="{X(0):.1f}" y="{y-8:.1f}" width="{X(corte)-X(0):.1f}" height="16" class="svg-suave" opacity="0.35"/>')
        body.append(eixo(X(preco), y - 11, X(preco), y + 11, "svg-a-linha", 1.6))
        body.append(txt(X(preco) + 6, y - 13, f"preço ≈ {preco:.1f}", "svg-rot-p"))
    body.append(txt(40, y0 + rodadas * passo + 50, "O corte tende a zero a cada rodada: só sobra o pior carro possível, ou nenhuma venda.", "svg-rot"))
    return svg(h, "".join(body), "Simulacao da espiral de selecao adversa sob distribuicao uniforme de qualidade")


# ═══════════════════════════════════════════════════════════════════════
# LÍNGUAS DE SINAIS: parâmetros formacionais simultâneos
# ═══════════════════════════════════════════════════════════════════════
def fig_sinais_parametros():
    h = 270
    body = []
    body.append(txt(40, 24, "SEQUÊNCIA NA FALA, SIMULTANEIDADE NO SINAL", "svg-rot-p"))
    body.append(txt(40, 40, "Os parâmetros de um sinal não se sucedem no tempo como os fonemas de uma palavra falada: ocorrem todos ao mesmo tempo.", "svg-rot-p"))

    y1 = 68
    body.append(txt(40, y1 - 10, 'LÍNGUA FALADA · "gato", fonema após fonema', "svg-rot"))
    fonemas = ["g", "a", "t", "o"]
    fw, gap = 68, 12
    x0f = 60
    for i, f in enumerate(fonemas):
        x = x0f + i * (fw + gap)
        body.append(f'<rect x="{x}" y="{y1}" width="{fw}" height="38" rx="6" fill="none" class="svg-l-linha" stroke-width="1.2"/>')
        body.append(txt(x + fw/2, y1 + 24, f, "svg-rot", "middle"))
    xend = x0f + len(fonemas) * (fw + gap) - gap
    body.append(eixo(x0f, y1 + 54, xend, y1 + 54, "svg-s-linha", 1))
    body.append(txt(xend, y1 + 68, "tempo →", "svg-rot-p", "end"))

    y2 = 168
    body.append(txt(40, y2 - 10, "LÍNGUA DE SINAIS · um sinal, cinco parâmetros ao mesmo tempo", "svg-rot"))
    params = ["Configuração de mão", "Ponto de articulação", "Movimento", "Orientação da palma", "Expressão não manual"]
    sx0, sx1 = 220, 480
    linha_h = 15
    for i, p in enumerate(params):
        yy = y2 + i * linha_h
        cls = "svg-acento" if i < 4 else "svg-suave"
        op = 0.85 if i < 4 else 0.5
        body.append(f'<rect x="{sx0}" y="{yy}" width="{sx1-sx0}" height="{linha_h-2}" class="{cls}" opacity="{op}"/>')
        body.append(txt(sx0 - 10, yy + linha_h - 4, p, "svg-rot-p", "end"))
    ytopo = y2
    ybase = y2 + len(params) * linha_h - 4
    body.append(eixo(sx0, ytopo, sx0, ybase, "svg-l-linha", 1))
    body.append(eixo(sx1, ytopo, sx1, ybase, "svg-l-linha", 1))
    body.append(txt((sx0 + sx1) / 2, ybase + 14, "mesmo instante", "svg-rot-p", "middle"))
    return svg(h, "".join(body), "Contraste entre parametros sequenciais na fala e simultaneos na lingua de sinais")


# ═══════════════════════════════════════════════════════════════════════
FIG["fourier-decomp"]     = fig_fourier_decomp()
FIG["fourier-dominios"]   = fig_fourier_dominios()
FIG["fourier-gibbs"]      = fig_fourier_gibbs()
FIG["forcas-alcance"]     = fig_forcas_alcance()
FIG["ricardo-ppf"]        = fig_ricardo_ppf()
FIG["bayes-icones"]       = fig_bayes_icones()
FIG["temperamento-cents"] = fig_temperamento_cents()
FIG["temperamento-comma"] = fig_temperamento_comma()
FIG["gi-curvas"]          = fig_gi_curvas()
FIG["gi-dispersao"]       = fig_gi_dispersao()
FIG["gestalt-principios"] = fig_gestalt_principios()
FIG["hegel-movimento"]    = fig_hegel_movimento()
FIG["comuns-matriz"]      = fig_comuns_matriz()
FIG["whorf-fronteira"]    = fig_whorf_fronteira()
FIG["hidrofobico-termo"]  = fig_hidrofobico_termo()
FIG["split-brain-campos"] = fig_split_brain_campos()
FIG["mercado-limoes"]     = fig_mercado_limoes()
FIG["sinais-parametros"]  = fig_sinais_parametros()

destino = os.path.join(os.path.dirname(os.path.abspath(__file__)), "js", "figuras.js")
with open(destino, "w", encoding="utf-8") as f:
    f.write("/* figuras.js: GERADO por build_figuras.py. Não editar à mão. */\n")
    f.write("const FIGURAS = " + json.dumps(FIG, ensure_ascii=False, indent=0) + ";\n")
    f.write('if (typeof module !== "undefined") { module.exports = { FIGURAS }; }\n')

print(f"{len(FIG)} figuras -> {destino}")
for k, v in FIG.items():
    print(f"  {k:24s} {len(v):6d} bytes")
