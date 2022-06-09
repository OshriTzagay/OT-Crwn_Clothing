import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"; //!Auth
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore"; //!FireStore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBisKv_tkuqkHI7mMl-Ip5sC7D3KvgTSG8",
  authDomain: "crwn-clothing-db-d49bc.firebaseapp.com",
  projectId: "crwn-clothing-db-d49bc",
  storageBucket: "crwn-clothing-db-d49bc.appspot.com",
  messagingSenderId: "888889768533",
  appId: "1:888889768533:web:c69fb9e4988fb37e60b2dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const FirebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const DB = getFirestore();

//!This is how u interact with the database(FireStore),
//!And Add a bunch of objects to the database collection .

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(DB, collectionKey);
  const batch = writeBatch(DB);

  objectsToAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });
  await batch.commit();
  // console.log("Done Uploading to FireStore");
};
////////////////////////////////////////////////////////////

//!Get a bunch of objects from the database collection .--->Changing the collection and re-Ordering ///____>><<<///
export const getCollectionAndDocuments = async () => {
  const collectionRef = collection(DB, "categories");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
}
//! ------------------------- this function creates a user
//!/////////////////////////////////////////////////////////

export const createUserDocFromAuth = async (userAuth, AdditionalInfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(DB, "users", userAuth.uid);
  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists()); // checking if this object exists in DB

  if (!userSnapshot.exists()) {
    //! if user does not exist in DB and fire the code if doesnt.
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...AdditionalInfo, //! this is the additional info that we can add to the user (Because DisplayName Comes NULL!)
      });
    } catch (error) {
      console.log(`error from createUserDocFromAuth: ${error.message}`);
    }
  }

  return userDocRef;
};
//! ------------------------- this function creates a user
//!/////////////////////////////////////////////////////////

export const CreateUserFunctionWithEmailAndPassword = async (
  email,
  password
) => {
  if (!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const LoginInWithEmailAndPass = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
