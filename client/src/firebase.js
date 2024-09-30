// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ab0b5.firebaseapp.com",
  projectId: "mern-estate-ab0b5",
  storageBucket: "mern-estate-ab0b5.appspot.com",
  messagingSenderId: "189540889412",
  appId: "1:189540889412:web:5d5b1a66bb39b78fbcdd11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);