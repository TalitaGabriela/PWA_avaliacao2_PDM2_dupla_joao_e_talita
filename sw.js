let cacheName = "receitas-incriveis";
let filesToCache = ["/", "/index", "/css/style.css", "/css/receita.css", "/js/main.js", "/carnes", "/massas", "/doces"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});