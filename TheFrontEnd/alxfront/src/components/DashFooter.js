import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>
          <a href="https://wa.me/201503930493" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPhone} /> +201503930493
          </a>
        </p>
        <p>
          <a href="mailto:asmaagadallaah@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> asmaagadallaah@gmail.com
          </a>
        </p>
        <p>
          <a href="https://goo.gl/maps/exampleLink" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 43 Anywhere St. Anycity
          </a>
        </p>
      </div>
      <p className="copyright">&copy; 2024 Cozy Corner Café. All rights reserved.</p>
    </footer>
  );
};

export default Footer;