import React, { useContext } from 'react'
import useAdmin from '../hooks/useAdmin'

import { useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { AuthContext } from '../Provider/AuthProvider';

function AdminRoute({children}) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    const [isAdmin ,isAdminLoading]=useAdmin()
    if (loading || isAdminLoading) {
        return (
          <div className="text-center mt-52">
            {" "}
            <span className="loading loading-dots loading-lg "></span>
          </div>
        );
      }
      if (user && isAdmin) {
        return children; // Render children if user is authenticated
      }
    
      return <Navigate to="/login" />; 
}

export default AdminRoute
