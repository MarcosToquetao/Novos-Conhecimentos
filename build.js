#!/usr/bin/env node
/* build.js: gera dados/ a partir de js/docs/*.js, js/catalogo.js, js/figuras.js e js/grafo.json.

   Saída
     dados/indice.json    catálogo + macro-regiões + arestas + posições do mapa do acervo
     dados/c/<id>.json    um documento por conceito, com as figuras já embutidas
   Também valida cada documento e atualiza VERSAO em sw.js com um hash do conteúdo,
   para os aparelhos que já instalaram o PWA receberem a versão nova.

   Rodar: node build.js           (falha com código 1 se algum documento tiver erro)
          node build.js --checar  (só valida, não grava nada) */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm"), crypto = require("crypto");

const RAIZ = __dirname;
const p = (...x) => path.join(RAIZ, ...x);
const SO_CHECAR = process.argv.includes("--checar");

/* Macro-regiões do mapa: cada área pertence a uma; a cor é a tinta da região. */
const MACROS = {
  vida:      { nome: "Vida",             cor: "#3F7A4A", areas: ["Biologia", "Medicina", "Nutrição"] },
  materia:   { nome: "Matéria e cosmos", cor: "#2B3A67", areas: ["Física", "Astronomia", "Química"] },
  formal:    { nome: "Formas e cálculo", cor: "#5A4E8C", areas: ["Matemática", "Estatística", "Computação", "IA"] },
  mente:     { nome: "Mente",            cor: "#A4452F", areas: ["Psicologia", "Neurociência", "Linguística"] },
  sociedade: { nome: "Sociedade",        cor: "#9A6B1E", areas: ["Economia", "Ciência Política", "Sociologia", "Antropologia", "Direito", "Negócios", "Marketing"] },
  terra:     { nome: "Tempo e lugar",    cor: "#6E5B3E", areas: ["História", "Geografia", "Sustentabilidade"] },
  cultura:   { nome: "Cultura",          cor: "#8C3F6E", areas: ["Música", "Artes", "Literatura", "Design", "Arquitetura"] },
  ideias:    { nome: "Ideias",           cor: "#3A6B7A", areas: ["Filosofia"] }
};
const MACRO_DE = {};
for (const [k, m] of Object.entries(MACROS)) m.areas.forEach(a => { MACRO_DE[a] = k; });

/* ── Carga ─────────────────────────────────────────────────────────── */
function carregarJs(arquivo, ctx) {
  vm.runInNewContext(fs.readFileSync(arquivo, "utf8").replace(/^const (\w+) =/m, "$1 ="), ctx, { filename: arquivo });
  return ctx;
}
const { CATALOGO } = carregarJs(p("js", "catalogo.js"), { module: undefined });
const { FIGURAS } = carregarJs(p("js", "figuras.js"), { module: undefined });
const GRAFO = fs.existsSync(p("js", "grafo.json")) ? JSON.parse(fs.readFileSync(p("js", "grafo.json"), "utf8")) : {};

const CONTEUDOS = {};
const arquivosDocs = fs.readdirSync(p("js", "docs")).filter(f => f.endsWith(".js")).sort();
for (const f of arquivosDocs) carregarJs(p("js", "docs", f), { CONTEUDOS, module: undefined });

/* ── Validação ─────────────────────────────────────────────────────── */
const erros = [], avisos = [];
const MARCAS = ["consenso", "emergente"];   /* lições só afirmam o que tem respaldo científico */

