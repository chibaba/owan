import React, { useEffect } from 'react';
import api from '../../../APIs/endpoints';
import { getCall } from '../../../APIs/requests';
import OwnerLayout from '../../../Commons/OwnerLayout';
import cookie from 'js-cookie';

const UpcomingEvents = () => {
  useEffect(() => {
    const id = cookie.get('auid');
    getCall(api.getUpcomingEvents(id))
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <OwnerLayout pageTitle="Upcoming Events" nav={true}>
      Upcoming Events
    </OwnerLayout>
  );
};

export default UpcomingEvents;
