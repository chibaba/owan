import React from "react";
import "../welcomepage/welcome.css";
import Nav from "../../Commons/ButtomNav";
import UserHeader from "../../Commons/UserHeader/UserHeader";


const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <UserHeader
       firstName='TamaKloe'
       time="1:42PM"
       date="Sunday, 23 August 2020"
      />
      <div className="event-directory">
        <div className="path">
          <img
            src="/assets/createEvent.svg"
            alt="createicon"
            className="directoryicon"
          />
          <h3>Create Event</h3>
        </div>
        <div className="path">
          <img
            src="/assets/joinlogo.svg"
            alt="joinicon"
            className="directoryicon"
          />
          <h3>Join Event</h3>
        </div>
        <div className="path">
          <img
            src="/assets/schedulelogo.svg"
            alt="scheduleeicon"
            className="directoryicon"
          />
          <h3>Schedule</h3>
        </div>
        <div className="path">
          <img src="/wallet.svg" alt="walleticon" className="directoryicon" />
          <h3>Fund Wallet</h3>
        </div>
      </div>
      <Nav/>
      

    </div>
  );
};
export default WelcomePage;
