import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB_96pm1lcqsg8Tii1-pqmEbB2qWRgeaN8",
    authDomain: "linkedin-clone-51f76.firebaseapp.com",
    databaseURL: "https://linkedin-clone-51f76-default-rtdb.firebaseio.com",
    projectId: "linkedin-clone-51f76",
    storageBucket: "linkedin-clone-51f76.appspot.com",
    messagingSenderId: "767471965267",
    appId: "1:767471965267:web:7bf39d896c463be09be2a6",
    measurementId: "G-YLTQGR64MJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };