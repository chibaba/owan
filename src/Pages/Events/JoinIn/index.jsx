import React from 'react';
import BackDrop from '../../../Components/BackDrop';
import styled from 'styled-components';
import Colors from "../../../Commons/Colors"
import FormInput from '../../../Commons/FormInput/Index';
import Button from '../../../Commons/Button';
import BackgroundForOverlay from '../../../Components/BackgroundForOverlay';
import { Link } from 'react-router-dom';


const JoinIn =()=>{
    return(
        <>
        <BackDrop>
            <JoinForm>
                <ResponseContent>
                <h4>Join Event</h4>
                <FormInput
                placeholder="input Event Url"
                type="url"
                name="url"
                join={true}
                Required

                />
                
                
                <Button text="Continue"/>
                
                

                <Button cancelbtn={true}  text="Cancel" />

                
                </ResponseContent>
            </JoinForm>
            

        </BackDrop>
        <BackgroundForOverlay/>
        </>

    )
}
const ResponseContent = styled.div`
  width: 90%;
  padding-top: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
  margin: auto;
  color: #222222;

  input{
      text-align: center;
      padding: 14px 0;
      font-weight:100;
  }
  button{
      width: 100%;
      margin-top: 0.6rem;
      padding: 14px 0;
  }
 `
const JoinForm = styled.div`
position: absolute;
top:50%;
left:50%;
background:${Colors.white};
height:330px;
width: 85%;
border-radius: 15px;
transform: translate(-50%, -50%);
0px 20px 45px rgba(0, 0, 0, 0.07);
@media(min-width: 760px){
    width:50%;
    height:500px;
}



`
export default JoinIn