/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable eol-last */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { Firebase, FieldValue } from './lib/firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={{ Firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);