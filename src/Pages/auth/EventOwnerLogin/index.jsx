import React, { useEffect, useState } from 'react';
import EventOwnerLayout from '../../../Commons/EventOwnerLayout';
import styled from 'styled-components';
import FormInput from '../../../Components/FormInput/Index';
import Button from '../../../Commons/Button';
import Colors from '../../../Commons/Colors';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Label } from '../EventOwnerRegister';
import { getCall, postCall } from '../../../APIs/requests';
import api from '../../../APIs/endpoints';
import { useAppContext } from '../../../Context/AppContext';
import toaster from 'toasted-notes';
import cookie from 'js-cookie';

const EventOwnerLogin = () => {
  const history = useHistory();
  const { state } = useLocation();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    getCall(api.getEvent(process.env.REACT_APP_EVENT_TODAY))
      .then((response) => {
        if (response.status === 200 && response.data) {
          setEvent(response.data);
          window.localStorage.setItem('evtoday', JSON.stringify(response.data));
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  function inputChangeHandler(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }
  const { handleUserState } = useAppContext();

  function validateInput(data) {
    try {
      for (let i in data) {
        if (!data[i] || data[i] === '') {
          throw new Error(data[i]);
        } else {
          continue;
        }
      }
    } catch (error) {
      setError(error.message);
    }
  }

  function submitFormHandler(e) {
    e.preventDefault();
    const { email, password } = formValues;
    const returnPage = window.localStorage.getItem('returnTo');
    validateInput({ email, password });

    setLoading(true);

    if (error) {
      setShowError(true);
      return;
    }

    const data = { email, password };

    postCall(api.login, data, { 'client-id': process.env.REACT_APP_CLIENT_ID })
      .then((response) => {
        if (response.data) {
          const { user, token } = response.data;
          cookie.set('uid', token);
          cookie.set('auid', user.userId);
          cookie.set('udt', JSON.stringify(user));
          handleUserState(user);
          toaster.notify('Login Successful. Redirecting...', {
            position: 'top',
            duration: 5000,
            type: 'success',
          });
          setLoading(false);
          setTimeout(function () {
            history.push({
              pathname: state?.returnTo || returnPage || '/dashboard',
              state: { user },
            });
            window.location.href =
              state?.returnTo || returnPage || '/dashboard';
          }, 5000);
        }
      })
      .catch((error) => {
        toaster.notify(error.message, {
          position: 'top',
          duration: 5000,
        });
        setLoading(false);
      });
  }

  return (
    <EventOwnerLayout createAcc={false} title="Log in into your account">
      {loading ? (
        <LoadingIcon>
          <img src="/assets/images/icons/loading.svg" alt="Loading..." />
        </LoadingIcon>
      ) : null}
      <EventToday>
        <img src={event && event.images[0]} alt="Event" />
        <div>
          <p style={{ fontWeight: 'BOLD', fontSize: '14px' }}>
            Happening today
          </p>
          <p>#{event?.hashtag}</p>
          <Link
            to={{ pathname: `/event/detail/${event?.id}` }}
            style={{
              color: `${Colors.defaultGreen}`,
              fontSize: '12px',
              marginTop: '10px',
            }}
          >
            View Details
          </Link>
        </div>
      </EventToday>
      <EventOwnerLoginForm>
        <div>
          <Label>
            Email
            <FormInput
              name="email"
              type="email"
              onChange={inputChangeHandler}
              required
            />
          </Label>
        </div>
        <div>
          <Label>
            Password
            <FormInput
              name="password"
              type="password"
              onChange={inputChangeHandler}
              required
            />
          </Label>
        </div>
        <ForgotPassword>Forgot Password</ForgotPassword>

        <Button text="Log in" onClick={submitFormHandler} />
      </EventOwnerLoginForm>
      <Redirect>
        Dont have an account?
        <Link to="/signup">
          <RegisterLink> Register</RegisterLink>
        </Link>
      </Redirect>
    </EventOwnerLayout>
  );
};

export const EventToday = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  img {
    width: 100px;
    border-radius: 4px;
    margin-right: 20px;
  }
  div {
    p {
      margin: 0;
    }
  }
`;

const EventOwnerLoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ForgotPassword = styled.span`
  margin-top: 0.6rem;
  margin-bottom: 2.5rem;
  font-size: 12px;
  text-align: right;
  color: ${Colors.defaultGreen};
`;
const Redirect = styled.span`
  text-align: center;
  font-size: 12px;
  padding-top: 1rem;
`;
const RegisterLink = styled.span`
  color: ${Colors.defaultGreen};
`;

export const LoadingIcon = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 60px;
  }
`;

export default EventOwnerLogin;
