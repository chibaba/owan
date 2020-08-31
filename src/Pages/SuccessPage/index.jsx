import React from 'react';
import BackDrop from '../../Components/BackDrop';
import styled from 'styled-components';
import Colors from '../../Commons/Colors'



const SuccessPage =()=>{
    return(
       <BackDrop>
           <ResponseCard>
               

           </ResponseCard>

       </BackDrop>

    )
}

  const  ResponseCard = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
  background:${Colors.defaultGreen};
  height:300px;
  width: 80%;
  display: flex;
  flex-direction:column;
  align-items:center;
  margin:auto;
  transform: translate(-50%, -50%);
  0px 20px 45px rgba(0, 0, 0, 0.07);
  `
export default SuccessPage
