import React from "react";
import DualHeader from "../DualHeader";
import styled from "styled-components";

const EventOnwerLayout = ({children, createAcc, title }) => {
  return (
    <>
      <DualHeader>
  <LoginTitle createAcc={createAcc}>{title}</LoginTitle>
      </DualHeader>
      <EventOwnerAuthLayout>
            {children}
      </EventOwnerAuthLayout>
    </>
  );
};

const LoginTitle = styled.span`
  font-weight: 500;
  font-size: ${({createAcc})=>createAcc?"14px": "12px"};
  padding-top: 5px;
`;

const EventOwnerAuthLayout = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: auto;
`;
export default EventOnwerLayout;
