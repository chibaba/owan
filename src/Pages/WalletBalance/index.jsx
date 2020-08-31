import React from "react";
import HamburgerHeader from "../../Components/HamburgerHeader";
import Colors from "../../Commons/Colors";
import styled from "styled-components";
import DashBoardCardLayout from "../../Components/DashBoardHomeCard/DashBoardCardLayout";
import DashBoardHomeCard from "../../Components/DashBoardHomeCard";
import Button from "../../Commons/Button";

const WalletBalance = ({ currentBal }) => {
  return (
    <WalletLayout>
      <HamburgerHeader title="Wallet Balance" />
      <CurrBalance>
        <img src="/assets/images/icons/balance.svg" alt="icon" />
        <span className="acctBalance">{currentBal ="N20,000" }</span>
        <span className="bal">Current Balance</span>
      </CurrBalance>
      <h4 className="moneyfor">You Will us this balance to spray money at the event</h4>
      <DashBoardCardLayout>
          <DashBoardHomeCard>
          <img src="/assets/images/icons/balance.svg" alt="icon" />
          <span>N20,000</span>
          <span>Cash gifts</span>

          </DashBoardHomeCard>
          <DashBoardHomeCard>
          <img src="/assets/images/icons/balance.svg" alt="icon" />
          <span>N20,000</span>
          <span>Spray Balance</span>

          </DashBoardHomeCard>
      </DashBoardCardLayout>

      <Button text="Withdraw Funds"/>

     
      
    </WalletLayout>
  );
};
const WalletLayout= styled.div`

width: 90%;
display:flex;
flex-direction: column;
margin: auto;
h4.moneyfor{
    color: #999999;
    font-size: 10px;
    text-align:center;

   
}

`
const CurrBalance = styled.div`
  width: 100%;
  background: rgba(40, 193, 1, 0.15);
  height: 160px;
  border-radius: 5px;
  color: ${Colors.defaultGreen};
  display: flex;
  flex-direction: column;
  text-align:center;
  padding: 0.5rem 0;
  margin: auto;
  
  
  span.acctBalance{
      font-size: 36px;
      font-weight:bold;
      letter-spacing: 1.5px;
      margin: 1rem 0;

  }
  span.bal{
      font-size: 14px;
  }
  @media (min-width: 768px) {
    width: 50%;
    height: 220px;
  }
`;

export default WalletBalance;
