import React from 'react';
import styled from "styled-components"




const BackDrop =({children})=>{
    return(
        <BackDropBackground>

            {children}
        </BackDropBackground>


    )
}

const BackDropBackground=styled.section`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index:10;

`
export default BackDrop