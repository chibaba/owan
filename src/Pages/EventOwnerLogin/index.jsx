import React from "react";
import EventOwnerLayout from "../../Commons/EventOwnerLayout";
import styled from "styled-components";
import FormInput from "../../Commons/FormInput/Index";
import Button from "../../Commons/Button";
import Colors from "../../Commons/Colors";
import { Link } from "react-router-dom";

const EventOwnerLogin = () => {
  return (
    <EventOwnerLayout createAcc={false} title="Log in into your account">
      <EventOwnerLoginForm>
        <div>
          <LabelText>
            <FormInput name="email" type="email" required />
          </LabelText>
        </div>
        <div>
          <LabelText>
            <FormInput name="password" type="password" required />
          </LabelText>
        </div>
        <ForgotPassword>Forgot Password</ForgotPassword>

        <Button text="Log in" />
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
const Redirect =styled.span`
text-align: center;
font-size: 12px;
padding-top: 1rem;
`
const RegisterLink =styled.span`
color: ${Colors.defaultGreen};
`
export default EventOwnerLogin;
