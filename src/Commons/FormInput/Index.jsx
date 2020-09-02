import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';

const FormInput = (props) => {
  return <InputField {...props} />;
};

const InputField = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  font: inherit;
  border-radius: 3px;
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
