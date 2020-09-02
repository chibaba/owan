import React from 'react';
import styled from "styled-components";



const ReportNavBtn =({active, text})=>{
    return(
    <NavBtn active={active}>{text}</NavBtn>


    )
}
const NavBtn = styled.button`
width: 30%;
  border: none;
  padding: 5px 3px;
  background: ${({ active }) => (active ? "#28C101" : "rgba(40,193,1, 0.2)")};
  color: ${({ active }) => (active ? "#fff" : "#28C101")};
  font-size: 14px;
  font-family: "Sailec", sans-serif;
  font-weight: 900;
  border-radius: 5px;
`;
export default ReportNavBtn