//Import required files
import React from 'react';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

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
      </div>
      <Footer />
    </>
  );
};

//Export contact component
export default Contact;