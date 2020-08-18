import React, { useState, useMemo, useContext } from 'react';

export const AppContext = React.createContext(null);

function AppContextWrapper(props) {
  const [someState, setSomeState] = useState(false);

  function handleAState() {
    setSomeState((prevState) => !prevState);
  }

  const viewValue = useMemo(() => ({ someState, handleAState }), [someState]);

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
