import React from 'react';
import Styled from 'styled-components';
import Colors from '../../Commons/Colors';
import Icon from '@mdi/react';
import { mdiPlus, mdiClose } from '@mdi/js';

const ImageUploadButton = ({ id, onChange, name, previewSrc, clearField }) => {
  return (
    <ButtonWrapper>
      {previewSrc ? (
        <label onClick={clearField}>
          <Icon path={mdiClose} size={0.7} color={Colors.white} />
        </label>
      ) : null}
      <img
        src={previewSrc}
        alt={id}
        style={{ display: previewSrc && 'block' }}
      />
      <input type="file" id={id} onChange={onChange} name={name} />
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
  overflow: hidden;
  position: relative;
  label {
    position: absolute;
    z-index: 999;
    &:first-child {
      top: 0;
      background: #dd0d0d;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      right: 0;
      z-index: 9;
    }
  }
  img {
    display: none;
    position: absolute;
    width: 100%;
  }
  input {
    display: none;
  }
`;

export default ImageUploadButton;
