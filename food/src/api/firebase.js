import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyArymMACUZXgfNbCnI4C4k36knKYEoKxLw",
    authDomain: "foodtracker-dbb58.firebaseapp.com",
    projectId: "foodtracker-dbb58",
    storageBucket: "foodtracker-dbb58.firebasestorage.app",
    messagingSenderId: "664367556670",
    appId: "1:664367556670:web:2d0041156136048782c96f",
    measurementId: "G-43SQJRYK6G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
