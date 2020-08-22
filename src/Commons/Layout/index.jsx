import React from 'react';
import Header from '../Header';

function Layout({ children }) {
  return (
    <>
      <Header bordered={true} title="#HenryJane2020" />
      {children}
    </>
  );
}

export default Layout;
