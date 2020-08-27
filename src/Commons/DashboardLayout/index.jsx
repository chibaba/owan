import React from 'react';
// import Styled from 'styled-components';
import BottomNav from './BottomNav';

function DashboardLayout({ children }) {
  return (
    <>
      {children}
      <BottomNav />
    </>
  );
}

export default DashboardLayout;
