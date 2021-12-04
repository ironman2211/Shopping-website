import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAsnyZ7Tfh4PNHRNbEWHMHAtqGt6_Xktzs',
  authDomain: 'crown-database-240cf.firebaseapp.com',
  projectId: 'crown-database-240cf',
  storageBucket: 'crown-database-240cf.appspot.com',
  messagingSenderId: '964254790859',
  appId: '1:964254790859:web:107c8951d824f98d84174e',
  measurementId: 'G-2QT1F9LTQW',
};
export const createUserProfileDocument = async (UserAuth, additionalData) => {
  if (!UserAuth) return;

  const userRef = firestore.doc(`users/${UserAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = UserAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('the error message is', err);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;