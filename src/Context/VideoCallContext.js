import React, { useState, useMemo, useContext } from 'react';

export const VideoCallContext = React.createContext(null);

function VideoCallContextWrapper(props) {
  //Handles tables drawer
  const [showTables, setShowTables] = useState(false);
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  //Global toggle tables drawer
  function handleTablesState() {
    setShowTables((prevState) => !prevState);
  }
  function handleDrawerState() {
    setShowSideDrawer((prevState) => !prevState);
  }

  //Memoize context values
  const viewValue = useMemo(
    () => ({
      showTables,
      showSideDrawer,
      handleTablesState,
      handleDrawerState,
    }),
    [showTables, showSideDrawer],
  );

  return (
    <VideoCallContext.Provider value={viewValue}>
      {props.children}
    </VideoCallContext.Provider>
  );
}

export function useVideoCallContext() {
  return useContext(VideoCallContext);
}

export default VideoCallContextWrapper;
