import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HamburgerHeader = ({ title }) => {
  return (
    <NavHeader>
      <Hamburger>
        <span />
        <span />
        <span />
      </Hamburger>

      <HeaderName>
        <Link to="/">{title}</Link>
      </HeaderName>
    </NavHeader>
  );
};
const NavHeader = styled.div`

height:79px;
display:flex;
align-items: center;
padding: 0 1.2rem;


`;
const Hamburger = styled.div`
  
  height: 1.3rem;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 2rem;
  cursor: pointer;
  outline: none;
  span {
    display: block;
    width: 1.5rem;
    height: 3px;
    background: black;
  }
`;

const HeaderName = styled.h4`
  font-weight: 900;
  margin: auto;
`;
export default HamburgerHeader;
