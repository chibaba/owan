import React, { Suspense, lazy } from 'react';
import './App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppContextWrapper from './Context/AppContext';
import DashBoard from './Pages/dashboard/DashBoard';

const HomePage = lazy(() => import('./Pages/Home'));
const EventPage = lazy(() => import('./Pages/Events'));
const WelcomePage = lazy(()=> import('./Pages/welcomepage'))

function App() {
  return (
    <Suspense fallback="Loading...">
      <Router>
        <AppContextWrapper>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/events" exact>
            <EventPage />
          </Route>
          <Route path="/welcome" exact>
            <WelcomePage/>
          </Route>
          <Route path="/dashboard"  >
            <DashBoard/>
          </Route>
        </AppContextWrapper>
      </Router>
    </Suspense>
  );
}

export default App;
