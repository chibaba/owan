import React from 'react';
import '../welcomepage/welcome.css';
import UserHeader from '../../Commons/UserHeader/UserHeader';
import Styled from 'styled-components';
import OwnerLayout from '../../Commons/OwnerLayout';
import { Link } from 'react-router-dom';
import Colors from '../../Commons/Colors';
import { useLocation } from 'react-router-dom';
import cookie from 'js-cookie';

const WelcomePage = () => {
  const { state } = useLocation();
  const today = new Date();
  const time = `${today.getHours()}:${today.getMinutes()} ${
    today.getHours() >= 12 ? 'PM' : 'AM'
  }`;

  const userData = JSON.parse(cookie.get('udt'));

  return (
    <OwnerLayout nav={false}>
      <PageWrapper>
        <UserHeader
          firstName={state?.user.profile.name || userData.profile.name}
          time={time}
          date={today.toDateString()}
        />
        <div className="event-directory">
          <Card to="/owner/createevent">
            <img
              src="/assets/createEventGreen.svg"
              alt="createicon"
              className="directoryicon"
            />
            <p>Create Event</p>
          </Card>
          <Card to="/owner/event">
            <img
              src="/assets/images/icons/tag.svg"
              alt="createicon"
              className="directoryicon"
            />
            <p>Join Event</p>
          </Card>
          <Card
            to={{ pathname: '/owner/wallet', state: { user: state?.user } }}
          >
            <img
              src="/assets/walletgreen.svg"
              alt="walleticon"
              className="directoryicon"
            />
            <p>Fund Wallet</p>
          </Card>
        </div>
      </PageWrapper>
    </OwnerLayout>
  );
};

const PageWrapper = Styled.div`
`;

const Card = Styled(Link)`
  background: ${Colors.lightDefaultGreen};
  width: 36%;
  height: 138px;
  border-radius: 5px;
  color: ${Colors.defaultGreen};
  padding: 20px;
  outline: none;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: flex-end;
  margin-bottom: 15px;
  p {
    margin: 0;
    margin-top: 10px;
    font-size: 14px;
  }
`;

export default WelcomePage;
