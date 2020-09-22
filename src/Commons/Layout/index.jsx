import React from 'react';
import Header from '../Header';
import Styled from 'styled-components';

function Layout({ children, fullWidth, hashtag }) {
  return (
    <>
      <Header bordered={true} title={`#${hashtag}`} />
      <ContentWrapper fullWidth={fullWidth}>{children}</ContentWrapper>
    </>
  );
}

const ContentWrapper = Styled.section`
  width: ${(props) => (props.fullWidth ? '100%' : '80%')};
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 40px 0; 
`;

export default Layout;
