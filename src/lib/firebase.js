/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyALWF4OAJIAgOp3BG-IkRo-fDlH2K-kDDM',
  authDomain: 'instagram-359.firebaseapp.com',
  projectId: 'instagram-359',
  storageBucket: 'instagram-359.appspot.com',
  messagingSenderId: '358293155662',
  appId: '1:358293155662:web:f6c8b6904ce68209ceb81f',
};

const Firebase = firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log('Firebase', Firebase);

export { Firebase, FieldValue };
