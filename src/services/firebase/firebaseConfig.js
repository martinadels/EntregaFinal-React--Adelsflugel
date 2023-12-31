// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjUmgUI_SmxUn0gHWc2toQz5_NzYlo8Fk",
  authDomain: "entregafinal-reactjs-cafeteras.firebaseapp.com",
  projectId: "entregafinal-reactjs-cafeteras",
  storageBucket: "entregafinal-reactjs-cafeteras.appspot.com",
  messagingSenderId: "784148712442",
  appId: "1:784148712442:web:67e69333142dc5b57df243",
  measurementId: "G-MTW22P471B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const db = getFirestore(app);

export { firestore,firebaseConfig,db };
