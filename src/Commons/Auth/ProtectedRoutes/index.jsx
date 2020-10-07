import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import cookie from 'js-cookie';

function ProtectedRoutes({ children }) {
  const { push, location } = useHistory();

  useEffect(() => {
    const token = cookie.get('uid');
    if (!token) {
      push({ pathname: '/login', state: { returnTo: location.pathname } });
    }
  }, [push, location.pathname]);

  return <>{children}</>;
}

export default ProtectedRoutes;
