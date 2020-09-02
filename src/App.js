import React, { Suspense, lazy } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppContextWrapper from './Context/AppContext';
import DashBoard from './Pages/Dashboard/DashBoard';
import UserRegistration from './Pages/auth/UserRegistration';
import SuccessPage from './Pages/StepToCreateEvent/SuccessPage';
import WalletBalance from './Pages/wallet/WalletBalance';
import FundWallet from './Pages/wallet/AvailableBalance';
import Report from './Pages/Reports/Report';
import RegsisteredUsers from './Pages/Reports/RegisteredUsers';
import JoinIn from './Pages/Events/JoinIn';
import FundForm from './Pages/wallet/FundForm';
import WalletCredited from './Pages/wallet/WalletCredited';
import PasswordInput from './Pages/Events/PasswordInput';







const HomePage = lazy(() => import('./Pages/Home'));
const EventPage = lazy(() => import('./Pages/Events'));
const DashboardPage = lazy(() => import('./Pages/Dashboard'));
const EventStatus =lazy(() => import('./Pages/Events/EventStatus'))
const CreateEvent= lazy(()=> import('./Pages/StepToCreateEvent/CreateEvent/index'))
const EventOwnerLogin =lazy(()=>import('./Pages/auth/EventOwnerLogin'))
const EventOwnerRegister =lazy(()=>import('./Pages/auth/EventOwnerRegister'))
const EmailVerification =lazy(()=> import('./Pages/auth/EmailVerification'))
const NewDashBoard = lazy(()=>import('./Pages/Dashboard/NewDashBoard'))
const EventPortal = lazy(()=>import('./Pages/Events/EventPortal'))


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
          <Route path="/portal">
            <EventPortal />
          </Route>
          <Route path="/res">
            <SuccessPage />
          </Route>
          <Route path="/bal">
            <WalletBalance />
          </Route>
          <Route path="/fund">
            <FundWallet />
          </Route>
          <Route path="/report">
            <Report/>
          </Route>
          <Route path="/users">
            <RegsisteredUsers/>
          </Route>
          <Route path="/join">
            <JoinIn/>
          </Route>
          <Route path="/addbal">
            <FundForm/>
          </Route>
          <Route path="/done">
            <WalletCredited/>
          </Route>
         
          <Route path="/eventpass">
            <PasswordInput/>
          </Route>
         
          
          
          
        </AppContextWrapper>
      </Router>
    </Suspense>
  );
}

export default App;
