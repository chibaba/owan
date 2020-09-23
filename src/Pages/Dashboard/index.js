import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import api from '../../APIs/endpoints';
import { getCall } from '../../APIs/requests';
import OwnerLayout from '../../Commons/OwnerLayout';
import WalletBalance from '../wallet/WalletBalance';
import DashboardDetail from './Details';
import DashboardHome from './Home';
import toaster from 'toasted-notes';

function Dashboard() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    getCall(api.getEvents)
      .then((response) => {
        if (response.status === 200) {
          setEvents(response.data.reverse());
        }
      })
      .catch((error) => {
        console.log(error.message);
        toaster.notify('Oops!. Something went wrong. Please try again later');
      });
  }, []);

  return (
    <Switch>
      <Route path="/dashboard" exact>
        <DashboardHome event={events && events[0]} />
      </Route>
      <Route path="/dashboard/wallet" exact>
        <OwnerLayout pageTitle={events && events[0].name}>
          <WalletBalance />
        </OwnerLayout>
      </Route>
      <Route path="/dashboard/event/:id" exact>
        <DashboardHome event={events && events[0]} />
      </Route>
      <Route path="/dashboard/event/detail/:id" exact>
        <OwnerLayout pageTitle={events && events[0].name} fullWidth={true}>
          <DashboardDetail id={events && events.id} />
        </OwnerLayout>
      </Route>
    </Switch>
  );
}

export default Dashboard;
