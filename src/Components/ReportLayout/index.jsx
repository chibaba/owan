import React from "react";
import HamburgerHeader from "../HamburgerHeader";
import styled from "styled-components";


const ReportLayout = ({ children }) => {
  return (
    <>
      <HamburgerHeader title="Pride at the Disco!" />
      <ContentContainer>
        

        {children}
      </ContentContainer>
    </>
  );
};
const ContentContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  
  margin: auto;
`;


export default ReportLayout;
