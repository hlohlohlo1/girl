// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDyESyK4Jn99W1v7Nler4V52QI4RuX7hIM",
   authDomain: "ladkidilado.firebaseapp.com",
   projectId: "ladkidilado",
   storageBucket: "ladkidilado.appspot.com",
   messagingSenderId: "94740980610",
   appId: "1:94740980610:web:5af8c56860d9d53616659b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);