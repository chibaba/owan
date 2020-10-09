import React, { useEffect, useState } from 'react';
import Header from './Header';
import EventOptions from './EventOptions';
import EventComments from './EventComments';
import { getCallTransactions } from '../../APIs/requests';
import cookie from 'js-cookie';
import api from '../../APIs/endpoints';

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

  console.log(walletBalance);

  return (
    <>
      <Header showSpray={showSpray} wallet={walletBalance} />
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

export default VideoCallLayout;
