// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcWumiaR_pPYK2pxbTVhNxC4lLo8sNYM0",
  authDomain: "url-chunk.firebaseapp.com",
  projectId: "url-chunk",
  storageBucket: "url-chunk.appspot.com",
  messagingSenderId: "977942981884",
  appId: "1:977942981884:web:bfc3f6d7945340d508fb79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);