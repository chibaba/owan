import React, { useState } from 'react';
import Styled from 'styled-components';
import DashBoardCardLayout from '../../../Components/DashBoardHomeCard/DashBoardCardLayout';
import DashBoardHomeCard from '../../../Components/DashBoardHomeCard';
import CurrBalance from '../../../Components/CurrBalance';
import Button from '../../../Commons/Button';
import Colors from '../../../Commons/Colors';
import FormInput from '../../../Components/FormInput/Index';

const WalletBalance = ({ isOwner }) => {
  const [showModal, setShowModal] = useState(false);
  const [formAlert, setFormAlert] = useState({
    success: false,
    message: null,
    show: false,
  });

  const handleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  //This would later be determined by response from API call
  const handleSuccess = () => {
    setFormAlert({
      success: true,
      message: 'Your account has been successfully funded',
      show: true,
    });
  };

  const handleFormAlertReset = () => {
    setFormAlert({
      success: false,
      message: null,
      show: false,
    });
  };

  return (
    <>
      {showModal ? (
        <WalletModal>
          <ModalContentArea>
            {!formAlert.show ? (
              <ModalForm>
                <h3>Amount</h3>
                <FormInput
                  placeholder="Enter amount to fund wallet"
                  name="amount"
                  inputStyle={{ textAlign: 'center', marginBottom: '50px' }}
                />
                <Button text="Continue" onClick={handleSuccess} />
                <Button text="Cancel" cancelbtn={true} onClick={handleModal} />
              </ModalForm>
            ) : formAlert.show && formAlert.success ? (
              <SuccessAlert>
                <img src="/assets/images/icons/checkgreen.svg" alt="success" />
                <p>{formAlert.message}</p>
                <Button text="Go Back" onClick={handleFormAlertReset} />
              </SuccessAlert>
            ) : null}
          </ModalContentArea>
        </WalletModal>
      ) : null}
      <WalletLayout>
        <CurrBalance />
        {isOwner ? (
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
        ) : null}
        {isOwner ? (
          <Button text="Withdraw Funds" />
        ) : (
          <Button
            text="Fund Wallet"
            style={{ marginTop: '30px' }}
            onClick={handleModal}
          />
        )}
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
  z-index: 999999999999;
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
