// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p><FontAwesomeIcon icon={faPhone} /> +2234-333-560</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> coffeeshop@gmail.com</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 43 Anywhere St. Anycity</p>
      </div>
      <p className="copyright">&copy; 2024 Cozy Corner Café. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
