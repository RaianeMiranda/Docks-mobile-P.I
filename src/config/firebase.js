// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzlt2hhkEcKFBMRC-JcoJFDubmQs4xSbA",
  authDomain: "pi-docks-a12eb.firebaseapp.com",
  databaseURL: "https://pi-docks-a12eb-default-rtdb.firebaseio.com",
  projectId: "pi-docks-a12eb",
  storageBucket: "pi-docks-a12eb.appspot.com",
  messagingSenderId: "342266071554",
  appId: "1:342266071554:web:7231be6598d543d41ef51b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);