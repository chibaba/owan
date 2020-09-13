import React from 'react';
import Styled from 'styled-components';
import Colors from '../../Commons/Colors';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

const ImageUploadButton = ({ id }) => {
  return (
    <ButtonWrapper>
      <input type="file" id={id} />
      <label htmlFor={id}>
        <Icon path={mdiPlus} size={1} color={Colors.grayBorderColor} />
      </label>
    </ButtonWrapper>
  );
};

const ButtonWrapper = Styled.div`
  width: 28%;
  height: 103px;
  border: 1px dashed ${Colors.grayBorderColor};
  margin-bottom: 25px;
  margin-right: 3.3333%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    display: none;
  }
`;

export default ImageUploadButton;
