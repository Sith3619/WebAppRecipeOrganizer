import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfyBO37Hlr5miCbqP07S_sARXlyn-koE0",
  authDomain: "recipe-organizer-web-app.firebaseapp.com",
  projectId: "recipe-organizer-web-app",
  storageBucket: "recipe-organizer-web-app.firebasestorage.app",
  messagingSenderId: "50151959549",
  appId: "1:50151959549:web:db1fdab4a07df76e140794",
  measurementId: "G-W0GN1DPC4Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);
export { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc };
