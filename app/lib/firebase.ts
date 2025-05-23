import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzEV3gq9tGbxFIcUoHIQuchZWfynGvRrs",
  authDomain: "nadlanus.firebaseapp.com",
  projectId: "nadlanus",
  storageBucket: "nadlanus.firebasestorage.app",
  messagingSenderId: "175435714622",
  appId: "1:175435714622:web:e26ccc443a037f1bab016f",
  measurementId: "G-FD2F93246J"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
