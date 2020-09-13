import React from 'react';
import Styled from 'styled-components';
import Colors from '../../Commons/Colors';

const CheckBox = ({ name, label, onChange, style }) => {
  return (
    <CheckboxWrapper style={style}>
      <p>{label}</p>
      <input type="checkbox" onChange={onChange} name={name} />
      <span className="checkmark"></span>
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = Styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ .checkmark {
      background-color: ${Colors.defaultGreen};
    }
    &:checked ~ .checkmark:after {
      display: block;
    }
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 7px;
      top: 4px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

export default CheckBox;
