import React, { useState, useMemo, useContext } from 'react';

export const VideoCallContext = React.createContext(null);

function VideoCallContextWrapper(props) {
  //Handles tables drawer
  const [showTables, setShowTables] = useState(false);
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [showAttendees, setShowAttendees] = useState(false);
  const [showYoutube, setShowYoutube] = useState(true);
  const [showSprayEffect, setShowSprayEffect] = useState(false);

  //Global toggle tables drawer
  function handleTablesState(value) {
    setShowTables(value);
  }
  function handleSideDrawerState(value) {
    setShowSideDrawer(value);
  }

  function handleShowAttendees(value) {
    setShowAttendees(value);
  }

  function handleShowYoutube(value) {
    setShowYoutube(value);
  }

  function handleSprayEffect(value) {
    setShowSprayEffect(value);
  }

  //Memoize context values
  const viewValue = useMemo(
    () => ({
      showTables,
      showSideDrawer,
      handleTablesState,
      handleSideDrawerState,
      showAttendees,
      handleShowAttendees,
      showYoutube,
      handleShowYoutube,
      showSprayEffect,
      handleSprayEffect,
    }),
    [showTables, showSideDrawer, showAttendees, showYoutube, showSprayEffect],
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
