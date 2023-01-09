import React from "react";
import ReactDOM from "react-dom/client";
import App from "./APP";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDctcHCN05OHr60Imzg9av7SoNGAhctMBk",
  authDomain: "to-do-list-ad778.firebaseapp.com",
  projectId: "to-do-list-ad778",
  storageBucket: "to-do-list-ad778.appspot.com",
  messagingSenderId: "429494053508",
  appId: "1:429494053508:web:1ca01cfcff16ef9600f0d1",
  measurementId: "G-9SRXSJP248",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.body);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
