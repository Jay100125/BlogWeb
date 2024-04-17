// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-85c10.firebaseapp.com",
  projectId: "blog-85c10",
  storageBucket: "blog-85c10.appspot.com",
  messagingSenderId: "473926444129",
  appId: "1:473926444129:web:3b47e566a3ff440b98f620"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);