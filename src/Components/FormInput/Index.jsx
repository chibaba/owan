import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';

const FormInput = ({ name, label, onChange, type, value, placeholder }) => {
  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
      <InputField
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  label {
    font-size: 12px;
    font-weight: bold;
  }
`;

const InputField = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 14px;
  font: inherit;
  margin-top: 5px;
  margin-bottom: 1rem;
  border: 1px solid #c4c4c4;
  outline: none;
`;
FormInput.propType = {
  name: PropType.string.isRequired,
  type: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
};
export default FormInput;
