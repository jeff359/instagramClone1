/* eslint-disable linebreak-style */
/* eslint-disable no-multi-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable keyword-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable space-before-blocks */
/* eslint-disable import/newline-after-import */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from 'react';

import 'firebase/compat/auth';
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import FirebaseContext from '../context/firebase';

export default function useAuthListener(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const auth = getAuth();
    const { firebase } = useContext(FirebaseContext);
    useEffect(() => {
        const listener = onAuthStateChanged(auth,  (authUser) => {
          if (authUser) {
            // we have a user...therefore we can store the user in localstorage
            localStorage.setItem('authUser', JSON.stringify(authUser));
            setUser(authUser);
          } else {
            // we don't have an authUser, therefore clear the localstorage
            localStorage.removeItem('authUser');
            setUser(null);
          }
        });
        return () => listener();
    }, [firebase]);

    return{user};
}