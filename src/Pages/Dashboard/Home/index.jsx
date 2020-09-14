import React from 'react';
import Styled from 'styled-components';
import DashboardLayout from '../../../Commons/DashboardLayout';
import Colors from '../../../Commons/Colors';
import { Link } from 'react-router-dom';
import EventDetailBanner from '../../../Commons/EventDetailBanner';
import EventDate from '../../../Commons/EventDate';

function DashboardHome() {
  const image = '/assets/images/wedding-demo.jpg';
  return (
    <DashboardLayout>
      <EventTitleHead>
        <h3>Pride at the Disco!</h3>
        <span>by Tunji Obaoye</span>
      </EventTitleHead>
      <EventDetailBanner
        text="Upcoming Event"
        imageURL={image}
        style={{ marginBottom: '40px' }}
      />
      <DashboardContent>
        <EventDate
          date="Fri, 28 Jun 2019"
          time="5:00PM - 8:00 GMT+1"
          style={{ marginBottom: '40px' }}
        />
        <DashboardHomeCard to="/dashboard/event/detail">
          <div>
            <img src="/assets/images/icons/layers.png" alt="Create" />
            <span>View Event Details</span>
          </div>
        </DashboardHomeCard>
        <DashboardHomeCard to="/event">
          <div>
            <img src="/assets/images/icons/tag.png" alt="Join" />
            <span>Join Event</span>
          </div>
        </DashboardHomeCard>
        <DashboardHomeCard to="/">
          <div>
            <img src="/assets/images/icons/home.svg" alt="Home" />
            <span>Watch Video</span>
          </div>
        </DashboardHomeCard>
        <DashboardHomeCard to="/dashboard/wallet">
          <div>
            <img src="/assets/images/icons/unlock.png" alt="Wallet" />
            <span>Wallet</span>
          </div>
        </DashboardHomeCard>
      </DashboardContent>
    </DashboardLayout>
  );
}

const EventTitleHead = Styled.header`
  width: 100%;
  height: 70px;
  background: ${Colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin: 0;
    padding: 0;
  }
  span {
    color: ${Colors.defaultGreen};
    font-size: 12px;
    font-weight: bold;
  }
`;

const DashboardContent = Styled.main`
  width: 90%;
  margin: auto;
  padding: 10px 0; 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  overflow: scroll;
  margin-bottom: 80px;
`;

const DashboardHomeCard = Styled(Link)`
  display: flex;
  height: 106px;
  background: ${Colors.defaultGreen};
  width: 47.25%;
  margin-bottom: 15px;
  border-radius: 4px;
  box-shadow: 0px 19.0769px 42.9231px rgba(0, 0, 0, 0.07);
  justify-content: flex-end;
  flex-direction: column;
  align-items: baseline;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  div {
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    align-items: baseline;
    justify-content: flex-end;
    span {
      color: #fff;
      font-size: 14px;
      font-weight: 900;
      margin-top: 20px;
    }
  }
`;

export default DashboardHome;
