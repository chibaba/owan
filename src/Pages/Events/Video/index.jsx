import React, { useEffect, useRef, useState } from 'react';
import Styled from 'styled-components';
import VideoCallLayout from '../../../Commons/VideoCallLayout';
import Drawer from '../../../Commons/Drawer';
import { useAppContext } from '../../../Context/AppContext';
import { useVideoCallContext } from '../../../Context/VideoCallContext';
import { useLocation } from 'react-router-dom';
import eyeson from 'eyeson';
import Button from '../../../Commons/Button';
import Colors from '../../../Commons/Colors';
import cookie from 'js-cookie';
import { getCallTransactions } from '../../../APIs/requests';
import api from '../../../APIs/endpoints';
import Icon from '@mdi/react';
import { mdiCash100 } from '@mdi/js';

function Video() {
  const {
    showDrawer,
    showSpray,
    handleSprayState,
    handleDenom,
    handleDrawerState,
  } = useAppContext();
  const {
    showTables,
    showSideDrawer,
    handleTablesState,
    showYoutube,
    handleShowYoutube,
    handleShowAttendees,
  } = useVideoCallContext();
  const { state } = useLocation();
  const [walletBalance, setWalletBalance] = useState(0);
  const dinominationRef = useRef(null);
  const [denomination, setDenomination] = useState(0);
  const embedRef = useRef(null);
  const iframeRef = useRef(null);
  const [frameLink, setFrameLink] = useState('');

  // useEffect(() => {
  //   if (state) {
  //     window.localStorage.setItem('vak', state.accessKey);
  //   }
  //   let accessKey = state?.accessKey || window.localStorage.getItem('vak');
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

  useEffect(() => {
    const frame = window.localStorage.getItem('embed');
    if (showYoutube) {
      if (frame) {
        // embedRef.current.innerHTML = frame;
        setFrameLink(frame);
        console.log(window.innerWidth);
        embedRef.current.style.width = window.innerWidth + 'px';
        embedRef.current.style.height = window.innerHeight + 'px';

        handleShowYoutube(true);
        handleShowAttendees(false);
      } else {
        handleShowAttendees(true);
        handleShowYoutube(false);
      }
    }
  }, [showYoutube, handleShowAttendees, handleShowYoutube]);

  useEffect(() => {
    handleDenom(window.localStorage.getItem('denom') || 200);
  }, [handleDenom]);

  useEffect(() => {
    const customerid = cookie.get('auid');

    getCallTransactions(api.getWalletBalance(customerid), {}).then(
      (response) => {
        setWalletBalance(response._embedded?.wallets[0]?.balance / 100);
      },
    );
  }, [showSpray]);

  // useEffect(() => {
  //   const event = JSON.parse(window.localStorage.getItem('event'));
  //   if (showTables) {
  //     getCallTransactions(api.getSpendersClub(event.id))
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, [showTables]);

  function closeModal(e) {
    if (e.target.id === 'modalss') {
      handleSprayState();
    }
  }

  function handleDenominationClick(e) {
    const denomination = dinominationRef.current.querySelectorAll(
      '.single-domination',
    );
    [...denomination].forEach((d) => {
      if (d.classList.contains('active')) {
        d.classList.remove('active');
      }
    });
    e.target.classList.add('active');
    setDenomination(e.target.innerText);
    handleDenom(e.target.innerText);
    window.localStorage.setItem('denom', e.target.innerText);
  }

  return (
    <VideoCallLayout>
      {showDrawer && showSideDrawer ? (
        <Drawer drawerPosition="right">
          <DrawerItemsWrapper>
            <Logo>Owambe.ng</Logo>
            <DrawerItem
              onClick={() => {
                handleTablesState(true);
              }}
            >
              <Icon path={mdiCash100} size={1} />
              Spenders Club
            </DrawerItem>
            <DrawerItem
              onClick={() => {
                handleSprayState();
                handleDrawerState();
              }}
            >
              <span>{window.localStorage.getItem('denom') || 200}</span>
              Denomination
            </DrawerItem>
            <LeaveEvent
              onClick={() => {
                window.location.href = '/dashboard';
              }}
            >
              Leave Event
            </LeaveEvent>
          </DrawerItemsWrapper>
        </Drawer>
      ) : null}
      {showDrawer && showTables ? (
        <Drawer drawerPosition="bottom">
          <SpendersHeader>
            <SpenderContentWrapper>
              <h2>Spenders Club</h2>
            </SpenderContentWrapper>
          </SpendersHeader>
          <MainName>
            <span>01</span>
            <div></div>
            <span className="name">Ayodele Adeleke</span>
          </MainName>
          <BorderB>
            <MainName style={{ boxShadow: 'none', marginTop: '10px' }}>
              <span>02</span>
              <div></div>
              <span className="name">Ayodele Adeleke</span>
            </MainName>
          </BorderB>
          <BorderB>
            <MainName style={{ boxShadow: 'none', marginTop: '10px' }}>
              <span>03</span>
              <div></div>
              <span className="name">Ayodele Adeleke</span>
            </MainName>
          </BorderB>
          <BorderB>
            <MainName style={{ boxShadow: 'none', marginTop: '10px' }}>
              <span>04</span>
              <div></div>
              <span className="name">Ayodele Adeleke</span>
            </MainName>
          </BorderB>
          <BorderB>
            <MainName style={{ boxShadow: 'none', marginTop: '10px' }}>
              <span>05</span>
              <div></div>
              <span className="name">Ayodele Adeleke</span>
            </MainName>
          </BorderB>
          <BorderB>
            <MainName style={{ boxShadow: 'none', marginTop: '10px' }}>
              <span>06</span>
              <div></div>
              <span className="name">Ayodele Adeleke</span>
            </MainName>
          </BorderB>
        </Drawer>
      ) : null}
      {showSpray ? (
        <CashModal onClick={closeModal} id="modalss">
          <CashModalWrapper>
            <h3>Wallet Balance</h3>
            <p className="balance">{walletBalance}</p>
            {/* <AmountToSpray>
              <p>How much do you want to spray</p>
              <FormInput
                inputStyle={{ textAlign: 'center' }}
                onChange={(e) => setSprayAmount(e.target.value)}
              />
            </AmountToSpray> */}
            <SelectDomination>
              <p>Select Domination</p>
              <DinominationWrapper ref={dinominationRef}>
                <div
                  className="single-domination"
                  onClick={handleDenominationClick}
                >
                  200
                </div>
                <div
                  className="single-domination"
                  onClick={handleDenominationClick}
                >
                  500
                </div>
                <div
                  className="single-domination"
                  onClick={handleDenominationClick}
                >
                  1000
                </div>
              </DinominationWrapper>
            </SelectDomination>
            <span>You’re spraying &#8358;{denomination} denominations</span>
            <Button text="Change" onClick={handleSprayState} />
            <Button text="Fund Wallet" cancelbtn={true} />
          </CashModalWrapper>
        </CashModal>
      ) : null}
      <VideoLayer>
        {showYoutube ? (
          <YTVideo
            ref={embedRef}
            src={`${frameLink}?autoplay=1`}
            frameborder="0"
            allowfullscreen
          ></YTVideo>
        ) : null}
        <VideoPlayer
          className="video"
          style={!showYoutube ? { display: 'block' } : { display: 'none' }}
        ></VideoPlayer>
      </VideoLayer>
    </VideoCallLayout>
  );
}

