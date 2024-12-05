// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAAemdhZIzqWiM0yPBZTb4kgarXd2Kug5M",
  authDomain: "pr-12-realtime-data.firebaseapp.com",
  databaseURL: "https://pr-12-realtime-data-default-rtdb.firebaseio.com",
  projectId: "pr-12-realtime-data",
  storageBucket: "pr-12-realtime-data.firebasestorage.app",
  messagingSenderId: "1029519875680",
  appId: "1:1029519875680:web:ba73558d3370f878f2ad05",
  measurementId: "G-YXVH5EBW77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
