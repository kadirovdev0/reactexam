// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDukOro5m_LWrQdXHgrHKmn8atAWoPLAew",
  authDomain: "examreact-9a138.firebaseapp.com",
  projectId: "examreact-9a138",
  storageBucket: "examreact-9a138.appspot.com",
  messagingSenderId: "862351218342",
  appId: "1:862351218342:web:5d3442ad91ea6afc8bc667",
  measurementId: "G-3G20Q3W28H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

export default app;
