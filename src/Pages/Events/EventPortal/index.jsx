import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Colors from '../../../Commons/Colors';
import Button from '../../../Commons/Button';
import DashBoardCardLayout from '../../../Components/DashBoardHomeCard/DashBoardCardLayout';
import { Card } from '../../welcomepage';
import { AddToCalendarButton } from '../../../Commons/EventDate';
import AddToCalendar from 'react-add-to-calendar';
import OwnerLayout from '../../../Commons/OwnerLayout';
import CopyToClipboard from 'react-copy-to-clipboard';
import toaster from 'toasted-notes';

const EventPortal = ({ imageUrl }) => {
  const { state } = useLocation();
  const history = useHistory();
  const [calendarData, setCalendarData] = useState({});
  const [loading, setLoading] = useState(false);
  const [ev, setEv] = useState(null);

  useEffect(() => {
    if (state) {
      const event =
        state.latestEvent ||
        JSON.parse(window.localStorage.getItem('ev'));
      setEv(event);
      let date = event.event_date.split('T')[0];
      window.localStorage.setItem('event', JSON.stringify(state.latestEvent));

      const splitStart = event.event_time.split(':');

      const startOneHourBehind = parseInt(splitStart[0]) - 2;
      const mainStart = `${
        startOneHourBehind > 9 ? startOneHourBehind : `0${startOneHourBehind}`
      }:${splitStart[1]}`;

      let startTime = `${date}T${mainStart}:00-00:00`;
      let endTime = `${date}T${mainStart}:00-00:00`;
      const calendarData = {
        title: `Link up event reminder for ${event.hashtag}`,
        description: 'This is a reminder for an event happening on link up',
        location: `${process.env.REACT_APP_APP_LINK}/event/detail/${event.id}`,
        startTime,
        endTime,
      };
      setCalendarData(calendarData);
    } else {
      setEv(JSON.parse(window.localStorage.getItem('ev')));
    }
  }, [state]);

  const handleStartEvent = (e) => {
    e.preventDefault();
    setLoading(true);
    const currentDate = new Date();
    const eventEnd = new Date(ev?.end_date);

    console.log(currentDate, eventEnd, currentDate < eventEnd)

    if (currentDate > eventEnd || !ev?.end_date) {
      setLoading(false);
      toaster.notify(
        'The end date of this event has passed. Kindly create a new one.',
        {
          position: 'top',
          duration: 5000,
        },
      );

      return;
    }

    history.push({ pathname: '/event', state: { event: ev} });
  };

  return (
    <OwnerLayout nav={true}>
      <EventPortalHeader>
        <EventDetails>
          <NavEvent>
            Your Next/ Last Event
            <CurrentEvent>
              #{ev?.hashtag}
            </CurrentEvent>
          </NavEvent>
          <ProfileImage>
            <img src={imageUrl || '/assets/images/av.jpg'} alt="profileImg" />
          </ProfileImage>
        </EventDetails>
        <Calender>
          <img src="/assets/calender.svg" alt="celender" />
          <div style={{ marginLeft: '0.8rem' }}>
            <span className="date">
              {new Date(ev?.event_date).toDateString()}
            </span>
            <span className="time">
              {ev?.event_time}
            </span>
            <AddToCalendarButton style={{ marginLeft: 0, marginTop: '5px' }}>
              <AddToCalendar event={calendarData} displayItemIcons={true} />
            </AddToCalendarButton>
          </div>
        </Calender>
        <ButtonDiv>
          <Link
            to="/owner/event/details"
            style={{
              width: '100%',
              margin: 'auto',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <Button
              text="Start Event"
              loading={loading}
              onClick={handleStartEvent}
            />
            <Button
              text="View Event Details"
              borderedBtn={true}
              onClick={() =>
                history.push({
                  pathname: '/owner/event/details',
                  state: { event: ev },
                })
              }
            />
            <CopyToClipboard
              text={`${process.env.REACT_APP_APP_LINK}/event/detail/${
                state?.latestEvent.id || ev?.id
              }`}
              onCopy={() => {
                toaster.notify('Event link copied to clipboard', {
                  position: 'top',
                  duration: 5000,
                });
              }}
            >
              <p
                style={{ color: `${Colors.defaultGreen}`, fontWeight: 'bold' }}
              >
                Copy Event Link
              </p>
            </CopyToClipboard>
          </Link>
        </ButtonDiv>
        <DashBoardCardLayout notFull={true}>
          <Card to={{ pathname: '/owner/createEvent' }}>
            <img src="/assets/createEventGreen.svg" alt="Create" />
            <p>Create Event</p>
          </Card>
          <Card to={{ pathname: '/owner/wallet' }}>
            <img src="/assets/walletgreen.svg" alt="Create" />
            <p>Wallet</p>
          </Card>
        </DashBoardCardLayout>
      </EventPortalHeader>
    </OwnerLayout>
  );
};

const EventPortalHeader = styled.header`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
const EventDetails = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;
const NavEvent = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const CurrentEvent = styled.h1`
  font-size: 20px;
`;
const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid ${Colors.defaultGreen};
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
const ButtonDiv = styled.div`
  width: 90%;
  margin: auto;
  padding: 10px 0;
  display: flex;
  margin-top: 1.5rem;
`;
const Calender = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  div {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: #999999;
    span.date {
      font-weight: bold;
      margin-bottom: 3px;
    }
  }
`;

export default EventPortal;
