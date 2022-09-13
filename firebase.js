// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqKAFVnRwqLzfLJAipLCDQ1h6PK6EppEg",
  authDomain: "fir-auth-2e0a5.firebaseapp.com",
  projectId: "fir-auth-2e0a5",
  storageBucket: "fir-auth-2e0a5.appspot.com",
  messagingSenderId: "545220277287",
  appId: "1:545220277287:web:b4636ef0d42ab650054a02"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };