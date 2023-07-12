import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// Optionally import the services that you want to use
// import {aut} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCLeSiwzU85nZHxilAaFJ54ikLeDmA4L7c",
    authDomain: "chores-1c4eb.firebaseapp.com",
    projectId: "chores-1c4eb",
    storageBucket: "chores-1c4eb.appspot.com",
    messagingSenderId: "448834686702",
    appId: "1:448834686702:web:a10a838d2355c60fb96dff",
    measurementId: "G-R5GVSM3C4Z"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const auth = getAuth(app);