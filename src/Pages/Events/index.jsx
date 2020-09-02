import React from 'react';
import { Route } from 'react-router-dom';
import EventsListing from './EventsListing';
import Video from './Video';
import JoinIn from './JoinIn';

function Event() {
  return (
    <>
      <Route path="/events" exact>
        <EventsListing />
      </Route>
      {/*<Route path="/events/video" exact>
        <Video />
  </Route>*/}
      <Route path="/events/join" exact>
        <JoinIn />
      </Route>
    </>
  );
}

export default Event;
