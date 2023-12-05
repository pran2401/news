
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBHgHB188cZ7O8M3DkGDiTzF6tOaB1urI0",
  authDomain: "blog-1edd5.firebaseapp.com",
  projectId: "blog-1edd5",
  storageBucket: "blog-1edd5.appspot.com",
  messagingSenderId: "686699337807",
  appId: "1:686699337807:web:e207162e11be454954323a",
  measurementId: "G-4Z06L678QH"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const provider= new GoogleAuthProvider();
export const db= new getFirestore(app);
