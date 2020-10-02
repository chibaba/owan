import React from 'react';
import Styled from 'styled-components';
import Icon from '@mdi/react';
import {
  mdiBullseye,
  mdiCardsHeart,
  mdiRadioboxMarked,
  mdiMessageReply,
} from '@mdi/js';
import Colors from '../../Colors';
import { useAppContext } from '../../../Context/AppContext';
import { useVideoCallContext } from '../../../Context/VideoCallContext';

function EventOptions() {
  const { handleDrawerState, handleSprayState } = useAppContext();
  const { handleTablesState, handleSideDrawerState } = useVideoCallContext();

  function showTablesHandler() {
    handleDrawerState();
    handleTablesState(true);
    handleSideDrawerState(false);
  }

  return (
    <OptionsWrapper>
      <OptionItems>
        <SingleOption onClick={showTablesHandler}>
          <Icon path={mdiBullseye} size={1} color="#fff" />
          <span>Join Table</span>
        </SingleOption>
        <SingleOption>
          <Icon path={mdiRadioboxMarked} size={0.8} color="#fff" />
          <span>Record</span>
        </SingleOption>
        <SingleOption>
          <Icon
            path={mdiCardsHeart}
            size={0.8}
            color="#fff"
            style={{ rotate: 'y 180deg' }}
          />
          <span>2.6k</span>
        </SingleOption>
        <SingleOption>
          <CommentNotification />
          <Icon
            path={mdiMessageReply}
            size={0.8}
            color="#fff"
            style={{ rotate: 'y 180deg' }}
          />
          <span>2.6k</span>
        </SingleOption>
        <SingleOption onClick={handleSprayState}>
          <img src="/assets/images/icons/cashspray.svg" alt="cash" />
          <span>Spray Cash</span>
        </SingleOption>
      </OptionItems>
    </OptionsWrapper>
  );
}

const OptionsWrapper = Styled.nav`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 70px;
  z-index: 999999;
`;

const OptionItems = Styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const SingleOption = Styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  position: relative;
  img, svg {
    align-self: center;
    margin-bottom: 7px;
    svg.flip {
      transform: rotateY(180deg);
    }
  }
  span {
    font-size: 10px;
    color: #fff;
    font-weight: 800;
  }
`;

const CommentNotification = Styled.div`
  width: 7px;
  height: 7px;
  background: ${Colors.defaultGreen};
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: -3.5px;
`;

export default EventOptions;
