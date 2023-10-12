// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSeIk5Z6x3LlJblTHoup1ipcK-h-6W_3A",
  authDomain: `"scissor-auth.firebaseapp.com", "https://ola-cap-stone.netlify.app"` ,
  projectId: "scissor-auth",
  storageBucket: "scissor-auth.appspot.com",
  messagingSenderId: "1006923931629",
  appId: "1:1006923931629:web:bad4cdddcd4537fb2791e4",
  measurementId: "G-1Q0J1JQ7CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);