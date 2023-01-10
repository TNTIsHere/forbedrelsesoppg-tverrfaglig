// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, onSnapshot,
    query, where, orderBy
} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgwAcof7e-3bRN4IbX8PVIpz5WLTOgBcI",
  authDomain: "reinssdyrregisteret.firebaseapp.com",
  projectId: "reinssdyrregisteret",
  storageBucket: "reinssdyrregisteret.appspot.com",
  messagingSenderId: "1002307049449",
  appId: "1:1002307049449:web:2b3fe819dd68b3ec6c1d78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const db = getFirestore();

const colRef = collection(db, "Eier")

// queries

const q = query(colRef, where("navn", "==", "Pawel Czernecki"), orderBy("personnummer", "desc"))

onSnapshot(q, (snapshot) => {
    let eiere = []
    snapshot.docs.forEach((doc) => {
        eiere.push({ ...doc.data(), id: doc.id })
    })
    console.log(eiere)
    })