// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA43ejG48jNLU78AFr32suMPuxm7kvpCg",
  authDomain: "foody-server-b5c19.firebaseapp.com",
  projectId: "foody-server-b5c19",
  storageBucket: "foody-server-b5c19.appspot.com",
  messagingSenderId: "207209809649",
  appId: "1:207209809649:web:5d1c688c98e7bf25898b50",
  measurementId: "G-P2XRCXF2NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);