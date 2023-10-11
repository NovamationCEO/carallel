// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig, siteEmail, sitePassword } from './siteLogin';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const FireApp = initializeApp(firebaseConfig);
export const auth = getAuth(FireApp);
export const fireDB = getFirestore(FireApp);

export async function create() {
  await createUserWithEmailAndPassword(auth, siteEmail, sitePassword);
}

export async function login(): Promise<boolean> {
  await signInWithEmailAndPassword(auth, siteEmail, sitePassword);
  return true;
}
