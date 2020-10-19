import React from 'react';
import Styled from 'styled-components';

function CommentInput({ height, value, onChange, onClick }) {
  return (
    <InputWrapper height={height}>
      <Input placeholder="Comment" value={value} onChange={onChange} />
      <SubmitButton onClick={onClick}>
        <img src="/assets/images/icons/send.png" alt="send" />
      </SubmitButton>
    </InputWrapper>
  );
}

const InputWrapper = Styled.div`
  width: 100%;
  height: ${(props) => props.height};
  border: 1px solid #fff;
  box-sizing: border-box;
  display: flex;
`;

const Input = Styled.input`
  margin: 0;
  padding: 0;
  height: 100%;
  border: none;
  flex: 1;
  padding: 0 10px;
  font-size: 10px;
  background: transparent;
  outline: none;
  color: #fff;
`;

const SubmitButton = Styled.button`
  width: 38px;
  height: 38px;
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
`;

export default CommentInput;
