// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIHTx4TWWGBbjdAuz5jEtiOD0miU7rCLs",
  authDomain: "react-course-http-bce24.firebaseapp.com",
  databaseURL: "https://react-course-http-bce24-default-rtdb.firebaseio.com",
  projectId: "react-course-http-bce24",
  storageBucket: "react-course-http-bce24.appspot.com",
  messagingSenderId: "64956609521",
  appId: "1:64956609521:web:b15ee708753baa34f40a50",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const database = getDatabase(firebase);
