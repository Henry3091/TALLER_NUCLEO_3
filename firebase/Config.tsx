import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBYoYJdCMsY7guW0XTiporLNI_IID832UE",
  authDomain: "app-react-da1da.firebaseapp.com",
  projectId: "app-react-da1da",
  storageBucket: "app-react-da1da.firebasestorage.app",
  messagingSenderId: "325695500333",
  appId: "1:325695500333:web:65214633659127b90808a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getDatabase(app)
