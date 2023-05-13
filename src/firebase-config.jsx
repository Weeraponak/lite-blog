import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD37LzWsLA5P7dv3WWd2Eee8RZ68G_uyIk",
  authDomain: "lite-blog-a0bde.firebaseapp.com",
  projectId: "lite-blog-a0bde",
  storageBucket: "lite-blog-a0bde.appspot.com",
  messagingSenderId: "168160853886",
  appId: "1:168160853886:web:f1e977b269ddf10b1f7d2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
