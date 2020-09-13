import React from 'react';
import Styled from 'styled-components';

const RadioButton = ({ name, label, value, onSelect }) => {
  return (
    <ButtonWrapper>
      <p>{label}</p>
      <input type="radio" name={name} value={value} onChange={onSelect} />
      <span className="checkmark"></span>
    </ButtonWrapper>
  );
};

const ButtonWrapper = Styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: 10px;
  p {
    margin: 0;
    padding-top: 4px;
  }
  input {  
    position: absolute;
    opacity: 0;
    cursor: pointer;
    &:checked ~ .checkmark {
      background-color: #28C101;
      &:after {
        display: block;
      }
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
      top: 6px;
	    left: 6px;
	    width: 8px;
	    height: 8px;
	    border-radius: 50%;
	    background: white;
    }
  }
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
`;

export default RadioButton;
