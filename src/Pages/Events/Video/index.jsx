import React, { useEffect } from 'react';
import Styled from 'styled-components';
import VideoCallLayout from '../../../Commons/VideoCallLayout';
import Drawer from '../../../Commons/Drawer';
import { useAppContext } from '../../../Context/AppContext';
import { useVideoCallContext } from '../../../Context/VideoCallContext';
import { useLocation } from 'react-router-dom';
import eyeson from 'eyeson';
import Button from '../../../Commons/Button';
import FormInput from '../../../Components/FormInput/Index';
import Colors from '../../../Commons/Colors';

function Video() {
  const { showDrawer, showSpray, handleSprayState } = useAppContext();
  const { showTables, showSideDrawer } = useVideoCallContext();
  const { state } = useLocation();

  // useEffect(() => {
  //   window.localStorage.setItem('vak', state.accessKey);
  //   let accessKey = state.accessKey || window.localStorage.getItem('vak');
  //   eyeson.onEvent((event) => {
  //     if (event.type !== 'accept') {
  //       return;
  //     }
  //     // Note: Some iOS devices might require video to have autoplay attribute set.
  //     let video = document.querySelector('video');
  //     video.srcObject = event.remoteStream;
  //     video.play();
  //   });
  //   eyeson.start(accessKey);
  // }, [state]);

  function closeModal(e) {
    if (e.target.id === 'modalss') {
      handleSprayState();
    }
  }

  return (
    <VideoCallLayout>
      {showDrawer && showSideDrawer ? (
        <Drawer drawerPosition="right"></Drawer>
      ) : null}
      {showDrawer && showTables ? (
        <Drawer drawerPosition="bottom"></Drawer>
      ) : null}
      {showSpray ? (
        <CashModal onClick={closeModal} id="modalss">
          <CashModalWrapper>
            <h3>Wallet Balance</h3>
            <p className="balance">40,000</p>
            <AmountToSpray>
              <p>How much do you want to spray</p>
              <FormInput inputStyle={{ textAlign: 'center' }} />
            </AmountToSpray>
            <SelectDomination>
              <p>Select Domination</p>
              <DinominationWrapper>
                <div className="single-domination">100</div>
                <div className="single-domination">200</div>
                <div className="single-domination">500</div>
                <div className="single-domination">1000</div>
              </DinominationWrapper>
            </SelectDomination>
            <span>You’re spraying N20,000 in N200 denominations</span>
            <Button text="Spray" />
            <Button text="Fund Wallet" cancelbtn={true} />
          </CashModalWrapper>
        </CashModal>
      ) : null}
      <VideoLayer>
        <VideoPlayer className="video"></VideoPlayer>
      </VideoLayer>
    </VideoCallLayout>
  );
}

const VideoLayer = Styled.div`
  height: 100vh;
  width: 100%;
`;

const VideoPlayer = Styled.video`
  background: url('/assets/images/wedding-demo.jpg') no-repeat;
  box-shadow: inset 0px 0px 14px 50px rgba(0,0,0,0.3);
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: absolute;
  object-fit: cover;
`;

const CashModal = Styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999999999;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const CashModalWrapper = Styled.div`
  flex-direction: column;
  width: 85%;
  background: #fff;
  padding: 30px 10px 10px 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  h3 {
    font-weight: 100;
    margin: 0;
  }
  span {
    font-size: 10px;
    margin-bottom: 20px;
    font-weight: 600;
  }
  p.balance {
    font-size: 18px;
    color: ${Colors.defaultGreen};
    margin: 0;
    font-weight: bold;
  }
`;

const AmountToSpray = Styled.div`
  margin-bottom: 20px;
  p {
    font-size: 14px;
  }
`;

const SelectDomination = Styled.div`
  p {
    font-weight: 100;
    font-size: 14px;
  }
`;

const DinominationWrapper = Styled.div`
  display: flex;
  flex-wrap: wrap;
  .single-domination {
    width: 62px;
    height: 32px;
    background: rgba(163, 163, 163, 0.1);
    border-radius: 5px;
    margin-bottom: 20px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0,0,0,0.2);
    padding-top: 5px;
  }
`;

export default Video;
