import React from "react";
import HamburgerHeader from "../../Components/HamburgerHeader";

import styled from "styled-components";
import DashBoardCardLayout from "../../Components/DashBoardHomeCard/DashBoardCardLayout";
import DashBoardHomeCard from "../../Components/DashBoardHomeCard";
import CurrBalance from "../../Components/CurrBalance"
import Button from "../../Commons/Button";

const WalletBalance = ({ currentBal }) => {
  return (
    <WalletLayout>
      <HamburgerHeader title="Wallet Balance" />
      <CurrBalance/>
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


export default WalletBalance;
