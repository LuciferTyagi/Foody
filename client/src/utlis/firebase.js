// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYo14_Y7EDPEg_t-c9nMIK33jaLPhwmAg",
  authDomain: "foody-734ba.firebaseapp.com",
  projectId: "foody-734ba",
  storageBucket: "foody-734ba.appspot.com",
  messagingSenderId: "788659551408",
  appId: "1:788659551408:web:9ffdb218cf63637c550f75",
  measurementId: "G-3L1JS2SQES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);