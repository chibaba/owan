import React from 'react';
import { Switch, Route } from 'react-router-dom';
import OwnerLayout from '../../Commons/OwnerLayout';
import WalletBalance from '../wallet/WalletBalance';
import DashboardDetail from './Details';
import DashboardHome from './Home';

function Dashboard() {
  return (
    <Switch>
      <Route path="/dashboard" exact>
        <DashboardHome />
      </Route>
      <Route path="/dashboard/wallet" exact>
        <OwnerLayout pageTitle="Wallet Balance">
          <WalletBalance />
        </OwnerLayout>
      </Route>
      <Route path="/dashboard/event/detail" exact>
        <OwnerLayout pageTitle="Pride at the Disco!" fullWidth={true}>
          <DashboardDetail />
        </OwnerLayout>
      </Route>
    </Switch>
  );
}

export default Dashboard;
