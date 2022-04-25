import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1436dvVTfRGo9v8oyLn9_G5R-gEbazYI",
  authDomain: "susu-storechr.firebaseapp.com",
  projectId: "susu-storechr",
  storageBucket: "susu-storechr.appspot.com",
  messagingSenderId: "588528544833",
  appId: "1:588528544833:web:9429f72dea9f1e410eaac0"
};

// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
