import React from 'react';
import Layout from '../../../Commons/Layout';
import Button from '../../../Commons/Button';
import Styled from 'styled-components';
import styled from 'styled-components';


const EventStatus =({text})=>{
   
    return(
        <>
    
        <Layout>
            
            <StatusButton>{text="This event has been held"}</StatusButton>
            <ButtonPosition>
            <Button text="Watch Video"/>
            </ButtonPosition>
           
           
        </Layout>
        </>

     

    )
}

const StatusButton = Styled.button`
  width: 100%;
  border: none;
  background: rgba(40,193,1, 0.1);
  border-radius: 3px;
  box-shadow: 0px 20px 45px rgba(0, 0, 0, 0.07);
  color:#28C101 ;
  font-size: 14px;
  font-family: 'Sailec', sans-serif;
  font-weight: 500;
  padding: 10px 0;
  
`
const ButtonPosition = styled.section`
    position: absolute;
    left: 50%;
    top: 90%;
    transform: translate(-50%,-50%);
    text-align: center;
    width: 80%;
    
`
;
export default EventStatus