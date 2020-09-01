import React, { Suspense, lazy } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppContextWrapper from './Context/AppContext';
import DashBoard from './Pages/Dashboard/DashBoard';
import UserRegistration from './Commons/UserRegistration';
import VideoCallContextWrapper from './Context/VideoCallContext';
import ProtectedRoutes from './Commons/Auth/ProtectedRoutes';
import Styled from 'styled-components';

const HomePage = lazy(() => import('./Pages/Home'));
const EventPage = lazy(() => import('./Pages/Events'));
const DashboardPage = lazy(() => import('./Pages/Dashboard'));
const EventStatus = lazy(() => import('./Pages/EventStatus'));
const CreateEvent = lazy(() =>
  import('./Pages/StepToCreateEvent/CreateEvent/index'),
);
const EventOwnerLogin = lazy(() => import('./Pages/EventOwnerLogin'));
const EventOwnerRegister = lazy(() => import('./Pages/EventOwnerRegister'));
const EmailVerification = lazy(() => import('./Pages/EmailVerification'));
const NewDashBoard = lazy(() => import('./Pages/NewDashBoard'));
const EventPortal = lazy(() => import('./Pages/EventPortal'));

function App() {
  return (
    <Suspense fallback="Loading...">
      <BodyWrapper>
        <Router>
          <AppContextWrapper>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <ProtectedRoutes>
              <VideoCallContextWrapper>
                <Route path="/events">
                  <EventPage />
                </Route>
              </VideoCallContextWrapper>
              <Route path="/dashboard">
                <DashboardPage />
              </Route>
            </ProtectedRoutes>
            <Route path="/userReg">
              <UserRegistration />
            </Route>
            <Route path="/dash">
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
            <Route path="/login">
              <EventOwnerLogin />
            </Route>
            <Route path="/signup">
              <EventOwnerRegister />
            </Route>
            <Route path="/emailverify">
              <EmailVerification />
            </Route>
            <Route path="/portal">
              <EventPortal />
            </Route>
          </AppContextWrapper>
        </Router>
      </BodyWrapper>
    </Suspense>
  );
}

export const BodyWrapper = Styled.div`
  max-width: 480px;
  margin: auto;
  position: relative;
  box-shadow: 0 4px 4px rgba(0,0,0,0.15);
  height: 100vh;
`;

export default App;
