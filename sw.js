// Service worker de la app águila: recibe los avisos de las 2:00 pm (Firebase Cloud Messaging).
// Va al lado de index.html en GitHub. Firebase muestra solo el aviso porque el mensaje trae "notification";
// al tocarlo abre webpush.fcm_options.link (la app).
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js", "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
const PUSH = {"config": {"apiKey": "AIzaSyAWg6sPIGPXPvl21TJ9Y8xnqIdAlq3sEsc", "authDomain": "pcarrera-33595.firebaseapp.com", "projectId": "pcarrera-33595", "storageBucket": "pcarrera-33595.firebasestorage.app", "messagingSenderId": "193683986995", "appId": "1:193683986995:web:b3226074c519d1229e6146"}, "vapidKey": "BHrx5kq03MIxZyBV1-kB8UnLaekYg0p49bh6vlk7YTrqgqMOSu33cnA0HZSj1r8u1s1mpdlvyqb4owUrIhceyvo"};
if (PUSH && PUSH.config && PUSH.config.apiKey) { firebase.initializeApp(PUSH.config); firebase.messaging(); }
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
