import React from 'react';
import Styled from 'styled-components';

const SuspenseLoader = () => {
  return (
    <LoaderWrapper>
      <img src="/assets/images/icons/loading.svg" alt="Loading..." />
    </LoaderWrapper>
  );
};

const LoaderWrapper = Styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 999999999999999;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80px;
  }
`;

export default SuspenseLoader;
