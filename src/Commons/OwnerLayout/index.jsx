import React from 'react';
import Styled from 'styled-components';
import { useAppContext } from '../../Context/AppContext';
import Drawer from '../Drawer';
import TitleBar from './TitleBat';

const OwnerLayout = ({ children, pageTitle, fullWidth }) => {
  const { showDrawer, handleDrawerState } = useAppContext();
  console.log(showDrawer, 'klhkjhhkh');
  return (
    <LayoutWrapper>
      {showDrawer ? (
        <Drawer drawerPosition="left">
          <DrawerItemWrapper>
            <DrawerLogo>LinkUp</DrawerLogo>
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
  margin: auto auto 100px auto;
  height: max-content;
`;

const DrawerItemWrapper = Styled.div`
  padding: 50px 20px;
`;

const DrawerLogo = Styled.h2`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding-bottom: 10px;
  font-weight: bold;
`;

export default OwnerLayout;
