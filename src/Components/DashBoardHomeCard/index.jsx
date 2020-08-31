import React from 'react';
import styled from "styled-components"
import Colors from '../../Commons/Colors'




const DashBoardHomeCard=({children})=>{
    return(

        <DashboardHomeCardContainer>
            <div>
                {children}

            </div>

        </DashboardHomeCardContainer>

    )
}
const DashboardHomeCardContainer = styled.a`
  display: flex;
  height: 130px;
  background: rgba(40,193,1, 0.2);
  width: 47.25%;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0px 19.0769px 42.9231px rgba(0, 0, 0, 0.07);
  justify-content: flex-end;
  flex-direction: column;
  align-items: baseline;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  div {
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    align-items: baseline;
    justify-content: flex-end;
    span {
      color:${Colors.defaultGreen} ;
      font-size: 14px;
      font-weight: 900;
      margin-top: 20px;
    }
    
   
  }
`;


export default DashBoardHomeCard