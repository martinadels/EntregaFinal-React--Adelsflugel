import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

import 'bootstrap/dist/css/bootstrap.min.css';


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
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
