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

  //   {data: {…}, status: 201, statusText: "", headers: {…}, config: {…}, …}
  // config: {url: "https://api.eyeson.team/rooms?user[name]=Tega Oke", method: "post", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
  // data:
  // access_key: "Eki6GWGG2lmYm8kfePFqT55N"
  // broadcasts: []
  // links: {self: "https://api.eyeson.team/rooms/Eki6GWGG2lmYm8kfePFqT55N", gui: "https://app.eyeson.team/?Eki6GWGG2lmYm8kfePFqT55N", guest_join: "https://app.eyeson.team/?guest=iscBHkl8TOoMWNorf1d0JCFb", websocket: "https://api.eyeson.team/rt?access_key=Eki6GWGG2lmYm8kfePFqT55N"}
  // locked: false
  // options: {show_names: true, show_label: true, exit_url: null, recording_available: true, broadcast_available: true, …}
  // presentation: null
  // ready: false
  // recording: null
  // room: {id: "5f6d0e6d4742e00012df2fd5", name: "Olatunji Kayode", ready: false, started_at: "2020-09-24T21:23:57.067Z", shutdown: false, …}
  // snapshots: []
  // team: {name: "Olatunji Kayode"}
  // user: {id: "5f6d0e6d4742e00012df2fd7", name: "Tega Oke", avatar: null, guest: false, blocked: false, …}
  // __proto__: Object
  // headers: {cache-control: "max-age=0, private, must-revalidate", content-type: "application/json; charset=utf-8"}
  // request: XMLHttpRequest {requestHeaders: {…}, requestData: null, readyState: 4, timeout: 0, onreadystatechange: ƒ, …}
  // status: 201
  // statusText: ""
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
            position: 'bottom',
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
                position: 'bottom',
                duration: 5000,
              });
              console.log(response);
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
                position: 'bottom',
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
                  position: 'bottom',
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
                      position: 'bottom',
                      duration: 5000,
                    });
                    console.log(response);
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
                      position: 'bottom',
                      duration: 5000,
                    });
                  });
              }
            } else {
              toast.notify('This event was not found or has been deleted', {
                position: 'bottom',
                duration: 5000,
              });
            }
          })
          .catch((error) => {
            setLoading(false);
            toast.notify(error.message, {
              position: 'bottom',
              duration: 5000,
            });
          });
      });
  };

  // created_at: '2020-09-24T19:48:11.441Z';
  // description: 'We are inviting you to the wedding between Kri and Kome. As you come, kindly come with gifts and goodies. There would be small chops available';
  // event_date: '2020-09-30T00:00:00.000Z';
  // event_time: '20:52';
  // hashtag: 'krikome';
  // id: '5f6cf7fb35455c0025af2ca8';
  // images: (3)[
  //   ('https://res.cloudinary.com/seymaster/image/upload/v1600976889/jjohy1h47wejoqahblc0.jpg',
  //   'https://res.cloudinary.com/seymaster/image/upload/v1600976890/cum5hfwsphsnbdjyjqjt.jpg',
  //   'https://res.cloudinary.com/seymaster/image/upload/v1600976890/qdtoh9jeewhawj1po3hs.jpg')
  // ];
  // location: 'online';
  // meta: {
  //   meta: '[object Object]';
  // }
  // name: 'Love In Paradise';
  // room_id: Access_key: 'yHdkaJsrb50BYeaoV0ejY9Ju';
  // room_id: '5f6d00304742e00012df2f9e';
  // __proto__: Object;
  // user_id: '5f69ed269ec292001b28c9ec';

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
