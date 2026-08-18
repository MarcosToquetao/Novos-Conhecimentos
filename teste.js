/* teste.js — percorre o fluxo completo do app em Chromium headless
   e salva capturas em ./capturas/. Rodar: node teste.js            */
const { chromium } = require("playwright");
const path = require("path"), fs = require("fs");

const RAIZ = __dirname;
const OUT = path.join(RAIZ, "capturas");
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
  const ctx = await browser.newContext({
    viewport: { width: 390, height: 844 },   // iPhone 14 aproximado
    deviceScaleFactor: 2, isMobile: true, hasTouch: true, locale: "pt-BR"
  });
  const page = await ctx.newPage();
  const erros = [];
  page.on("pageerror", e => erros.push("PAGEERROR: " + e.message));
  page.on("console", m => { if (m.type() === "error") erros.push("CONSOLE: " + m.text()); });

  const tiro = async (nome) => { await page.screenshot({ path: path.join(OUT, nome + ".png"), fullPage: false }); };
  const tiroLongo = async (nome) => { await page.screenshot({ path: path.join(OUT, nome + ".png"), fullPage: true }); };

  await page.goto("file://" + path.join(RAIZ, "index.html"));
  await page.waitForTimeout(400);
  await tiro("01-inicio");

  // tema escuro
  await page.click("#btn-tema"); await page.waitForTimeout(250);
  await tiro("02-inicio-escuro");
  await page.click("#btn-tema"); await page.waitForTimeout(250);

  // catálogo
  await page.click("#btn-ver-catalogo"); await page.waitForTimeout(300);
  const nCat = await page.locator("#cat-lista .item-lista").count();
  await tiro("03-catalogo");
  await page.click("#btn-cat-voltar"); await page.waitForTimeout(200);

  // sessão de 60 min para carregar as três camadas
  await page.click('#tempos .tempo-op[data-min="60"]');
  await page.click("#btn-sortear");
  await page.waitForSelector("#sorteado:not(.oculto)", { timeout: 8000 });
  await page.waitForTimeout(300);
  await tiro("04-sorteio");

  const termo = await page.textContent("#s-termo");
  await page.click("#btn-comecar"); await page.waitForTimeout(500);
  await tiro("05-leitura-topo");
  await page.evaluate(() => window.scrollTo(0, 1400)); await page.waitForTimeout(400);
  await tiro("06-leitura-figura");
  await tiroLongo("07-documento-inteiro");

  const nFig = await page.locator("#doc-envelope figure svg").count();
  const nMarca = await page.locator("#doc-envelope .marca").count();
  const nCam = await page.locator("#doc-envelope .camada").count();

  // força o fim do tempo
  await page.evaluate(() => { window.__forcar = true; });
  await page.evaluate(() => {
    const b = document.querySelector("#btn-ir-prova");
    window.confirm = () => true; b.click();
  });
  await page.waitForTimeout(400);
  await tiro("08-prova-topo");

  const nQ = await page.locator("#prova-questoes .questao").count();
  // responde tudo escolhendo a primeira alternativa
  for (let i = 0; i < nQ; i++) await page.click(`#prova-questoes .alt[data-q="${i}"][data-a="0"]`);
  await page.waitForTimeout(200);
  const podeCorrigir = !(await page.locator("#btn-corrigir").isDisabled());
  await page.click("#btn-corrigir"); await page.waitForTimeout(400);
  await tiro("09-resultado");
  await tiroLongo("10-resultado-inteiro");

  // flashcards
  const nFC = await page.locator("#r-flashcards .card-fc").count();
  if (nFC) { await page.click("#r-flashcards .card-fc"); await page.waitForTimeout(200); }
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(300);
  await tiro("11-flashcards");

  // reler documento (com fontes)
  await page.click("#btn-reler"); await page.waitForTimeout(400);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(300);
  await tiro("12-fontes");
  await page.click("#btn-voltar-res"); await page.waitForTimeout(300);
  await page.click("#btn-encerrar"); await page.waitForTimeout(300);

  // histórico
  await page.click("#btn-ver-historico"); await page.waitForTimeout(300);
  await tiro("13-historico");
  const nHist = await page.locator("#hist-lista .item-lista").count();

  console.log(JSON.stringify({
    termoSorteado: termo, itensCatalogo: nCat, camadasRenderizadas: nCam,
    figurasSVG: nFig, marcasEpistemicas: nMarca, questoes: nQ,
    corrigirHabilitou: podeCorrigir, flashcards: nFC, itensHistorico: nHist,
    erros
  }, null, 2));

  await browser.close();
  if (erros.length) process.exit(1);
})();
