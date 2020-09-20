import React from 'react';
import Styled from 'styled-components';

const TitleBar = ({ page, toggleDrawer }) => {
  return (
    <HeaderWrapper>
      <div>
        <img
          src="/assets/images/icons/menu.svg"
          alt="menu"
          onClick={toggleDrawer}
        />
        <h2>{page}</h2>
        <span></span>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = Styled.header`
  width: 100%;
  height: 70px;
  div {
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    height: 100%;
    img {
      margin-left: 0;
    }
    h2 {
      font-size: 16px;
      font-weight: bolder;
      margin: 0;
    }
  }
`;

export default TitleBar;