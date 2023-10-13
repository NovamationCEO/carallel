// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import * as dotenv from 'dotenv';

dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const FireApp = initializeApp(firebaseConfig);
export const auth = getAuth(FireApp);
export const fireDB = getFirestore(FireApp);

export async function create() {
  await createUserWithEmailAndPassword(
    auth,
    process.env.SITE_EMAIL,
    process.env.SITE_PASSWORD,
  );
}

export async function login(): Promise<boolean> {
  await signInWithEmailAndPassword(
    auth,
    process.env.SITE_EMAIL,
    process.env.SITE_PASSWORD,
  );
  return true;
}
