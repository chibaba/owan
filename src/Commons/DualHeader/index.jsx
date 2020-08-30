import React from 'react'
import styled from 'styled-components';
import  PropType from 'prop-types'



const DualHeader =({isLogin, children})=>{
    return(
       
        <HeaderWrapper>
            {isLogin? <WelcomeLogo>Welcome to LinkUp</WelcomeLogo>:<Logo>LinkUp</Logo>}
            {children}

        </HeaderWrapper>
    )
}
const HeaderWrapper= styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
    margin: auto;
   padding: 3rem 1rem 2rem 1rem;
   line-height: 1.7;


`
const Logo= styled.h1`
font-weight: 900;
font-size: 28px;
margin: 0;

`
const WelcomeLogo =styled.h2`
    font-size: 18px;
    font-weight: 900;


`
DualHeader.propType={
    isLogin: PropType.bool,
}


export default DualHeader