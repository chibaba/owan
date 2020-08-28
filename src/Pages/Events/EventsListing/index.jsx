import React from 'react';
import Styled from 'styled-components';
import Layout from '../../../Commons/Layout';
import Drawer from '../../../Commons/Drawer';
import { useAppContext } from '../../../Context/AppContext';
import EventsCarousel from '../../../Components/EventsCarousel';
import Button from '../../../Commons/Button';
import { Link } from 'react-router-dom';

function EventsListing({ events }) {
  const { showDrawer } = useAppContext();

  return (
    <>
      {showDrawer ? <Drawer drawerPosition="right"></Drawer> : null}
      <Layout fullWidth={true}>
        <EventsCarousel data={events} />
        <EventDescriptionWrapper>
          <EventDescription>
            <h4>#HenryJane2020</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet.
            </p>
            <Link to="/events/video">
              <Button text="Join In" />
            </Link>
          </EventDescription>
        </EventDescriptionWrapper>
      </Layout>
    </>
  );
}

const EventDescriptionWrapper = Styled.section`
  width: 100%;
  background: #fff;
`;

const EventDescription = Styled.article`
  width: 90%;
  margin: auto;
  p {
    font-size: 14px;
    line-height: 1.5;
  }
`;

EventsListing.defaultProps = {
  events: [
    { id: 1, title: '#HenryJane2020', image: '/assets/images/couple1.png' },
    { id: 2, title: '#JohnJaneDoe2090', image: '/assets/images/couple2.png' },
    { id: 3, title: '#SimTol2021', image: '/assets/images/couple3.png' },
  ],
};

export default EventsListing;