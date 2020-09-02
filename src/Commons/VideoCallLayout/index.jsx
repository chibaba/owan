import React from 'react';
import Header from './Header';
import EventOptions from './EventOptions';
import EventComments from './EventComments';

function VideoCallLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <EventOptions />
      <EventComments />
    </>
  );
}

export default VideoCallLayout;
