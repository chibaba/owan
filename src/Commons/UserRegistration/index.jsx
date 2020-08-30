import React from 'react';
import DualHeader from "../DualHeader"
import styled from 'styled-components';
import Colors from "../Colors"




const UserRegistration =({event})=>{
    return(
        <>
        <DualHeader isLogin={false}>
    <Instruction>You have to register before you can attend <EventTitle>{event="#HenryJane2020"}</EventTitle> event</Instruction>
        </DualHeader>
    <RegFormWrapper>
            
    </RegFormWrapper>


        </>
    )
}
const RegFormWrapper = styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: auto;

`
const Instruction= styled.p`
    padding-top:1.5rem;
    font-size:16px;

`
const EventTitle = styled.span`
 color: ${Colors.defaultGreen}

`
export default UserRegistration