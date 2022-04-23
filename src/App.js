/* eslint-disable react/jsx-filename-extension */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));
function App() {
  // eslint-disable-next-line semi
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
