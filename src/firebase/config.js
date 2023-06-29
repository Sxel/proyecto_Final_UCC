// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHzfQCKRHpcXYczzoawCTXFtBNBrcYnHs",
  authDomain: "proyecto-final-cf817.firebaseapp.com",
  projectId: "proyecto-final-cf817",
  storageBucket: "proyecto-final-cf817.appspot.com",
  messagingSenderId: "731880119823",
  appId: "1:731880119823:web:3a6304600ea1c132a90d7a"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );