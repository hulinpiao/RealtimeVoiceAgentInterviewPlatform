// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAFjIqc-GA9noci5PuODGO4Gc_GNkraVuY",
  authDomain: "interviewprep-9ec88.firebaseapp.com",
  projectId: "interviewprep-9ec88",
  storageBucket: "interviewprep-9ec88.firebasestorage.app",
  messagingSenderId: "283826169751",
  appId: "1:283826169751:web:1cddc574cd6b6ee5e586d2",
  measurementId: "G-KJT2P4F9NF"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);