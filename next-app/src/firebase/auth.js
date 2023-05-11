import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQRbVcLXzcOenvfGcLAzqaQ-YevUe7n88",
    authDomain: "nishida-gumi.firebaseapp.com",
    projectId: "nishida-gumi",
    storageBucket: "nishida-gumi.appspot.com",
    messagingSenderId: "490239173792",
    appId: "1:490239173792:web:18091e399b9988e9e395c5",
    measurementId: "G-K8FVZ4VHC3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
