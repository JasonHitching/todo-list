import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA2y9uwOGcX7no7ik-gAXmuXTQTIhvjcx0",
  authDomain: "todo-app-d99dd.firebaseapp.com",
  databaseURL:
    "https://todo-app-d99dd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-app-d99dd",
  storageBucket: "todo-app-d99dd.appspot.com",
  messagingSenderId: "513961995659",
  appId: "1:513961995659:web:6c54c36a267ad97466538e",
  measurementId: "G-398ZLD5TXN"
};

export const db = firebase.initializeApp(firebaseConfig).database();

// Initialize Firebase
firebase.analytics();
