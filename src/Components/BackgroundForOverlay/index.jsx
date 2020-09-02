import React from 'react';
import Header from '../../Commons/Header';
import Button from '../../Commons/Button';
import styled from "styled-components"



function BackgroundForOverlay(){


    return(
        <>
        
        <Header title="#HenryJane2020"/>
        <ButtonPosition>
        <Button text="Join"/>
        </ButtonPosition>
        </>

    )
}
const ButtonPosition = styled.section`
    position: absolute;
    left: 50%;
    top: 90%;
    transform: translate(-50%,-50%);
    text-align: center;
    width: 80%;
    
`
;
export default BackgroundForOverlay