import React from 'react';
import { Navigate } from 'react-router-dom';

const RouteGuard = ({ children }) => {

  function hasJWT() {
    return !!localStorage.getItem("token");
  }

  return hasJWT() ? children : <Navigate to="/" />;
};

export default RouteGuard;
