import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const HomePage = lazy(() => import('./Pages/Home'));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Router>
        <RecoilRoot>
          <Route path="/">
            <HomePage />
          </Route>
        </RecoilRoot>
      </Router>
    </Suspense>
  );
}

export default App;
