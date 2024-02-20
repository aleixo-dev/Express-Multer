import serviceAccount from './serviceAccountKey.json' with { type: "json" };
import admin from 'firebase-admin';

admin.initializeApp({
    apiKey: "AIzaSyATHXLw0O_OSEGy3gQsTS-eKjSypiW0FcU",
    authDomain: "node-js-images.firebaseapp.com",
    projectId: "node-js-images",
    storageBucket: "node-js-images.appspot.com",
    messagingSenderId: "9792950488",
    appId: "1:9792950488:web:2ac24650d1d745544b87ad",
    measurementId: "G-8MLNN4H82H",
    credential: admin.credential.cert(serviceAccount)
});

export { admin }