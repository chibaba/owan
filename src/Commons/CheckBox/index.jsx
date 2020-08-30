import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CheckBox = ({type='checkbox', name,  onChange, location, square}) => {
  return (
    <StyledCheckbox>
      <HiddenCheckBox
        type={type}
        name={name}
        
        onChange={onChange}
        location={location}
        square={square}
      />
    </StyledCheckbox>
  );
};
const HiddenCheckBox = styled.input`
  height: 1px;
  border: 0;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  width: 1px;
  
`;
const StyledCheckbox = styled.div`
  width: ${({location})=> location? "16px": "15px"};
  height:  ${({location})=> location? "16px": "15px"};
  border-radius:${({square})=> square? "5px": "50%"};
  position: relative;
  background: ${({checked})=>checked? 'rgba(40,193,1, 0.1':'#28C101' };
  box-shadow: 0px 20px 45px rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
CheckBox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CheckBox;
