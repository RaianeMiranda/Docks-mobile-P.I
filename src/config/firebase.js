// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN1jENlRenp-raFoEI0ti4zd_acvqHcsI",
  authDomain: "docks-pi.firebaseapp.com",
  projectId: "docks-pi",
  storageBucket: "docks-pi.appspot.com",
  messagingSenderId: "642850059158",
  appId: "1:642850059158:web:d1670e9b0547f12a6163b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);