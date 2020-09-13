import React from 'react';
import styled from 'styled-components';
import DashBoardCardLayout from '../../../Components/DashBoardHomeCard/DashBoardCardLayout';
import DashBoardHomeCard from '../../../Components/DashBoardHomeCard';
import CurrBalance from '../../../Components/CurrBalance';
import Button from '../../../Commons/Button';
import Colors from '../../../Commons/Colors';

const WalletBalance = () => {
  return (
    <WalletLayout>
      <CurrBalance />
      <DashBoardCardLayout>
        <DashBoardHomeCard>
          <img src="/assets/images/icons/balance.svg" alt="icon" />
          <span className="amount">N20,000</span>
          <span>Cash gifts</span>
        </DashBoardHomeCard>
        <DashBoardHomeCard>
          <img src="/assets/images/icons/balance.svg" alt="icon" />
          <span className="amount">N20,000</span>
          <span>Spray Balance</span>
        </DashBoardHomeCard>
      </DashBoardCardLayout>
      <Button text="Withdraw Funds" />
    </WalletLayout>
  );
};
const WalletLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  h4.moneyfor {
    color: ${Colors.textColor};
    font-size: 12px;
    text-align: center;
  }
`;

export default WalletBalance;
