import React from 'react';
import Header from './Header';
import EventOptions from './EventOptions';
import EventComments from './EventComments';

function VideoCallLayout({ children, showSpray }) {
  return (
    <>
      <Header />
      {children}
      <EventOptions showSpray={showSpray} />
      <EventComments />
    </>
  );
}

export default VideoCallLayout;
