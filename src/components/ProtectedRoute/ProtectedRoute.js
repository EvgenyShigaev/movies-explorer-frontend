import React from "react";
import { Navigate } from "react-router-dom";
import { BASE_ROUTE } from "../../utils/constants";

function ProtectedRoute({ element: Component, ...props }) {
  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to={BASE_ROUTE} replace />
  );
}

export default ProtectedRoute;
