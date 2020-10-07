import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import OwnerLayout from '../../../Commons/OwnerLayout';
import { getCall } from '../../../APIs/requests';
import api from '../../../APIs/endpoints';
import cookie from 'js-cookie';

const OwnerEvents = () => {
  const { state } = useLocation();

  const [userEvents, setUserEvents] = useState(null);

  useEffect(() => {
    const id = cookie.get('auid');
    if (state.userEvents) {
      setUserEvents(state.userEvents);
    } else {
      getCall(api.getUserEvents(id))
        .then((response) => {
          setUserEvents(response.event);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [state.userEvents]);

  const renderUserEvents = () => {
    return userEvents?.map((event) => {
      return (
        <Link
          to={{ pathname: '/owner/event', state: { latestEvent: event } }}
          key={event.id}
        >
          <EventCard key={event.id}>
            <EventImgWrapper>
              <EventImg src={event?.images[0]} alt={event?.name} />
            </EventImgWrapper>
            <EventContent>
              <h3>#{event?.hashtag}</h3>
              <p>{event?.name}</p>
              <span>{new Date(event?.event_date).toLocaleDateString()}</span>
            </EventContent>
          </EventCard>
        </Link>
      );
    });
  };
  return (
    <OwnerLayout pageTitle="Your Events" nav={true}>
      {renderUserEvents()}
    </OwnerLayout>
  );
};

const EventCard = Styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 0;
`;

const EventImgWrapper = Styled.div`
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 4px;
`;

const EventImg = Styled.img`
  width: 100%;
  border-radius: 4px;
`;

const EventContent = Styled.div`
  padding: 0 20px;
  h3, p {
    margin: 0;
  }
  p {
    font-weight: 300;
  }
  span {
    font-size: 12px;
    opacity: 0.8;
  }
`;

export default OwnerEvents;
