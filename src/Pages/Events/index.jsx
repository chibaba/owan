import React from 'react';
import { Route } from 'react-router-dom';
import EventsListing from './EventsListing';
import Video from './Video';
import JoinIn from './JoinIn';
import VideoCallContextWrapper from '../../Context/VideoCallContext';

function Event() {
  return (
    <VideoCallContextWrapper>
      <Route path="/event" exact>
        <EventsListing />
      </Route>
      <Route path="/event/video" exact>
        <Video />
      </Route>
      <Route path="/event/join" exact>
        <JoinIn />
      </Route>
    </VideoCallContextWrapper>
  );
}

export default Event;
