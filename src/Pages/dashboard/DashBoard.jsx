import React from "react";
import UserHeader from "../../Commons/UserHeader/UserHeader";
import Nav from "../../Commons/ButtomNav";
import "../dashboard/DashBoard.css"


const DashBoard = () => {
  return (
    <div className="dashboard">
      <UserHeader biggerUserImg
        firstName="Tamakloe"
        lastName="Opeyemi"
        time="1:42PM"
        date="Sunday, 23 August 2020"
      />
      <div className ="dashboardMenu"> 
          <p className="todo">
              Payment
          </p>
          <p className="todo">
              Setting
          </p>
          <p className="todo">
              Rate App
          </p>
          <p className="todo">
              Help
          </p>
          <p className="todo">
              Sign Out
          </p>
          <p className="todo">
              Switch Account
          </p>

          </div>

     <Nav/>
    </div>
  );
};


export default DashBoard;


