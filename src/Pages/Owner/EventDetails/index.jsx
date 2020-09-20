import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { NavLink, Route, Switch } from 'react-router-dom';
import OwnerLayout from '../../../Commons/OwnerLayout';
import Colors from '../../../Commons/Colors';
import Report from './Reports/Report';
import RegsisteredUsers from './Reports/RegisteredUsers';
import Detail from './Detail';
import { getCall } from '../../../APIs/requests';
import api from '../../../APIs/endpoints';
import toaster from 'toasted-notes';

const EventDetail = () => {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    getCall(api.getEvents)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setEvents(response.data);
          toaster.notify(response.message, {
            duration: 5000,
            position: 'bottom',
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
        toaster.notify('Oops!. Something went wrong. Please try again later', {
          duration: 5000,
          position: 'bottom',
        });
      });
  }, []);

  console.log(events, 'events');
  return (
    <OwnerLayout pageTitle={events && events[0].hashtag} fullWidth={true}>
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
          to={`/owner/event/details/users`}
          activeClassName="event-details-active"
          exact
        >
          Registered Users
        </PageLink>
      </PageLinks>
      <Switch>
        <Route path={`/owner/event/details`} exact>
          <Detail data={events && events[0]} />
        </Route>
        <Route path={`/owner/event/details/report`} exact>
          <Report />
        </Route>
        <Route path={`/owner/event/details/users`} exact>
          <RegsisteredUsers />
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
