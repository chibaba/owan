import React from 'react';
import BackDrop from '../../../Components/BackDrop';
import { Link } from 'react-router-dom';
import Colors from "../../../Commons/Colors"
import styled from "styled-components"


const WalletCredited =()=>{
    return(
        <>
        <BackDrop>
        <ResponseCard>
        <ResponseContent>
            <div>

          <img src="/assets/images/icons/right.svg" alt="done" />
          </div>
          <span className="done">Your account has been <br/> successfully funded</span>
          
<div className='iono'>
         <Link to="/fund">
             <ButtonLnk>Go back</ButtonLnk>
         </Link>
         </div>
         </ResponseContent>
         </ResponseCard>

        


        </BackDrop>
        </>

    )
}
const ResponseCard = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
  background:${Colors.white};
  color:black;
  height:280px;
  width: 80%;
  transform: translate(-50%, -50%);
  0px 20px 45px rgba(0, 0, 0, 0.07);

  div.iono{
      width:100%;
  }
  @media(min-width: 760px){
      width:50%;
      height:500px;
  }
  `;
const ResponseContent = styled.div`
  width: 90%;
  padding-top: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
  margin: auto;
  
 span.done{
     font-weight: bolder;
     color:#222222;
  letter-spacing: 2px;
  padding-top: 0.7rem;
  line-height: 1.3;
  margin-bottom:2rem;
  font-size: 16px;
 }

`

const ButtonLnk = styled.button`
width: 50%;
 border:none;
 background:${Colors.defaultGreen};
 color:  #fff;
 font-size: 14px;
 font-family: 'Sailec', sans-serif;
 font-weight: 900;
 padding: 10px 0;
 border-radius: 5px;
 box-shadow: 0px 20px 45px rgba(0, 0, 0, 0.07);


`




export default WalletCredited