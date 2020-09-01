import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EventOnwerLayout from '../../Commons/EventOwnerLayout';
import FormInput from '../../Commons/FormInput/Index';
import styled from 'styled-components';
import CheckBox from '../../Commons/CheckBox';
import Button from '../../Commons/Button';
import Colors from '../../Commons/Colors';
import axios from 'axios';

//Request call should be refactored later

const EventOwnerRegister = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
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
    const { email, fullName, password, phoneNumber } = formValues;

    validateInput({ email, fullName, password, phoneNumber });

    if (error) {
      setShowError(true);
      return;
    }

    //Move routes to env
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/users/v1/users`,
      headers: {
        'client-id': process.env.REACT_APP_CLIENT_ID,
      },
      data: {
        email,
        name: fullName,
        password,
        phoneNumber,
        verificationType: 'phoneNumber',
      },
    })
      .then((response) => {
        if (response.status === 201) {
          window.location.href = '/login';
        }
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  }

  return (
    <EventOnwerLayout createAcc={true} title="Create A LinkUp account">
      <form>
        <div>
          <Label>
            Full Name
            <FormInput
              name="fullName"
              type="text"
              onChange={inputChangeHandler}
              required
            />
          </Label>
        </div>
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
            Phone Number
            <FormInput
              name="phoneNumber"
              type="Number"
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
        <Terms>
          <CheckBox square={true} name="checkbox" type="checkbox" />
          <TermInstru>
            {' '}
            I agree to LinkUp <LoginLink>Terms & Condition</LoginLink>
          </TermInstru>
        </Terms>
        <Button text="Register" onClick={submitFormHandler} />
      </form>
      <RedirectTwo>
        Have an account?{' '}
        <Link to="/login">
          <LoginLink> Login</LoginLink>
        </Link>
      </RedirectTwo>
    </EventOnwerLayout>
  );
};
const Label = styled.label`
  font-weight: 600;
  font-size: 13px;
`;
const Terms = styled.div`
  display: flex;
  font-size: 10px;
  margin-top: 0.6rem;
  margin-bottom: 2rem;
`;
const TermInstru = styled.span`
  margin-left: 8px;
`;
const RedirectTwo = styled.span`
  text-align: center;
  font-size: 12px;
  padding-top: 1rem;
`;
const LoginLink = styled.span`
  color: ${Colors.defaultGreen};
`;

export default EventOwnerRegister;
