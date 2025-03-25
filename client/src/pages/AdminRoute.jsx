import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext';

function AdminRoute({ children }) {
  const { userId } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (userId != "1") {
      navigate('/');
    }
  }, [userId, navigate]);
  
  return userId == "1" ? children : null;
}

export default AdminRoute;
