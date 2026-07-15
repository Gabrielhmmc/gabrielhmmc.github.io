import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyCGtoGA3ZpmBWLsNmaknCpHIIk6g2eXIkk",

  authDomain: "controle-ambulatorial-3906f.firebaseapp.com",

  projectId: "controle-ambulatorial-3906f",

  storageBucket: "controle-ambulatorial-3906f.firebasestorage.app",

  messagingSenderId: "986789707035",

  appId: "1:986789707035:web:d914df06d5a5eb0933a7be"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const pacientesRef = collection(db,"pacientes");