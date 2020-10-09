import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
// import Colors from '../../Colors';
import Icon from '@mdi/react';
import { mdiDotsVertical } from '@mdi/js';
import { useAppContext } from '../../../Context/AppContext';
import { useVideoCallContext } from '../../../Context/VideoCallContext';

function Header({ wallet }) {
  const { handleDrawerState } = useAppContext();
  const { handleTablesState, handleSideDrawerState } = useVideoCallContext();
  const [walBal, setWalBal] = useState(0);

  useEffect(() => {
    setWalBal(wallet);
  }, [wallet]);

  function sideNavHandler() {
    handleDrawerState();
    handleTablesState(false);
    handleSideDrawerState(true);
  }
  return (
    <HeaderWrapper>
      <HeaderNav>
        <VideoStats>
          {/* <RecordButton>
            <Icon path={mdiRadioboxMarked} color="#fff" size={0.6} />
          </RecordButton> */}
          <VideoAttendees>
            <img src="/assets/images/icons/users.png" alt="users" />
            <span>496</span>
          </VideoAttendees>
          <Wallet>&#8358;{walBal}</Wallet>
        </VideoStats>
        <EventTitle>
          #{JSON.parse(window.localStorage.getItem('event'))?.hashtag}
        </EventTitle>
        <SideNavToggle onClick={sideNavHandler}>
          <Icon path={mdiDotsVertical} color="#fff" size={1} />
        </SideNavToggle>
      </HeaderNav>
    </HeaderWrapper>
  );
}

const Wallet = Styled.div`
  width: max-content;
  text-align: right;
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 4px;
  flex-direction: column;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.3);
  padding-top: 3px;
  span {
    font-size: 10px;
    font-weight: bold;
  }
`;

const HeaderWrapper = Styled.header`
  width: 100%;
  height: 80px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999999;
`;

const HeaderNav = Styled.nav`
  width: 85%;
  margin: auto;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const VideoStats = Styled.ul`
  display: flex;
  padding: 0;
  flex: 1;
  li {
    margin-right: 10px;
  }
`;

// const RecordButton = Styled.li`
//   width: 25px;
//   height: 21px;
//   background: ${Colors.red};
//   border-radius: 3px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
const VideoAttendees = Styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 21px;
  span {
    color: #fff;
    font-size: 10px;
    margin-left: 10px;
    height: 100%;
    padding-top: 10px;
    font-weight: 800;
  }
`;
const EventTitle = Styled.h5`
  color:#fff;
  flex: 1;
  text-align: center;
  font-weight: 900;
`;

const SideNavToggle = Styled.div`
  flex: 1;
  text-align: right;
`;

export default Header;
