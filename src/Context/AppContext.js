import React, { useState, useMemo, useContext } from 'react';

export const AppContext = React.createContext(null);

function AppContextWrapper(props) {
  //Handles global app drawer
  const [showDrawer, setShowDrawer] = useState(false);
  const [showSpray, setShowSpray] = useState(false);
  const [user, setUser] = useState(null);

  //Global toggle for app drawer
  function handleDrawerState() {
    setShowDrawer((prevState) => !prevState);
  }

  function handleSprayState() {
    setShowSpray((prevState) => !prevState);
  }

  function handleUserState(user) {
    setUser(user);
  }

  //Memoize context values
  const viewValue = useMemo(
    () => ({
      showDrawer,
      handleDrawerState,
      user,
      handleUserState,
      showSpray,
      handleSprayState,
    }),
    [showDrawer, user, showSpray],
  );

  return (
    <AppContext.Provider value={viewValue}>
      {props.children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export default AppContextWrapper;
