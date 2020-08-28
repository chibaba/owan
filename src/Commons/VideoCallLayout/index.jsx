import React from 'react';
import Header from './Header';
import EventOptions from './EventOptions';
import Drawer from '../Drawer';
import { useAppContext } from '../../Context/AppContext';

function VideoCallLayout({ children }) {
  const { showDrawer } = useAppContext();
  return (
    <>
      {showDrawer ? <Drawer drawerPosition="right"></Drawer> : null}
      <Header />
      {children}
      <EventOptions />
    </>
  );
}

export default VideoCallLayout;
