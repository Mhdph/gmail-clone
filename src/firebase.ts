import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChsrq9SkLEMfGIYdW1UrsBLVF9VI5A3jA",
  authDomain: "clone-fd910.firebaseapp.com",
  projectId: "clone-fd910",
  storageBucket: "clone-fd910.appspot.com",
  messagingSenderId: "485336185250",
  appId: "1:485336185250:web:53337bf15cec48c10edafb",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export { auth, db, GoogleAuthProvider, googleProvider, getAuth };
