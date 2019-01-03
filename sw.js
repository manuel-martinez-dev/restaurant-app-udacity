const appName = 'v1';
const cacheFiles = [
  '/',
  '/restaurant.html',
  '/css/medium.css',
  '/css/styles.css',
  '/data/restaurants.json',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/map-API.js',
  '/js/restaurant_info.js',
  '/img/favicon.ico',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(appName).then(function(cache) {
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
          .then(function(response) {
            const responseClone = response.clone();
            caches.open(appName).then(function(cache) {
              cache.put(event.request, responseClone);
            })
            return response;
          }).catch(function(err) {
            console.error(err);
          });
      }
    })
  );
});
