import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { selectIsLoggedIn, selectCurrentUser } from '../features/auth/authSlice';
import { useLogoutMutation } from '../features/auth/authApiSlice';
import UserInfo from './UserInfo';

const DashHeader = ({ user }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      navigate('/');
    } catch (err) {
      console.error('Failed to log out:', err);
    }
  };

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
        {isLoggedIn && (
          <Link to="/favorites" className="favorites-link">
            <FontAwesomeIcon icon={faHeart} />
            <span className="sr-only">Favorites</span>
          </Link>
        )}
        {isLoggedIn ? (
          <>
            <Link to="/order" className="order-button">Order Now</Link>
            {currentUser && (
              <div className="user-info">
                <FontAwesomeIcon icon={faUser} />
                <span>{currentUser.name}</span>
              </div>
            )}
            <button onClick={handleLogout} className="logout-button">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <Link to="/login" className="login-button">Login</Link>
        )}
      </nav>
      {user && <UserInfo username={user.username} />}
    </header>
  );
};

export default DashHeader;