import React, { Suspense, lazy } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppContextWrapper from './Context/AppContext';
import DashBoard from './Pages/Dashboard/DashBoard';

const HomePage = lazy(() => import('./Pages/Home'));
const EventPage = lazy(() => import('./Pages/Events'));
const DashboardPage = lazy(() => import('./Pages/Dashboard'));
const WelcomePage = lazy(() => import('./Pages/welcomepage'));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Router>
        <AppContextWrapper>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/events">
            <EventPage />
          </Route>
          <Route path="/dash">
            <DashboardPage />
          </Route>
          <Route path="/welcome">
            <WelcomePage />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
        </AppContextWrapper>
      </Router>
    </Suspense>
  );
}

export default App;
