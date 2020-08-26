import React from "react";
import "../welcomepage/welcome.css";
import Nav from "../../Commons/Nav";


const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-header">
        <div className="welcome-user">
          <div className="user-details">
            <span className="welcom">Welcome,</span>
            <span className="name">Tamakloe</span>
          </div>
          <div className="user-img" />
        </div>
        <div className="time-date">
          <span className="time">14PM</span>
          <span className="date">Sunday 23 August, 2010</span>
        </div>
      </div>
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
