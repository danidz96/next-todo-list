/* eslint-disable no-async-promise-executor */
import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_MESSAGING_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const logoutUser = () => {
  auth.signOut();
  // window.location = '/login';
};

const getRef = ({ collection, doc }) => db.collection(collection).doc(doc);

export const saveData = async ({ collection = null, data = {}, id = null }) => {
  try {
    const dbRef = db.collection(collection);
    let docRef;
    if (id) {
      dbRef.doc(id);
      await dbRef.doc(id).set(data);
      docRef = getRef({ collection, doc: id });
    } else {
      docRef = await dbRef.add(data);
    }
    const doc = await docRef.get();
    const { id: docId } = doc;
    const docData = doc.data();
    return { id: docId, ref: docRef, ...docData };
  } catch (error) {
    return error;
  }
};

export default firebase;
