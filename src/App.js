import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppContextWrapper from './Context/AppContext';

const HomePage = lazy(() => import('./Pages/Home'));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Router>
        <AppContextWrapper>
          <Route path="/">
            <HomePage />
          </Route>
        </AppContextWrapper>
      </Router>
    </Suspense>
  );
}

export default App;
