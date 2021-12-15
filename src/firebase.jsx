// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmk-150FowRyPakrVaNkn2rPM6NNvM-A0",
  authDomain: "labux-11911015.firebaseapp.com",
  projectId: "labux-11911015",
  storageBucket: "labux-11911015.appspot.com",
  messagingSenderId: "530415925386",
  appId: "1:530415925386:web:b922d905887a16d570d573",
  measurementId: "G-2EL2HT80CB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);