self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1.3').then(function(cache) {
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
        'https://fonts.googleapis.com/css?family=Work+Sans:300,400|Montserrat:100,200,300,400',
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