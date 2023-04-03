import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDzlt2hhkEcKFBMRC-JcoJFDubmQs4xSbA",
  authDomain: "pi-docks-a12eb.firebaseapp.com",
  projectId: "pi-docks-a12eb",
  storageBucket: "pi-docks-a12eb.appspot.com",
  messagingSenderId: "342266071554",
  appId: "1:342266071554:web:7231be6598d543d41ef51b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
