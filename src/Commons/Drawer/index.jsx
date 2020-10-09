import React from 'react';
import Styled from 'styled-components';
import { useAppContext } from '../../Context/AppContext';
import 'animate.css';
import { useVideoCallContext } from '../../Context/VideoCallContext';

function Drawer({ drawerPosition, children }) {
  const { showDrawer, handleDrawerState } = useAppContext();
  const { handleTablesState, handleSideDrawerState } = useVideoCallContext();

  function handleDrawerClose(e) {
    if (e.target.id === 'global-drawer') {
      handleDrawerState();
      handleTablesState(false);
      handleSideDrawerState(false);
    }
  }

  return (
    <DrawerWrapper
      id="global-drawer"
      position={drawerPosition}
      showDrawer={showDrawer}
      onClick={handleDrawerClose}
    >
      <DrawerContent
        position={drawerPosition}
        showDrawer={showDrawer}
        className={
          showDrawer && drawerPosition === 'right'
            ? 'animate__animated animate__fadeInRight animate__delay-0.5s'
            : drawerPosition === 'left'
            ? 'animate__animated animate__fadeInLeft animate__delay-0.5s'
            : 'animate__animated animate__fadeInUp animate__delay-0.5s'
        }
      >
        {children}
      </DrawerContent>
    </DrawerWrapper>
  );
}

const DrawerWrapper = Styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.8);
  display: ${(props) => (props.showDrawer ? 'flex' : 'none')};
  justify-content: ${(props) =>
    props.position === 'bottom' ? 'unset' : 'flex-end'};
  align-items: ${(props) =>
    props.position === 'bottom' ? 'flex-end' : 'unset'};
  transition: 0.2s;
  right: ${(props) =>
    props.position === 'bottom' ? 0 : props.showDrawer ? 0 : '-100%'};
  z-index: 99999999999999;
  @media(max-width: 768px) {
    position: fixed;
  }
`;

//Default height for bottom drawer can be changed
const DrawerContent = Styled.div`
  width: ${(props) =>
    props.position === 'bottom'
      ? '100%'
      : props.position === 'left'
      ? '80%'
      : '50%'};
  height: ${(props) => (props.position === 'bottom' ? 'max-content' : '100vh')};
  min-height: ${(props) => (props.position === 'bottom' ? '75vh' : '100vh')};
  border-top-left-radius: ${(props) =>
    props.position === 'bottom' ? '15px' : 0};
  border-top-right-radius: ${(props) =>
    props.position === 'bottom' ? '15px' : 0};
  background: #fff;
  position: absolute;
  right: ${(props) =>
    props.position === 'bottom'
      ? 0
      : props.position === 'left'
      ? '20%'
      : props.position === 'right'
      ? 0
      : '-60%'};
  transition: 0.2s;
`;

export default Drawer;
