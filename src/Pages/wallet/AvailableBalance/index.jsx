import React from 'react';
import HamburgerHeader from '../../../Components/HamburgerHeader';
import CurrBalance from '../../../Components/CurrBalance';
import Button from '../../../Commons/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const AvailableBalance =()=>{
    return(
        <>
        <HamburgerHeader title="Wallet Balance"/>
        <CurrBalance/>
        <LinkTo class="linkto">
        <Link to="/addbal">
        <Button text="Fund wallet"/>
        </Link>
        </LinkTo>

        
        </>

    )
}
const LinkTo = styled.div`
    width: 90%;
    margin: auto;
    

`
export default AvailableBalance