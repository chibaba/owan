import React from 'react';
import Styled from 'styled-components';

const DashBoardCardLayout = ({ children }) => {
  return <DashboardContent>{children}</DashboardContent>;
};

const DashboardContent = Styled.main`
  width: 100%;
  margin: auto;
  padding: 10px 0; 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  overflow: scroll;
  margin-bottom: 80px;
`;

export default DashBoardCardLayout;
