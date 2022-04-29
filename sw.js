self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v2.0').then(function(cache) {
      return cache.addAll([
        '/',
        '/manifest.json',
        '/index.html',
        '/css/main.css',
        '/js/main.js',
        '/img/logo.svg',
        '/img/mask.jpg',
        '/img/work-bg-white.jpg',
        '/img/work-bg-teal.jpg',
        '/img/work-bg-orange.jpg',
        '/img/work-bg-yellow.jpg',
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Work+Sans:wght@300;400&display=swap',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  )
});
