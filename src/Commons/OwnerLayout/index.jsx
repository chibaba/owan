import React from 'react';
import Styled from 'styled-components';
import { useAppContext } from '../../Context/AppContext';
import Drawer from '../Drawer';
import TitleBar from './TitleBat';
import Icon from '@mdi/react';
import { mdiCalendar, mdiWallet, mdiWrench } from '@mdi/js';
import Colors from '../Colors';

const OwnerLayout = ({ children, pageTitle, fullWidth }) => {
  const { showDrawer, handleDrawerState } = useAppContext();
  return (
    <LayoutWrapper>
      {showDrawer ? (
        <Drawer drawerPosition="left">
          <DrawerItemWrapper>
            <DrawerLogo>LinkUp</DrawerLogo>
            <DrawerAvatar></DrawerAvatar>
            <DrawerItem>
              <DrawerHead>
                <Icon
                  path={mdiCalendar}
                  size={0.9}
                  color={Colors.defaultGreen}
                />
                <span>Event</span>
              </DrawerHead>
            </DrawerItem>
            <DrawerItem>
              <DrawerHead>
                <Icon path={mdiWallet} size={0.9} color={Colors.defaultGreen} />
                <span>Wallet</span>
              </DrawerHead>
            </DrawerItem>
            <DrawerItem>
              <DrawerHead>
                <Icon path={mdiWrench} size={0.9} color={Colors.defaultGreen} />
                <span>Account Settings</span>
              </DrawerHead>
            </DrawerItem>
          </DrawerItemWrapper>
        </Drawer>
      ) : null}
      <TitleBar page={pageTitle} toggleDrawer={handleDrawerState}></TitleBar>
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
`;

const DrawerHead = Styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
    opacity: 0.8;
    font-size: 0.9rem;
    padding-top: 5px;
  }
`;

export default OwnerLayout;
