import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from '../welcomepage/NewWelcomePage';
import Event from '../Events/EventPortal';
import EventDetail from './EventDetails';
import OwnerEvents from '../Events/OwnerEvents';

const Owner = () => {
  return (
    <Switch>
      <Route path="/owner" exact>
        <Welcome />
      </Route>
      <Route path="/owner/event" exact>
        <Event />
      </Route>
      <Route path="/owner/events" exact>
        <OwnerEvents />
      </Route>
      <Route path="/owner/event/details">
        <EventDetail />
      </Route>
    </Switch>
  );
};

export default Owner;
