import React, { useState, useMemo, useContext } from 'react';

export const VideoCallContext = React.createContext(null);

function VideoCallContextWrapper(props) {
  //Handles tables drawer
  const [showTables, setShowTables] = useState(false);
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  //Global toggle tables drawer
  function handleTablesState(value) {
    setShowTables(value);
  }
  function handleSideDrawerState(value) {
    setShowSideDrawer(value);
  }

  //Memoize context values
  const viewValue = useMemo(
    () => ({
      showTables,
      showSideDrawer,
      handleTablesState,
      handleSideDrawerState,
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
