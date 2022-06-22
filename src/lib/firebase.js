/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { reduxFirestore, getFirestore, collection } from 'firebase/firestore';

import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyALWF4OAJIAgOp3BG-IkRo-fDlH2K-kDDM',
  authDomain: 'instagram-359.firebaseapp.com',
  projectId: 'instagram-359',
  storageBucket: 'instagram-359.appspot.com',
  messagingSenderId: '358293155662',
  appId: '1:358293155662:web:f6c8b6904ce68209ceb81f',
};

const firebase = initializeApp(config);
export const db = getFirestore();
export const colRef = collection(db, 'users');
const FieldValue = firebase.firestore;

export { firebase, FieldValue };
