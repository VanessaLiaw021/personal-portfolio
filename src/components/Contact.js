//Import required files
import React from 'react';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

//Styled component for form 
const Form = styled.form`
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column;
  border: 1px solid white;
  width: 35%;
  margin: 70px auto 30px auto;
  padding: 20px 0;
  background-color:  #F8C8DC;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
`;

//Contact Component
const Contact = () => {
  return (
    <>
      <div className="main contact">
        <h2>Let's Get In Touch!</h2>

        {/* Social Media Section */}
        <div className="social">
          <a href="https://www.linkedin.com/in/vanessa-liaw-b0a1981a2/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={ faLinkedin } className="social-icon" />
          </a>
          <a href="https://www.facebook.com/vanessa.liaw1" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={ faFacebookSquare } className="social-icon" />
          </a>
          <a href="https://www.instagram.com/vanessaliaw98/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={ faInstagramSquare } className="social-icon" />
          </a>
        </div>

        {/* Contact Section */}
        <div className="contact-container">
          <div className="contact-wrapper">
            <FontAwesomeIcon icon={ faEnvelope } />
            <h3>Email</h3>
            <p>vliaw021@gmail.com</p>
          </div>
          <div className="contact-wrapper">
            <FontAwesomeIcon icon={ faPhone } />
            <h3>Phone</h3>
            <p>(704) - 621 - 5045</p>
          </div>
          <div className="contact-wrapper">
            <FontAwesomeIcon icon={ faLocationDot } />
            <h3>Location</h3>
            <p>Charlotte, NC</p>
          </div>
        </div>

        {/* Contact Form */}
        <Form>
          <h2 className="contact-me">Contact Me!</h2>
          <div className="form-group">
            <label for="fullName">Full Name</label>
            <input type="text" placeholder="Full Name" id="fullName" />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="text" placeholder="Email" id="email" />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea></textarea>
          </div>
          <button className="send">Send</button>
        </Form>
      </div>
      <Footer />
    </>
  );
};

//Export contact component
export default Contact;