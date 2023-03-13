// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMWdRDH2Jrmen71odUdOxVb_0GHgnUxhw",
  authDomain: "fir-auth-19e8c.firebaseapp.com",
  projectId: "fir-auth-19e8c",
  storageBucket: "fir-auth-19e8c.appspot.com",
  messagingSenderId: "189167825943",
  appId: "1:189167825943:web:006cc48009d54827b91852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}