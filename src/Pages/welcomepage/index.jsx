import React, { useEffect, useState } from 'react';
import '../welcomepage/welcome.css';
import UserHeader from '../../Commons/UserHeader/UserHeader';
import Styled from 'styled-components';
import OwnerLayout from '../../Commons/OwnerLayout';
import { Link } from 'react-router-dom';
import Colors from '../../Commons/Colors';
import { useLocation } from 'react-router-dom';
import cookie from 'js-cookie';
import { getCall } from '../../APIs/requests';
import api from '../../APIs/endpoints';
import { EventToday } from '../auth/EventOwnerLogin';

const WelcomePage = () => {
  const { state } = useLocation();
  const today = new Date();
  const time = `${today.getHours()}:${today.getMinutes()} ${
    today.getHours() >= 12 ? 'PM' : 'AM'
  }`;
  const [latestEvent, setLatestEvent] = useState(null);
  const [userEvents, setUserEvents] = useState(null);
  const [event, setEvent] = useState(null);

  const userData = JSON.parse(cookie.get('udt'));

  useEffect(() => {
    const id = cookie.get('auid');
    getCall(api.getUserEvents(id))
      .then((response) => {
        setLatestEvent(response.event[0]);
        setUserEvents(response.event);
        setEvent(JSON.parse(window.localStorage.getItem('evtoday')));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <OwnerLayout nav={true}>
      <PageWrapper>
        <UserHeader
          firstName={state?.user.profile.name || userData.profile.name}
          time={time}
          date={today.toDateString()}
        />
        <EventToday>
          <img src={event && event.images[0]} alt="Event" />
          <div>
            <p style={{ fontWeight: 'BOLD', fontSize: '14px' }}>
              Happening today
            </p>
            <p>#{event?.hashtag}</p>
            <Link
              to={{ pathname: `/event/detail/${event?.id}` }}
              style={{
                color: `${Colors.defaultGreen}`,
                fontSize: '12px',
                marginTop: '10px',
              }}
            >
              View Details
            </Link>
          </div>
        </EventToday>
        <div className="event-directory">
          <Card to="/owner/createevent">
            <img
              src="/assets/createEventGreen.svg"
              alt="createicon"
              className="directoryicon"
            />
            <p>Create Event</p>
          </Card>
          {latestEvent ? (
            <>
              <Card
                to={{ pathname: '/owner/event', state: { latestEvent } }}
                onClick={() => {
                  window.localStorage.setItem(
                    'latestEvent',
                    JSON.stringify(latestEvent),
                  );
                }}
              >
                <img
                  src="/assets/images/icons/tag.svg"
                  alt="createicon"
                  className="directoryicon"
                />
                <p>Start Event</p>
              </Card>
              <Card to={{ pathname: '/owner/events', state: { userEvents } }}>
                <img
                  src="/assets/images/icons/tag.svg"
                  alt="createicon"
                  className="directoryicon"
                />
                <p>Your Events</p>
              </Card>
            </>
          ) : null}
          <Card
            to={{ pathname: '/owner/wallet', state: { user: state?.user } }}
          >
            <img
              src="/assets/walletgreen.svg"
              alt="walleticon"
              className="directoryicon"
            />
            <p>Wallet</p>
          </Card>
        </div>
      </PageWrapper>
    </OwnerLayout>
  );
};

const PageWrapper = Styled.div`
`;

export const Card = Styled(Link)`
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
    margin-top: 30px;
    font-size: 14px;
  }
`;

export default WelcomePage;
