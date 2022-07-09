import { initializeApp, getApps } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";
const googleProvider = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: "AIzaSyChsrq9SkLEMfGIYdW1UrsBLVF9VI5A3jA",
  authDomain: "clone-fd910.firebaseapp.com",
  projectId: "clone-fd910",
  storageBucket: "clone-fd910.appspot.com",
  messagingSenderId: "485336185250",
  appId: "1:485336185250:web:53337bf15cec48c10edafb",
};

const app = getApps().length > 0 ? getApps() : initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db,
  GoogleAuthProvider,
  googleProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
};