function validar(id, d) {
  const e = (m) => erros.push(`${id}: ${m}`), a = (m) => avisos.push(`${id}: ${m}`);
  const cat = CATALOGO.find(c => c.id === id);
  if (!cat) e("não existe em catalogo.js");
  for (const k of ["termo", "area", "subtitulo"]) if (!d[k]) e(`falta ${k}`);
  if (!d.camadas || !d.camadas.nucleo || !d.camadas.nucleo.html) e("falta camadas.nucleo.html");
  if (JSON.stringify(d).includes("—")) e("tem travessão (—): reescreva a pontuação");

  const fontes = new Set((d.fontes || []).map(f => f.n));
  const texto = Object.values(d.camadas || {}).map(c => c.html || "").join("");
  for (const m of texto.matchAll(/href="#f(\d+)"/g)) if (!fontes.has(+m[1])) e(`citação [${m[1]}] sem fonte correspondente`);
  for (const m of texto.matchAll(/\[\[FIG:([a-z0-9\-]+)\]\]/g)) if (!FIGURAS[m[1]]) e(`figura ${m[1]} não existe em figuras.js`);

  (d.prova || []).forEach((q, i) => {
    if (!q.q || !Array.isArray(q.alts) || !(q.correta >= 0 && q.correta < q.alts.length)) e(`prova[${i}] malformada`);
  });
  if ((d.prova || []).length < 10) a(`prova com ${(d.prova || []).length} questões (mínimo 10)`);
  if ((d.flashcards || []).length < 12) a(`flashcards: ${(d.flashcards || []).length} (mínimo 12)`);
  if (fontes.size < 15) a(`fontes: ${fontes.size} (mínimo 15)`);
  if (!d.sintese) a("sem síntese");

  if (d.licao) {
    const L = d.licao, telas = L.telas || [];
    if (!L.gancho) e("licao sem gancho");
    if (telas.length < 5 || telas.length > 10) e(`licao com ${telas.length} telas (esperado 6 a 9)`);
    const perguntas = telas.filter(t => t.tipo === "pergunta");
    if (perguntas.length < 2) e(`licao com ${perguntas.length} perguntas (mínimo 2)`);
    telas.forEach((t, i) => {
      if (t.tipo === "texto" && !t.html) e(`licao.telas[${i}] sem html`);
      if (t.tipo === "texto" && t.marca && !MARCAS.includes(t.marca)) e(`licao.telas[${i}] marca inválida: ${t.marca}`);
      if (t.tipo === "texto" && t.fonte != null && !fontes.has(t.fonte)) e(`licao.telas[${i}] fonte ${t.fonte} inexistente`);
      if (t.tipo === "pergunta" && !(Array.isArray(t.alts) && t.correta >= 0 && t.correta < t.alts.length && t.porque)) e(`licao.telas[${i}] pergunta malformada`);
      if (t.tipo === "figura" && !FIGURAS[t.fig]) e(`licao.telas[${i}] figura ${t.fig} inexistente`);
      if (!["texto", "pergunta", "figura"].includes(t.tipo)) e(`licao.telas[${i}] tipo desconhecido: ${t.tipo}`);
    });
  }
}
for (const [id, d] of Object.entries(CONTEUDOS)) validar(id, d);
for (const c of CATALOGO) if (!MACRO_DE[c.area]) erros.push(`${c.id}: área "${c.area}" sem macro-região em build.js`);
for (const [id, g] of Object.entries(GRAFO)) for (const v of g.liga || []) if (!CATALOGO.some(c => c.id === v)) avisos.push(`grafo: ${id} liga a ${v}, que não existe no catálogo`);

avisos.forEach(m => console.log("  aviso", m));
erros.forEach(m => console.log("  ERRO ", m));
if (erros.length) { console.log(`\n${erros.length} erro(s). Nada foi gravado.`); process.exit(1); }
if (SO_CHECAR) { console.log(`ok: ${Object.keys(CONTEUDOS).length} documentos válidos, ${avisos.length} aviso(s)`); process.exit(0); }

/* ── Layout do mapa do acervo ──────────────────────────────────────── */
/* Hierárquico e determinístico. Cada área é montada sozinha (força dentro da área,
   com as subáreas puxando seus nós para formar braços); depois as áreas viram ilhas
   num anel por macro-região, e as regiões num anel maior. Ligações entre áreas são
   desenhadas mas não puxam, senão tudo vira um bolo no centro. Posições gravadas no
   índice: o mapa é o mesmo para todo mundo e o app não calcula nada.
   ponytail: repulsão O(n²) por área, ok até algumas centenas de nós por área. */
