import React from 'react';
import Colors from '../../Commons/Colors';
import styled from 'styled-components';

const UserList = ({ users }) => {
  const { id, Name, Email, Number, date, time } = users;

  return (
    <UserListWrapper>
      <ContactDetails>
        <h4>
          <span>{id}.</span>
          {Name}
        </h4>
        <span className="contact">
          {Email} | {Number}
        </span>
      </ContactDetails>
      <DateTime>
        <span className="date">{date}</span>
        <span className="time">{time}</span>
      </DateTime>
    </UserListWrapper>
  );
};
const UserListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  padding: 0.8rem 5%;
  h4 {
    margin-bottom: 5px;
    color: #222222;
    span {
      margin-right: 10px;
    }
  }
  span.contact {
    font-size: 10px;
    color: #a3a3a3;
  }
`;
const ContactDetails = styled.div``;
const DateTime = styled.div`
  color: ${Colors.defaultGreen};
  display: flex;
  flex-direction: column;
  span {
    font-size: 10px;
  }
`;
export default UserList;
