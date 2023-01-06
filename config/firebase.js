import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXimu9ok05vdZdAKIh9xz1OJH8l1YTD9Y",
  authDomain: "codejam-d4a59.firebaseapp.com",
  projectId: "codejam-d4a59",
  storageBucket: "codejam-d4a59.appspot.com",
  messagingSenderId: "982749752992",
  appId: "1:982749752992:web:424ad2121aee74eeb3a3c5",
  measurementId: "G-98GXG098BE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
