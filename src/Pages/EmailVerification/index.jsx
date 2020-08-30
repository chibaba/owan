import React from "react"
import EventOnwerLayout from "../../Commons/EventOwnerLayout"
import styled from "styled-components"


const EmailVerification =({email})=>{

    return(
        <EventOnwerLayout>
            <IconDiv>
                <img src="assets/vector.svg" alt="vec"/>
            </IconDiv>
            


        </EventOnwerLayout>
        
        
    )

}
const IconDiv = styled.div`
margin-top: 5rem;
display:flex;
flex-direction: column;
justify-content: center;




`
export default EmailVerification