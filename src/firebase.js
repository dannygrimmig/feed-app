// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXhKj9UfDpMLFEqg6QcY5zCnMGfZhv_1c",
  authDomain: "feed-development.firebaseapp.com",
  projectId: "feed-development",
  storageBucket: "feed-development.appspot.com",
  messagingSenderId: "1013118693817",
  appId: "1:1013118693817:web:de6f37dad2c1a3c6770668",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
