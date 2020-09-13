import React, { Suspense, lazy } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppContextWrapper from './Context/AppContext';
import UserRegistration from './Pages/auth/UserRegistration';
import WalletBalance from './Pages/wallet/WalletBalance';
import FundForm from './Pages/wallet/FundForm';
import WalletCredited from './Pages/wallet/WalletCredited';

import VideoCallContextWrapper from './Context/VideoCallContext';
// import ProtectedRoutes from './Commons/Auth/ProtectedRoutes';
import Styled from 'styled-components';
import Wallet from './Pages/Owner/Wallet';

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
    <Suspense fallback="Loading...">
      <BodyWrapper>
        <Router>
          <AppContextWrapper>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/login">
              <EventOwnerLogin />
            </Route>
            <Route path="/signup">
              <EventOwnerRegister />
            </Route>
            {/* <ProtectedRoutes> */}
            <VideoCallContextWrapper>
              <Route path="/events">
                <EventPage />
              </Route>
            </VideoCallContextWrapper>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
            {/* </ProtectedRoutes> */}
            {/*</Route> */}
            <Route path="/userReg">
              <UserRegistration />
            </Route>
            <Route path="/owner">
              <OwnerPage />
            </Route>
            <Route path="/owner/walet">
              <Wallet />
            </Route>
            <Route path="/owner/createevent">
              <CreateEvent />
            </Route>
            <Route path="/status">
              <EventStatus />
            </Route>

            <Route path="/emailverify">
              <EmailVerification />
            </Route>
            <Route path="/wallet">
              <WalletBalance />
            </Route>
            <Route path="/fund">
              <FundForm />
            </Route>
            <Route path="/fundres">
              <WalletCredited />
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
  overflow: scroll;
  @media (max-width: 768px) {
    box-shadow: none;
  }
`;

export default App;
