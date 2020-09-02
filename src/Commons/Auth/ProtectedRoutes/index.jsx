import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

function ProtectedRoutes({ children }) {
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem('rt');
    if (!token) {
      history.push('/');
    }
  }, [history]);

  return <>{children}</>;
}

export default ProtectedRoutes;
