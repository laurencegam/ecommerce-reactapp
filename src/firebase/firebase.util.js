import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDrI8OjGlOjbkYd5d-nEIaEQhC2_1g3PZ0",
    authDomain: "ecommerce-db-d26bc.firebaseapp.com",
    databaseURL: "https://ecommerce-db-d26bc.firebaseio.com",
    projectId: "ecommerce-db-d26bc",
    storageBucket: "ecommerce-db-d26bc.appspot.com",
    messagingSenderId: "195064753405",
    appId: "1:195064753405:web:226c06ca0607cbc6526294"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;