import React from 'react';
import { Route } from 'react-router-dom';
import EventsListing from './EventsListing';
import Video from './Video';
import JoinIn from './JoinIn';

function Event() {
  return (
    <>
      <Route path="/event" exact>
        <EventsListing />
      </Route>
      <Route path="/event/video" exact>
        <Video />
      </Route>
      <Route path="/event/join" exact>
        <JoinIn />
      </Route>
    </>
  );
}

export default Event;
