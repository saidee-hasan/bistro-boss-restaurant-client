import React from 'react'
import useAdmin from '../hooks/useAdmin'
import useAuth from '../hooks/useAuth'
import { useLocation } from 'react-router-dom';

function AdminRoute() {
    const [user,loading] =useAuth();
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
