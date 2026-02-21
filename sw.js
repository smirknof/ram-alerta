// Service Worker para RAM ALERTA
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

// Este código permite que a notificação apareça mesmo com o Chrome em fundo
self.addEventListener('push', function(event) {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: 'Icon.png',
    badge: 'Icon.png',
    vibrate: [300, 100, 300],
    data: { url: self.registration.scope }
  };
  event.waitUntil(self.registration.showNotification(data.title, options));
});
