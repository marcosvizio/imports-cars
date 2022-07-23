import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
//FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmLF8ARHafaZYgry6TTjgOqfRHyTjJ_To",
  authDomain: "beleza-imports.firebaseapp.com",
  projectId: "beleza-imports",
  storageBucket: "beleza-imports.appspot.com",
  messagingSenderId: "602005686492",
  appId: "1:602005686492:web:a085f8676c42ef3ac70c19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
