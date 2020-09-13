import React from 'react';
import styled from 'styled-components';
import Colors from '../../Commons/Colors';

const CurrBalance = ({ currentBal }) => {
  return (
    <CurBalance>
      <div>
        <img src="/assets/images/icons/balance.svg" alt="icon" />
        <span className="acctBalance">{(currentBal = 'N20,000')}</span>
        <span className="bal">Current Balance</span>
      </div>
      <h4 className="moneyfor">
        You will use this balance to spray money at the event.
      </h4>
    </CurBalance>
  );
};
const CurBalance = styled.div`
  div {
    width: 100%;
    background: rgba(40, 193, 1, 0.1);
    height: 157px;
    border-radius: 5px;
    color: ${Colors.defaultGreen};
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0.5rem 0;
    margin: auto;
    justify-content: center;
    align-items: center;
    span.acctBalance {
      font-size: 40px;
      font-weight: bold;
      letter-spacing: 1.5px;
      margin: 1rem 0;
    }
    span.bal {
      font-size: 14px;
      font-weight: bold;
    }
  }

  h4 {
    color: ${Colors.textColor};
    font-size: 16px;
    text-align: center;
  }
`;

export default CurrBalance;
