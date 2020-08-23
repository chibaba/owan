import React, { useState, useMemo, useContext } from 'react';

export const AppContext = React.createContext(null);

function AppContextWrapper(props) {
  //Handles global app drawer
  const [showDrawer, setShowDrawer] = useState(false);

  //Global toggle for app drawer
  function handleDrawerState() {
    setShowDrawer((prevState) => !prevState);
  }

  //Memoize context values
  const viewValue = useMemo(() => ({ showDrawer, handleDrawerState }), [
    showDrawer,
  ]);

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
