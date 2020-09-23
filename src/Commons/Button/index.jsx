import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

function Button({ text, cancelbtn, onClick, style, loading }) {
  return (
    <DefaultButton cancelbtn={cancelbtn} onClick={onClick} style={style}>
      {!loading ? (
        text
      ) : (
        <img src="/assets/images/icons/white-loader.svg" alt="Loading..." />
      )}
    </DefaultButton>
  );
}

const DefaultButton = Styled.button`
  width: 100%;
  border: none;
  background: ${({ cancelbtn }) => (cancelbtn ? 'none' : '#28C101')};
  border-radius: 5px;
  box-shadow: ${({ cancelbtn }) =>
    cancelbtn ? 'none' : '0px 20px 45px rgba(0, 0, 0, 0.07)'};
  color:${({ cancelbtn }) => (cancelbtn ? 'black' : 'white')};
  font-size: 14px;
  font-family: 'Sailec', sans-serif;
  font-weight: bold;
  padding: 15px 0;
  margin-bottom: 10px;
  outline: none;
  img {
    width: 30px;
  }
`;

Button.propTypes = {
  text: PropTypes.string,
  clickAction: PropTypes.func,
};

export default Button;
