const { chromium } = require("playwright");
const path=require("path"), fs=require("fs");
const OUT=path.join(__dirname,"capturas","figuras"); fs.mkdirSync(OUT,{recursive:true});
(async()=>{
  const b=await chromium.launch({executablePath:"/opt/pw-browsers/chromium"});
  const p=await b.newPage({viewport:{width:760,height:900},deviceScaleFactor:2});
  const {FIGURAS}=require("./js/figuras.js");
  const css=fs.readFileSync("css/estilo.css","utf8");
  for (const tema of ["claro","escuro"]) {
    const html=`<!doctype html><html data-tema="${tema}"><head><meta charset="utf-8"><style>${css}
      body{padding:18px;background:var(--papel)} .figura{margin:0 0 26px}</style></head><body>`
      + Object.entries(FIGURAS).map(([k,v])=>`<figure class="figura">${v}<figcaption>${k}</figcaption></figure>`).join("")
      + `</body></html>`;
    fs.writeFileSync("/tmp/figs.html", html);
    await p.goto("file:///tmp/figs.html");
    await p.waitForTimeout(400);
    await p.screenshot({path:path.join(OUT,`todas-${tema}.png`), fullPage:true});
  }
  await b.close(); console.log("ok");
})();
