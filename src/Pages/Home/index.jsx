import React from 'react';
import Styled from 'styled-components';
import Button from '../../Commons/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <ContentWrapper>
      <Logo>LinkUp</Logo>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore lorem ipsum dolor sit amet.
      </p>
      <ButtonsArea>
        <Link to="/events">
          <Button text="Sign in" />
        </Link>
        <Link to="/">Create account</Link>
      </ButtonsArea>
    </ContentWrapper>
  );
}

const ContentWrapper = Styled.section`
 width: 90%;
 margin: auto;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 flex-direction: column;
 p {
   text-align: center;
   font-size: 12px;
   line-height: 18px;
 }
`;

const Logo = Styled.h1`
  font-weight: bold;
  font-size: 46px;
  margin: 0;
`;

const ButtonsArea = Styled.div`
 width: 100%;
 margin-top: 40px;
 a {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #000;
  text-decoration: none;
  font-weight: 900;
 }
`;

export default Home;
