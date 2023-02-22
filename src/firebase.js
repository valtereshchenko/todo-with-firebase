// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdmD2YbRjIWUCsoQCVffO7tv7BO08jZ2I",
  authDomain: "todoapp-20616.firebaseapp.com",
  projectId: "todoapp-20616",
  storageBucket: "todoapp-20616.appspot.com",
  messagingSenderId: "776112228933",
  appId: "1:776112228933:web:32c3ad106c01adaf03b12c",
  measurementId: "G-DS8NBJMB5P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
