/* app.js: motor do Novos Conhecimentos.
   Ficha do dia (a mesma para todo mundo) · lição curta · mapa do acervo ·
   documento completo com prova · revisão espaçada. Todo o estado vive em
   localStorage, neste aparelho. */
(function () {
"use strict";

/* Métricas e feedback: preencha para ligar. GOATCOUNTER é o endereço do seu
   site no goatcounter.com (ex.: "https://novosconhecimentos.goatcounter.com/count"). */
const GOATCOUNTER = "";
const FORMULARIO = "";
const INICIO = Date.UTC(2026, 8, 1);   /* dia da ficha nº 1 */

/* ── Estado persistente ────────────────────────────────────────────── */
const CHAVE = "nc_estado_v3";
const PADRAO = { tema: null, licoes: [], sessoes: [], provas: [], revisao: {}, primeiraVisita: null, ultimoDia: null };

function carregar() {
  try {
    const v3 = localStorage.getItem(CHAVE);
    if (v3) return Object.assign({}, PADRAO, JSON.parse(v3));
    const v2 = JSON.parse(localStorage.getItem("nc_estado_v2") || "null");   /* migração da versão com cronômetro */
    if (v2) return Object.assign({}, PADRAO, { tema: v2.tema || null, sessoes: v2.sessoes || [], provas: v2.provas || [], revisao: v2.revisao || {} });
  } catch (e) { /* modo privado ou dado corrompido: começa do zero */ }
  return Object.assign({}, PADRAO);
}
function salvar() { try { localStorage.setItem(CHAVE, JSON.stringify(E)); } catch (e) {} }
let E = carregar();

/* ── Atalhos ───────────────────────────────────────────────────────── */
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const CAMADAS = ["nucleo", "aprofundamento", "extensao"];
const ROTULO_CAMADA = { nucleo: "Núcleo", aprofundamento: "Aprofundamento", extensao: "Extensão" };
const DIA = 86400000;
const agora = () => Date.now();

let IDX = { conceitos: [], arestas: [], areas: {}, macros: {} };
let CATALOGO = [];
const DOCS = {};
async function doc(id) {
  if (!DOCS[id]) DOCS[id] = await fetch(`dados/c/${id}.json`).then(r => { if (!r.ok) throw new Error(r.status); return r.json(); });
  return DOCS[id];
}
const doCatalogo = (id) => CATALOGO.find(c => c.id === id);
const prontos = () => CATALOGO.filter(c => c.doc);
const comLicao = () => CATALOGO.filter(c => c.licao);

function lidos() {
  return new Set([...E.licoes, ...E.sessoes, ...E.provas].map(x => x.conceito));
}
function evento(nome) {
  try { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: nome, title: nome, event: true }); } catch (e) {}
}

/* ── Datas e ficha do dia ──────────────────────────────────────────── */
function hojeStr(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
const numeroFicha = () => Math.floor((Date.parse(hojeStr() + "T00:00:00Z") - INICIO) / DIA) + 1;
function hash(s) { let h = 2166136261; for (const ch of s) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }

/* Mesma data, mesma ficha, em qualquer aparelho com a mesma versão do app. */
function fichaDoDia() {
  const lista = (comLicao().length ? comLicao() : prontos()).slice().sort((a, b) => a.id.localeCompare(b.id));
  return lista.length ? lista[hash(hojeStr()) % lista.length] : null;
}

function codigo(c) {
  const sigla = c.area.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^A-Za-z]/g, "").slice(0, 3).toUpperCase();
  const n = CATALOGO.filter(x => x.area === c.area).indexOf(c) + 1;
  return `${sigla} · ${String(n).padStart(3, "0")}`;
}
const pontos = (d) => "●".repeat(d) + "○".repeat(5 - d);

