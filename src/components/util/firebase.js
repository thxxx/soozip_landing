// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGtGUIcDkIpQxCzyvMjSMZA6FXb-lmX9A",
  authDomain: "servicecuration.firebaseapp.com",
  databaseURL: "https://servicecuration-default-rtdb.firebaseio.com",
  projectId: "servicecuration",
  storageBucket: "servicecuration.appspot.com",
  messagingSenderId: "879614272943",
  appId: "1:879614272943:web:72de5a8aa892c8dd35fb5a",
  measurementId: "G-RH0ZHKCB17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);