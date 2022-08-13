//Import required packages
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

//Styled Component for header
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color:  #F8C8DC;
  padding: 25px;
  border-bottom: 2px solid white;
`;

//Styled Components for ul
const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//Header Component
const Header = () => {

  const [isMobile, setMobile] = useState(false);

  return (
    <HeaderWrapper>
      <h1 className="logo">Vanessa Liaw</h1>
      
      <ul className={isMobile ? "mobile-links" : "nav-links"} onClick={() => setMobile(false)}>
        <Link to='/personal-portfolio'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/portfolio'><li>Portfolio</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
      </ul>

      <button className="toggle-mobile" onClick={() => setMobile(!isMobile)}>
        {isMobile ? <FontAwesomeIcon icon={ faXmark } /> : <FontAwesomeIcon icon={ faBars } />}
      </button>
    </HeaderWrapper>
  );
};

//Export Header Component
export default Header;