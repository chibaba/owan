import React from 'react';
import Styled from "styled-components"


const DashBoardCardLayout=({children})=>{
    return(
        <DashboardContent>
            {children}
        </DashboardContent>

    )
}

const DashboardContent = Styled.main`
  width: 90%;
  margin: auto;
  padding: 10px 0; 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  overflow: scroll;
  margin-bottom: 80px;
  @media (min-width: 768px) {
    width: 40%;
  }

`

export default DashBoardCardLayout