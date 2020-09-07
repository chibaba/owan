import React from 'react';
import Styled from 'styled-components';
import DashboardLayout from '../../Commons/DashboardLayout';
import DashboardHeader from '../../Components/DashboardHeader';
import Colors from '../../Commons/Colors';
import { Link } from 'react-router-dom';

function Dashboard() {
  const data = {
    username: 'Tamakloe',
    profImageURL: '/assets/images/me.jpeg',
  };
  return (
    <DashboardLayout>
      <DashboardHeader data={data} />
      <DashboardContent>
        <DashboardHomeCard to="/">
          <div>
            <img src="/assets/images/icons/layers.png" alt="Create" />
            <span>Create Event</span>
          </div>
        </DashboardHomeCard>
        <DashboardHomeCard to="/events/video">
          <div>
            <img src="/assets/images/icons/tag.png" alt="Join" />
            <span>Join Event</span>
          </div>
        </DashboardHomeCard>
        <DashboardHomeCard to="/">
          <div>
            <img src="/assets/images/icons/home.svg" alt="Home" />
            <span>Schedule</span>
          </div>
        </DashboardHomeCard>
        <DashboardHomeCard to="/">
          <div>
            <img src="/assets/images/icons/unlock.png" alt="Wallet" />
            <span>Fund Wallet</span>
          </div>
        </DashboardHomeCard>
      </DashboardContent>
    </DashboardLayout>
  );
}

const DashboardContent = Styled.main`
  width: 90%;
  margin: auto;
  padding: 10px 0; 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  overflow: scroll;
  margin-bottom: 80px;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

const DashboardHomeCard = Styled(Link)`
  display: flex;
  height: 158px;
  background: ${Colors.defaultGreen};
  width: 47.25%;
  margin-bottom: 10px;
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

export default Dashboard;
