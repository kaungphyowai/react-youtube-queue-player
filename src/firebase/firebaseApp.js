// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXrdBVeyDwU81QVfllPycfiGtiAjAnrpE",
  authDomain: "react--queue-player.firebaseapp.com",
  projectId: "react--queue-player",
  storageBucket: "react--queue-player.appspot.com",
  messagingSenderId: "393257056440",
  appId: "1:393257056440:web:7686440fec372fb4961c4d",
  databaseURL: "https://react--queue-player-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;