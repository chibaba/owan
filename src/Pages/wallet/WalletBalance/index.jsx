import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import DashBoardCardLayout from '../../../Components/DashBoardHomeCard/DashBoardCardLayout';
import DashBoardHomeCard from '../../../Components/DashBoardHomeCard';
import CurrBalance from '../../../Components/CurrBalance';
import Button from '../../../Commons/Button';
import Colors from '../../../Commons/Colors';
import FormInput from '../../../Components/FormInput/Index';
import {
  postCallTransactions,
  getCallTransactions,
  getCall,
} from '../../../APIs/requests';
import api from '../../../APIs/endpoints';
import toast from 'toasted-notes';
import cookie from 'js-cookie';
import { useLocation } from 'react-router-dom';

const WalletBalance = ({ isOwner }) => {
  const userId = cookie.get('auid');
  const [showModal, setShowModal] = useState(false);
  const [formAlert, setFormAlert] = useState({
    success: false,
    message: null,
    show: false,
  });
  const [showFundWallet, setShowFundWallet] = useState(false);
  const [showWithdraw] = useState(false);
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [banks, setBanks] = useState(null);
  const { pathname } = useLocation();
  const [transferAuth, setTransferAuth] = useState({
    bankCode: '',
    accountNumber: '',
    userId,
  });
  const [accountNumber, setAccountNumber] = useState('');
  const [accountDetails, setAccountDetails] = useState(null);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [initializeWithdrawalData, setInitializeWithdrawalData] = useState(
    null,
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const customerid = cookie.get('auid');

    getCallTransactions(api.getWalletBalance(customerid), {}).then(
      (response) => {
        setBalance(response._embedded?.wallets[0]?.balance);
      },
    );
  }, []);

  useEffect(() => {
    if (showWithdraw) {
      getCall(api.fetchBankList('paystack'))
        .then((response) => {
          setBanks(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [showWithdraw]);

  useEffect(() => {
    if (accountNumber.toString().length === 10) {
      setLoading(true);
      postCallTransactions(api.addTransferAuth, transferAuth, {})
        .then((response) => {
          setLoading(false);
          const transferAuthResponse = response.data;
          setAccountDetails({
            accountName: transferAuthResponse.meta.account_name,
          });
          setInitializeWithdrawalData({
            transferAuthId: transferAuthResponse.transferAuthId,
            userId,
            amount: withdrawAmount,
            paymentProvider: 'paystack',
            clientId: process.env.REACT_APP_PAYMENT_CLIENT_ID,
          });
        })
        .catch((error) => {
          setLoading(false);
          toast.notify(error.message, {
            position: 'bottom',
            duration: 5000,
          });
        });
    }
  }, [accountNumber, transferAuth, userId, withdrawAmount]);

  const renderBanks = () => {
    return banks?.map((bank, index) => {
      return (
        <option key={index} value={bank.bankCode}>
          {bank.bankName}
        </option>
      );
    });
  };

  const handleModal = () => {
    setShowModal((prevState) => !prevState);
    setShowFundWallet(!showFundWallet);
  };

  // const handleWithdrawModal = () => {
  //   setShowModal((prevState) => !prevState);
  //   setShowWithdraw(!showWithdraw);
  // };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFormAlertReset = () => {
    setFormAlert({
      success: false,
      message: null,
      show: false,
    });
  };

  const handleInitializePayment = (e) => {
    e.preventDefault();
    const data = {
      amount: (amount * 100).toString(),
      redirectUrl: `${process.env.REACT_APP_APP_URI}${pathname}`,
    };

    postCallTransactions(api.initializePayment, data, {})
      .then((response) => {
        if (response.data) {
          window.location.href = response.data.url;
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.notify(error.message, { position: 'bottom', duration: 5000 });
      });
  };

  const handleAddTransferAuth = () => {
    setLoading(true);
    postCallTransactions(api.withdrawFunds, initializeWithdrawalData, {})
      .then((response) => {
        setLoading(false);
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        toast.notify(error.message, { position: 'bottom', duration: 5000 });
      });
  };

  return (
    <>
      {showModal ? (
        <WalletModal>
          {showFundWallet ? (
            <ModalContentArea>
              {!formAlert.show ? (
                <ModalForm onSubmit={(e) => e.preventDefault()}>
                  <h3>Amount</h3>
                  <FormInput
                    placeholder="Enter amount to fund wallet"
                    name="amount"
                    type="number"
                    onChange={handleAmountChange}
                    inputStyle={{ textAlign: 'center', marginBottom: '50px' }}
                  />
                  <Button
                    text="Continue"
                    onClick={handleInitializePayment}
                    loading={loading}
                  />
                  <Button
                    text="Cancel"
                    cancelbtn={true}
                    onClick={handleModal}
                  />
                </ModalForm>
              ) : formAlert.show && formAlert.success ? (
                <SuccessAlert>
                  <img
                    src="/assets/images/icons/checkgreen.svg"
                    alt="success"
                  />
                  <p>{formAlert.message}</p>
                  <Button text="Go Back" onClick={handleFormAlertReset} />
                </SuccessAlert>
              ) : null}
            </ModalContentArea>
          ) : showWithdraw ? (
            <ModalContentArea>
              <ModalForm onSubmit={(e) => e.preventDefault()}>
                <h3>Bank Details</h3>
                <select
                  onChange={(e) =>
                    setTransferAuth({
                      ...transferAuth,
                      bankCode: e.target.value,
                    })
                  }
                >
                  <option>Select Bank</option>
                  {renderBanks()}
                </select>
                <FormInput
                  placeholder="Account Number"
                  name="accountNumber"
                  type="number"
                  value={accountNumber}
                  onChange={(e) => {
                    setAccountNumber(e.target.value);
                    setTransferAuth({
                      ...transferAuth,
                      accountNumber: e.target.value,
                    });
                  }}
                  inputStyle={{ marginBottom: '10px' }}
                  loading={loading}
                />
                {accountDetails ? (
                  <>
                    <p>
                      Account Name: <span>{accountDetails?.accountName}</span>
                    </p>
                    <FormInput
                      placeholder="Enter Ammount"
                      name="withdrawAmmount"
                      type="number"
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      inputStyle={{ marginBottom: '10px' }}
                    />
                  </>
                ) : null}
                <Button
                  text="Continue"
                  onClick={handleAddTransferAuth}
                  loading={loading}
                />
                <Button text="Cancel" cancelbtn={true} onClick={handleModal} />
              </ModalForm>
            </ModalContentArea>
          ) : null}
        </WalletModal>
      ) : null}
      <WalletLayout>
        <CurrBalance balance={balance} />
        {isOwner ? (
          <DashBoardCardLayout>
            <DashBoardHomeCard>
              <img src="/assets/images/icons/balance.svg" alt="icon" />
              <span className="amount">N0</span>
              <span>Cash gifts</span>
            </DashBoardHomeCard>
            <DashBoardHomeCard>
              <img src="/assets/images/icons/balance.svg" alt="icon" />
              <span className="amount">N0</span>
              <span>Spray Balance</span>
            </DashBoardHomeCard>
          </DashBoardCardLayout>
        ) : null}
        {/* <Button text="Withdraw Funds" onClick={handleWithdrawModal} /> */}
        <Button
          text="Fund Wallet"
          style={{ marginTop: '30px' }}
          onClick={handleModal}
        />
      </WalletLayout>
    </>
  );
};
const WalletLayout = Styled.div`
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

export const WalletModal = Styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  max-width: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ModalContentArea = Styled.div`
  width: 90%;
  margin: auto;
  background: #fff;
  padding: 10px 0;
  border-radius: 5px;
`;

export const ModalForm = Styled.form`
    width: 90%;
    margin: auto;
    text-align: center;
    select {
      width: 100%;
      box-sizing: border-box;
      padding: 14px;
      font: inherit;
      margin-top: 5px;
      margin-bottom: 1rem;
      border: 1px solid #c4c4c4;
      outline: none;
    }
`;

const SuccessAlert = Styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  margin: auto;
  p {
    font-weight: bold;
    width: 60%;
    text-align: center;
  }
  button {
    margin-top: 20px;
  }
`;

export default WalletBalance;
