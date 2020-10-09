import React, { useEffect } from 'react';
import Styled from 'styled-components';
import Button from '../../Commons/Button';
import { Link, useHistory } from 'react-router-dom';
import cookie from 'js-cookie';

function Home() {
  const history = useHistory();
  useEffect(() => {
    const token = cookie.get('uid');
    if(token) {
      history.push('/dashboard');
    }
  }, [])
  return (
    <ContentWrapper>
      <Logo src="/assets/images/owambe-logo.png" alt="logo" />
      <p>
        Fully virtual experiences are the new normal. Create unique social
        experiences that engage your audiences in familiar and exciting new
        ways.
      </p>
      <ButtonsArea>
        <Link to="/login">
          <Button text="Sign in" />
        </Link>
        <Link to="/signup">Create account</Link>
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

const Logo = Styled.img`
  font-weight: bold;
  font-size: 46px;
  margin: 0;
  width: 70%;
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
