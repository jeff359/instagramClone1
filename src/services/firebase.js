/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable import/newline-after-import */
import { firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username.toLowerCase())
    .get();

  return result.docs.length > 0;
}
  export default doesUsernameExist;