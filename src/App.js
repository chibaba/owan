import React, { Suspense, lazy } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppContextWrapper from './Context/AppContext';
import DashBoard from './Pages/Dashboard/DashBoard';
import UserRegistration from './Commons/UserRegistration';

const HomePage = lazy(() => import('./Pages/Home'));
const EventPage = lazy(() => import('./Pages/Events'));
const DashboardPage = lazy(() => import('./Pages/Dashboard'));
const EventStatus =lazy(() => import('./Pages/EventStatus'))
const CreateEvent= lazy(()=> import('./Pages/StepToCreateEvent/CreateEvent/index'))
const EventOwnerLogin =lazy(()=>import('./Pages/EventOwnerLogin'))
const EventOwnerRegister =lazy(()=>import('./Pages/EventOwnerRegister'))
const EmailVerification =lazy(()=> import('./Pages/EmailVerification'))
const NewDashBoard = lazy(()=>import('./Pages/NewDashBoard'))


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
          <Route path="/userReg">
            <UserRegistration/>
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/newDashboard">
            <NewDashBoard />
          </Route>
          <Route path="/status">
            <EventStatus />
          </Route>
          <Route path="/createEvent">
            <CreateEvent />
          </Route>
          <Route path="/eventLogin">
            <EventOwnerLogin />
          </Route>
          <Route path="/eventreg">
            <EventOwnerRegister />
          </Route>
          <Route path="/emailverify">
            <EmailVerification />
          </Route>
        </AppContextWrapper>
      </Router>
    </Suspense>
  );
}

export default App;
