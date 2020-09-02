import React from "react";
import NewDashBoardLayout from "../../../Components/NewDashBoardLayout";
import Styled from "styled-components";
import DashBoardHomeCard from "../../../Components/DashBoardHomeCard";
import DashBoardCardLayout from "../../../Components/DashBoardHomeCard/DashBoardCardLayout"
import Colors from '../../../Commons/Colors'
import { Link } from "react-router-dom";

const NewWelcomePage = () => {
  return (
    <NewDashBoardLayout lastName="Opeyemi" firstName="Tamkloe">
      <OptionHeader>Here are a few things you can do</OptionHeader>
      <DashBoardCardLayout>
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
          <img src="/assets/images/icons/unlock.png" alt="wallet" />
          <span>
          <Link to="/walletbal" style={{color: `${Colors.defaultGreen}`}}>
              Wallet
              </Link>
          </span>
        </DashBoardHomeCard>
      </DashBoardCardLayout>
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



export default NewWelcomePage;
