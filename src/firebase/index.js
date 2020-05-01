// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";
// import "firebase/firestore";
//  App's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBSoE7C-Zi2x7Q1lpZAw6Q_A9DapOXjCuA",
  authDomain: "euteec1.firebaseapp.com",
  databaseURL: "https://euteec1.firebaseio.com",
  projectId: "euteec1",
  storageBucket: "euteec1.appspot.com",
  messagingSenderId: "379476951154",
  appId: "1:379476951154:web:86fd3266753f3b908c02eb"
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebaseAppAuth = firebase.auth();
// export const db = firebase.firestore();

export const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider()
};
