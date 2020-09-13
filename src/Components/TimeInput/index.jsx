import React from 'react';
import Styled from 'styled-components';

const TimeInput = ({
  name,
  value,
  label,
  placeholder,
  className,
  onChange,
}) => {
  return (
    <InputWrapper className={className}>
      <label htmlFor={name}>{label}</label>
      <InputField
        name={name}
        value={value}
        type="time"
        placeholder={placeholder}
        onChange={onChange}
      ></InputField>
    </InputWrapper>
  );
};

const InputWrapper = Styled.div`
  width: 100%;
    label {
    font-size: 12px;
    font-weight: bold;
  }
`;

const InputField = Styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 14px;
  font: inherit;
  margin-top: 5px;
  margin-bottom: 1rem;
  border: 1px solid #c4c4c4;
  outline: none;
`;

export default TimeInput;
