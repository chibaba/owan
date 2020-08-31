import React from "react";
import DualHeader from "../../Commons/DualHeader";
import styled from "styled-components";

const NewDashBoardLayout = ({ firstName, lastName, children }) => {
  return (
    <>
      <DualHeader isLogin={true}>
        <UserName>
          <span>{firstName}</span>
          <span>{lastName}</span>
        </UserName>
      </DualHeader>
      <DashContentWrapper>
          
          {children}
      </DashContentWrapper>

    </>
  );
};
const UserName = styled.div`
  display: flex;
  
  span{
      margin-right: 0.4rem;
  }

`;

const DashContentWrapper= styled.div`
  display:flex;
  flex-direction: column;
  justify-content;center;
  align-items: center;

`







export default NewDashBoardLayout;
