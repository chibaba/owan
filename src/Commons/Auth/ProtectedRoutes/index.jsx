import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import cookie from 'js-cookie';

function ProtectedRoutes({ children }) {
  const { push, location } = useHistory();

  useEffect(() => {
    const token = cookie.get('uid');
    if (!token && !location.pathname.match(/\/event\/[a-z0-9]{24}/g)?.length) {
      push({ pathname: '/login', state: { returnTo: location.pathname } });
    } else if (
      location.pathname.match(/\/event\/[a-z0-9]{24}/g)?.length &&
      !token
    ) {
      push(location.pathname);
    } else {
      push(location.pathname);
    }
  }, [push, location.pathname]);

  return <>{children}</>;
}

export default ProtectedRoutes;
