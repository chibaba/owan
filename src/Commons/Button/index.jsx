import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

function Button({ text }) {
  return <DefaultButton>{text}</DefaultButton>;
}

const DefaultButton = Styled.button`
  width: 100%;
  border: none;
  background: #28C101;
  border-radius: 5px;
  box-shadow: 0px 20px 45px rgba(0, 0, 0, 0.07);
  color: #fff;
  font-size: 14px;
  font-family: 'Sailec', sans-serif;
  font-weight: 900;
  padding: 10px 0;
`;

Button.propTypes = {
  text: PropTypes.string,
  clickAction: PropTypes.func,
};

export default Button;