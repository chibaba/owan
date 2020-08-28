import React from 'react';
import Styled from 'styled-components';
import Colors from '../../Colors';
import Icon from '@mdi/react';
import { mdiRadioboxMarked, mdiDotsVertical } from '@mdi/js';
import { useAppContext } from '../../../Context/AppContext';

function Header() {
  const { handleDrawerState } = useAppContext();

  return (
    <HeaderWrapper>
      <HeaderNav>
        <VideoStats>
          <RecordButton>
            <Icon path={mdiRadioboxMarked} color="#fff" size={0.6} />
          </RecordButton>
          <VideoAttendees>
            <img src="/assets/images/icons/users.png" alt="users" />
            <span>496</span>
          </VideoAttendees>
        </VideoStats>
        <EventTitle>HenryJane2020</EventTitle>
        <SideNavToggle onClick={handleDrawerState}>
          <Icon path={mdiDotsVertical} color="#fff" size={1} />
        </SideNavToggle>
      </HeaderNav>
    </HeaderWrapper>
  );
}

const HeaderWrapper = Styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
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

const RecordButton = Styled.li`
  width: 25px;
  height: 21px;
  background: ${Colors.red};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
const EventTitle = Styled.h4`
  color:#fff;
  flex: 1;
  text-align: center;
`;

const SideNavToggle = Styled.div`
  flex: 1;
  text-align: right;
`;

export default Header;
