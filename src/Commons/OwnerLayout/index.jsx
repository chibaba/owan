import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Styled from 'styled-components';
import { useAppContext } from '../../Context/AppContext';
import Drawer from '../Drawer';
import TitleBar from './TitleBat';
import Icon from '@mdi/react';
import {
  mdiCalendar,
  mdiWallet,
  mdiWrench,
  mdiLogout,
  mdiGauge,
} from '@mdi/js';
import Colors from '../Colors';
import 'animate.css';
import cookie from 'js-cookie';

const OwnerLayout = ({ children, pageTitle, fullWidth, nav }) => {
  const { showDrawer, handleDrawerState } = useAppContext();
  const itemRef = useRef(null);
  const walletRef = useRef(null);
  const settingsRef = useRef(null);
  const history = useHistory();

  function dropDownHandler(ref) {
    if (
      !ref.current.parentNode.style.height ||
      ref.current.parentNode.style.height === '30px'
    ) {
      ref.current.parentNode.style.height = 'max-content';
      ref.current.parentNode.style.transition = '0.2s';
    } else {
      ref.current.parentNode.style.height = '30px';
    }
  }

  function handleLogout() {
    cookie.remove('uid');
    cookie.remove('auid');
    window.localStorage.clear();
    window.location.href = '/';
  }

  return (
    <LayoutWrapper>
      {showDrawer ? (
        <Drawer drawerPosition="left">
          <DrawerItemWrapper>
            <DrawerLogo src="/assets/images/owambe-logo.png" alt="Logo" />
            <DrawerAvatar></DrawerAvatar>
            <DrawerItem>
              <DrawerHead
                onClick={() => {
                  history.push('/dashboard');
                  handleDrawerState();
                }}
              >
                <Icon
                  path={mdiGauge}
                  size={0.9}
                  color={Colors.grayBorderColor}
                />
                <span>Dashboard</span>
              </DrawerHead>
            </DrawerItem>
            <DrawerItem>
              <DrawerHead
                ref={itemRef}
                onClick={() => dropDownHandler(itemRef)}
              >
                <Icon
                  path={mdiCalendar}
                  size={0.9}
                  color={Colors.grayBorderColor}
                />
                <span>Event</span>
              </DrawerHead>
              <DrawerItemDropdown>
                <Link
                  to="/owner/createevent"
                  onClick={() => {
                    handleDrawerState();
                  }}
                >
                  Create Event
                </Link>
                <Link
                  to="/owner/events"
                  onClick={() => {
                    handleDrawerState();
                  }}
                >
                  My Events
                </Link>
                <Link
                  to="/owner/upcoming"
                  onClick={() => {
                    handleDrawerState();
                  }}
                >
                  Upcoming Events
                </Link>
              </DrawerItemDropdown>
            </DrawerItem>
            <DrawerItem>
              <DrawerHead
                ref={walletRef}
                onClick={() => {
                  history.push('/owner/wallet');
                  handleDrawerState();
                }}
              >
                <Icon
                  path={mdiWallet}
                  size={0.9}
                  color={Colors.grayBorderColor}
                />
                <span>Wallet</span>
              </DrawerHead>
            </DrawerItem>
            {/* <DrawerItem>
              <DrawerHead
                ref={walletRef}
                onClick={() => {
                  history.push('/owner/transactions');
                  handleDrawerState();
                }}
              >
                <Icon
                  path={mdiPiggyBank}
                  size={0.9}
                  color={Colors.grayBorderColor}
                />
                <span>Transactions</span>
              </DrawerHead>
            </DrawerItem> */}
            <DrawerItem>
              <DrawerHead
                ref={settingsRef}
                onClick={() => {
                  history.push('/owner/profile');
                  handleDrawerState();
                }}
              >
                <Icon
                  path={mdiWrench}
                  size={0.9}
                  color={Colors.grayBorderColor}
                />
                <span>Profile</span>
              </DrawerHead>
              <DrawerItemDropdown></DrawerItemDropdown>
            </DrawerItem>
            <DrawerItem>
              <DrawerHead onClick={handleLogout}>
                <Icon
                  path={mdiLogout}
                  size={0.9}
                  color={Colors.grayBorderColor}
                />
                <span>Logout</span>
              </DrawerHead>
              <DrawerItemDropdown></DrawerItemDropdown>
            </DrawerItem>
          </DrawerItemWrapper>
        </Drawer>
      ) : null}
      <TitleBar
        page={pageTitle}
        toggleDrawer={handleDrawerState}
        nav={nav}
      ></TitleBar>
      <ContentWrapper full={fullWidth}>{children}</ContentWrapper>
    </LayoutWrapper>
  );
};

const LayoutWrapper = Styled.div`
  width: 100%;
`;

const ContentWrapper = Styled.main`
  width: ${({ full }) => (full ? '100%' : '90%')};
  margin: auto;
  height: 100vh;
  overflow: scroll;
`;

const DrawerItemWrapper = Styled.div`
  padding: 10px 20px;
`;

const DrawerLogo = Styled.img`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding-bottom: 10px;
  font-weight: bold;
  width: 70%;
`;

const DrawerAvatar = Styled.div`
  width: 40px;
  height: 40px;
  background: #fff;
  margin: 40px 0;
  border-radius: 50%;
`;

const DrawerItem = Styled.div`
  width: 100%;
  margin-bottom: 20px;
  height: 30px;
  overflow: hidden;
  cursor: pointer;
`;

const DrawerHead = Styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  span {
    margin-left: 10px;
    opacity: 0.8;
    font-size: 0.9rem;
    padding-top: 5px;
  }
`;

const DrawerItemDropdown = Styled.div`
  width: 100%;
  height: max-content;
  padding: 5px 30px;
  display: flex;
  flex-direction: column;
  a {
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 13px;
  }
`;

export default OwnerLayout;
