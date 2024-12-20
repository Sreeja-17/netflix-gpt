// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZdeAB0H9osMeBNOWtecEb5DMlKRbf2gk",
  authDomain: "binge-list-ee5cc.firebaseapp.com",
  projectId: "binge-list-ee5cc",
  storageBucket: "binge-list-ee5cc.firebasestorage.app",
  messagingSenderId: "40165905823",
  appId: "1:40165905823:web:bb73c3ee46a798fbe559aa",
  measurementId: "G-NHZ9BLYPH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();