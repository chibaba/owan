import React, { useEffect, useState } from 'react';
import Header from './Header';
import EventOptions from './EventOptions';
import EventComments from './EventComments';
import { getCallTransactions } from '../../APIs/requests';
import cookie from 'js-cookie';
import api from '../../APIs/endpoints';
import Styled from 'styled-components';

function VideoCallLayout({ children, showSpray }) {
  const [walletBalance, setWalletBalance] = useState(null);

  useEffect(() => {
    const customerid = cookie.get('auid');

    getCallTransactions(api.getWalletBalance(customerid), {}).then(
      (response) => {
        setWalletBalance(response._embedded?.wallets[0]?.balance / 100);
      },
    );
  }, [showSpray]);

  return (
    <>
      <Header />
      <Wallet>
        <span>Wallet Balance</span>
        &#8358;{walletBalance}
      </Wallet>
      {children}
      <EventOptions
        showSpray={showSpray}
        wallet={walletBalance}
        updateWallet={setWalletBalance}
      />
      <EventComments />
    </>
  );
}

const Wallet = Styled.div`
  width: max-content;
  height: 50px;
  position: absolute;
  z-index: 999999;
  top: 70px;
  right: 5%;
  text-align: right;
  color: #fff;
  font-size: 1.4rem;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  padding: 5px 10px 0 10px;
  border-radius: 4px;
  flex-direction: column;
  span {
    font-size: 10px;
    font-weight: bold;
  }
`;

export default VideoCallLayout;