/* ── Navegação (com botão voltar do navegador) ─────────────────────── */
const ABAS = ["tela-hoje", "tela-acervo", "tela-historico"];
const SEM_ABAS = ["tela-licao", "tela-leitura", "tela-prova", "tela-nota"];
function ir(idTela, voltando) {
  if (!voltando && history.state?.tela !== idTela) history.pushState({ tela: idTela }, "", "#" + idTela.replace("tela-", ""));
  $$(".tela").forEach(t => t.classList.toggle("ativa", t.id === idTela));
  $("#abas").hidden = SEM_ABAS.includes(idTela);
  $("#barra").hidden = idTela === "tela-licao";
  if (CATALOGO.length) $("#barra-acervo").textContent = `acervo ${lidos().size}/${CATALOGO.length}`;
  $$(".aba").forEach(a => a.dataset.tela === idTela ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  if (idTela === "tela-hoje") pintarHoje();
  if (idTela === "tela-acervo") pintarAcervo();
  if (idTela === "tela-historico") pintarHistorico();
  window.scrollTo(0, 0);
}
window.addEventListener("popstate", (ev) => ir(ev.state?.tela || "tela-hoje", true));
$$(".aba").forEach(a => a.addEventListener("click", () => ir(a.dataset.tela)));

/* ── Tema: segue o sistema até a pessoa escolher ───────────────────── */
function aplicarTema() {
  if (E.tema) document.documentElement.setAttribute("data-tema", E.tema);
  else document.documentElement.removeAttribute("data-tema");
}
$("#btn-tema").addEventListener("click", () => {
  const escuroAgora = E.tema ? E.tema === "escuro" : matchMedia("(prefers-color-scheme: dark)").matches;
  E.tema = escuroAgora ? "claro" : "escuro"; salvar(); aplicarTema();
});

/* ── Sorteio de "mais uma ficha", com anti-repetição e revisão ─────── */
function ultimaVez(id) {
  const ts = [...E.licoes, ...E.sessoes].filter(s => s.conceito === id).map(s => Date.parse(s.quando || s.iniciadoEm) || s.iniciadoEm);
  return ts.length ? Math.max(...ts) : null;
}
function pesoDe(id) {
  const ultima = ultimaVez(id);
  if (!ultima) return 100;                                   /* inédito: prioridade máxima */
  const rev = E.revisao[id], dias = (agora() - ultima) / DIA;
  if (rev && rev.proxima && agora() >= rev.proxima) return 60 + Math.min(dias, 40);
  if (dias < 3) return 0.5;                                  /* acabou de ver: quase nunca */
  return Math.min(dias, 30);
}
function sortear(excluir) {
  const cands = (comLicao().length ? comLicao() : prontos()).filter(c => c.id !== excluir);
  if (!cands.length) return null;
  const pesos = cands.map(c => pesoDe(c.id));
  let r = Math.random() * pesos.reduce((a, b) => a + b, 0);
  for (let i = 0; i < cands.length; i++) { r -= pesos[i]; if (r <= 0) return cands[i]; }
  return cands[cands.length - 1];
}
const feitoHoje = (id) => [...E.licoes, ...E.provas].some(p => p.conceito === id && hojeStr(new Date(p.quando)) === hojeStr());
function agendarRevisao(id, pct, jaHoje) {
  if (jaHoje) return;   /* refazer no mesmo dia não prova memória, só inflaria o nível */
  const r = E.revisao[id] || { nivel: 0 };
  r.nivel = pct >= 70 ? Math.min(r.nivel + 1, 4) : 0;
  r.ultima = agora();
  r.proxima = agora() + [1, 3, 7, 21, 60][r.nivel] * DIA;
  E.revisao[id] = r;
}

/* ── Hoje ──────────────────────────────────────────────────────────── */
let fichaAtual = null, extra = false;

async function pintarHoje() {
  if (!CATALOGO.length) return;
  if (!fichaAtual) { fichaAtual = fichaDoDia(); extra = false; }
  const c = fichaAtual; if (!c) return;
  const d = new Date();
  $("#h-data").textContent = d.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric", month: "short" }).replace(/\./g, "").toUpperCase();
  $("#h-rotulo").textContent = extra ? "Ficha extra" : `Ficha do dia · nº ${String(numeroFicha()).padStart(3, "0")}`;
  $("#h-codigo").textContent = codigo(c);
  $("#h-dif").textContent = "DIFIC. " + pontos(c.dificuldade);
  $("#h-termo").textContent = c.termo;
  $("#h-gancho").textContent = c.gancho;
  $("#btn-abrir").textContent = c.licao ? "Abrir ficha" : "Ler a ficha";
  try {
    const dd = await doc(c.id);
    if (fichaAtual === c) $("#btn-abrir").textContent = dd.licao ? `Abrir ficha · ${minutosLicao(dd.licao)} min` : "Ler a ficha";
  } catch (e) { /* offline e sem cache: o botão tenta de novo ao tocar */ }

  const dev = Object.entries(E.revisao).filter(([id, r]) => r.proxima && agora() >= r.proxima && doCatalogo(id)?.doc)
    .sort((a, b) => a[1].proxima - b[1].proxima).slice(0, 5);
  $("#h-revisar").hidden = !dev.length;
  $("#lista-revisao").innerHTML = dev.map(([id, r]) => {
    const x = doCatalogo(id), dias = Math.floor((agora() - r.ultima) / DIA);
    return `<button class="item-lista" data-id="${id}"><span class="termo">${x.termo}</span><span class="meta"><span>${x.area}</span><span>visto há ${dias} dia(s)</span></span></button>`;
  }).join("");
  $$("#lista-revisao .item-lista").forEach(b => b.addEventListener("click", () => abrirFicha(doCatalogo(b.dataset.id))));
}
$("#btn-abrir").addEventListener("click", () => fichaAtual && abrirFicha(fichaAtual));
$("#btn-outra").addEventListener("click", () => {
  const c = sortear(fichaAtual && fichaAtual.id); if (!c) return;
  fichaAtual = c; extra = true; pintarHoje(); evento("mais-uma-ficha");
});

/* ── Lição ─────────────────────────────────────────────────────────── */
let conceitoAtual = null;

async function abrirFicha(c) {
  let d;
  try { d = await doc(c.id); } catch (e) { alert("Não deu para baixar esta ficha. Confira a conexão e tente de novo."); return; }
  conceitoAtual = c;
  if (!d.licao) { abrirDoc(c); return; }
  ir("tela-licao");
  evento("licao-iniciada");
  Licao($("#tela-licao"), d, {
    aoFechar: () => history.back(),
    aoTerminar: (r) => concluirLicao(c, d, r)
  });
}

function concluirLicao(c, d, r) {
  const jaHoje = feitoHoje(c.id);
  E.licoes.push({ conceito: c.id, termo: c.termo, quando: new Date().toISOString(), acertos: r.acertos, total: r.total });
  agendarRevisao(c.id, r.total ? 100 * r.acertos / r.total : 100, jaHoje);
  salvar();
  evento("licao-concluida");

  const ls = lidos();
  $("#r-termo").textContent = c.termo;
  $("#r-carimbo").textContent = "Lida " + new Date().toLocaleDateString("pt-BR", { day: "numeric", month: "short" }).replace(".", "");
  $("#r-placar").textContent = `${r.acertos} de ${r.total} perguntas · acervo ${ls.size}/${CATALOGO.length}`;
  $("#r-fecho").textContent = d.licao.fecho || "";
  $("#r-compart").textContent = textoCompartilhar(c, r, ls.size);
  $("#btn-compartilhar").textContent = "Mandar para um amigo";
  montarAcervo($("#r-mapa"), IDX, ls, { destaque: c.id, razao: .5, fixo: true });
  const carimbo = $("#r-carimbo"); carimbo.classList.remove("anima"); void carimbo.offsetWidth; carimbo.classList.add("anima");
  history.replaceState({ tela: "tela-resultado" }, "", "#resultado");
  ir("tela-resultado", true);
}

function textoCompartilhar(c, r, n) {
  const barras = "▮".repeat(r.acertos) + "▯".repeat(r.total - r.acertos);
  const n1 = extra ? "" : ` · ficha ${String(numeroFicha()).padStart(3, "0")}`;
  return `Novos Conhecimentos${n1}\n${c.termo} ${barras} ${r.acertos}/${r.total}\nacervo ${n}/${CATALOGO.length}\n${location.origin}${location.pathname}`;
}
$("#btn-compartilhar").addEventListener("click", async () => {
  const texto = $("#r-compart").textContent, b = $("#btn-compartilhar");
  try {
    if (navigator.share) await navigator.share({ text: texto });
    else { await navigator.clipboard.writeText(texto); b.textContent = "Copiado"; }
    evento("compartilhou");
  } catch (e) { /* a pessoa cancelou o compartilhamento */ }
});
$("#btn-aprofundar").addEventListener("click", () => conceitoAtual && abrirDoc(conceitoAtual));
if (FORMULARIO) { $("#btn-feedback").hidden = false; $("#btn-feedback").addEventListener("click", () => window.open(FORMULARIO, "_blank", "noopener")); }

/* ── Aprofundar: documento completo ────────────────────────────────── */
function minutosDeLeitura(html) {
  const palavras = html.replace(/<svg[\s\S]*?<\/svg>/g, " ").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  const figuras = (html.match(/<svg/g) || []).length;
  return Math.max(2, Math.round(palavras / 110 + figuras * 1.5));
}

function htmlDocumento(c) {
  const d = DOCS[c.id];   /* as figuras já vêm embutidas pelo build.js */
  let h = `<p class="chapeu">${c.area}</p><h1>${d.termo}</h1><p class="subtitulo">${d.subtitulo}</p>`;
  if ((d.prerequisitos || []).length || (d.conexoes || []).length) {
    h += `<div class="bloco-meta">`;
    if ((d.prerequisitos || []).length) h += `<h4>O que ajuda saber antes</h4><ul>` + d.prerequisitos.map(p => `<li>${p}</li>`).join("") + `</ul>`;
    if ((d.conexoes || []).length) h += `<h4 style="margin-top:.9rem">Onde isso se conecta</h4><ul>` + d.conexoes.map(x => `<li><b>${x.termo}:</b> ${x.relacao}</li>`).join("") + `</ul>`;
    h += `</div>`;
  }
  CAMADAS.forEach((k, i) => {
    const cam = d.camadas[k]; if (!cam) return;
    h += `<section class="camada"><p class="camada-rot"><span>${String(i + 1).padStart(2, "0")}</span> ${ROTULO_CAMADA[k]} · ~${minutosDeLeitura(cam.html)} min</p><div class="leitura">${cam.html}</div></section>`;
  });
  if (d.sintese) {
    const s = d.sintese;
    h += `<section class="sintese"><p class="sintese-rot">Síntese</p>`;
    if ((s.definicoes || []).length) h += `<h3>Conceitos-chave</h3><dl class="sintese-defs">` + s.definicoes.map(x => `<dt>${x.termo}</dt><dd>${x.def}</dd>`).join("") + `</dl>`;
    if ((s.lembrar || []).length) h += `<h3>O que precisa ser lembrado</h3><ul class="sintese-lista">` + s.lembrar.map(x => `<li>${x}</li>`).join("") + `</ul>`;
    if ((s.confusoes || []).length) h += `<h3>Onde a intuição erra</h3><ul class="sintese-conf">` + s.confusoes.map(x => `<li><b>${x.erro}</b><span>${x.correcao}</span></li>`).join("") + `</ul>`;
    if ((s.numeros || []).length) h += `<h3>Números e nomes que ancoram</h3><ul class="sintese-lista">` + s.numeros.map(x => `<li>${x}</li>`).join("") + `</ul>`;
    h += `</section>`;
  }
  if ((d.fontes || []).length) {
    h += `<section class="camada"><p class="camada-rot"><span>◆</span> Fontes</p><ol class="fontes">` +
      d.fontes.map(f => `<li id="f${f.n}"><span class="tipo">${f.tipo}</span>${f.ref}` + (f.url ? ` <a href="${f.url}" target="_blank" rel="noopener">↗</a>` : "") + `</li>`).join("") + `</ol></section>`;
  }
  return h;
}

async function abrirDoc(c) {
  try { await doc(c.id); } catch (e) { alert("Não deu para baixar este documento. Confira a conexão e tente de novo."); return; }
  conceitoAtual = c;
  E.sessoes.push({ conceito: c.id, termo: c.termo, quando: new Date().toISOString() });
  salvar();
  evento("aprofundou");
  $("#doc-envelope").innerHTML = htmlDocumento(c);
  ir("tela-leitura");
}
$("#btn-sair-leitura").addEventListener("click", () => history.back());

/* ── Prova do documento ────────────────────────────────────────────── */
let prova = { questoes: [], respostas: [] };
const embaralhar = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

function abrirProva() {
  const d = DOCS[conceitoAtual.id];
  prova = { questoes: embaralhar(d.prova || []), respostas: new Array((d.prova || []).length).fill(null) };
  $("#prova-termo").textContent = conceitoAtual.termo;
  $("#prova-questoes").innerHTML = prova.questoes.map((q, i) => `
    <div class="questao"><p class="questao-num">Questão ${i + 1} de ${prova.questoes.length}</p><p class="questao-enun">${q.q}</p>
      <div class="alts">${q.alts.map((a, j) => `<button class="alt" data-q="${i}" data-a="${j}" aria-pressed="false"><span class="letra">${"ABCDE"[j]}</span><span>${a}</span></button>`).join("")}</div></div>`).join("");
  $$("#prova-questoes .alt").forEach(b => b.addEventListener("click", () => {
    const qi = +b.dataset.q, ai = +b.dataset.a;
    prova.respostas[qi] = ai;
    $$(`#prova-questoes .alt[data-q="${qi}"]`).forEach(x => x.setAttribute("aria-pressed", String(+x.dataset.a === ai)));
    $("#btn-corrigir").disabled = prova.respostas.some(r => r === null);
  }));
  $("#btn-corrigir").disabled = true;
  ir("tela-prova");
}
$("#btn-ir-prova").addEventListener("click", abrirProva);

$("#btn-corrigir").addEventListener("click", () => {
  const qs = prova.questoes, id = conceitoAtual.id;
  const acertos = qs.reduce((n, q, i) => n + (prova.respostas[i] === q.correta ? 1 : 0), 0);
  const pct = Math.round(100 * acertos / qs.length), jaHoje = feitoHoje(id);
  E.provas.push({ conceito: id, termo: conceitoAtual.termo, quando: new Date().toISOString(), acertos, total: qs.length, pct });
  agendarRevisao(id, pct, jaHoje);
  salvar();
  $("#n-nota").textContent = `${acertos}/${qs.length}`;
  $("#n-legenda").textContent = pct >= 85 ? "Fixou. A revisão volta daqui a alguns dias." :
    pct >= 60 ? "Base razoável, com lacunas específicas. A correção mostra quais." :
    "A leitura não fixou desta vez. Releia com as questões em mente.";
  $("#n-correcao").innerHTML = qs.map((q, i) => {
    const r = prova.respostas[i];
    return `<div class="questao"><p class="questao-num">Questão ${i + 1} · ${r === q.correta ? "acerto" : "erro"}</p><p class="questao-enun">${q.q}</p>
      <div class="alts">${q.alts.map((a, j) => `<button class="alt${j === q.correta ? " certa" : j === r ? " errada" : ""}" disabled><span class="letra">${"ABCDE"[j]}</span><span>${a}</span></button>`).join("")}</div>
      <p class="porque">${q.porque}</p></div>`;
  }).join("");
  const d = DOCS[id];
  $("#n-flashcards").innerHTML = (d.flashcards || []).map(f => `<div class="card-fc"><div class="frente">${f.f}</div><div class="verso">${f.v}</div><div class="dica">Toque para revelar</div></div>`).join("");
  $$("#n-flashcards .card-fc").forEach(el => el.addEventListener("click", () => el.classList.toggle("aberto")));
  ir("tela-nota");
});
$("#btn-reler").addEventListener("click", () => ir("tela-leitura"));
$("#btn-concluir").addEventListener("click", () => { fichaAtual = null; ir("tela-hoje"); });

/* ── Acervo ────────────────────────────────────────────────────────── */
let mapa = null;
function pintarAcervo() {
  if (!CATALOGO.length) return;
  const ls = lidos();
  $("#a-resumo").textContent = `${ls.size} de ${CATALOGO.length} lidos · ${prontos().length} com ficha`;
  mapa = montarAcervo($("#a-mapa"), IDX, ls, { aoTocar: mostrarNo });
}
function mostrarNo(c) {
  const ls = lidos(), macro = IDX.areas[c.area];
  const viz = IDX.arestas.filter(([a, b]) => a === c.id || b === c.id).map(([a, b]) => doCatalogo(a === c.id ? b : a));
  const conhecidos = viz.filter(v => ls.has(v.id)).map(v => v.termo), novos = viz.filter(v => !ls.has(v.id)).map(v => v.termo);
  $("#a-info").innerHTML = `
    <p class="rotulo" style="color:var(--m-${macro})">${IDX.macros[macro].nome} › ${c.area}${c.sub ? " › " + c.sub : ""}</p>
    <p class="ficha-termo" style="font-size:1.4rem;margin:.2rem 0">${c.termo}</p>
    <p class="ficha-gancho">${c.gancho}</p>
    ${conhecidos.length ? `<p class="ficha-gancho">Liga ao que você já sabe: <b>${conhecidos.join(", ")}</b></p>` : ""}
    ${novos.length ? `<p class="ficha-gancho" style="color:var(--tinta-3)">Ainda por descobrir: ${novos.join(", ")}</p>` : ""}
    ${c.doc ? `<button class="btn" id="a-abrir" style="margin-top:.4rem">${ls.has(c.id) ? "Ler de novo" : "Abrir esta ficha"}</button>` : `<p class="rotulo">Ainda sem ficha escrita</p>`}`;
  const b = $("#a-abrir"); if (b) b.addEventListener("click", () => abrirFicha(c));
}
$("#a-busca").addEventListener("input", (e) => {
  const f = e.target.value.trim().toLowerCase();
  const achados = f.length < 2 ? [] : CATALOGO.filter(c => (c.termo + " " + c.area).toLowerCase().includes(f)).slice(0, 6);
  $("#a-achados").innerHTML = achados.map(c => `<button class="item-lista" data-id="${c.id}"><span class="termo">${c.termo}</span><span class="meta"><span>${c.area}</span>${c.doc ? "<span>com ficha</span>" : ""}</span></button>`).join("");
  $$("#a-achados .item-lista").forEach(b => b.addEventListener("click", () => {
    const c = doCatalogo(b.dataset.id); mapa.focar(c.id); mostrarNo(c); $("#a-achados").innerHTML = ""; $("#a-busca").value = "";
  }));
});
$("#z-mais").addEventListener("click", () => mapa && mapa.zoom(1.5));
$("#z-menos").addEventListener("click", () => mapa && mapa.zoom(1 / 1.5));
$("#z-tudo").addEventListener("click", () => mapa && mapa.tudo());

/* ── Histórico e exportações ───────────────────────────────────────── */
function pintarHistorico() {
  const itens = [
    ...E.licoes.map(l => ({ quando: Date.parse(l.quando), termo: l.termo || doCatalogo(l.conceito)?.termo, o: `lição ${l.acertos}/${l.total}` })),
    ...E.provas.map(p => ({ quando: typeof p.quando === "number" ? p.quando : Date.parse(p.quando), termo: p.termo || doCatalogo(p.conceito)?.termo, o: `prova ${p.pct}%` })),
    ...E.sessoes.map(s => ({ quando: s.iniciadoEm || Date.parse(s.quando), termo: s.termo, o: "leu o documento" }))
  ].sort((a, b) => b.quando - a.quando);
  $("#hist-lista").innerHTML = itens.length ? itens.map(x => `<div class="item-lista"><span class="termo">${x.termo || "?"}</span>
    <span class="meta"><span>${new Date(x.quando).toLocaleDateString("pt-BR")}</span><span>${x.o}</span></span></div>`).join("")
    : `<p class="vazio">Nada ainda. A primeira ficha está na aba Hoje.</p>`;
}
function baixar(nome, texto, mime) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([texto], { type: mime })); a.download = nome;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
const limparHtml = (s) => { const d = document.createElement("div"); d.innerHTML = s; return (d.textContent || "").replace(/\s+/g, " ").trim(); };
$("#btn-exportar-fc").addEventListener("click", () => {
  const d = DOCS[conceitoAtual.id];
  const linhas = (d.flashcards || []).map(f => `"${limparHtml(f.f).replace(/"/g, '""')}";"${limparHtml(f.v).replace(/"/g, '""')}";"${d.termo}"`);
  baixar(`flashcards-${conceitoAtual.id}.csv`, "﻿" + linhas.join("\n"), "text/csv;charset=utf-8");
});
$("#btn-exportar-prog").addEventListener("click", () => baixar(`novos-conhecimentos-${hojeStr()}.json`, JSON.stringify(E, null, 2), "application/json"));
$("#btn-importar-prog").addEventListener("click", () => $("#arquivo-import").click());
$("#arquivo-import").addEventListener("change", (ev) => {
  const f = ev.target.files[0]; if (!f) return;
  const fr = new FileReader();
  fr.onload = () => {
    try {
      const x = JSON.parse(fr.result);
      if (!x || !Array.isArray(x.sessoes) || !Array.isArray(x.provas) || typeof x.revisao !== "object") throw new Error("formato");
      E = Object.assign({}, PADRAO, { tema: ["claro", "escuro"].includes(x.tema) ? x.tema : null, licoes: Array.isArray(x.licoes) ? x.licoes : [],
        sessoes: x.sessoes, provas: x.provas, revisao: x.revisao, primeiraVisita: x.primeiraVisita || null });
      salvar(); aplicarTema(); pintarHistorico();
      alert("Progresso importado.");
    } catch (e) { alert("Este arquivo não é uma exportação do Novos Conhecimentos."); }
  };
  fr.readAsText(f);
});
$("#btn-limpar").addEventListener("click", () => {
  if (!confirm("Apagar todo o histórico deste aparelho? Não há como desfazer.")) return;
  E = Object.assign({}, PADRAO, { tema: E.tema }); salvar(); pintarHistorico();
});

