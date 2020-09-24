import React, { useState } from 'react';
import Styled from 'styled-components';
import Layout from '../../../Commons/Layout';
import Drawer from '../../../Commons/Drawer';
import { useAppContext } from '../../../Context/AppContext';
import EventsCarousel from '../../../Components/EventsCarousel';
import Button from '../../../Commons/Button';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {
  ModalContentArea,
  ModalForm,
  WalletModal,
} from '../../wallet/WalletBalance';
import FormInput from '../../../Components/FormInput/Index';
import cookie from 'js-cookie';
import { postCall } from '../../../APIs/requests';
import api from '../../../APIs/endpoints';
import toast from 'toasted-notes';

function EventsListing() {
  const { showDrawer } = useAppContext();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const location = useLocation();

  let event = location.state.event;
  let auid = cookie.get('auid');
  let userData = JSON.parse(cookie.get('udt'));

  const handleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleRedirect = () => {
    history.push('/dashboard');
  };

  const handleStartEvent = (e) => {
    e.preventDefault();
    setLoading(true);
    postCall(api.startVideo, {}, { event_id: event.id })
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          history.push({
            pathname: '/event/video',
            state: {
              roomID: response.vidlink.room_id,
              accessKey: response.vidlink.Access_key,
            },
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        toast.notify(error.message, { position: 'bottom', duration: 5000 });
      });
  };

  const handleJoinEvent = (e) => {
    e.preventDefault();
    setLoading(true);
    postCall(
      api.createAttendee,
      {
        full_name: userData?.profile.name,
        email: userData?.email,
        phone_number: userData?.phoneNumber,
      },
      { event_id: event.id },
      true,
    )
      .then((response) => {
        setLoading(false);
        console.log(response);
        history.push({
          pathname: '/event/video',
          state: {
            roomID: response.vidlink.room_id,
            accessKey: response.vidlink.Access_key,
            joining: true,
          },
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        toast.notify(error.message, { position: 'bottom', duration: 5000 });
      });
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
      <Layout fullWidth={true} hashtag={event.hashtag}>
        <EventsCarousel data={event} />
        <EventDescriptionWrapper>
          <EventDescription>
            <h4>#{event.hashtag}</h4>
            <p>{event.description}</p>
            {event?.user_id === auid ? (
              <Button
                text="Start Event"
                onClick={handleStartEvent}
                loading={loading}
              />
            ) : (
              <Link to="/event/video">
                <Button
                  text="Join In"
                  onClick={handleJoinEvent}
                  loading={loading}
                />
              </Link>
            )}
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

export default EventsListing;
