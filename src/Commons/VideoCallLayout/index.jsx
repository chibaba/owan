import React from 'react';
import Header from './Header';
import EventOptions from './EventOptions';
import Drawer from '../Drawer';
import { useAppContext } from '../../Context/AppContext';
import EventComments from './EventComments';

function VideoCallLayout({ children }) {
  const { showDrawer } = useAppContext();
  return (
    <>
      {showDrawer ? <Drawer drawerPosition="right"></Drawer> : null}
      <Header />
      {children}
      <EventOptions />
      <EventComments />
    </>
  );
}

export default VideoCallLayout;
