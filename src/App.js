import React, { Suspense, lazy } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppContextWrapper from './Context/AppContext';
import UserRegistration from './Pages/auth/UserRegistration';
import VideoCallContextWrapper from './Context/VideoCallContext';
// import ProtectedRoutes from './Commons/Auth/ProtectedRoutes';
import Styled from 'styled-components';
import Wallet from './Pages/Owner/Wallet';
import SuspenseLoader from './Commons/SuspenseLoader';
import ErrorBoundary from './Commons/ErrorBoundary';
import NotFound from './Commons/NotFound';

const HomePage = lazy(() => import('./Pages/Home'));
const EventPage = lazy(() => import('./Pages/Events'));
const EventStatus = lazy(() => import('./Pages/Events/EventStatus'));
const CreateEvent = lazy(() => import('./Pages/StepToCreateEvent/CreateEvent'));
const EventOwnerLogin = lazy(() => import('./Pages/auth/EventOwnerLogin'));
const EventOwnerRegister = lazy(() =>
  import('./Pages/auth/EventOwnerRegister'),
);
const EmailVerification = lazy(() => import('./Pages/auth/EmailVerification'));
const OwnerPage = lazy(() => import('./Pages/Owner'));
const DashboardPage = lazy(() => import('./Pages/Dashboard'));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<SuspenseLoader />}>
        <Router>
          <Switch>
            <AppContextWrapper>
              <BodyWrapper>
                <Route path="/" exact>
                  <HomePage />
                </Route>
                <Route path="/login">
                  <EventOwnerLogin />
                </Route>
                <Route path="/signup">
                  <EventOwnerRegister />
                </Route>
                <Route path="/verify">
                  <EmailVerification />
                </Route>
                {/* <ProtectedRoutes> */}
                <VideoCallContextWrapper>
                  <Route path="/event">
                    <EventPage />
                  </Route>
                </VideoCallContextWrapper>
                <Route path="/dashboard">
                  <DashboardPage />
                </Route>
                {/* </ProtectedRoutes> */}
                <Route path="/userReg">
                  <UserRegistration />
                </Route>
                <Route path="/owner">
                  <OwnerPage />
                </Route>
                <Route path="/owner/wallet">
                  <Wallet />
                </Route>
                <Route path="/owner/createevent">
                  <CreateEvent />
                </Route>
                <Route path="/status">
                  <EventStatus />
                </Route>
                <Route path="/404" exact>
                  <NotFound />
                </Route>
              </BodyWrapper>
            </AppContextWrapper>
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export const BodyWrapper = Styled.div`
  max-width: 480px;
  margin: auto;
  position: relative;
  box-shadow: 0 4px 4px rgba(0,0,0,0.15);
  height: 100vh;
  overflow: scroll;
  @media (max-width: 768px) {
    box-shadow: none;
  }
`;

export default App;
