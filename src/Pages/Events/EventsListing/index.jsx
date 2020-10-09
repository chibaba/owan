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
import { getCall, postCall } from '../../../APIs/requests';
import api from '../../../APIs/endpoints';
import toast from 'toasted-notes';
import Axios from 'axios';

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
    cookie.set('eid', event.id);
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
        toast.notify(error.message, { position: 'top', duration: 5000 });
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
    )
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          toast.notify('Setting you up to join...', {
            position: 'top',
            duration: 5000,
          });
          Axios({
            method: 'POST',
            url: api.eyeson.joinRoom(
              userData?.profile.name,
              event.room_id.room_id,
            ),
            headers: { Authorization: process.env.REACT_APP_EYESON_API_KEY },
          })
            .then((response) => {
              toast.notify('Redirecting...', {
                position: 'top',
                duration: 5000,
              });
              setTimeout(() => {
                history.push({
                  pathname: '/event/video',
                  state: {
                    roomID: response.data.room.id,
                    accessKey: response.data.access_key,
                    joining: true,
                  },
                });
              }, 3000);
            })
            .catch((error) => {
              toast.notify(error.response.data.message, {
                position: 'top',
                duration: 5000,
              });
            });
        }
      })
      .catch((error) => {
        console.log(error.message);
        getCall(api.getEvent(event.id))
          .then((response) => {
            setLoading(false);
            if (response.status === 200 && response.data) {
              if (!response.data.room_id || !response.data.room_id.Access_key) {
                toast.notify('This event has not started', {
                  position: 'top',
                  duration: 5000,
                });
              } else {
                Axios({
                  method: 'POST',
                  url: api.eyeson.joinRoom(
                    userData?.profile.name,
                    event.room_id.room_id,
                  ),
                  headers: {
                    Authorization: process.env.REACT_APP_EYESON_API_KEY,
                  },
                })
                  .then((response) => {
                    toast.notify('Redirecting...', {
                      position: 'top',
                      duration: 5000,
                    });
                    setTimeout(() => {
                      history.push({
                        pathname: '/event/video',
                        state: {
                          roomID: response.data.room.id,
                          accessKey: response.data.access_key,
                          joining: true,
                        },
                      });
                    }, 3000);
                  })
                  .catch((error) => {
                    toast.notify(error.response.data.message, {
                      position: 'top',
                      duration: 5000,
                    });
                  });
              }
            } else {
              toast.notify('This event was not found or has been deleted', {
                position: 'top',
                duration: 5000,
              });
            }
          })
          .catch((error) => {
            setLoading(false);
            toast.notify(error.message, {
              position: 'top',
              duration: 5000,
            });
          });
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
