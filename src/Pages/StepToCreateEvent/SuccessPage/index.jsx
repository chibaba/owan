import React from "react";
import BackDrop from "../../../Components/BackDrop";
import styled from "styled-components";
import Colors from "../../../Commons/Colors";






const SuccessPage = ({copy}) => {
  return (
    <BackDrop>
      <ResponseCard>
        <ResponseContent>
            <div>

          <img src="/assets/images/icons/right.svg" alt="done" />
          </div>
          <span className="done">Sucessfully <br/> create event</span>
          

         <ButtonLnk>linkup.com/wqiwuf26356</ButtonLnk>
         <SmallBtnDiv>
             <SmallButton copy={true}>Copy</SmallButton>
             <SmallButton>Share</SmallButton>

         </SmallBtnDiv>
         

        </ResponseContent>
      </ResponseCard>
    </BackDrop>
  );
};

const ResponseCard = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
  background:${Colors.defaultGreen};
  height:330px;
  width: 80%;
  transform: translate(-50%, -50%);
  0px 20px 45px rgba(0, 0, 0, 0.07);
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
     font-weight: 600;
     color:#fff;
  letter-spacing: 2px;
  padding-top: 0.7rem;
  line-height: 1.6;
  margin-bottom:2rem;
 }

`
const SmallBtnDiv= styled.div`
    display:flex;
    width:100%;
    margin-top: 2rem;
    justify-content: space-between;;

`
const ButtonLnk = styled.div`
width: 100%;
 border:none;
 background: #22A900;
 color:  #fff;
 font-size: 14px;
 font-family: 'Sailec', sans-serif;
 font-weight: 900;
 padding: 10px 0;
 border-radius: 5px;
 box-shadow: 0px 20px 45px rgba(0, 0, 0, 0.07);




`
const SmallButton= styled.button`
 width: 47%;
 border:${({copy})=> copy ? "1px solid #fff" : "none"};
 background: ${({copy})=> copy ? "none" : "#fff"};
 color:  ${({copy})=> copy ? "#fff" : "#28C101"};
 font-size: 14px;
 font-family: 'Sailec', sans-serif;
 font-weight: 900;
 padding: 10px 0;
 border-radius: 5px;
 box-shadow: 0px 20px 45px rgba(0, 0, 0, 0.07);


`
;

export default SuccessPage;
