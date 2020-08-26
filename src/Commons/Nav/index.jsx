import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

function Nav() {
  return (
    <>
      <NavWrapper>
        <div className="">
          <div>
            <img src="assets/home.svg" alt="" />
          </div>
          <Link to="">
        Home
          </Link>
        </div>
        <div>
          <div>
            <img src="assets/home.svg" alt="" />
          </div>
          <Link>
          
          History
    
          </Link>
        </div>
        <div className="">
          <div>
            <img src="assets/history.svg" alt="" />
          </div>
          <Link>
          Profile</Link>
        </div>
      </NavWrapper>
    </>
  );
}

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid #f4f4fe;
  align-items: center;
  text-align: center;
  line-height: 1.7;
`;


export default Nav;
