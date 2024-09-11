import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectIsAdmin } from '../features/auth/authSlice';

const PrivateAdminRoute = ({ children }) => {
  const user = useSelector(selectCurrentUser);
  const isAdmin = useSelector(selectIsAdmin);
  const location = useLocation();

  console.log('PrivateAdminRoute: Current user:', user);
  console.log('PrivateAdminRoute: Is admin:', isAdmin);

  if (!user) {
    console.log('PrivateAdminRoute: No user, redirecting to login');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!isAdmin) {
    console.log('PrivateAdminRoute: User is not admin, redirecting to home');
    return <Navigate to="/" replace />;
  }

  console.log('PrivateAdminRoute: User is admin, rendering admin component');
  return children;
};

export default PrivateAdminRoute;