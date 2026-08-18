/* =========================================================================
   app.js — motor do Novos Conhecimentos
   Sorteio · cronômetro · leitor em camadas · prova · revisão espaçada
   Todo o estado vive em localStorage, neste aparelho.
   ========================================================================= */
(function () {
"use strict";

/* ── Estado persistente ────────────────────────────────────────────── */
const CHAVE = "nc_estado_v2";
const PADRAO = { tema: "claro", tempoPreferido: 30, sessoes: [], provas: [], revisao: {} };

function carregar() {
  try { return Object.assign({}, PADRAO, JSON.parse(localStorage.getItem(CHAVE) || "{}")); }
  catch (e) { return Object.assign({}, PADRAO); }
}
function salvar() {
  try { localStorage.setItem(CHAVE, JSON.stringify(E)); } catch (e) { /* modo privado */ }
}
let E = carregar();

/* ── Sessão em curso (memória) ─────────────────────────────────────── */
let S = { id: null, tempoMin: 30, fimEm: 0, tick: null, camadas: [], concluida: false, wake: null, extras: 0 };

/* ── Atalhos ───────────────────────────────────────────────────────── */
const $  = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const CAMADAS = ["nucleo", "aprofundamento", "extensao"];
const ROTULO_CAMADA = { nucleo: "Núcleo", aprofundamento: "Aprofundamento", extensao: "Extensão" };
const ROTULO_MARCA = {
  consenso: "Consenso estabelecido",
  emergente: "Abordagem emergente",
  controverso: "Ponto controverso",
  especulacao: "Especulação / hipótese"
};

function prontos() { return CATALOGO.filter(c => CONTEUDOS[c.id]); }
function doCatalogo(id) { return CATALOGO.find(c => c.id === id); }
function agora() { return Date.now(); }
const DIA = 86400000;

/* ── Navegação entre telas ─────────────────────────────────────────── */
function ir(idTela) {
  $$(".tela").forEach(t => t.classList.toggle("ativa", t.id === idTela));
  const leitura = idTela === "tela-leitura";
  $("#barra").classList.toggle("oculto", leitura);
  $("#crono-barra").classList.toggle("oculto", !leitura || S.concluida);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

/* ── Tema ──────────────────────────────────────────────────────────── */
function aplicarTema() {
  document.documentElement.setAttribute("data-tema", E.tema);
  const cor = E.tema === "escuro" ? "#161513" : "#FBF9F5";
  const m = document.querySelector('meta[name="theme-color"]');
  if (m) m.setAttribute("content", cor);
}
$("#btn-tema").addEventListener("click", () => {
  E.tema = E.tema === "escuro" ? "claro" : "escuro"; salvar(); aplicarTema();
});

/* ── Seleção de tempo ──────────────────────────────────────────────── */
function marcarTempo(min) {
  E.tempoPreferido = min; salvar();
  $$("#tempos .tempo-op").forEach(b => b.setAttribute("aria-pressed", String(+b.dataset.min === min)));
}
$$("#tempos .tempo-op").forEach(b => b.addEventListener("click", () => marcarTempo(+b.dataset.min)));

/* ── Sorteio com anti-repetição e prioridade de revisão ────────────── */
function pesoDe(id) {
  const ultimaSessao = E.sessoes.filter(s => s.conceito === id).sort((a, b) => b.iniciadoEm - a.iniciadoEm)[0];
  if (!ultimaSessao) return 100;                             // inédito: prioridade máxima
  const rev = E.revisao[id];
  const dias = (agora() - ultimaSessao.iniciadoEm) / DIA;
  if (rev && rev.proxima && agora() >= rev.proxima) return 60 + Math.min(dias, 40);
  if (dias < 3) return 0.5;                                  // acabou de ver: quase nunca
  return Math.min(dias, 30);
}
function sortear() {
  const cands = prontos();
  if (!cands.length) return null;
  const pesos = cands.map(c => pesoDe(c.id));
  const soma = pesos.reduce((a, b) => a + b, 0);
  let r = Math.random() * soma;
  for (let i = 0; i < cands.length; i++) { r -= pesos[i]; if (r <= 0) return cands[i]; }
  return cands[cands.length - 1];
}

let sorteadoAtual = null;

function animarSorteio(escolhido) {
  const cands = prontos();
  const roleta = $("#roleta");
  $("#roleta-caixa").classList.remove("oculto");
  $("#sorteado").classList.add("oculto");
  $("#rodape-sorteio").classList.add("oculto");
  ir("tela-sorteio");

  let i = 0, atraso = 55;
  (function girar() {
    roleta.textContent = cands[Math.floor(Math.random() * cands.length)].termo;
    i++;
    atraso *= 1.14;
    if (i < 22) setTimeout(girar, atraso);
    else revelar(escolhido);
  })();
}

function revelar(c) {
  sorteadoAtual = c;
  const d = CONTEUDOS[c.id];
  $("#roleta-caixa").classList.add("oculto");
  $("#s-area").textContent = c.area;
  $("#s-termo").textContent = c.termo;
  $("#s-gancho").textContent = c.gancho;

  const vezes = E.sessoes.filter(s => s.conceito === c.id).length;
  const pills = [
    `Dificuldade ${"●".repeat(c.dificuldade)}${"○".repeat(5 - c.dificuldade)}`,
    `${E.tempoPreferido} min`,
    vezes ? `${vezes}ª revisita` : "Inédito"
  ];
  if (d && d.prerequisitos && d.prerequisitos.length) pills.push(`${d.prerequisitos.length} pré-requisito(s)`);
  $("#s-pilulas").innerHTML = pills.map(p => `<span class="pilula">${p}</span>`).join("");

  $("#sorteado").classList.remove("oculto");
  $("#rodape-sorteio").classList.remove("oculto");
  if (navigator.vibrate) navigator.vibrate([14, 60, 14]);
}

$("#btn-sortear").addEventListener("click", () => { const c = sortear(); if (c) animarSorteio(c); });
$("#btn-resortear").addEventListener("click", () => { const c = sortear(); if (c) animarSorteio(c); });

/* ── Montagem do documento ─────────────────────────────────────────── */
function camadasPara(min) {
  if (min <= 15) return ["nucleo"];
  if (min <= 30) return ["nucleo", "aprofundamento"];
  return CAMADAS.slice();
}

/* Estimativa honesta de tempo: leitura atenta de texto conceitual denso
   roda por volta de 110 palavras por minuto, bem abaixo da leitura corrida.
   Calculado do próprio texto, para não depender de um número escrito à mão. */
function minutosDeLeitura(html) {
  const palavras = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  const figuras = (html.match(/\[\[FIG:/g) || []).length;
  const formulas = (html.match(/class="formula"/g) || []).length;
  return Math.max(2, Math.round(palavras / 110 + figuras * 1.5 + formulas * 0.8));
}

/* Substitui marcadores [[FIG:chave]] pelos SVGs gerados em figuras.js */
function comFiguras(html) {
  return html.replace(/\[\[FIG:([a-z0-9\-]+)\]\]/g, (m, k) =>
    (typeof FIGURAS !== "undefined" && FIGURAS[k]) ? FIGURAS[k] : "");
}

function htmlDocumento(c, camadas, comFontes) {
  const d = CONTEUDOS[c.id];
  let h = "";

  h += `<p class="chapeu">${c.area}</p>`;
  h += `<h1>${d.termo}</h1>`;
  h += `<p class="subtitulo">${d.subtitulo}</p>`;

  if ((d.prerequisitos && d.prerequisitos.length) || (d.conexoes && d.conexoes.length)) {
    h += `<div class="bloco-meta">`;
    if (d.prerequisitos && d.prerequisitos.length) {
      h += `<h4>O que ajuda saber antes</h4><ul>` + d.prerequisitos.map(p => `<li>${p}</li>`).join("") + `</ul>`;
    }
    if (d.conexoes && d.conexoes.length) {
      h += `<h4 style="margin-top:.9rem">Onde isso se conecta</h4><ul>` +
           d.conexoes.map(x => `<li><b>${x.termo}:</b> ${x.relacao}</li>`).join("") + `</ul>`;
    }
    h += `</div>`;
  }

  camadas.forEach((k, i) => {
    const cam = d.camadas[k];
    if (!cam) return;
    h += `<section class="camada">
            <p class="camada-rot"><span>${String(i + 1).padStart(2, "0")}</span> ${ROTULO_CAMADA[k]} · ~${minutosDeLeitura(cam.html)} min de leitura atenta</p>
            <div class="leitura">${comFiguras(cam.html)}</div>
          </section>`;
  });

  /* Síntese final: o que precisa sobreviver à leitura. Fecha o documento
     antes das fontes, porque é a última coisa que fica na cabeça. */
  if (d.sintese) {
    const s = d.sintese;
    h += `<section class="sintese"><p class="sintese-rot">Síntese</p>`;
    if (s.definicoes && s.definicoes.length) {
      h += `<h3>Conceitos-chave</h3><dl class="sintese-defs">` +
        s.definicoes.map(x => `<dt>${x.termo}</dt><dd>${x.def}</dd>`).join("") + `</dl>`;
    }
    if (s.lembrar && s.lembrar.length) {
      h += `<h3>O que precisa ser lembrado</h3><ul class="sintese-lista">` +
        s.lembrar.map(x => `<li>${x}</li>`).join("") + `</ul>`;
    }
    if (s.confusoes && s.confusoes.length) {
      h += `<h3>Onde a intuição erra</h3><ul class="sintese-conf">` +
        s.confusoes.map(x => `<li><b>${x.erro}</b><span>${x.correcao}</span></li>`).join("") + `</ul>`;
    }
    if (s.numeros && s.numeros.length) {
      h += `<h3>Números e nomes que ancoram</h3><ul class="sintese-lista">` +
        s.numeros.map(x => `<li>${x}</li>`).join("") + `</ul>`;
    }
    h += `</section>`;
  }

  if (comFontes && d.fontes && d.fontes.length) {
    h += `<section class="camada"><p class="camada-rot"><span>◆</span> Fontes</p>
          <ol class="fontes">` +
      d.fontes.map(f => `<li id="f${f.n}"><span class="tipo">${f.tipo}</span>${f.ref}` +
        (f.url ? ` <a href="${f.url}" target="_blank" rel="noopener">↗</a>` : "") + `</li>`).join("") +
      `</ol></section>`;
  }
  return h;
}

/* ── Cronômetro ────────────────────────────────────────────────────── */
function fmt(ms) {
  const s = Math.max(0, Math.round(ms / 1000));
  return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
}
function tick() {
  const resta = S.fimEm - agora();
  const total = (S.tempoMin + S.extras) * 60000;
  $("#crono-num").textContent = fmt(resta);
  $("#crono-num").classList.toggle("alerta", resta <= 120000);
  $("#progresso-i").style.width = Math.min(100, 100 * (1 - resta / total)) + "%";
  if (resta <= 0) encerrarTempo();
}
async function segurarTela() {
  try { if ("wakeLock" in navigator) S.wake = await navigator.wakeLock.request("screen"); } catch (e) {}
}
function soltarTela() { try { if (S.wake) { S.wake.release(); S.wake = null; } } catch (e) {} }

function comecar() {
  const c = sorteadoAtual; if (!c) return;
  S = {
    id: "s" + agora(), conceito: c.id, tempoMin: E.tempoPreferido,
    fimEm: agora() + E.tempoPreferido * 60000, tick: null,
    camadas: camadasPara(E.tempoPreferido), concluida: false, wake: null, extras: 0
  };
  E.sessoes.push({ id: S.id, conceito: c.id, termo: c.termo, minutos: S.tempoMin, iniciadoEm: agora(), leuAte: S.camadas[S.camadas.length - 1] });
  salvar();

  $("#doc-envelope").innerHTML = htmlDocumento(c, S.camadas, false);
  $("#crono-tema").textContent = c.termo;
  $("#crono-barra").classList.remove("oculto");
  $("#rodape-leitura").classList.remove("oculto");
  tick();
  S.tick = setInterval(tick, 1000);
  segurarTela();
  ir("tela-leitura");
}
$("#btn-comecar").addEventListener("click", comecar);

function encerrarTempo() {
  if (S.concluida) return;
  S.concluida = true;
  clearInterval(S.tick); S.tick = null;
  soltarTela();
  if (navigator.vibrate) navigator.vibrate([180, 90, 180]);
  const c = doCatalogo(S.conceito);
  $("#fim-termo").textContent = c ? c.termo : "";
  $("#crono-barra").classList.add("oculto");
  ir("tela-fim");
}

$("#btn-abandonar").addEventListener("click", () => {
  if (!confirm("Encerrar esta sessão? O tempo restante será descartado.")) return;
  clearInterval(S.tick); soltarTela(); S.concluida = true;
  ir("tela-inicio"); pintarInicio();
});
$("#btn-ir-prova").addEventListener("click", () => {
  if (!confirm("Ir para a prova agora? O documento fica fechado durante a prova.")) return;
  clearInterval(S.tick); soltarTela(); S.concluida = true;
  $("#crono-barra").classList.add("oculto");
  abrirProva();
});
$("#btn-fim-prova").addEventListener("click", abrirProva);
$("#btn-fim-sair").addEventListener("click", () => { ir("tela-inicio"); pintarInicio(); });
$("#btn-fim-mais5").addEventListener("click", () => {
  S.concluida = false; S.extras += 5; S.fimEm = agora() + 5 * 60000;
  $("#crono-barra").classList.remove("oculto");
  tick(); S.tick = setInterval(tick, 1000); segurarTela();
  ir("tela-leitura");
});

document.addEventListener("visibilitychange", () => { if (!document.hidden && S.tick) tick(); });

/* ── Prova ─────────────────────────────────────────────────────────── */
let provaAtual = { questoes: [], respostas: [], corrigida: false };

function embaralhar(a) { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }

function abrirProva() {
  const c = doCatalogo(S.conceito); const d = CONTEUDOS[S.conceito];
  const elegiveis = d.prova.filter(q => S.camadas.includes(q.camada));
  provaAtual = { questoes: embaralhar(elegiveis), respostas: new Array(elegiveis.length).fill(null), corrigida: false };
  $("#prova-termo").textContent = c.termo;
  pintarProva();
  $("#btn-corrigir").disabled = true;
  ir("tela-prova");
}

function pintarProva() {
  $("#prova-questoes").innerHTML = provaAtual.questoes.map((q, i) => `
    <div class="questao">
      <p class="questao-num">Questão ${i + 1} de ${provaAtual.questoes.length}</p>
      <p class="questao-enun">${q.q}</p>
      <div class="alts">${q.alts.map((a, j) => `
        <button class="alt" data-q="${i}" data-a="${j}" aria-pressed="false">
          <span class="letra">${"ABCDE"[j]}</span><span>${a}</span>
        </button>`).join("")}</div>
    </div>`).join("");

  $$("#prova-questoes .alt").forEach(b => b.addEventListener("click", () => {
    const qi = +b.dataset.q, ai = +b.dataset.a;
    provaAtual.respostas[qi] = ai;
    $$(`#prova-questoes .alt[data-q="${qi}"]`).forEach(x => x.setAttribute("aria-pressed", String(+x.dataset.a === ai)));
    $("#btn-corrigir").disabled = provaAtual.respostas.some(r => r === null);
  }));
}

$("#btn-corrigir").addEventListener("click", corrigir);

function corrigir() {
  const qs = provaAtual.questoes;
  const acertos = qs.reduce((n, q, i) => n + (provaAtual.respostas[i] === q.correta ? 1 : 0), 0);
  const pct = Math.round(100 * acertos / qs.length);

  E.provas.push({ conceito: S.conceito, quando: agora(), acertos, total: qs.length, pct });
  agendarRevisao(S.conceito, pct);
  salvar();

  $("#r-nota").textContent = acertos + "/" + qs.length;
  $("#r-legenda").textContent =
    pct >= 85 ? "Fixou. Vale marcar a revisão para daqui a uma semana." :
    pct >= 60 ? "Base razoável, com lacunas específicas. Veja a correção e releia só os trechos que falharam." :
                "A leitura não fixou. Isso é informação útil, não fracasso: releia com as questões em mente e refaça.";

  $("#r-correcao").innerHTML = qs.map((q, i) => {
    const r = provaAtual.respostas[i], ok = r === q.correta;
    return `<div class="questao">
      <p class="questao-num">Questão ${i + 1} · ${ok ? "acerto" : "erro"}</p>
      <p class="questao-enun">${q.q}</p>
      <div class="alts">${q.alts.map((a, j) => {
        let cls = "alt";
        if (j === q.correta) cls += " certa";
        else if (j === r) cls += " errada";
        return `<button class="${cls}" disabled><span class="letra">${"ABCDE"[j]}</span><span>${a}</span></button>`;
      }).join("")}</div>
      <div class="porque">${q.porque}</div>
    </div>`;
  }).join("");

  const d = CONTEUDOS[S.conceito];
  $("#r-flashcards").innerHTML = (d.flashcards || []).map((f, i) => `
    <div class="card-fc" data-i="${i}">
      <div class="frente">${f.f}</div>
      <div class="verso">${f.v}</div>
      <div class="dica">Toque para revelar</div>
    </div>`).join("");
  $$("#r-flashcards .card-fc").forEach(el => el.addEventListener("click", () => el.classList.toggle("aberto")));

  const tents = E.provas.filter(p => p.conceito === S.conceito);
  if (tents.length > 1) {
    $("#r-tentativas").classList.remove("oculto");
    $("#r-tentativas-lista").innerHTML = tents.map((t, i) =>
      `<div class="item-lista"><span class="termo">${i + 1}ª tentativa: ${t.acertos}/${t.total}</span>
       <div class="meta">${new Date(t.quando).toLocaleString("pt-BR")}</div></div>`).join("");
  } else { $("#r-tentativas").classList.add("oculto"); }

  ir("tela-resultado");
}

function agendarRevisao(id, pct) {
  const r = E.revisao[id] || { nivel: 0 };
  r.nivel = pct >= 70 ? Math.min(r.nivel + 1, 4) : 0;
  const escala = [1, 3, 7, 21, 60];
  r.ultima = agora();
  r.proxima = agora() + escala[r.nivel] * DIA;
  E.revisao[id] = r;
}

$("#btn-reler").addEventListener("click", () => {
  const c = doCatalogo(S.conceito);
  $("#doc-envelope").innerHTML = htmlDocumento(c, S.camadas, true);
  $("#crono-barra").classList.add("oculto");
  $("#rodape-leitura").classList.add("oculto");
  ir("tela-leitura");
  const volta = document.createElement("div");
  volta.className = "rodape-acao";
  volta.innerHTML = `<div class="envelope"><button class="btn primario" id="btn-voltar-res">Voltar ao resultado</button></div>`;
  $("#tela-leitura").appendChild(volta);
  $("#btn-voltar-res").addEventListener("click", () => {
    volta.remove(); $("#rodape-leitura").classList.remove("oculto"); ir("tela-resultado");
  });
});
$("#btn-refazer").addEventListener("click", abrirProva);
$("#btn-encerrar").addEventListener("click", () => { ir("tela-inicio"); pintarInicio(); });

/* ── Exportações ───────────────────────────────────────────────────── */
function baixar(nome, texto, mime) {
  const b = new Blob([texto], { type: mime || "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(b); a.download = nome;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
function limparHtml(s) { const d = document.createElement("div"); d.innerHTML = s; return (d.textContent || "").replace(/\s+/g, " ").trim(); }

$("#btn-exportar-fc").addEventListener("click", () => {
  const d = CONTEUDOS[S.conceito];
  const linhas = (d.flashcards || []).map(f =>
    `"${limparHtml(f.f).replace(/"/g, '""')}";"${limparHtml(f.v).replace(/"/g, '""')}";"${d.termo}"`);
  baixar(`flashcards-${S.conceito}.csv`, "﻿" + linhas.join("\n"), "text/csv;charset=utf-8");
});
$("#btn-exportar-prog").addEventListener("click", () => {
  baixar(`novos-conhecimentos-progresso-${new Date().toISOString().slice(0, 10)}.json`,
    JSON.stringify(E, null, 2), "application/json");
});
$("#btn-importar-prog").addEventListener("click", () => $("#arquivo-import").click());
$("#arquivo-import").addEventListener("change", (ev) => {
  const f = ev.target.files[0]; if (!f) return;
  const fr = new FileReader();
  fr.onload = () => {
    try {
      const dados = JSON.parse(fr.result);
      E = Object.assign({}, PADRAO, dados); salvar(); aplicarTema(); pintarInicio(); pintarHistorico();
      alert("Progresso importado.");
    } catch (e) { alert("Arquivo inválido."); }
  };
  fr.readAsText(f);
});
$("#btn-limpar").addEventListener("click", () => {
  if (!confirm("Apagar todo o histórico deste aparelho? Não há como desfazer.")) return;
  E = Object.assign({}, PADRAO, { tema: E.tema }); salvar(); pintarInicio(); pintarHistorico();
});

/* ── Telas auxiliares ──────────────────────────────────────────────── */
function pintarInicio() {
  const totalMin = E.sessoes.reduce((n, s) => n + s.minutos, 0);
  $("#e-sessoes").textContent = E.sessoes.length;
  $("#e-tempo").textContent = totalMin >= 60 ? (totalMin / 60).toFixed(1).replace(".", ",") + "h" : totalMin + "min";
  $("#e-media").textContent = E.provas.length
    ? Math.round(E.provas.reduce((n, p) => n + p.pct, 0) / E.provas.length) + "%" : "—";

  const dev = Object.entries(E.revisao)
    .filter(([id, r]) => r.proxima && agora() >= r.proxima && CONTEUDOS[id])
    .sort((a, b) => a[1].proxima - b[1].proxima);
  $("#painel-revisao").classList.toggle("oculto", dev.length === 0);
  $("#lista-revisao").innerHTML = dev.map(([id, r]) => {
    const c = doCatalogo(id);
    const dias = Math.floor((agora() - r.ultima) / DIA);
    return `<div class="item-lista"><span class="termo">${c.termo}</span>
            <div class="meta"><span>${c.area}</span><span>·</span><span>estudado há ${dias} dia(s)</span></div></div>`;
  }).join("");
}

function pintarCatalogo(filtro) {
  const f = (filtro || "").trim().toLowerCase();
  const lista = CATALOGO.filter(c => !f || (c.termo + " " + c.area + " " + c.gancho).toLowerCase().includes(f));
  const nProntos = prontos().length;
  $("#cat-resumo").textContent = `${CATALOGO.length} conceitos no reservatório · ${nProntos} com documento escrito. O sorteio só cai nos que já têm documento.`;
  $("#cat-lista").innerHTML = lista.length ? lista.map(c => `
    <div class="item-lista">
      <span class="termo">${c.termo}</span>
      <div class="meta">
        <span>${c.area}</span><span>·</span>
        <span>dificuldade ${c.dificuldade}/5</span>
        ${CONTEUDOS[c.id] ? '<span>·</span><span class="tag-pronto">documento pronto</span>' : ""}
      </div>
      <div class="g">${c.gancho}</div>
    </div>`).join("") : `<p class="vazio">Nada encontrado.</p>`;
}

function pintarHistorico() {
  if (!E.sessoes.length) { $("#hist-lista").innerHTML = `<p class="vazio">Nenhuma sessão ainda.</p>`; return; }
  $("#hist-lista").innerHTML = E.sessoes.slice().reverse().map(s => {
    const ps = E.provas.filter(p => p.conceito === s.conceito);
    const melhor = ps.length ? Math.max(...ps.map(p => p.pct)) : null;
    return `<div class="item-lista">
      <span class="termo">${s.termo}</span>
      <div class="meta">
        <span>${new Date(s.iniciadoEm).toLocaleDateString("pt-BR")}</span><span>·</span>
        <span>${s.minutos} min</span><span>·</span>
        <span>${ROTULO_CAMADA[s.leuAte]}</span>
        ${melhor !== null ? `<span>·</span><span class="tag-pronto">melhor prova ${melhor}%</span>` : ""}
      </div></div>`;
  }).join("");
}

$("#btn-catalogo").addEventListener("click", () => { pintarCatalogo($("#cat-busca").value); ir("tela-catalogo"); });
$("#btn-ver-catalogo").addEventListener("click", () => { pintarCatalogo(""); ir("tela-catalogo"); });
$("#btn-historico").addEventListener("click", () => { pintarHistorico(); ir("tela-historico"); });
$("#btn-ver-historico").addEventListener("click", () => { pintarHistorico(); ir("tela-historico"); });
$("#btn-cat-voltar").addEventListener("click", () => ir("tela-inicio"));
$("#btn-hist-voltar").addEventListener("click", () => ir("tela-inicio"));
$("#cat-busca").addEventListener("input", (e) => pintarCatalogo(e.target.value));

/* ── Início ────────────────────────────────────────────────────────── */
aplicarTema();
marcarTempo(E.tempoPreferido);
pintarInicio();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}

/* expõe para depuração no console */
window.NC = { get estado() { return E; }, CATALOGO, CONTEUDOS };

})();
