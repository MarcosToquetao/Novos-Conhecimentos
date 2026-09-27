/* sw.js: cache offline do Novos Conhecimentos.
   Estratégia: cache-first para os arquivos do app (são estáticos e versionados),
   com atualização em segundo plano. VERSAO é atualizada sozinha pelo build.js. */
const VERSAO = "nc-24af9ddb";
const ARQUIVOS = [
  "./", "./index.html", "./manifest.json",
  "./css/estilo.css",
  "./js/app.js", "./js/licao.js", "./js/acervo.js", "./dados/indice.json",
  "./icons/icon-192.png", "./icons/icon-512.png",
  "./fonts/fraunces-500_650-latin.woff2", "./fonts/fraunces-500_650-latin-ext.woff2",
  "./fonts/literata-400_600-latin.woff2", "./fonts/literata-400_600-latin-ext.woff2",
  "./fonts/literata-400i-latin.woff2", "./fonts/literata-400i-latin-ext.woff2",
  "./fonts/ibmplexmono-400-latin.woff2", "./fonts/ibmplexmono-400-latin-ext.woff2",
  "./fonts/ibmplexmono-500-latin.woff2", "./fonts/ibmplexmono-500-latin-ext.woff2"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then(ks =>
    Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;  /* métricas e links externos passam direto */
  e.respondWith(
    caches.match(e.request).then(hit => {
      const rede = fetch(e.request).then(res => {
        if (res && res.status === 200 && res.type === "basic") {
          const copia = res.clone();
          caches.open(VERSAO).then(c => c.put(e.request, copia));
        }
        return res;
      }).catch(() => hit);
      return hit || rede;
    })
  );
});
