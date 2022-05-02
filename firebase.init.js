// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSDY_w-vxTaohCv4uxF_clY8XDn3RAFZw",
    authDomain: "saltburn-inventory.firebaseapp.com",
    projectId: "saltburn-inventory",
    storageBucket: "saltburn-inventory.appspot.com",
    messagingSenderId: "625702331591",
    appId: "1:625702331591:web:cb10bec0a5793a6b8e4ae2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;