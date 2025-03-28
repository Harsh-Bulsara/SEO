const CACHE_NAME = "v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/about.html",
  "/contact.html",
  "/styles.css",
  "/images/website.webp",
  "/images/contact.webp",
  "/images/about.webp"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
