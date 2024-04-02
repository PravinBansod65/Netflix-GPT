// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOuQl0lJHif5E9bxD8lM8JN0w2tU5A1kg",
  authDomain: "netflix-gpt-fc43d.firebaseapp.com",
  projectId: "netflix-gpt-fc43d",
  storageBucket: "netflix-gpt-fc43d.appspot.com",
  messagingSenderId: "994890965461",
  appId: "1:994890965461:web:d2592658af989c53509d5c",
  measurementId: "G-7HSELH3JL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);