import React from 'react';
import Styled from 'styled-components';

const DashBoardCardLayout = ({ children, notFull }) => {
  return <DashboardContent notFull={notFull}>{children}</DashboardContent>;
};

const DashboardContent = Styled.main`
  width: ${({ notFull }) => (notFull ? '90%' : '100%')};
  margin: auto;
  padding: 10px 0; 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  overflow: scroll;
  margin-bottom: 30px;
`;

export default DashBoardCardLayout;
