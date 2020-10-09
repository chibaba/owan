import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import Colors from '../../../Commons/Colors';
import EventDetailBanner from '../../../Commons/EventDetailBanner';
import EventDate from '../../../Commons/EventDate';
import { getCall } from '../../../APIs/requests';
import api from '../../../APIs/endpoints';
import { useHistory, useLocation } from 'react-router';
import toast from 'toasted-notes';
import Button from '../../../Commons/Button';
import cookie from 'js-cookie';
import OwnerLayout from '../../../Commons/OwnerLayout';

const DashboardDetail = () => {
  const image = '/assets/images/wedding-demo.jpg';
  const { pathname } = useLocation();
  const [event, setEvent] = useState(null);
  const history = useHistory();
  const auid = cookie.get('uid');

  useEffect(() => {
    const splittedRoutes = pathname.split('/');
    const id = splittedRoutes[splittedRoutes.length - 1];
    getCall(api.getEvent(id))
      .then((response) => {
        if (response.status === 200 && response.data) {
          setEvent(response.data);
        } else {
          toast.notify('This event was not found or has been deleted', {
            position: 'top',
            duration: 5000,
          });
        }
      })
      .catch((error) => {
        toast.notify(error.message, {
          position: 'top',
          duration: 5000,
        });
      });
  }, [pathname]);

  return (
    <OwnerLayout nav={auid ? true : false}>
      <EventDetailBanner
        imageURL={(event && event.images[0]) || image}
        text="Upcoming Event"
      />
      <ContentWrapper>
        <ContentSection>
          <EventTitle>{event && event.name}</EventTitle>
          <span className="by-who">by Tinji Obaoye</span>
        </ContentSection>
        <ContentSection>
          <EventDate
            date={event && new Date(event.event_date).toDateString()}
            time={event && event.event_time}
          />
        </ContentSection>
        <ContentSection>
          <SectionTitle>About</SectionTitle>
          <p>{event && event.description}</p>
        </ContentSection>
        {auid ? (
          <Button
            text="Join Event"
            onClick={() =>
              history.push({ pathname: '/event', state: { event } })
            }
          />
        ) : (
          <Button
            text="Login To Join Event"
            onClick={() => {
              window.localStorage.setItem('returnTo', pathname);
              history.push({
                pathname: '/login',
                state: { returnTo: pathname },
              });
            }}
          />
        )}
      </ContentWrapper>
      <ContentSection>
        {/* <SectionTitle style={{ width: '90%', margin: '15px auto' }}>
          Location on Map
        </SectionTitle> */}
        <MapArea></MapArea>
      </ContentSection>
    </OwnerLayout>
  );
};

const ContentWrapper = Styled.main`
  width: 90%;
  margin: auto;
`;

const ContentSection = Styled.section`
  width: 100%;
  margin-top: 30px;
  span.by-who {
    color: ${Colors.defaultGreen};
    font-size: 12px;
    font-weight: bold;
  }
  p {
    color:  ${Colors.textColor};
    font-size: 12px;
    font-weight: 600;
    line-height: 1.8;
  }
`;

const SectionTitle = Styled.h3`
  margin-bottom: 10px;
`;

const EventTitle = Styled.h2`
  margin: 0;
`;

const MapArea = Styled.div`
  width: 100%;
  height: 200px;
  background: ${Colors.textColor};
`;

DashboardDetail.defaultProps = {
  event: {
    title: 'Pride at the Disco',
    description: 'This is link up reminder',
    location: 'Portland, OR',
    startTime: '2016-09-16T20:15:00-04:00',
    endTime: '2016-09-16T21:45:00-04:00',
  },
};

export default DashboardDetail;
