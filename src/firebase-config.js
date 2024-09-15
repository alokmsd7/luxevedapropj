import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDvoD_IXzntfRt9x0HN2hbOOH1hDt4qi6o",
  authDomain: "alokmar-42ea9.firebaseapp.com",
  projectId: "alokmar-42ea9",
  storageBucket: "alokmar-42ea9.appspot.com",
  messagingSenderId: "529539386248",
  appId: "1:529539386248:web:916242ef4a7c1afb79883d",
  measurementId: "G-4HWXCN5YNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;