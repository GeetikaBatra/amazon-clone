import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDF0kOWm7MVxEf7P6NhLXrAYyON6FLhon0",
  authDomain: "clone-f6bd8.firebaseapp.com",
  projectId: "clone-f6bd8",
  storageBucket: "clone-f6bd8.appspot.com",
  messagingSenderId: "1022562028762",
  appId: "1:1022562028762:web:e5c14d4e1cfe641a2ba9e3"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };