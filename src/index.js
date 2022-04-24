/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable eol-last */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase';
import { Firebase, FieldValue } from './lib/firebase';
import './styles/app.css';

ReactDOMClient.createRoot(document.getElementById('root'),)
.render(
  <FirebaseContext.Provider value={{ Firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
);