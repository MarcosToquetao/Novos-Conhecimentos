/* licao.js: toca uma lição, uma tela por vez. Usado pelo app e pela tela de revisão
   (pipeline/revisar.html), para o editor ver exatamente o que o leitor vai ver.

   Licao(raiz, doc, { aoFechar(), aoTerminar({ acertos, total }) })
   doc: o documento do conceito (dados/c/<id>.json), com doc.licao e doc.fontes */
(function () {
"use strict";

const ROTULO = { consenso: "Consenso", emergente: "Emergente" };
const palavras = (html) => html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;

/* minutos estimados: leitura calma no celular + tempo de pensar em cada pergunta */
function minutosLicao(L) {
  const p = [L.gancho, ...L.telas.map(t => t.html || [t.q, ...(t.alts || []), t.porque].join(" ")), L.fecho].join(" ");
  const perguntas = L.telas.filter(t => t.tipo === "pergunta").length;
  return Math.max(2, Math.round(palavras(p) / 150 + perguntas * 0.4));
}

function Licao(raiz, doc, opts) {
  const L = doc.licao;
  const telas = [{ tipo: "gancho" }, ...L.telas];
  let i = 0, acertos = 0, respondida = false;

  raiz.innerHTML = `
    <div class="licao">
      <div class="licao-topo"><button type="button" data-fechar aria-label="Fechar a lição">✕</button><span data-conta></span></div>
      <div class="regua" data-regua>${telas.map(() => "<i></i>").join("")}</div>
      <div class="licao-corpo" data-corpo aria-live="polite"></div>
    </div>
    <div class="rodape-acao"><div class="envelope"><button type="button" class="btn" data-seguir>Começar</button></div></div>`;
  const $ = (s) => raiz.querySelector(s);
  const seguir = $("[data-seguir]");
  $("[data-fechar]").addEventListener("click", () => opts.aoFechar && opts.aoFechar());

  function carimbo(t) {
    if (!t.marca) return "";
    const f = (doc.fontes || []).find(x => x.n === t.fonte);
    return `<button type="button" class="carimbo ${t.marca}" data-carimbo aria-expanded="false" style="justify-self:start">${ROTULO[t.marca] || t.marca}${f ? `<span class="n">fonte ${f.n}</span>` : ""}</button>
            ${f ? `<p class="licao-ref" data-ref hidden>${f.ref}${f.url ? ` <a href="${f.url}" target="_blank" rel="noopener">abrir</a>` : ""}</p>` : ""}`;
  }

  function pintar() {
    const t = telas[i], corpo = $("[data-corpo]");
    respondida = false;
    $("[data-conta]").textContent = i === 0 ? doc.termo : `${i} / ${telas.length - 1}`;
    raiz.querySelectorAll("[data-regua] i").forEach((x, k) => x.classList.toggle("feita", k <= i));

    if (t.tipo === "gancho") {
      corpo.innerHTML = `<p class="rotulo">${doc.area}</p><p class="licao-gancho">${L.gancho}</p>`;
      seguir.textContent = "Começar"; seguir.disabled = false;
    } else if (t.tipo === "texto") {
      corpo.innerHTML = `<div class="leitura">${t.html}</div>${carimbo(t)}`;
      seguir.textContent = i === telas.length - 1 ? "Terminar" : "Continuar"; seguir.disabled = false;
      const c = corpo.querySelector("[data-carimbo]");
      if (c) c.addEventListener("click", () => {
        const r = corpo.querySelector("[data-ref]"); if (!r) return;
        r.hidden = !r.hidden; c.setAttribute("aria-expanded", String(!r.hidden));
      });
    } else if (t.tipo === "figura") {
      corpo.innerHTML = `<figure class="figura licao-figura">${t.svg || ""}<figcaption>${t.legenda || ""}</figcaption></figure>`;
      seguir.textContent = "Continuar"; seguir.disabled = false;
    } else if (t.tipo === "pergunta") {
      corpo.innerHTML = `<p class="rotulo">Pergunta</p><p class="licao-pergunta">${t.q}</p>
        <div class="alts">${t.alts.map((a, j) => `<button type="button" class="alt" data-j="${j}"><span class="letra">${"ABC"[j]}</span><span>${a}</span></button>`).join("")}</div>
        <p class="porque" data-porque hidden>${t.porque}</p>`;
      seguir.textContent = "Responda para continuar"; seguir.disabled = true;
      corpo.querySelectorAll(".alt").forEach(b => b.addEventListener("click", () => {
        if (respondida) return;
        respondida = true;
        const j = +b.dataset.j, ok = j === t.correta;
        if (ok) acertos++;
        corpo.querySelectorAll(".alt").forEach(x => {
          x.disabled = true;
          if (+x.dataset.j === t.correta) x.classList.add("certa");
          else if (x === b) x.classList.add("errada");
        });
        corpo.querySelector("[data-porque]").hidden = false;
        if (navigator.vibrate) navigator.vibrate(ok ? 12 : [20, 40, 20]);
        seguir.textContent = i === telas.length - 1 ? "Terminar" : "Continuar"; seguir.disabled = false;
        seguir.focus();
      }));
    }
    window.scrollTo(0, 0);
  }

  seguir.addEventListener("click", () => {
    if (i < telas.length - 1) { i++; pintar(); return; }
    opts.aoTerminar && opts.aoTerminar({ acertos, total: L.telas.filter(t => t.tipo === "pergunta").length });
  });
  pintar();
}

window.Licao = Licao;
window.minutosLicao = minutosLicao;
})();
