// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { siteEmail, sitePassword } from './siteLogin';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgeMDNRLFb7asD0uWhC35glwetu7QG1os',
  authDomain: 'carallel-c1899.firebaseapp.com',
  projectId: 'carallel-c1899',
  storageBucket: 'carallel-c1899.appspot.com',
  messagingSenderId: '420703823084',
  appId: '1:420703823084:web:224968fe77f6228fa371c9',
};

// Initialize Firebase
const FireApp = initializeApp(firebaseConfig);
export const auth = getAuth(FireApp);
export const fireDB = getFirestore(FireApp);

export async function create() {
  await createUserWithEmailAndPassword(auth, siteEmail, sitePassword);
}

export async function login() {
  await signInWithEmailAndPassword(auth, siteEmail, sitePassword);
}
