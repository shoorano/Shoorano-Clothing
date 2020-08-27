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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${ userAuth.uid }`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error);
      }
    }

    return userRef;
  }

  // Add new collections to firebase when required.
  export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    // Batch incase internet connection goes down during upload.
    const batch = firestore.batch();
    objectToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    // Trigger the batch call, on Success returns a null value.
    return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
    const transformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
      const { title, items } = docSnapshot.data();

      return {
        // encode URI converts strings to readable string for url.
        routeName: encodeURI(title.toLowerCase()),
        id: docSnapshot.id,
        title,
        items
      };
    });

    // Return each element of the collections array as an object property, With the value being its title.
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {})
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;