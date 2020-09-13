import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ImageContainer = () => {
  return (
    <ImageCon>
      <Card image />
      <Card image />
      <Card image />
      <Card image />
    </ImageCon>
  );
};

const ImageCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  align-items: center;
  margin-bottom: 4.5rem;
`;
export default ImageContainer;
