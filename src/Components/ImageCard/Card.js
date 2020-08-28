import React from 'react';
import styled from 'styled-components';

const ImageCard =({image})=> {
    return(
        <UploadImage>
            {image}
        </UploadImage>


    )
}
const UploadImage = styled.div`
        height:80px;
        width: 30%;
        border: 1px dashed rgba(0,0,0,0.5);
        margin-bottom: 1rem;
        @media(min-with: 760px){
            width: 200px;
        }

`
export default ImageCard