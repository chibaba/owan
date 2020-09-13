import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from '../welcomepage/NewWelcomePage';
import Event from '../Events/EventPortal';
import EventDetail from './EventDetails';

const Owner = () => {
  return (
    <>
      <Route path="/owner" exact>
        <Welcome />
      </Route>
      <Route path="/owner/event" exact>
        <Event />
      </Route>
      <Route path="/owner/event/details">
        <EventDetail />
      </Route>
    </>
  );
};

export default Owner;
