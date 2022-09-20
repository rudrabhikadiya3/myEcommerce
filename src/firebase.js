
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBP7nXgn-VuOUKixOvwI6FWFshm3UCnXbE",
  authDomain: "aviato-ecom.firebaseapp.com",
  projectId: "aviato-ecom",
  storageBucket: "aviato-ecom.appspot.com",
  messagingSenderId: "703337495245",
  appId: "1:703337495245:web:5b96bd53b5ce0e78520784",
  measurementId: "G-R7Q0MXL5ND"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);

