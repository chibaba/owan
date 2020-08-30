import React from 'react';
import DualHeader from "../DualHeader"
import styled from 'styled-components';
import Colors from "../Colors"

import FormInput from '../FormInput/Index';
import Button from '../Button';




const UserRegistration =({event})=>{
    return(
        <>
        <DualHeader isLogin={false}>
    <Instruction>You have to register before you can attend <EventTitle>{event="#HenryJane2020"}</EventTitle> event</Instruction>
        </DualHeader>
    <RegFormWrapper>
        <FormData>
            <div>
            <LabelField >
                Full Name
                <FormInput
                name="fullName"
                type="text"
                required

                />
            </LabelField>
            </div>
            <div>
            <LabelField>
                Email
                <FormInput
                 name="email"
                 type="email"

                />
            </LabelField>
            </div>
            <NumberDiv>
            <LabelField>
                Phone Number
                <FormInput
                 name="PhoneNumber"
                 type="Number"

                />
            </LabelField>
            </NumberDiv>
        <Button text="Register"/>
        </FormData>


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
const FormData = styled.form`
    display: flex;
    flex-direction: column;

`
const Instruction= styled.p`
    padding-top:1.5rem;
    font-size:16px;

`
const EventTitle = styled.span`
 color: ${Colors.defaultGreen}

`
const LabelField = styled.label`
font-weight: 600;
font-size: 13px;
`
const NumberDiv = styled.div`
margin-bottom: 2rem;

`
export default UserRegistration