import React, { useRef } from 'react';
import Styled from 'styled-components';
import { useAppContext } from '../../Context/AppContext';
import Drawer from '../Drawer';
import TitleBar from './TitleBat';
import Icon from '@mdi/react';
import { mdiCalendar, mdiWallet, mdiWrench, mdiLogout } from '@mdi/js';
import Colors from '../Colors';
import 'animate.css';
import cookie from 'js-cookie';

const OwnerLayout = ({ children, pageTitle, fullWidth, nav }) => {
  const { showDrawer, handleDrawerState } = useAppContext();
  const itemRef = useRef(null);
  const walletRef = useRef(null);
  const settingsRef = useRef(null);

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
    window.location.href = '/';
  }

  return (
    <LayoutWrapper>
      {showDrawer ? (
        <Drawer drawerPosition="left">
          <DrawerItemWrapper>
            <DrawerLogo>LinkUp</DrawerLogo>
            <DrawerAvatar></DrawerAvatar>
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
              <DrawerItemDropdown></DrawerItemDropdown>
            </DrawerItem>
            <DrawerItem>
              <DrawerHead
                ref={walletRef}
                onClick={() => dropDownHandler(walletRef)}
              >
                <Icon
                  path={mdiWallet}
                  size={0.9}
                  color={Colors.grayBorderColor}
                />
                <span>Wallet</span>
              </DrawerHead>
              <DrawerItemDropdown></DrawerItemDropdown>
            </DrawerItem>
            <DrawerItem>
              <DrawerHead
                ref={settingsRef}
                onClick={() => dropDownHandler(settingsRef)}
              >
                <Icon
                  path={mdiWrench}
                  size={0.9}
                  color={Colors.grayBorderColor}
                />
                <span>Account Settings</span>
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
      {nav ? (
        <TitleBar page={pageTitle} toggleDrawer={handleDrawerState}></TitleBar>
      ) : null}
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

const DrawerLogo = Styled.h2`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding-bottom: 10px;
  font-weight: bold;
`;

const DrawerAvatar = Styled.div`
  width: 100px;
  height: 100px;
  background: #fff;
  margin: 40px 0;
  box-shadow: 0 0 5px #f1f1f1;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const DrawerItem = Styled.div`
  width: 100%;
  margin-bottom: 20px;
  height: 30px;
  overflow: hidden;
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
  height: 100px;
  background: #000;
`;

export default OwnerLayout;
