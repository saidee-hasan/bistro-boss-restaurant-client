// src/components/PrivateRoute.js
import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";




function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  
  console.log(location)
  if (loading) {
    return (
      <div className="text-center mt-52">
        {" "}
        <span className="loading loading-dots loading-lg "></span>
      </div>
    );
  }
  if (user) {
    return children; // Render children if user is authenticated
  }

  return <Navigate to="/login" state={location?.pathname} />; // Redirect to login if not authenticated
}

export default PrivateRoute;
