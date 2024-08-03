import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCfhPV32P822A6BFvCo0mOrLqKVhr_UD64",
    authDomain: "olxproject-57dcd.firebaseapp.com",
    projectId: "olxproject-57dcd",
    storageBucket: "olxproject-57dcd.appspot.com",
    messagingSenderId: "971502237214",
    appId: "1:971502237214:web:991d58f4d015976475200f",
    measurementId: "G-DR47GDTR7S"
  };
   export  default firebase.initializeApp(firebaseConfig)