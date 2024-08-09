// src/database/fire.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore functions

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe8fPKFMm_NFmix-r_Ve2PTMMTvz2PE_A",
  authDomain: "personal-portfolio-cf4e2.firebaseapp.com",
  projectId: "personal-portfolio-cf4e2",
  storageBucket: "personal-portfolio-cf4e2.appspot.com",
  messagingSenderId: "170488489603",
  appId: "1:170488489603:web:be201dc45f6c934c0c1db6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;


