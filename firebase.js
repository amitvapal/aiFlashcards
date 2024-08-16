// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6VXcd4P9RXWvYkzn8AF9F1mbjS6djjRQ",
  authDomain: "flashcardsaas-7ed27.firebaseapp.com",
  projectId: "flashcardsaas-7ed27",
  storageBucket: "flashcardsaas-7ed27.appspot.com",
  messagingSenderId: "617460977956",
  appId: "1:617460977956:web:eac3660a4902628d25e3b1",
  measurementId: "G-4NTCGX4HX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);