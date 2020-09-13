import React from 'react';
import styled from 'styled-components';
import Colors from '../../Commons/Colors';

const DashBoardHomeCard = ({ children }) => {
  return (
    <DashboardHomeCardContainer>
      <div>{children}</div>
    </DashboardHomeCardContainer>
  );
};
const DashboardHomeCardContainer = styled.a`
  display: flex;
  height: 138px;
  background: ${Colors.lightDefaultGreen};
  width: 47.25%;
  margin-bottom: 10px;
  border-radius: 4px;
  justify-content: flex-end;
  flex-direction: column;
  align-items: baseline;
  padding: 10px 2px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  div {
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    align-items: baseline;
    justify-content: flex-end;
    span {
      color: ${Colors.defaultGreen};
      font-size: 14px;
      font-weight: 900;
      margin-top: 20px;
    }
    span.amount {
      font-size: 24px;
    }
  }
`;

export default DashBoardHomeCard;
