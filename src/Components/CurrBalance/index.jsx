import React from 'react';
import styled from 'styled-components';
import Colors from '../../Commons/Colors'


const CurrBalance =({currentBal}) =>{

    return(
        <CurBalance>
        <div>
        <img src="/assets/images/icons/balance.svg" alt="icon" />
        <span className="acctBalance">{currentBal ="N20,000" }</span>
        <span className="bal">Current Balance</span>
      </div>
      <h4 className="moneyfor">You Will us this balance to spray money at the event</h4>
      </CurBalance>

    )
}
const CurBalance= styled.div`
div{
width: 90%;
background: rgba(40, 193, 1, 0.15);
height: 160px;
border-radius: 5px;
color: ${Colors.defaultGreen};
display: flex;
flex-direction: column;
text-align:center;
padding: 0.5rem 0;
margin: auto;
span.acctBalance{
    font-size: 36px;
    font-weight:bold;
    letter-spacing: 1.5px;
    margin: 1rem 0;

}
span.bal{
    font-size: 14px;
}
@media (min-width: 768px) {
  width: 50%;
  height: 220px;
}
}

h4.moneyfor{
    color: #999999;
    font-size: 10px;
    text-align:center;

   
}

`



export default CurrBalance




