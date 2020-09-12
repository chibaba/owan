import React from 'react';
import BackDrop from '../../../Components/BackDrop';
import styled from 'styled-components';
import Colors from "../../../Commons/Colors"
import FormInput from '../../../Components/FormInput/Index';
import Button from '../../../Commons/Button';
import BackgroundForOverlay from '../../../Components/BackgroundForOverlay';


const FundForm =()=>{
    return(
        <>
        <BackDrop>
            <JoinForm>
                <ResponseContent>
                <h4>Amount</h4>
                <FormInput
                placeholder="Enter Amount to fund wallet"
                type="number"
                name="amount"
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
      font-size: 12px;
  }
  button{
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
export default FundForm