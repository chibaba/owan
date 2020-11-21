import React, { useEffect, useState } from 'react';
import Header from './Header';
import EventOptions from './EventOptions';
import EventComments from './EventComments';
import { getCallTransactions } from '../../APIs/requests';
import cookie from 'js-cookie';

function VideoCallLayout({ children, showSpray }) {
  const [walletBalance, setWalletBalance] = useState(null);

  useEffect(() => {
    const customerid = cookie.get('auid');

    getCallTransactions(`${process.env.REACT_APP_TREF_API}/billings/wallets?customerId=${customerid}`, {}).then(
      (response) => {
        if (response._embedded?.wallets.length) {
          setWalletBalance(response._embedded?.wallets[0]?.balance / 100);
        } else {
          setWalletBalance(0);
        }
      },
    ).catch(error => {
      console.log(error)
    });
  }, [showSpray]);

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
