import React from 'react';
import {  Link} from 'react-router-dom'
import EventOnwerLayout from '../../../Commons/EventOwnerLayout';
import FormInput from '../../../Commons/FormInput/Index'
import styled from 'styled-components';
import CheckBox from '../../../Commons/CheckBox';
import Button from '../../../Commons/Button';
import Colors from "../../../Commons/Colors";


const EventOwnerRegister =()=>{
    return(
        <EventOnwerLayout createAcc={true} title="Create A LinkUp account">
            <form>
            <div>
            <Label >
                Full Name
                <FormInput
                name="fullName"
                type="text"
                required

                />
            </Label>
            </div>
            <div>
            <Label>
                Email
                <FormInput
                 name="email"
                 type="email"

                />
            </Label>
            </div>
            <div>
            <Label>
                Phone Number
                <FormInput
                 name="PhoneNumber"
                 type="Number"

                />
            </Label>
            </div>
            <div>
            <Label>
                Phone Number
                <FormInput
                 name="password"
                 type="password"

                />
            </Label>
            </div>
            <Terms > 
            <CheckBox
            square={true}
            name="checkbox"
            type="checkbox"
            />
            <TermInstru> I agree to LinkUp <LoginLink>Terms & Condition</LoginLink></TermInstru>
            </Terms>
            <Button text="Register"/>
            </form>
            <RedirectTwo>
        Dont have an account?
        <Link to="/eventLogin">
          <LoginLink> Register</LoginLink>
        </Link>
      </RedirectTwo>


        </EventOnwerLayout>
    )
}
const Label = styled.label`

font-weight: 600;
font-size: 13px;
`
const Terms = styled.div`
    display: flex;
    font-size: 10px;
    margin-top: 0.6rem;
    margin-bottom: 2rem;
    

`
const TermInstru = styled.span`
    margin-left: 8px;
`
const RedirectTwo =styled.span`
text-align: center;
font-size: 12px;
padding-top: 1rem;
`
const  LoginLink = styled.span`
color: ${Colors.defaultGreen};



`

export default EventOwnerRegister