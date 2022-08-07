//Import required packages
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons';

//Styled Component for header
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color:  #F8C8DC;
  padding: 25px;
`;

//Styled Components for ul
const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//Header Component
const Header = () => {

  return (
    <HeaderWrapper>
      <h1>Vanessa Liaw</h1>
      
      <Nav>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/portfolio'><li>Portfolio</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
      </Nav>

      <FontAwesomeIcon icon={faMoon} className='toggle-mode'/>
    </HeaderWrapper>
  );
};

//Export Header Component
export default Header;