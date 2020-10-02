import React from 'react';
import '../UserHeader/UserHeader.css';
import PropTypes from 'prop-types';

const UserHeader = ({ firstName, lastName, time, date, biggerUserImg }) => {
  return (
    <div className="welcome-header">
      <div className="welcome-user">
        <h2>Welcome to LinkUp</h2>
        <p>
          {firstName} {lastName}
        </p>
      </div>
      <p>Here are a few things you can do</p>
    </div>
  );
};
UserHeader.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};
export default UserHeader;
