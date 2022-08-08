//Import required files
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

//Styled components for contact wrapper
const ContactWrapper = styled.div`
  border: 2px solid pink;
  margin: 50px 30px;
  width: 250px;
  text-align: center;
  padding: 20px 0;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`; 

//Styled components for form 
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid pink;
  border-radius: 10px;
  width: 50%;
  margin: 20px auto;
  padding: 35px 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
`;

//Contact Component
const Contact = () => {
  return (
    <div className="main">
      <h2>Contact</h2>

      {/* Contact Information */}
      <div className="contact-item">
        <ContactWrapper className="contact">
          <FontAwesomeIcon icon={ faEnvelope } className="contact-icon" />
          <p>vliaw@gmail.com</p>
        </ContactWrapper>
        <ContactWrapper className="contact">
          <FontAwesomeIcon icon={ faPhone } className="contact-icon" />
          <p>(704)-621-5045</p>
        </ContactWrapper>
        <ContactWrapper className="contact">
          <FontAwesomeIcon icon={ faLocationDot } className="contact-icon" />
          <p>Charlotte, NC</p>
        </ContactWrapper>
      </div>

      {/* Contact Form */}
      <Form>
        <h3>Send Me A Message!</h3>
        <div className="name-group">
          <div className="form-group">
            <label for="firstName">First Name:</label>
            <input type="text" name="firstName" id="firstName" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label for="lastName">Last Name:</label>
            <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
          </div>
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea></textarea>
        </div>
        <button type="submit">Send</button>
      </Form>
    </div>
  );
};

export default Contact;