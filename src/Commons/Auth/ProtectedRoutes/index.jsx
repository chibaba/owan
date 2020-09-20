import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import cookie from 'js-cookie';

function ProtectedRoutes({ children }) {
  const history = useHistory();

  useEffect(() => {
    const token = cookie.get('uid');
    if (!token) {
      history.push('/');
    }
  }, [history]);

  return <>{children}</>;
}

export default ProtectedRoutes;
