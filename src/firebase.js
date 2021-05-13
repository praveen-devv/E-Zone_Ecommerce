// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAB3KQu4gSYyZ_e0fV6ji_qBkBTG2HE66s",
  authDomain: "syscosystems-ezonee.firebaseapp.com",
  projectId: "syscosystems-ezonee",
  storageBucket: "syscosystems-ezonee.appspot.com",
  messagingSenderId: "231696772467",
  appId: "1:231696772467:web:21a4fe74f4b0501e1e2906",
  measurementId: "G-PJ2DVHHKJ4"
};  

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db , auth};