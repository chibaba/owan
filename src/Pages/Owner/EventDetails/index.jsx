import React from 'react';
import Styled from 'styled-components';
import { NavLink, Route, Switch } from 'react-router-dom';
import OwnerLayout from '../../../Commons/OwnerLayout';
import Colors from '../../../Commons/Colors';
import Report from './Reports/Report';
import RegsisteredUsers from './Reports/RegisteredUsers';
import Detail from './Detail';

const EventDetail = () => {
  return (
    <OwnerLayout pageTitle="Pride at the Disco!" fullWidth={true}>
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
          <Detail />
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
