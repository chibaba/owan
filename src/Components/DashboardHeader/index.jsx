import React from 'react';
import Styled from 'styled-components';
import Colors from '../../Commons/Colors';
import generateAppDateFormat from '../../Utils/currentDay';

function DashboardHeader({ data }) {
  return (
    <HeaderWrapper>
      <UserDataArea>
        <UserProfile>
          <div>
            <h3>Welcome,</h3>
            <h3 className="username">{data && data.username}</h3>
          </div>
          <div>
            <div className="profileimage">
              <img src={data && data.profImageURL} alt="username" />
            </div>
          </div>
        </UserProfile>
        <DateTime>
          <p>1.42PM</p>
          <p>{generateAppDateFormat()}</p>
        </DateTime>
      </UserDataArea>
    </HeaderWrapper>
  );
}

const HeaderWrapper = Styled.header`
  height: 170px;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 320px) {
    height: 110px;
  }
`;

const UserDataArea = Styled.div`
  width: 90%;
  @media (min-width:768px) {
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding-bottom: 20px;
  }
`;

const UserProfile = Styled.div`
  display: flex;
  justify-content: space-between;
  div {
    h3 {
      margin: 0;
      font-weight: 100;
      font-size: 18px;
    }
    h3.username {
      font-weight: 900;
    }
    .profileimage {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 5px solid ${Colors.defaultGreen};
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const DateTime = Styled.div`
  margin-top: 10px;
  p {
    padding: 0;
    margin: 0;
    font-size: 10px;
    font-weight: 100;
  }
`;

export default DashboardHeader;
