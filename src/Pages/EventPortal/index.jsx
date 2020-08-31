import React from "react";

import generateAppDateFormat from "../../Utils/currentDay";

import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../../Commons/Colors";
import Button from "../../Commons/Button";
import DashBoardHomeCard from "../../Components/DashBoardHomeCard";
import DashBoardCardLayout from "../../Components/DashBoardHomeCard/DashBoardCardLayout";

const EventPortal = ({ currentEvent, imageUrl, time }) => {
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

            <CurrentEvent>
              {(currentEvent = "Pride at the Disco!")}
            </CurrentEvent>
          </NavEvent>
          <ProfileImage>
            <img src={(imageUrl = "/assets/images/myk.jpg")} alt="profileImg" />
          </ProfileImage>
        </EventDetails>
        <Calender>
          <img src="/assets/calender.svg" alt="celender" />
          <div>
            <span className="date">{generateAppDateFormat()}</span>
            <span className="time">{(time = "5:00PM-8:00 GMT-1")}</span>
            <Link  to="" style={{ color: `${Colors.defaultGreen}` }}>Add to calender</Link>
          </div>
        </Calender>
        <ButtonDiv>
          <Button text="View Event Details" />
        </ButtonDiv>

        <DashBoardCardLayout>
          <DashBoardHomeCard>
            <img src="/assets/greenLayers.svg" alt="Create" />

            <span>
              <Link
                to="/createEvent"
                style={{ color: `${Colors.defaultGreen}` }}
              >
                Create Event
              </Link>
            </span>
          </DashBoardHomeCard>
          <DashBoardHomeCard>
            <img src="/assets/images/icons/unlock.png" alt="Create" />
            <span>Wallet</span>
          </DashBoardHomeCard>
        </DashBoardCardLayout>
      </EventPortalHeader>
    </>
  );
};

const EventPortalHeader = styled.header`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
`;
const EventDetails = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;
const NavEvent = styled.div`
  font-size: 16px;
`;
const CurrentEvent = styled.h1`
  font-size: 20px;
`;
const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 5px solid ${Colors.defaultGreen};
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
const ButtonDiv = styled.div`
  width: 90%;
  margin: auto;
  padding: 10px 0;
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
`;
const Calender = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  
  div {
    display: flex;
    flex-direction:column;
    font-size: 10px;
    margin-left: 0.8rem;
    color:  #999999;
    span.date{
      font-weight: bold;
      margin-bottom: 3px;
    }
    
  }
`;

export default EventPortal;
