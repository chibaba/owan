import React from 'react';
import Styled from 'styled-components';
import TitleBar from './TitleBat';

const OwnerLayout = ({ children, pageTitle, fullWidth }) => {
  return (
    <LayoutWrapper>
      <TitleBar page={pageTitle}></TitleBar>
      <ContentWrapper full={fullWidth}>{children}</ContentWrapper>
    </LayoutWrapper>
  );
};

const LayoutWrapper = Styled.div`
  width: 100%;
`;

const ContentWrapper = Styled.main`
  width: ${({ full }) => (full ? '100%' : '90%')};
  margin: auto auto 100px auto;
  height: max-content;
`;

export default OwnerLayout;
