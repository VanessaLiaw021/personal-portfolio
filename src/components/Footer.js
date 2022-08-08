//Import required packages
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareInstagram, faSquareFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

//Styled compponents for footer
const FooterWrapper = styled.footer`
  text-align: center;
  padding: 40px;
  background-color:  #F8C8DC;
  border-top: 2px solid white;
`;

//Footer Component
const Footer = () => {
  return (
    <FooterWrapper className="footer">
       <div>
        <FontAwesomeIcon icon={ faLinkedin } className="icons" />
        <FontAwesomeIcon icon={ faSquareGithub } className="icons" />
        <FontAwesomeIcon icon={ faSquareInstagram } className="icons" />
        <FontAwesomeIcon icon={ faSquareFacebook } className="icons" />
      </div>
      <p>@2022 Designed and Develop by <span>Vanessa Liaw</span></p>
    </FooterWrapper>
  )
}

export default Footer;