import * as firebase from "firebase/app";

import "@firebase/firestore";
import "@firebase/auth";
import { Firestore } from "@firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCAuVIw6ClErjXWS0HKG3F2NFXc9C9P7f4",
  authDomain: "rn-insta-clone-97cec.firebaseapp.com",
  projectId: "rn-insta-clone-97cec",
  storageBucket: "rn-insta-clone-97cec.appspot.com",
  messagingSenderId: "586299505521",
  appId: "1:586299505521:web:d151f1527181deba7714d0",
};
const app = firebase.initializeApp(firebaseConfig);
export const firDB = Firestore;
export default app;
