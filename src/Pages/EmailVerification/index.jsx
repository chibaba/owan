import React from "react";
import EventOnwerLayout from "../../Commons/EventOwnerLayout";
import styled from "styled-components";
import Colors from "../../Commons/Colors";
import { Link } from "react-router-dom";
import Button from "../../Commons/Button";

const EmailVerification = ({ email }) => {
  return (
    <EventOnwerLayout>
      <IconDiv>
        <img src="assets/vector.svg" alt="vec" />
      </IconDiv>
      <VerificationRes>
        <h3>
          A verification email has been sent to{" "}
          <Email>{(email = "lagbajamadua@gmail.com")}</Email>
        </h3>
      </VerificationRes>
      <Link to="">
        <WrongEmail>Wrong Email?</WrongEmail>
      </Link>
      <Button text="Edit Email" />
    </EventOnwerLayout>
  );
};
const IconDiv = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const VerificationRes = styled.div`
  padding-top: 1.2rem;
  text-align: center;
  font-size: 12px;
  margin-bottom: 4rem;
`;
const Email = styled.div`
  color: ${Colors.defaultGreen};
`;
const WrongEmail = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  padding: 10px 0;
`;

export default EmailVerification;
