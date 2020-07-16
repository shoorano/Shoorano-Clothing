import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAklZVZfazBwapDyb8kCDDOdMIXwjF2BEo",
    authDomain: "shoorano-db.firebaseapp.com",
    databaseURL: "https://shoorano-db.firebaseio.com",
    projectId: "shoorano-db",
    storageBucket: "shoorano-db.appspot.com",
    messagingSenderId: "569827664668",
    appId: "1:569827664668:web:207c2a5089318b6cbe50d9",
    measurementId: "G-EG0SVM8L9W"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;