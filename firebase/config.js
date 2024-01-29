import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCS7HO6Uz6PQJfxs3zwTwqdDG4G_qgPevc",
  authDomain: "react-native-course-948db.firebaseapp.com",
  projectId: "react-native-course-948db",
  storageBucket: "react-native-course-948db.appspot.com",
  messagingSenderId: "541972287173",
  appId: "1:541972287173:web:b01399e25979cf1917aaac",
  measurementId: "G-R9KWC8C8NK",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
