import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Colors from '../../Commons/Colors';

const EventPortal = ({ currentEvent, profilePicture, date, time }) => {
  return (
    <>
      <EventPortalHeader>
        <EventDetails>
          <NavEvent>
            <Link to="" style={{ color: `${Colors.defaultGreen}` }}>
              Your Next/
            </Link>
            <Link to="" style={{ color: `${Colors.defaultGreen}` }}>
              Last Event
            </Link>

            <CurrentEvent>{(currentEvent = 'Pride at the Disco')}</CurrentEvent>
          </NavEvent>
          <ProfileImage></ProfileImage>
        </EventDetails>
      </EventPortalHeader>
    </>
  );
};

const EventPortalHeader = styled.header`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const EventDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NavEvent = styled.div`
  font-size: 16px;
  width: 70%;
`;
const CurrentEvent = styled.h1`
  font-size: 20px;
`;
const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid ${Colors.defaultGreen};
  img {
    width: 100%;
    border-radius: 50%;
  }
`;
// const DateDetails = styled.div``;

export default EventPortal;
