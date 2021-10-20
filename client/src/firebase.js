// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhPR5QejV3Kt0PNIOxJZMxYR3N9KwSIpY",
  authDomain: "slack-clone-87bee.firebaseapp.com",
  projectId: "slack-clone-87bee",
  storageBucket: "slack-clone-87bee.appspot.com",
  messagingSenderId: "603904867892",
  appId: "1:603904867892:web:e16e0e08ad7e5be31a1461",
  measurementId: "G-37RE722JJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);