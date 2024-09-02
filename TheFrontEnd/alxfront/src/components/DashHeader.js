// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <FontAwesomeIcon icon={faCoffee} />
        <span>Cozy Corner Café</span>
      </div>
      <nav>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login" className="login-button">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
