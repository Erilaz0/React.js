// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG-j7K3sq8f5AHSuPUOaAt7O4ZfPPph9c",
  authDomain: "planticommerce.firebaseapp.com",
  projectId: "planticommerce",
  storageBucket: "planticommerce.appspot.com",
  messagingSenderId: "858545125592",
  appId: "1:858545125592:web:734e4ed9c512ee7c147fad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);