const YTVideo = Styled.iframe`
    box-shadow: inset 0px 0px 14px 50px rgba(0,0,0,0.3);
    width: 100vw
 height: calc(100vw/1.77);
    position: absolute;
    object-fit: cover;
    overflow: hiddden;
`;

const SpendersHeader = Styled.div`
  width: 100%;
  background: ${Colors.defaultGreen};
  height: 200px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  flex-direction: column;
  h2 {
    color: #fff;
  }
`;

const BorderB = Styled.div`
  border-bottom: 0.5px solid #c4c4c4;
`;

const SpenderContentWrapper = Styled.div`
  width: 80%;
  margin: auto;
`;

const MainName = Styled.div`
  width: 80%;
  height: 60px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: -10px auto 10px auto;
  display: flex;
  align-items: center;
  padding: 0 20px;
  span {
    color: #999999;
    font-weight: 700;
  }
  div {
    width: 30px;
    height: 30px;
    border: 4px solid ${Colors.defaultGreen};
    border-radius: 50%;
    margin: 0 30px;
  }
`;

const Logo = Styled.h2`
  margin-bottom: 70px;
`;

const LeaveEvent = Styled.button`
  background: ${Colors.red};
  color: #fff;
  border-radius: 4px;
  border: none;
  padding: 10px;
  font-weight: bold;
  margin-top: 20px;
`;

const DrawerItem = Styled.div`
  display: flex;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
  align-items: flex-end;
  span, svg {
    color: rgba(0,0,0,0.4);
    margin-right: 10px;
    font-weight: bold;
  }
`;

const DrawerItemsWrapper = Styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
`;

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

// const AmountToSpray = Styled.div`
//   margin-bottom: 20px;
//   p {
//     font-size: 14px;
//   }
// `;

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
  .active {
    background: ${Colors.defaultGreen};
    color: #fff;
  }
`;

export default Video;
