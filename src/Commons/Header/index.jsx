import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

function Header({ bordered, title }) {
  return (
    <MainHeader bordered={bordered}>
      <NavIcons>
        <img src="/assets/images/glyphiconLeft.png" alt="Back" />
      </NavIcons>
      <HeaderTitle>{title}</HeaderTitle>
    </MainHeader>
  );
}

const MainHeader = Styled.header`
  height: 79px;
  border-bottom: ${(props) =>
    props.bordered ? '1px solid rgba(0, 0, 0, 0.08)' : ''};
  display: flex;
  align-items: center;
  padding: 0 1.2rem;
  justify-content: flex-start;
`;

const NavIcons = Styled.nav``;

const HeaderTitle = Styled.h4`
  font-weight: 900;
  margin: auto;
`;

Header.propTypes = {
  bordered: PropTypes.bool,
  title: PropTypes.string,
};

export default Header;
