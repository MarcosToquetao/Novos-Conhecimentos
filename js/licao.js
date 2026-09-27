/* licao.js: toca uma lição, uma tela por vez. Usado pelo app e pela tela de revisão
   (pipeline/revisar.html), para o editor ver exatamente o que o leitor vai ver.

   O modelo que gera a lição só preenche dados (etapas, números, camadas); aqui é que
   cada tipo de tela vira desenho e animação em SVG, sempre no mesmo estilo.

   Licao(raiz, doc, { cor, aoFechar(), aoTerminar({ acertos, total }) })
   doc: o documento do conceito (dados/c/<id>.json), com doc.licao e doc.fontes
   cor: cor CSS da região do conceito, ex. "var(--m-vida)" */
(function () {
"use strict";

const ROTULO = { consenso: "Consenso", emergente: "Emergente" };
const VALE_PONTO = ["pergunta", "ordenar"];
const NS = "http://www.w3.org/2000/svg";
const palavras = (s) => String(s || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
const num = (x) => Number(x).toLocaleString("pt-BR", { maximumSignificantDigits: 3 });
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;");

/* minutos estimados: leitura calma no celular + tempo de olhar e mexer em cada tela */
function minutosLicao(L) {
  const texto = JSON.stringify(L).replace(/"(tipo|marca|fonte|escala|forma)":"?[^,}]*"?/g, "");
  return Math.max(2, Math.round(palavras(texto.replace(/[{}\[\]":,]/g, " ")) / 150 + L.telas.length * 0.15));
}

function Licao(raiz, doc, opts) {
  const L = doc.licao, cor = opts.cor || "var(--tinta)";
  const telas = [{ tipo: "gancho" }, ...L.telas];
  let i = 0, acertos = 0, timers = [];

  raiz.innerHTML = `
    <div class="licao">
      <div class="licao-topo"><button type="button" data-fechar aria-label="Fechar a lição">✕</button><span data-conta></span></div>
      <div class="regua" data-regua>${telas.map(() => "<i></i>").join("")}</div>
      <div class="licao-corpo" data-corpo aria-live="polite"></div>
    </div>
    <div class="rodape-acao"><div class="envelope"><button type="button" class="btn" data-seguir>Começar</button></div></div>`;
  const $ = (s) => raiz.querySelector(s);
  const seguir = $("[data-seguir]");
  const liberar = (txt) => { seguir.disabled = false; seguir.textContent = txt || (i === telas.length - 1 ? "Terminar" : "Continuar"); };
  const travar = (txt) => { seguir.disabled = true; seguir.textContent = txt; };
  const limpar = () => { timers.forEach(clearInterval); timers = []; };
  $("[data-fechar]").addEventListener("click", () => { limpar(); opts.aoFechar && opts.aoFechar(); });

  function carimbo(t) {
    if (!t.marca) return "";
    const f = (doc.fontes || []).find(x => x.n === t.fonte);
    return `<button type="button" class="carimbo ${t.marca}" data-carimbo aria-expanded="false" style="justify-self:start">${ROTULO[t.marca] || t.marca}${f ? `<span class="n">fonte ${f.n}</span>` : ""}</button>
            ${f ? `<p class="licao-ref" data-ref hidden>${f.ref}${f.url ? ` <a href="${f.url}" target="_blank" rel="noopener">abrir</a>` : ""}</p>` : ""}`;
  }
  const legenda = (t) => t.legenda ? `<p class="lv-legenda">${t.legenda}</p>` : "";

  /* ── um desenhista por tipo de tela ─────────────────────────────── */
  const desenha = {
    gancho: () => `<p class="rotulo">${doc.area}</p><p class="licao-gancho">${L.gancho}</p>`,

    texto: (t) => `<div class="leitura">${t.html}</div>`,

    figura: (t) => `<figure class="figura licao-figura">${t.svg || ""}<figcaption>${t.legenda || ""}</figcaption></figure>`,

    pergunta: (t) => `<p class="rotulo">Pergunta</p><p class="licao-pergunta">${t.q}</p>
      <div class="alts">${t.alts.map((a, j) => `<button type="button" class="alt" data-j="${j}"><span class="letra">${"ABC"[j]}</span><span>${a}</span></button>`).join("")}</div>
      <p class="porque" data-porque hidden>${t.porque}</p>`,

    estimar: (t) => `<p class="rotulo">Estime antes de saber</p><p class="licao-pergunta">${t.q}</p>
      <input type="range" class="lv-faixa" data-faixa min="0" max="1000" value="500" aria-label="Seu chute">
      <p class="lv-chute"><span data-chute></span> ${esc(t.unidade || "")}</p>
      <button type="button" class="btn fio" data-revelar>Ver a resposta</button>
      <svg class="lv-svg" data-barras viewBox="0 0 300 118" hidden></svg>`,

    etapas: (t) => `<div class="lv-etapa" data-etapa></div>
      <svg class="lv-svg" data-trilha viewBox="0 0 300 64"></svg>${legenda(t)}`,

    camadas: (t) => {
      const n = t.camadas.length, h = 48, topo = t.eixo ? 22 : 4;
      const faixas = t.camadas.map((c, k) => `<g style="animation:lv-cai .45s ${k * .25}s both">
        <rect x="0" y="${topo + k * h}" width="300" height="${h - 2}" fill="${cor}" opacity="${(.55 - k * (.45 / Math.max(1, n - 1))).toFixed(2)}"/>
        <text x="10" y="${topo + k * h + 20}" class="lv-t-forte">${esc(c.nome)}</text>
        <text x="10" y="${topo + k * h + 37}" class="lv-t">${esc(c.nota || "")}</text></g>`).join("");
      /* o eixo (o que muda de cima para baixo) fica fora das faixas: acima da primeira e abaixo da última */
      const base = topo + n * h;
      const eixo = t.eixo ? `<text x="300" y="14" text-anchor="end" class="lv-t-p">↑ ${esc(t.eixo.topo)}</text>
        <text x="300" y="${base + 12}" text-anchor="end" class="lv-t-p">↓ ${esc(t.eixo.base)}</text>` : "";
      return `<svg class="lv-svg" viewBox="0 0 300 ${base + (t.eixo ? 18 : 2)}">${faixas}${eixo}</svg>${legenda(t)}`;
    },

    pontos: (t) => `<svg class="lv-svg lv-grade" data-grade viewBox="0 0 250 250">${Array.from({ length: 100 }, (_, j) =>
        `<rect x="${(j % 10) * 25 + 4}" y="${Math.floor(j / 10) * 25 + 4}" width="17" height="17" class="lv-vazio" data-d="${j}"/>`).join("")}</svg>
      <p class="licao-pergunta"><span class="lv-num" data-num>0</span> de cada 100 ${t.frase}</p>${legenda(t)}`,

    ordenar: (t) => `<p class="rotulo">Ponha em ordem</p><p class="licao-pergunta">${t.q}</p>
      <ol class="lv-seq" data-seq></ol><div class="lv-opcoes" data-opcoes></div>
      <p class="porque" data-porque hidden>${t.porque || ""}</p>`,

    comparar: (t) => `<div class="lv-comp">
        <p class="rotulo">${esc(t.a)}</p><p class="rotulo" style="color:${cor}">${esc(t.b)}</p>
        ${t.linhas.map((l, k) => `<p class="lv-aspecto">${esc(l.aspecto)}</p>
          <p style="animation:lv-cai .4s ${k * .3}s both">${l.a}</p><p style="animation:lv-cai .4s ${k * .3 + .15}s both">${l.b}</p>`).join("")}
      </div>${legenda(t)}`,

    linha_tempo: (t) => {
      const ev = t.eventos.slice().sort((a, b) => a.ano - b.ano);
      const a0 = ev[0].ano, a1 = ev[ev.length - 1].ano || a0 + 1, alto = 44 * ev.length + 40;
      let y = 16, ys = [];
      ev.forEach((e, k) => { const prop = 16 + (e.ano - a0) / Math.max(1, a1 - a0) * (alto - 40); y = Math.max(prop, k ? ys[k - 1] + 42 : 16); ys.push(y); });
      const fim = ys[ys.length - 1] + 20;
      const ano = (a) => a < 0 ? `${-a} a.C.` : String(a);
      return `<svg class="lv-svg" viewBox="0 0 300 ${fim}"><line x1="60" y1="8" x2="60" y2="${fim - 6}" class="lv-linha lv-desenha"/>
        ${ev.map((e, k) => `<g style="animation:lv-cai .4s ${.3 + k * .35}s both"><circle cx="60" cy="${ys[k]}" r="5" fill="${cor}"/>
          <text x="50" y="${ys[k] + 4}" class="lv-t-forte" text-anchor="end">${ano(e.ano)}</text>
          <foreignObject x="72" y="${ys[k] - 10}" width="226" height="40"><p xmlns="http://www.w3.org/1999/xhtml" class="lv-evento">${e.texto}</p></foreignObject></g>`).join("")}
      </svg>${legenda(t)}`;
    },

    ciclo: (t) => {
      const n = t.etapas.length, R = 92, cx = 150, cy = 112;
      const pos = t.etapas.map((_, k) => { const a = -Math.PI / 2 + k * 2 * Math.PI / n; return [cx + R * Math.cos(a), cy + R * Math.sin(a)]; });
      const arcos = pos.map((p, k) => {
        const q = pos[(k + 1) % n], a0 = Math.atan2(p[1] - cy, p[0] - cx) + .28, a1 = Math.atan2(q[1] - cy, q[0] - cx) - .28 + (k === n - 1 ? 2 * Math.PI : 0);
        return `<path d="M${cx + R * Math.cos(a0)} ${cy + R * Math.sin(a0)} A${R} ${R} 0 0 1 ${cx + R * Math.cos(a1)} ${cy + R * Math.sin(a1)}" class="lv-linha" fill="none" marker-end="url(#lv-seta2)"/>`;
      }).join("");
      return `<svg class="lv-svg" viewBox="0 0 300 224"><defs><marker id="lv-seta2" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8Z" class="lv-cheio"/></marker></defs>
        ${arcos}${pos.map((p, k) => `<circle cx="${p[0]}" cy="${p[1]}" r="14" class="lv-no" data-no="${k}"/><text x="${p[0]}" y="${p[1] + 4}" text-anchor="middle" class="lv-t-forte">${k + 1}</text>`).join("")}
        <foreignObject x="${cx - 62}" y="${cy - 34}" width="124" height="68"><p xmlns="http://www.w3.org/1999/xhtml" class="lv-centro" data-centro></p></foreignObject>
      </svg>${legenda(t)}`;
    },

    curva: (t) => {
      /* forma qualitativa: só o desenho da tendência, sem números que o modelo pudesse inventar */
      const F = { exponencial: x => Math.pow(x, 3.2), saturacao: x => 1 - Math.exp(-4 * x), sino: x => Math.exp(-Math.pow((x - .5) / .16, 2)),
        queda: x => Math.exp(-3.5 * x), u: x => Math.pow(2 * x - 1, 2), logistica: x => 1 / (1 + Math.exp(-12 * (x - .5))), linear: x => x };
      const f = F[t.forma] || F.linear, X = (x) => 34 + x * 250, Y = (y) => 170 - y * 150;
      const d = Array.from({ length: 61 }, (_, k) => `${k ? "L" : "M"}${X(k / 60).toFixed(1)} ${Y(f(k / 60)).toFixed(1)}`).join(" ");
      const m = t.marco ? `<line x1="${X(t.marco.x)}" y1="18" x2="${X(t.marco.x)}" y2="170" class="lv-linha" stroke-dasharray="3 3"/><text x="${X(t.marco.x) + 4}" y="30" class="lv-t-p">${esc(t.marco.rotulo)}</text>` : "";
      return `<svg class="lv-svg" viewBox="0 0 300 206"><line x1="34" y1="170" x2="290" y2="170" class="lv-linha"/><line x1="34" y1="14" x2="34" y2="170" class="lv-linha"/>
        ${m}<path d="${d}" fill="none" stroke="${cor}" stroke-width="3" class="lv-desenha"/>
        <text x="290" y="188" text-anchor="end" class="lv-t">${esc(t.eixo_x)}</text><text x="26" y="12" class="lv-t">${esc(t.eixo_y)}</text>
        <text x="34" y="202" class="lv-t-p">forma da tendência, sem escala</text></svg>${legenda(t)}`;
    }
  };

  /* ── comportamento de cada tela depois de desenhada ─────────────── */
  const anima = {
    pergunta(t, corpo) {
      travar("Responda para continuar");
      corpo.querySelectorAll(".alt").forEach(b => b.addEventListener("click", () => {
        if (!seguir.disabled) return;
        const j = +b.dataset.j, ok = j === t.correta;
        if (ok) acertos++;
        corpo.querySelectorAll(".alt").forEach(x => { x.disabled = true; if (+x.dataset.j === t.correta) x.classList.add("certa"); else if (x === b) x.classList.add("errada"); });
        corpo.querySelector("[data-porque]").hidden = false;
        if (navigator.vibrate) navigator.vibrate(ok ? 12 : [20, 40, 20]);
        liberar(); seguir.focus();
      }));
    },
    estimar(t, corpo) {
      travar("Dê seu chute");
      const log = t.escala === "log", lo = +t.min, hi = +t.max;
      const valor = (p) => log ? Math.pow(10, Math.log10(lo) + p / 1000 * (Math.log10(hi) - Math.log10(lo))) : lo + p / 1000 * (hi - lo);
      const faixa = corpo.querySelector("[data-faixa]"), chute = corpo.querySelector("[data-chute]");
      const mostra = () => { chute.textContent = num(valor(+faixa.value)); };
      faixa.addEventListener("input", mostra); mostra();
      corpo.querySelector("[data-revelar]").addEventListener("click", (ev) => {
        ev.target.remove(); faixa.disabled = true;
        const pos = (v) => 10 + 280 * (log ? (Math.log10(v) - Math.log10(lo)) / (Math.log10(hi) - Math.log10(lo)) : (v - lo) / (hi - lo));
        const svg = corpo.querySelector("[data-barras]"); svg.removeAttribute("hidden");   /* SVG não tem a propriedade .hidden */
        svg.innerHTML = `<line x1="10" y1="96" x2="290" y2="96" class="lv-linha"/>
          <text x="10" y="112" class="lv-t-p">${num(lo)}</text><text x="290" y="112" text-anchor="end" class="lv-t-p">${num(hi)}</text>
          <rect x="10" y="22" height="18" width="0" fill="${cor}"><animate attributeName="width" to="${Math.max(2, pos(+t.resposta) - 10)}" dur=".9s" fill="freeze"/></rect>
          <text x="10" y="16" class="lv-t-forte">resposta: ${num(t.resposta)} ${esc(t.unidade || "")}</text>
          <rect x="10" y="62" height="18" width="0" fill="none" class="lv-chute-barra"><animate attributeName="width" to="${Math.max(2, pos(valor(+faixa.value)) - 10)}" dur=".9s" fill="freeze"/></rect>
          <text x="10" y="56" class="lv-t">seu chute</text>`;
        if (t.legenda) svg.insertAdjacentHTML("afterend", `<p class="lv-legenda">${t.legenda}</p>`);
        liberar();
      });
    },
    etapas(t, corpo) {
      const n = t.etapas.length, x = (k) => 20 + k * (260 / Math.max(1, n - 1));
      const trilha = corpo.querySelector("[data-trilha]");
      trilha.innerHTML = `<line x1="20" y1="22" x2="280" y2="22" class="lv-linha"/>` + t.etapas.map((e, k) =>
        `<circle cx="${x(k)}" cy="22" r="9" class="lv-no" data-no="${k}" style="cursor:pointer"/><text x="${x(k)}" y="26" text-anchor="middle" class="lv-t-forte" style="pointer-events:none">${k + 1}</text>`).join("");
      let k = 0;
      const mostra = () => {
        const e = t.etapas[k];
        corpo.querySelector("[data-etapa]").innerHTML = `<p class="rotulo">Etapa ${k + 1} de ${n}</p><p class="lv-etapa-nome" style="animation:lv-cai .35s both">${e.nome}</p><p class="lv-etapa-texto" style="animation:lv-cai .35s .1s both">${e.texto || ""}</p>`;
        trilha.querySelectorAll("[data-no]").forEach(c => c.classList.toggle("lv-no-ativo", +c.dataset.no <= k));
      };
      trilha.querySelectorAll("[data-no]").forEach(c => c.addEventListener("click", () => { k = +c.dataset.no; mostra(); }));
      mostra();
      timers.push(setInterval(() => { k = (k + 1) % n; mostra(); }, 2600));   /* roda sozinho, como um gif */
    },
    pontos(t, corpo) {
      const alvo = Math.round(+t.valor); let c = 0;
      const tm = setInterval(() => {
        if (c >= alvo) return clearInterval(tm);
        const r = corpo.querySelector(`[data-d="${c}"]`); if (r) { r.classList.remove("lv-vazio"); r.style.fill = cor; r.style.stroke = cor; }
        c++; corpo.querySelector("[data-num]").textContent = c;
      }, 22);
      timers.push(tm);
    },
    ordenar(t, corpo) {
      travar("Ponha tudo em ordem");
      const certo = t.itens, emb = certo.map((x, k) => [x, (k * 7 + 3) % certo.length]).sort((a, b) => a[1] - b[1]).map(x => x[0]);
      if (emb.every((x, k) => x === certo[k])) emb.reverse();
      const seq = [];
      corpo.querySelector("[data-opcoes]").innerHTML = emb.map((x, k) => `<button type="button" class="alt" data-k="${k}">${x}</button>`).join("");
      corpo.querySelectorAll("[data-opcoes] .alt").forEach(b => b.addEventListener("click", () => {
        if (b.disabled) return;
        b.disabled = true; b.style.opacity = ".35"; seq.push(emb[+b.dataset.k]);
        corpo.querySelector("[data-seq]").innerHTML = seq.map((x, j) => `<li class="${x === certo[j] ? "lv-ok" : "lv-erro"}">${x}</li>`).join("");
        if (seq.length === certo.length) {
          const tudo = seq.every((x, j) => x === certo[j]);
          if (tudo) acertos++;
          const p = corpo.querySelector("[data-porque]");
          p.innerHTML = (tudo ? "" : `A ordem é: ${certo.join(" → ")}. `) + (t.porque || ""); p.hidden = false;
          liberar();
        }
      }));
    },
    ciclo(t, corpo) {
      let k = 0;
      const mostra = () => {
        corpo.querySelector("[data-centro]").textContent = t.etapas[k];
        corpo.querySelectorAll("[data-no]").forEach(c => c.classList.toggle("lv-no-ativo", +c.dataset.no === k));
        k = (k + 1) % t.etapas.length;
      };
      mostra(); timers.push(setInterval(mostra, 1800));
    }
  };

  function pintar() {
    limpar();
    const t = telas[i], corpo = $("[data-corpo]");
    $("[data-conta]").textContent = i === 0 ? doc.termo : `${i} / ${telas.length - 1}`;
    raiz.querySelectorAll("[data-regua] i").forEach((x, k) => x.classList.toggle("feita", k <= i));
    corpo.innerHTML = (desenha[t.tipo] ? desenha[t.tipo](t) : "") + carimbo(t);
    liberar(i === 0 ? "Começar" : undefined);
    if (anima[t.tipo]) anima[t.tipo](t, corpo);
    const c = corpo.querySelector("[data-carimbo]");
    if (c) c.addEventListener("click", () => {
      const r = corpo.querySelector("[data-ref]"); if (!r) return;
      r.hidden = !r.hidden; c.setAttribute("aria-expanded", String(!r.hidden));
    });
    window.scrollTo(0, 0);
  }

  seguir.addEventListener("click", () => {
    if (i < telas.length - 1) { i++; pintar(); return; }
    limpar();
    opts.aoTerminar && opts.aoTerminar({ acertos, total: L.telas.filter(t => VALE_PONTO.includes(t.tipo)).length });
  });
  pintar();
}

window.Licao = Licao;
window.minutosLicao = minutosLicao;
})();
