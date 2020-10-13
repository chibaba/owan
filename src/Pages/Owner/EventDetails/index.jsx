import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { NavLink, Route, Switch } from 'react-router-dom';
import OwnerLayout from '../../../Commons/OwnerLayout';
import Colors from '../../../Commons/Colors';
import Report from './Reports/Report';
import RegsisteredUsers from './Reports/RegisteredUsers';
import Detail from './Detail';

const EventDetail = () => {
  const [events, setEvents] = useState(null);
  const [calendar, setCalendar] = useState(null);

  useEffect(() => {
    const even = JSON.parse(window.localStorage.getItem('event'));
    setEvents(even);
    const event = JSON.parse(window.localStorage.getItem('latestEvent'));
    if (event) {
      let date = event?.event_date.split('T')[0];

      const splitStart = event?.event_time.split(':');

      const startOneHourBehind = parseInt(splitStart[0]) - 2;
      const mainStart = `${
        startOneHourBehind > 9 ? startOneHourBehind : `0${startOneHourBehind}`
      }:${splitStart[1]}`;

      let startTime = `${date}T${mainStart}:00-00:00`;
      let endTime = `${date}T${mainStart}:00-00:00`;
      const calendarData = {
        title: `Link up event reminder for ${event?.hashtag}`,
        description: 'This is a reminder for an event happening on link up',
        location: `https://linkup-app.netlify.app/event/detail/${event?.id}`,
        startTime,
        endTime,
      };
      setCalendar(calendarData);
    }
  }, []);

  return (
    <OwnerLayout pageTitle={events?.hashtag} fullWidth={true} nav={true}>
      <PageLinks>
        <PageLink
          to={`/owner/event/details`}
          activeClassName="event-details-active"
          exact
        >
          Event Details
        </PageLink>
        <PageLink
          to={`/owner/event/details/report`}
          activeClassName="event-details-active"
          exact
        >
          Reports
        </PageLink>
        <PageLink
          to={`/owner/event/details/attendees`}
          activeClassName="event-details-active"
          exact
        >
          Registered Users
        </PageLink>
      </PageLinks>
      <Switch>
        <Route path={`/owner/event/details`} exact>
          <Detail data={events} calendar={calendar} />
        </Route>
        <Route path={`/owner/event/details/report`} exact>
          <Report data={events} />
        </Route>
        <Route path={`/owner/event/details/attendees`} exact>
          <RegsisteredUsers data={events} />
        </Route>
      </Switch>
    </OwnerLayout>
  );
};

const PageLinks = Styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 15px auto 30px auto;
`;

const PageLink = Styled(NavLink)`
  background: ${Colors.lighterGreen};
  padding: 10px 15px;
  color: ${Colors.defaultGreen};
  border-radius: 5px;
  font-size: 12px;
  @media (min-width: 400px) {
    padding: 10px 30px;
  }
  .active {
    background: ${Colors.defaultGreen};
    color: #fff;
  }
`;

export default EventDetail;
