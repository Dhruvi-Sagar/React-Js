// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHyhiNomzVx2JabFzrk2sDNhpcIxb_D-U",
  authDomain: "pr-11-firebase-contect.firebaseapp.com",
  databaseURL: "https://pr-11-firebase-contect-default-rtdb.firebaseio.com",
  projectId: "pr-11-firebase-contect",
  storageBucket: "pr-11-firebase-contect.firebasestorage.app",
  messagingSenderId: "768537460375",
  appId: "1:768537460375:web:e6b561f15b736296d8b3d2",
  measurementId: "G-0C16WHK7P0"
};

export const app = initializeApp(firebaseConfig);
// Initialize Firebase

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export  default app;
