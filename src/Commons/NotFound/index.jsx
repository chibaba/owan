import React from 'react';
import Styled from 'styled-components';

const NotFound = () => {
  return (
    <PageWrapper>
      <img src="/assets/images/404.svg" alt="Not Found" />
    </PageWrapper>
  );
};

const PageWrapper = Styled.div`
  width: 90%;
  max-width: 480px;
  margin: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default NotFound;
