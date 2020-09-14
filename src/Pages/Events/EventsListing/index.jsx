import React, { useState } from 'react';
import Styled from 'styled-components';
import Layout from '../../../Commons/Layout';
import Drawer from '../../../Commons/Drawer';
import { useAppContext } from '../../../Context/AppContext';
import EventsCarousel from '../../../Components/EventsCarousel';
import Button from '../../../Commons/Button';
import { Link, useHistory } from 'react-router-dom';
import {
  ModalContentArea,
  ModalForm,
  WalletModal,
} from '../../wallet/WalletBalance';
import FormInput from '../../../Components/FormInput/Index';

function EventsListing({ events }) {
  const { showDrawer } = useAppContext();
  const [showModal, setShowModal] = useState(true);
  const history = useHistory();

  const handleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleRedirect = () => {
    history.push('/dashboard');
  };

  return (
    <>
      {showDrawer ? <Drawer drawerPosition="right"></Drawer> : null}
      {showModal ? (
        <WalletModal>
          <ModalContentArea>
            <ModalForm>
              <h3>This event has a password</h3>
              <FormInput
                placeholder="Event event password"
                name="password"
                inputStyle={{ textAlign: 'center', marginBottom: '50px' }}
              />
              <Button text="Continue" onClick={handleModal} />
              <Button text="Cancel" cancelbtn={true} onClick={handleRedirect} />
            </ModalForm>
          </ModalContentArea>
        </WalletModal>
      ) : null}
      <Layout fullWidth={true}>
        <EventsCarousel data={events} />
        <EventDescriptionWrapper>
          <EventDescription>
            <h4>#HenryJane2020</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet.
            </p>
            <Link to="/event/video">
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
