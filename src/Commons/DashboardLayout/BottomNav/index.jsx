import React from 'react';
import Styled from 'styled-components';

function BottomNav() {
  return (
    <NavWrapper>
      <SingleNavLink href="/">
        <img src="/assets/images/icons/settings.png" alt="settings" />
        <span>Home</span>
      </SingleNavLink>
      <SingleNavLink href="/">
        <img src="/assets/images/icons/calendar.png" alt="settings" />
        <span>History</span>
      </SingleNavLink>
      <SingleNavLink href="/">
        <img src="/assets/images/icons/star.png" alt="settings" />
        <span>Profile</span>
      </SingleNavLink>
    </NavWrapper>
  );
}

const NavWrapper = Styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 480px;
  height: 80px;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.08);
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
`;

const SingleNavLink = Styled.a`
display: flex;
flex-direction: column;
align-items: center;
color: #000;
text-decoration: none;
  span {
    font-size: 10px;
    font-weight: 900;
    margin-top: 10px;
  }
`;

export default BottomNav;
