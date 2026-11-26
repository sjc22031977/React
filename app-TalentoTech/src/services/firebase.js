import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2T76o3KxBDsoKzl0H9yMBbeeqRzzmUOg",
  authDomain: "react-86f82.firebaseapp.com",
  projectId: "react-86f82",
  storageBucket: "react-86f82.firebasestorage.app",
  messagingSenderId: "284593207740",
  appId: "1:284593207740:web:6757c083e9b41d3f7193b9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);