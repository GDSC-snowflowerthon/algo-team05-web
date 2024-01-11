// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyALetVKMd6H5detbQECQTTJpzML9uUCUH0",
  authDomain: "snowthon.firebaseapp.com",
  projectId: "snowthon",
  storageBucket: "snowthon.appspot.com",
  messagingSenderId: "558646175970",
  appId: "1:558646175970:web:b71e81f68dfdeb298316bb",
  measurementId: "G-BWP5DM3TV8",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

firebase.messaging.isSupported(); // true | false
