import React, { useState } from 'react';
import { postCallTransactions } from '../../../APIs/requests';
import api from '../../../APIs/endpoints';
import cookie from 'js-cookie';
import Button from '../../../Commons/Button';
import { Header, Content, Banner } from './dressup';
import {
  LoadingDiv,
  ModalContentArea,
  ModalForm,
  WalletModal,
  SuccessAlert,
} from '../../wallet/WalletBalance';
import FormInput from '../../../Components/FormInput/Index';
import { PaystackButton } from 'react-paystack';
import toast from 'toasted-notes';
import { useHistory } from 'react-router-dom';

const DressUp = () => {
  const userId = cookie.get('auid');
  const userData = JSON.parse(cookie.get('udt'));
  const [loading, setLoading] = useState(false);
  const [showFundWallet, setShowFundWallet] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const [showWithdraw] = useState(false);
  const [banks] = useState(null);
  const [accountNumber, setAccountNumber] = useState('');
  const [accountDetails] = useState(null);
  const [setWithdrawAmount] = useState('');
  const [initializeWithdrawalData] = useState(null);
  const history = useHistory();
  const returnPage = window.localStorage.getItem('returnTo');

  const [transferAuth, setTransferAuth] = useState({
    bankCode: '',
    accountNumber: '',
    userId,
  });

  const initializePaymentData = {
    amount,
    email: userData?.email,
    provider: 'paystack',
    userId: userData?.userId,
  };

  const [formAlert, setFormAlert] = useState({
    success: false,
    message: null,
    show: false,
  });

  const [paystackProps, setPaystackProps] = useState({
    email: '',
    amount,
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
    text: 'Fund wallet',
    reference: '',
    onSuccess: () =>
      toast.notify('Wallet successfully funded!', {
        position: 'bottom',
        duration: 5000,
      }),
    onClose: () => {},
  });

  const handleFormAlertReset = () => {
    setFormAlert({
      success: false,
      message: null,
      show: false,
    });
  };

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

  const handleAmountChange = (e) => {
    let amount = e.target.value;
    setAmount(+e.target.value * 100);
    setPaystackProps((prevState) => ({ ...prevState, amount: +amount * 100 }));
  };

  const callback = () => {
    setShowModal(false);
  };
  const close = () => {
    setShowModal(false);
  };

  const initializeModalPayment = async () => {
    console.log(initializePaymentData);
    return postCallTransactions(
      `${process.env.REACT_APP_TREF_API}/payments/v1/paystack/initialize`,
      initializePaymentData,
    ).then((response) => response.data.reference);
  };

  const handleAddTransferAuth = () => {
    setLoading(true);
    postCallTransactions(api.withdrawFunds, initializeWithdrawalData, {})
      .then((response) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.notify(error.message, { position: 'top', duration: 5000 });
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
                  {loading ? (
                    <LoadingDiv>
                      <img
                        src="/assets/images/icons/loading.svg"
                        alt="Loading..."
                      />
                    </LoadingDiv>
                  ) : null}
                  <h3>Amount</h3>
                  <FormInput
                    placeholder="Enter amount to fund wallet"
                    name="amount"
                    type="number"
                    onChange={handleAmountChange}
                    inputStyle={{ textAlign: 'center', marginBottom: '50px' }}
                  />
                  <PaystackButton
                    text="Make Payment"
                    className="payButton"
                    callback={callback}
                    close={close}
                    reference={paystackProps.reference}
                    email={userData?.email}
                    amount={paystackProps.amount}
                    publicKey={process.env.REACT_APP_PAYSTACK_PUBLIC_KEY}
                    embed={true}
                    tag="button"
                  />
                  <Button
                    onClick={async () => {
                      if (!amount || amount / 100 < 100) {
                        toast.notify(
                          'You can only fund your wallet with 100 naira and above',
                          { position: 'top', duration: 5000 },
                        );
                      } else {
                        setLoading(true);
                        initializeModalPayment().then((response) => {
                          if (response) {
                            setPaystackProps((prevState) => ({
                              ...prevState,
                              reference: response,
                            }));
                            setTimeout(() => {
                              document.querySelector('.payButton').click();
                              setShowModal(false);
                              history.push({
                                pathname: returnPage || '/dashboard',
                                state: { user: userData },
                              });
                            }, 2000);
                          }
                        });
                      }
                    }}
                    text="Continue"
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
      <Header>Load Up</Header>
      <Banner bg="/assets/spraying-money.jpg" />
      <Content>
        <p>
          An Owambe is not complete without your wad of mint of money. How will
          they know you came? Haha.
        </p>
        <h3 style={{ textAlign: 'center' }}>Load Your Wallet</h3>
        <Button text="Fund Wallet" onClick={handleModal} />
      </Content>
    </>
  );
};

export default DressUp;
