import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { selectCurrentUser } from '../features/auth/authSlice';

const DashHeader = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <FontAwesomeIcon icon={faCoffee} />
        <span>Cozy Corner Café</span>
      </Link>
      <nav>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favorites" className="favorites-link">
          <FontAwesomeIcon icon={faHeart} />
          <span className="sr-only">Favorites</span>
        </Link>
        {user ? (
          <Link to="/order" className="order-button">Order Now</Link>
        ) : (
          <Link to="/login" className="login-button">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default DashHeader;