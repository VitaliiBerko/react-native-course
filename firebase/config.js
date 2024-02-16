import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAVZwxp0Ff7uUfqPNRdqC7HZd2maXfBmu0",
  authDomain: "react-native-ae152.firebaseapp.com",
  projectId: "react-native-ae152",
  storageBucket: "react-native-ae152.appspot.com",
  messagingSenderId: "168767774132",
  appId: "1:168767774132:web:164454eb5e39f9e03826e1",
  measurementId: "G-S8XVDR8KHM"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);


// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });