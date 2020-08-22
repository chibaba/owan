import React from 'react';
import Styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';

function Header({ bordered, title }) {
  return (
    <MainHeader bordered={bordered}>
      <NavIcons>
        <Icon path={mdiChevronLeft} size={1.3} />
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

const HeaderTitle = Styled.h3`
  font-weight: 900;
  margin: auto;
`;

export default Header;
