import React from "react";
import NewDashBoardLayout from "../../Components/NewDashBoardLayout";
import Styled from "styled-components";
import DashBoardHomeCard from "../../Components/DashBoardHomeCard";
import Colors from '../../Commons/Colors'
import { Link } from "react-router-dom";

const NewDashBoard = () => {
  return (
    <NewDashBoardLayout lastName="Opeyemi" firstName="Tamkloe">
      <OptionHeader>Here are a few things you can do</OptionHeader>
      <DashboardContent>
        <DashBoardHomeCard>
          <img src="/assets/greenLayers.svg" alt="Create" />
          
          <span>
              <Link to="/createEvent" style={{color: `${Colors.defaultGreen}`}}>
              Create Event
              </Link>
              </span>
          
        </DashBoardHomeCard>
        <DashBoardHomeCard>
          <img src="/assets/greenVector.svg" alt="Join" />
          <span>
              <Link to="/events" style={{color: `${Colors.defaultGreen}`}}>
              Join Event
              </Link>
              </span>
        </DashBoardHomeCard>
        <DashBoardHomeCard>
          <img src="/assets/images/icons/unlock.png" alt="Create" />
          <span>Wallet</span>
        </DashBoardHomeCard>
      </DashboardContent>
    </NewDashBoardLayout>
  );
};
const OptionHeader = Styled.h3`
  margin-top:2rem;
  color:  #AAAAAA;
  font-size: 12px;
  letter-spacing: 0.8px;
  text-align: center;
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
  @media (min-width: 768px) {
    width: 40%;
  }

`



export default NewDashBoard;
