import React from "react";
import '../UserHeader/UserHeader.css'
import PropTypes from 'prop-types'

const UserHeader = ({ firstName, lastName, time, date, biggerUserImg }) => {
  return (
    <div className="welcome-header">
      <div className="welcome-user">
        <div className="user-details">
          {lastName ? (
            <span>{lastName}</span>
          ) : (
            <span className="welcom">Welcome,</span>
          )}

          <span className="name">{firstName}</span>
        </div>
        <div className={`${biggerUserImg? 'biggerUserImg': ""} user-img `}/>
      </div>
      <div className="time-date">
        <span className="time">{time}</span>
        <span className="date">{date}</span>
      </div>
    </div>
  );
};
UserHeader.propTypes={
  firstName: PropTypes.string,
  lastName:PropTypes.string

}
export default UserHeader;