function aleatorio(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

const arestas = [];
const vistos = new Set();
for (const [id, g] of Object.entries(GRAFO)) for (const v of g.liga || []) {
  const k = [id, v].sort().join("|");
  if (!vistos.has(k) && CATALOGO.some(c => c.id === v) && CATALOGO.some(c => c.id === id)) { vistos.add(k); arestas.push([id, v]); }
}

function layoutArea(nos, ars, rnd) {
  const subs = [...new Set(nos.map(n => n.sub))].sort();
  nos.forEach(n => {   /* começa com cada subárea num setor do círculo: vira braço */
    const ang = (subs.indexOf(n.sub) + rnd() * .6) / subs.length * 2 * Math.PI, r = 20 + rnd() * 30;
    n.x = Math.cos(ang) * r; n.y = Math.sin(ang) * r; n.vx = n.vy = 0;
  });
  for (let it = 0, temp = 1; it < 300; it++, temp *= 0.99) {
    for (let i = 0; i < nos.length; i++) for (let j = i + 1; j < nos.length; j++) {
      const a = nos[i], b = nos[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy + 0.01, f = 900 / d2;
      a.vx += dx * f; a.vy += dy * f; b.vx -= dx * f; b.vy -= dy * f;
    }
    for (const [a, b] of ars) {
      const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) + 0.01, f = (d - 40) * 0.02 / d;
      a.vx += dx * f; a.vy += dy * f; b.vx -= dx * f; b.vy -= dy * f;
    }
    const cs = {};
    for (const n of nos) { const c = cs[n.sub] || (cs[n.sub] = [0, 0, 0]); c[0] += n.x; c[1] += n.y; c[2]++; }
    for (const n of nos) {
      const c = cs[n.sub];
      n.vx += (c[0] / c[2] - n.x) * 0.04 - n.x * 0.008; n.vy += (c[1] / c[2] - n.y) * 0.04 - n.y * 0.008;
      const v = Math.hypot(n.vx, n.vy), max = 6 * temp + 0.3;
      if (v > max) { n.vx *= max / v; n.vy *= max / v; }
      n.x += n.vx; n.y += n.vy; n.vx *= 0.6; n.vy *= 0.6;
    }
  }
  return Math.max(30, ...nos.map(n => Math.hypot(n.x, n.y)));   /* raio da ilha */
}

function anel(itens, folga) {   /* distribui círculos de raio r em volta de um centro sem sobrepor */
  if (itens.length === 1) return { R: itens[0].r, pos: [[0, 0]] };
  const perimetro = itens.reduce((s, x) => s + 2 * x.r + folga, 0);
  const rc = Math.max(perimetro / (2 * Math.PI), Math.max(...itens.map(x => x.r)) + folga);
  let ang = 0;
  const pos = itens.map(x => { const meio = ang + (x.r + folga / 2) / rc; ang += (2 * x.r + folga) / rc; return [Math.cos(meio) * rc, Math.sin(meio) * rc]; });
  return { R: rc + Math.max(...itens.map(x => x.r)), pos };
}

function layout() {
  const rnd = aleatorio(42);
  const nos = CATALOGO.map(c => ({ id: c.id, area: c.area, sub: (GRAFO[c.id] || {}).sub || "" }));
  const porId = Object.fromEntries(nos.map(n => [n.id, n]));
  const ilhas = {};
  for (const area of new Set(nos.map(n => n.area))) {
    const ns = nos.filter(n => n.area === area);
    const ars = arestas.filter(([a, b]) => porId[a].area === area && porId[b].area === area).map(([a, b]) => [porId[a], porId[b]]);
    ilhas[area] = { ns, r: layoutArea(ns, ars, rnd) };
  }
  const regioes = Object.entries(MACROS).map(([k, m]) => {
    const itens = m.areas.filter(a => ilhas[a]).map(a => ({ area: a, r: ilhas[a].r }));
    const { R, pos } = anel(itens, 26);
    return { itens, pos, r: R };
  });
  const mundo = anel(regioes, 36);
  regioes.forEach((reg, i) => reg.itens.forEach((it, j) => {
    const cx = mundo.pos[i][0] + reg.pos[j][0], cy = mundo.pos[i][1] + reg.pos[j][1];
    ilhas[it.area].ns.forEach(n => { n.x += cx; n.y += cy; });
  }));
  /* normaliza para uma caixa 0..1000 com margem */
  const xs = nos.map(n => n.x), ys = nos.map(n => n.y);
  const x0 = Math.min(...xs), y0 = Math.min(...ys), esc = 920 / Math.max(Math.max(...xs) - x0, Math.max(...ys) - y0);
  return Object.fromEntries(nos.map(n => [n.id, [Math.round(40 + (n.x - x0) * esc), Math.round(40 + (n.y - y0) * esc)]]));
}
const pos = layout();

/* ── Escrita ───────────────────────────────────────────────────────── */
const comFiguras = (html) => html.replace(/\[\[FIG:([a-z0-9\-]+)\]\]/g, (m, k) => FIGURAS[k]);

fs.rmSync(p("dados", "c"), { recursive: true, force: true });
fs.mkdirSync(p("dados", "c"), { recursive: true });
for (const [id, d] of Object.entries(CONTEUDOS)) {
  const doc = JSON.parse(JSON.stringify(d));
  for (const c of Object.values(doc.camadas)) c.html = comFiguras(c.html);
  if (doc.licao) for (const t of doc.licao.telas) if (t.tipo === "figura") t.svg = FIGURAS[t.fig];
  fs.writeFileSync(p("dados", "c", id + ".json"), JSON.stringify(doc));
}

const indice = {
  macros: Object.fromEntries(Object.entries(MACROS).map(([k, m]) => [k, { nome: m.nome, cor: m.cor }])),
  areas: MACRO_DE,
  conceitos: CATALOGO.map(c => ({
    id: c.id, termo: c.termo, area: c.area, sub: (GRAFO[c.id] || {}).sub || "", dificuldade: c.dificuldade, gancho: c.gancho,
    xy: pos[c.id], doc: !!CONTEUDOS[c.id], licao: !!(CONTEUDOS[c.id] && CONTEUDOS[c.id].licao)
  })),
  arestas
};
fs.writeFileSync(p("dados", "indice.json"), JSON.stringify(indice));

/* VERSAO do service worker = hash de tudo que ele guarda em cache + dados/ */
const sw = fs.readFileSync(p("sw.js"), "utf8");
const h = crypto.createHash("sha1");
for (const m of sw.matchAll(/"\.\/([^"]+\.[a-z0-9]+)"/g)) if (fs.existsSync(p(m[1]))) h.update(fs.readFileSync(p(m[1])));
for (const f of fs.readdirSync(p("dados", "c")).sort()) h.update(fs.readFileSync(p("dados", "c", f)));
const versao = "nc-" + h.digest("hex").slice(0, 8);
fs.writeFileSync(p("sw.js"), sw.replace(/const VERSAO = "[^"]*";/, `const VERSAO = "${versao}";`));

const kb = (f) => Math.round(fs.statSync(f).size / 1024);
console.log(`${Object.keys(CONTEUDOS).length} documentos (${Object.values(CONTEUDOS).filter(d => d.licao).length} com lição) · ${CATALOGO.length} conceitos · ${arestas.length} arestas`);
console.log(`dados/indice.json ${kb(p("dados", "indice.json"))} KB · ${avisos.length} aviso(s) · sw.js VERSAO ${versao}`);