/* ── Início ────────────────────────────────────────────────────────── */
aplicarTema();
history.replaceState({ tela: "tela-hoje" }, "", location.pathname + location.search);

/* volta de visitante: o dado mais importante da validação com amigos */
const hoje = hojeStr();
if (!E.primeiraVisita) E.primeiraVisita = hoje;
if (E.ultimoDia !== hoje) {
  const dias = Math.round((Date.parse(hoje) - Date.parse(E.primeiraVisita)) / DIA);
  E.ultimoDia = hoje; salvar();
  setTimeout(() => evento(dias ? `voltou-dia-${dias}` : "primeira-visita"), 1500);
}
if (GOATCOUNTER) {
  const s = document.createElement("script");
  s.async = true; s.src = "https://gc.zgo.at/count.js"; s.dataset.goatcounter = GOATCOUNTER;
  document.head.appendChild(s);
}

fetch("dados/indice.json").then(r => r.json()).then(idx => {
  IDX = idx; CATALOGO = idx.conceitos;
  $("#barra-acervo").textContent = `acervo ${lidos().size}/${CATALOGO.length}`;
  pintarHoje();
});

/* no localhost o cache atrapalha o desenvolvimento: só registra publicado */
if ("serviceWorker" in navigator && location.hostname !== "localhost") window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));

window.NC = { get estado() { return E; }, get CATALOGO() { return CATALOGO; }, DOCS };
})();
