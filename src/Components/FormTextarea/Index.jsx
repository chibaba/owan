import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';

const FormTextarea = ({ name, label, onChange }) => {
  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
      <Textarea name={name} onChange={onChange} rows={5} />
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

const Textarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  font: inherit;
  margin-top: 5px;
  margin-bottom: 1rem;
  border: 1px solid #c4c4c4;
  outline: none;
  resize: none;
`;
FormTextarea.propType = {
  name: PropType.string.isRequired,
  type: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
};
export default FormTextarea;
