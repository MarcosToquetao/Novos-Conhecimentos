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
const MARCAS = ["consenso", "emergente", "controverso", "especulacao"];

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
/* Força simples e determinística: repulsão entre todos os nós, mola nas arestas,
   gravidade para o centro da área e da subárea. Posições gravadas no índice,
   então o mapa é o mesmo para todo mundo e o app não precisa calcular nada.
   ponytail: repulsão O(n²), ok até ~2 mil nós; acima disso, usar quadtree. */
function aleatorio(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

const arestas = [];
const vistos = new Set();
for (const [id, g] of Object.entries(GRAFO)) for (const v of g.liga || []) {
  const k = [id, v].sort().join("|");
  if (!vistos.has(k) && CATALOGO.some(c => c.id === v) && CATALOGO.some(c => c.id === id)) { vistos.add(k); arestas.push([id, v]); }
}

function layout() {
  const rnd = aleatorio(42);
  const macros = Object.keys(MACROS);
  const centroArea = {};
  macros.forEach((mk, i) => {
    const ang = (i / macros.length) * 2 * Math.PI;
    const mx = Math.cos(ang) * 420, my = Math.sin(ang) * 420;
    const areas = MACROS[mk].areas;
    areas.forEach((a, j) => {
      const r = areas.length > 1 ? 70 + 12 * areas.length : 0, b = ang + (j / areas.length) * 2 * Math.PI;
      centroArea[a] = [mx + Math.cos(b) * r, my + Math.sin(b) * r];
    });
  });
  const nos = CATALOGO.map(c => {
    const [ax, ay] = centroArea[c.area];
    return { id: c.id, area: c.area, sub: (GRAFO[c.id] || {}).sub || "", x: ax + (rnd() - .5) * 60, y: ay + (rnd() - .5) * 60, vx: 0, vy: 0 };
  });
  const idx = Object.fromEntries(nos.map((n, i) => [n.id, i]));
  const ars = arestas.map(([a, b]) => [idx[a], idx[b]]);

  for (let it = 0, temp = 1; it < 400; it++, temp *= 0.992) {
    for (let i = 0; i < nos.length; i++) for (let j = i + 1; j < nos.length; j++) {
      const a = nos[i], b = nos[j];
      let dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy + 0.01;
      if (d2 > 90000) continue;
      const f = 400 / d2;
      a.vx += dx * f; a.vy += dy * f; b.vx -= dx * f; b.vy -= dy * f;
    }
    for (const [i, j] of ars) {
      const a = nos[i], b = nos[j], mesma = a.area === b.area;
      const dx = b.x - a.x, dy = b.y - a.y, d = Math.sqrt(dx * dx + dy * dy) + 0.01;
      const f = (d - (mesma ? 30 : 90)) * (mesma ? 0.02 : 0.004) / d;
      a.vx += dx * f; a.vy += dy * f; b.vx -= dx * f; b.vy -= dy * f;
    }
    const centroSub = {};
    for (const n of nos) if (n.sub) { const k = n.area + "|" + n.sub; const c = centroSub[k] || (centroSub[k] = [0, 0, 0]); c[0] += n.x; c[1] += n.y; c[2]++; }
    for (const n of nos) {
      const [ax, ay] = centroArea[n.area];
      n.vx += (ax - n.x) * 0.012; n.vy += (ay - n.y) * 0.012;
      const cs = n.sub && centroSub[n.area + "|" + n.sub];
      if (cs && cs[2] > 1) { n.vx += (cs[0] / cs[2] - n.x) * 0.03; n.vy += (cs[1] / cs[2] - n.y) * 0.03; }
      const v = Math.hypot(n.vx, n.vy), max = 12 * temp + 0.5;
      if (v > max) { n.vx *= max / v; n.vy *= max / v; }
      n.x += n.vx; n.y += n.vy; n.vx *= 0.6; n.vy *= 0.6;
    }
  }
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
