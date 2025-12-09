// firebase.js
// Uses SDKs preloaded in index.html via CDN

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// 1) Replace these with your Firebase config from Firebase Console > Project settings
 const firebaseConfig = {
    apiKey: "AIzaSyDinMGHJ6WMC9LJ8-lBfw9qviXNw_cj6i4",
    authDomain: "bookmanagerapp-a6230.firebaseapp.com",
    projectId: "bookmanagerapp-a6230",
    storageBucket: "bookmanagerapp-a6230.firebasestorage.app",
    messagingSenderId: "559514995672",
    appId: "1:559514995672:web:ef4098e8bcc8be15f040ad",
    measurementId: "G-FWL6SKQWD3"
  };

// 2) Initialize
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 3) Helper functions for Firestore (CRUD)
export const booksCol = collection(db, "books");

export async function addBook(book) {
  return addDoc(booksCol, book);
}

export function watchBooks(callback) {
  // Real-time updates
  return onSnapshot(booksCol, (snap) => {
    const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(data);
  });
}

export async function updateBookAuthor(id, newAuthor) {
  return updateDoc(doc(db, "books", id), { author: newAuthor });
}

export async function deleteBook(id) {
  return deleteDoc(doc(db, "books", id));
}
