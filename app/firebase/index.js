// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import "firebase/storage";
//Functions
import 'firebase/functions';
import collections from './collections';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyAmtcxwa4fcX_e05jdNGweqx7_kj4izPHk",
    authDomain: "smart-travel-sri-lanka.firebaseapp.com",
    projectId: "smart-travel-sri-lanka",
    storageBucket: "smart-travel-sri-lanka.appspot.com",
    messagingSenderId: "987318358913",
    appId: "1:987318358913:web:0a188de2ed2d4ef03e0e80",
    measurementId: "G-ZBJWT8L98P"
};

// react-redux-firebase config
export const rrfConfig = {
    userProfile: collections.users.name,
    useFirestoreForProfile: true,
    enableRedirectHandling: false,
}

// Initialize Firebase

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



export const auth = firebase.auth();
export const database = firebase.firestore();
export const storage = firebase.storage();
//Functions
export const functions = firebase.functions();
export const FieldValue = firebase.firestore.FieldValue;
export default firebase;

//Functions 
export const getDestinations = functions.httpsCallable('getPreferedDestinations');

export { default as collections } from './collections';