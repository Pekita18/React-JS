import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1TRWAGU57qT7wennT5Rm4Vw3rDF7EyOU",
  authDomain: "valka-9d7cb.firebaseapp.com",
  projectId: "valka-9d7cb",
  storageBucket: "valka-9d7cb.appspot.com",
  messagingSenderId: "931133745305",
  appId: "1:931133745305:web:165c2d516a503b8c8d3008"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);