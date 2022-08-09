//Import required packages
import React from 'react';
import styled from 'styled-components';

//Styled compponents for footer
const FooterWrapper = styled.footer`
  text-align: center;
  padding: 30px;
  background-color:  #F8C8DC;
  border-top: 2px solid white;
  letter-spacing: 2px;
`;

//Footer Component
const Footer = () => {
  return (
    <FooterWrapper className="footer">
      <p>@2022 Designed and Develop by <span>Vanessa Liaw</span></p>
    </FooterWrapper>
  )
}

export default Footer;