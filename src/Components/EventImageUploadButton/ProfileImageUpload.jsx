import React from 'react';
import Styled from 'styled-components';
import Colors from '../../Commons/Colors';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

const ProfileImageUpload = ({ id, onChange, name, previewSrc, initialProfile }) => {
  return (
    <ButtonWrapper>
      <img
        src={previewSrc ? previewSrc : initialProfile}
        alt={id}
        style={{ display: (previewSrc || initialProfile) && 'block' }}
      />
      <input type="file" id={id} onChange={onChange} name={name} />
      <label htmlFor={id}>
        <Icon path={mdiPlus} size={1} color="#fff" />
      </label>
    </ButtonWrapper>
  );
};

const ButtonWrapper = Styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid ${Colors.grayBorderColor};
  margin: 25px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  label {
    position: absolute;
    z-index: 999;
    bottom: 0;
    background: ${Colors.defaultGreen};
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 4px;
    right: 10px;
    cursor: pointer;
    svg {
      height: max-content;
    }
  }
  img {
    display: none;
    position: absolute;
    width: 100%;
    border-radius: 50%;
  }
  input {
    display: none;
  }
`;

export default ProfileImageUpload;
