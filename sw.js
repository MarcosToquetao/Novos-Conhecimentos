/* sw.js — cache offline do Novos Conhecimentos.
   Estratégia: cache-first para os arquivos do app (são estáticos e versionados),
   com atualização em segundo plano. Ao publicar conteúdo novo, suba VERSAO. */
const VERSAO = "nc-v7";
const ARQUIVOS = [
  "./", "./index.html", "./manifest.json",
  "./css/estilo.css",
  "./js/catalogo.js", "./js/figuras.js", "./js/conteudos.js", "./js/app.js",
  "./icons/icon-192.png", "./icons/icon-512.png",
  "./fonts/noticiatext-400-latin.woff2", "./fonts/noticiatext-400-latin-ext.woff2",
  "./fonts/noticiatext-700-latin.woff2", "./fonts/noticiatext-700-latin-ext.woff2",
  "./fonts/noticiatext-400i-latin.woff2", "./fonts/noticiatext-400i-latin-ext.woff2",
  "./fonts/inter-var-latin.woff2", "./fonts/inter-var-latin-ext.woff2"
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
  if (e.request.method !== "GET") return;
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
