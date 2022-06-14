import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4ea4ghjbrVHfC53Q49dkhWIh_Zbnvuh0",
  authDomain: "custom-app-8c47b.firebaseapp.com",
  projectId: "custom-app-8c47b",
  storageBucket: "custom-app-8c47b.appspot.com",
  messagingSenderId: "508380004358",
  appId: "1:508380004358:web:d3ebcd9ccac8fa79eb0387",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const twitterAuthProvider = new TwitterAuthProvider();

export { db, googleAuthProvider, facebookAuthProvider, twitterAuthProvider };
