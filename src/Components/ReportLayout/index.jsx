import React from 'react';
import HamburgerHeader from '../HamburgerHeader';
import styled from 'styled-components';
import Colors from "../../Commons/Colors"



const ReportLayout =({active})=>{
    return(
        <>
        <HamburgerHeader title="Pride at the Disco"/>
        <ContentContainer>
            <NavBtns>
                <NavBtn active={active}/>
                <NavBtn active={active}/>
                <NavBtn active={active}/>
            </NavBtns>
            



        </ContentContainer>
        </>

    )
}
const ContentContainer = styled.section`
width:90%;
display:flex;
flex-direction:column;

`
const NavBtns = styled.div`
display; flex;
justify-content:space-between;

`
const NavBtn = styled.button`

border: none;
padding: 10px 0;
background: ${({active})=>active? '#28C101':'rgba(40,193,1, 0.2)'};
color: ${({active})=>active? '#fff':'#28C101'};
font-size: 14px;
font-family: 'Sailec', sans-serif;
font-weight: 900;
border-radius: 5px;

`
export default ReportLayout