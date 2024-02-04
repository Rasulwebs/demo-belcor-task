// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvnn8rNwInwXXpBK0ajpfY9bCAjDVvChE",
  authDomain: "belcor-quiz-app.firebaseapp.com",
  projectId: "belcor-quiz-app",
  storageBucket: "belcor-quiz-app.appspot.com",
  messagingSenderId: "1094653669800",
  appId: "1:1094653669800:web:3898edf594b5eccd1eed9d",
  measurementId: "G-R6T725TTNY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
