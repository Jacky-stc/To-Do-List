import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import "firebase/firestore";

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
// Required for side-effects
export const db = getFirestore(app);
