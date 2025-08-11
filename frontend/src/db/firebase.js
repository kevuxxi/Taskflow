// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPfwd1CoVOB1PGtXRBc9w7ui6GxoCeksg",
    authDomain: "todo-pro-502a4.firebaseapp.com",
    projectId: "todo-pro-502a4",
    storageBucket: "todo-pro-502a4.firebasestorage.app",
    messagingSenderId: "753852777081",
    appId: "1:753852777081:web:e1a314f3fb52ad70aa0aa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

console.log(db)
export default db;