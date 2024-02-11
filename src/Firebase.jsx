import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSQa6k1xFlInoK7yK-AhUuXfQ72tiDSvc",
  authDomain: "instantchat-app-a94b5.firebaseapp.com",
  projectId: "instantchat-app-a94b5",
  storageBucket: "instantchat-app-a94b5.appspot.com",
  messagingSenderId: "740927328583",
  appId: "1:740927328583:web:79e6a053884a680d59bc62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);