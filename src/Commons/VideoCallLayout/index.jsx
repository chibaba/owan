import React from 'react';
import Header from './Header';
import EventOptions from './EventOptions';
import Drawer from '../Drawer';
import { useAppContext } from '../../Context/AppContext';
import EventComments from './EventComments';
import { useVideoCallContext } from '../../Context/VideoCallContext';

function VideoCallLayout({ children }) {
  const { showDrawer } = useAppContext();
  const { showTables } = useVideoCallContext();
  return (
    <>
      {showDrawer ? (
        <Drawer drawerPosition={showTables ? 'bottom' : 'right'}></Drawer>
      ) : null}
      <Header />
      {children}
      <EventOptions />
      <EventComments />
    </>
  );
}

export default VideoCallLayout;
