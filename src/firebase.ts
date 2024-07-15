import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBr2FfpQ36Rqs2eeVfllLbQ_1UTmHxMrJM",
  authDomain: "my-app-f4a11.firebaseapp.com",
  projectId: "my-app-f4a11",
  storageBucket: "my-app-f4a11.appspot.com",
  messagingSenderId: "841936592763",
  appId: "1:841936592763:web:8359668ad55174019427de",
  measurementId: "G-FKBKJP07F7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
