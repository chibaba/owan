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
          <Link to="/welcome">
            <LinkTo>
        Home
        </LinkTo>
          </Link>
        </div>
        <div>
          <div>
          <img src="/assets/images/icons/calendar.png" alt="settings" />
          </div>
          <Link>
          <span>
          <LinkTo>
          History
          </LinkTo>
        
          </span>
    
          </Link>
        </div>
        <div >
          <div>
          <img src="/assets/images/icons/star.png" alt="settings" />
          </div>
          <Link>
          <LinkTo>
          Profile
          </LinkTo></Link>
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
  line-height: 1.5;
`;
const LinkTo = styled.nav`
      font-size:11px;

`



export default Nav;
