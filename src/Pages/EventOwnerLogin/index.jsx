import React, { useState } from 'react';
import EventOwnerLayout from '../../Commons/EventOwnerLayout';
import styled from 'styled-components';
import FormInput from '../../Commons/FormInput/Index';
import Button from '../../Commons/Button';
import Colors from '../../Commons/Colors';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EventOwnerLogin = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [, setShowError] = useState(false);
  function inputChangeHandler(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

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

    validateInput({ email, password });

    if (error) {
      setShowError(true);
      return;
    }

    //Move routes to env
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/users/v1/auths/login`,
      headers: {
        'client-id': process.env.REACT_APP_CLIENT_ID,
      },
      data: {
        email,
        password,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          const refreshToken = response.data.refresh;
          window.localStorage.setItem('rt', refreshToken);
          window.location.href = '/dashboard';
        }
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  }
  return (
    <EventOwnerLayout createAcc={false} title="Log in into your account">
      <EventOwnerLoginForm>
        <div>
          <LabelText>
            <FormInput
              name="email"
              type="email"
              onChange={inputChangeHandler}
              required
            />
          </LabelText>
        </div>
        <div>
          <LabelText>
            <FormInput
              name="password"
              type="password"
              onChange={inputChangeHandler}
              required
            />
          </LabelText>
        </div>
        <ForgotPassword>Forgot Password</ForgotPassword>

        <Button text="Log in" onClick={submitFormHandler} />
      </EventOwnerLoginForm>
      <Redirect>
        Dont have an account?
        <Link to="/eventreg">
          <RegisterLink> Register</RegisterLink>
        </Link>
      </Redirect>
    </EventOwnerLayout>
  );
};
const EventOwnerLoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const LabelText = styled.label`
  font-weight: 600;
  font-size: 13px;
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
export default EventOwnerLogin;
