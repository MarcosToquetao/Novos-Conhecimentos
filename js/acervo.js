/* acervo.js: desenha o mapa do acervo em SVG a partir de dados/indice.json.
   As posições vêm prontas do build.js; aqui só há câmera (arrastar, beliscar, roda)
   e zoom semântico: de longe regiões, depois áreas, depois nomes.

   montarAcervo(svg, idx, lidos, { aoTocar(c), destaque: id, razao: altura/largura }) */
(function () {
"use strict";
const NS = "http://www.w3.org/2000/svg";

function montarAcervo(svg, idx, lidos, opts = {}) {
  svg.innerHTML = "";
  const razao = opts.razao || 1;
  const el = (tag, a, pai) => { const e = document.createElementNS(NS, tag); for (const k in a) e.setAttribute(k, a[k]); (pai || svg).appendChild(e); return e; };
  const cor = (c) => `var(--m-${idx.areas[c.area]})`;
  const porId = Object.fromEntries(idx.conceitos.map(c => [c.id, c]));
  const vizinhos = new Set();
  if (opts.destaque) for (const [a, b] of idx.arestas) { if (a === opts.destaque) vizinhos.add(b); if (b === opts.destaque) vizinhos.add(a); }

  const gA = el("g", {}), gL = el("g", {}), gH = el("g", {}), gN = el("g", {}), gT = el("g", {});
  for (const [a, b] of idx.arestas) {
    const p = porId[a].xy, q = porId[b].xy;
    const doDestaque = opts.destaque && (a === opts.destaque || b === opts.destaque);
    const acesa = lidos.has(a) && lidos.has(b);
    /* pontes entre áreas só aparecem quando você já conhece as duas pontas: senão cruzam o mapa todo */
    if (porId[a].area !== porId[b].area && !acesa && !doDestaque) continue;
    el("line", { x1: p[0], y1: p[1], x2: q[0], y2: q[1], "vector-effect": "non-scaling-stroke",
      stroke: doDestaque ? "var(--tinta)" : acesa ? "var(--tinta-3)" : "var(--regra-2)",
      "stroke-width": doDestaque ? 1.6 : 1, "stroke-dasharray": acesa || doDestaque ? "" : "3 3" }, gL);
  }

  const centro = (l) => [l.reduce((s, c) => s + c.xy[0], 0) / l.length, l.reduce((s, c) => s + c.xy[1], 0) / l.length];
  const rotulos = [];
  for (const [k, m] of Object.entries(idx.macros)) {
    const cs = idx.conceitos.filter(c => idx.areas[c.area] === k); if (!cs.length) continue;
    /* rótulo empurrado para fora do mapa, além da borda da região: no centróide, regiões vizinhas se sobrepunham */
    const [mx, my] = centro(cs), d = Math.hypot(mx - 500, my - 500) || 1;
    const r = Math.max(...cs.map(c => Math.hypot(c.xy[0] - mx, c.xy[1] - my))) * .8 + 25;
    const meia = m.nome.length * 13;   /* meia largura aproximada do rótulo em 44px */
    const x = Math.min(1000 - meia, Math.max(meia, mx + (mx - 500) / d * r)), y = my + (my - 500) / d * r + 14;
    const t = el("text", { x, y, "text-anchor": "middle", fill: `var(--m-${k})`, style: "font:650 44px var(--display);paint-order:stroke;stroke:var(--ficha);stroke-width:6px;pointer-events:none" }, gA);
    t.textContent = m.nome; rotulos.push({ nivel: 0, e: t });
  }
  for (const area of new Set(idx.conceitos.map(c => c.area))) {
    const cs = idx.conceitos.filter(c => c.area === area), [x, y] = centro(cs);
    const t = el("text", { x, y: y - 26, "text-anchor": "middle", fill: cor(cs[0]), style: "font:500 15px var(--mono);letter-spacing:.06em;paint-order:stroke;stroke:var(--ficha);stroke-width:4px;pointer-events:none" }, gA);
    t.textContent = area.toUpperCase(); rotulos.push({ nivel: 1, e: t });
  }

  const nos = idx.conceitos.map(c => {
    const lido = lidos.has(c.id), dest = c.id === opts.destaque;
    const n = el("circle", { cx: c.xy[0], cy: c.xy[1], r: dest ? 10 : lido ? 7 : 4.5, class: "no", "vector-effect": "non-scaling-stroke",
      fill: lido || dest ? cor(c) : "var(--ficha)", stroke: lido || dest ? "var(--tinta)" : "var(--regra)",
      "stroke-width": dest ? 2.5 : 1, "stroke-dasharray": lido || dest ? "" : "2 2" }, gN);
    const t = el("text", { x: c.xy[0], y: c.xy[1] - 12, "text-anchor": "middle", fill: lido || dest ? "var(--tinta)" : "var(--tinta-3)",
      style: "font:11px var(--mono);pointer-events:none;paint-order:stroke;stroke:var(--ficha);stroke-width:3px" }, gT);
    t.textContent = c.termo.length > 28 ? c.termo.slice(0, 26) + "…" : c.termo;
    if (opts.aoTocar) n.addEventListener("click", (ev) => { ev.stopPropagation(); realcar(c.id); opts.aoTocar(c); });
    return { c, n, t, lido, perto: dest || vizinhos.has(c.id) };
  });

  function realcar(id) {   /* ao tocar num nó, todas as ligações dele aparecem em tinta cheia */
    gH.innerHTML = "";
    for (const [a, b] of idx.arestas) if (a === id || b === id) {
      const p = porId[a].xy, q = porId[b].xy;
      el("line", { x1: p[0], y1: p[1], x2: q[0], y2: q[1], stroke: "var(--tinta)", "stroke-width": 1.6, "vector-effect": "non-scaling-stroke" }, gH);
    }
    nos.forEach(o => o.perto = o.c.id === id || idx.arestas.some(([a, b]) => (a === id && b === o.c.id) || (b === id && a === o.c.id)));
    aplicar();
  }

  let cam = { x: 0, y: 0, w: 1000 };
  function aplicar() {
    svg.setAttribute("viewBox", `${cam.x} ${cam.y} ${cam.w} ${cam.w * razao}`);
    const z = 1000 / cam.w;
    rotulos.forEach(r => { r.e.style.display = !opts.fixo && (r.nivel === 0 ? z < 2.2 : z >= 1.6 && z < 5) ? "" : "none"; if (r.nivel === 0) r.e.style.opacity = z < 1.4 ? 1 : .35; });
    nos.forEach(o => o.t.style.display = opts.fixo ? (o.c.id === opts.destaque ? "" : "none")   /* miniatura: só o nome do conceito */
      : (z >= 5 || (o.lido && z >= 2.2) || o.perto) ? "" : "none");
  }
  function zoom(f, px = .5, py = .5) {
    const w = Math.min(1000, Math.max(90, cam.w / f));
    cam.x += (cam.w - w) * px; cam.y += (cam.w - w) * razao * py; cam.w = w; aplicar();
  }
  function focar(id, w = 380) {
    const c = porId[id]; if (!c) return;
    cam = { x: c.xy[0] - w / 2, y: c.xy[1] - w * razao / 2, w }; aplicar();
  }

  if (!opts.fixo) {
    const ponteiros = new Map(); let dist0 = 0;
    svg.addEventListener("pointerdown", e => { svg.setPointerCapture(e.pointerId); ponteiros.set(e.pointerId, [e.clientX, e.clientY]); });
    svg.addEventListener("pointermove", e => {
      if (!ponteiros.has(e.pointerId)) return;
      const r = svg.getBoundingClientRect(), [x0, y0] = ponteiros.get(e.pointerId);
      ponteiros.set(e.pointerId, [e.clientX, e.clientY]);
      if (ponteiros.size === 1) { cam.x -= (e.clientX - x0) * cam.w / r.width; cam.y -= (e.clientY - y0) * cam.w / r.width; aplicar(); }
      else if (ponteiros.size === 2) {
        const [a, b] = [...ponteiros.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]);
        if (dist0) zoom(d / dist0, ((a[0] + b[0]) / 2 - r.left) / r.width, ((a[1] + b[1]) / 2 - r.top) / r.height);
        dist0 = d;
      }
    });
    const soltar = e => { ponteiros.delete(e.pointerId); dist0 = 0; };
    svg.addEventListener("pointerup", soltar); svg.addEventListener("pointercancel", soltar);
    svg.addEventListener("wheel", e => { e.preventDefault(); const r = svg.getBoundingClientRect(); zoom(e.deltaY < 0 ? 1.25 : .8, (e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height); }, { passive: false });
  }
  if (opts.destaque) focar(opts.destaque, opts.fixo ? 520 : 380); else aplicar();
  return { zoom, focar: (id, w) => { focar(id, w); realcar(id); }, tudo: () => { cam = { x: 0, y: 0, w: 1000 }; aplicar(); } };
}

window.montarAcervo = montarAcervo;
})();
