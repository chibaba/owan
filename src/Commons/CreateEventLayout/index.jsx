import React from 'react';
import Header from '../Header';
import styled from 'styled-components';



const CreateEventLayout=({children})=>{
    return(
        <>
        <Header title="Create Event" bordered={false}/>
    <ContentLayout>{children}</ContentLayout>

        </>
    )
    
}
const ContentLayout = styled.section`
  width: 80%;
  
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
`;
export default CreateEventLayout