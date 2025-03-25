// AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from './usersAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for token
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // check authentication status
  const checkAuthStatus = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      setUserId(getUserIdFromToken(token));
    } else {
      setIsLoggedIn(false);
      setUserId(null);
    }
    setLoading(false);
  };

  //extract user ID from JWT token
  const getUserIdFromToken = (token) => {
    if (!token) return null;
    
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      
      const decoded = JSON.parse(jsonPayload);
      return decoded.id;
    } catch (e) {
      console.error('Error parsing token', e);
      return null;
    }
  };

  // Login function
  const login = async (username, password) => {
    try {
      const response = await auth.login(username, password);
      setIsLoggedIn(true);
      setUserId(getUserIdFromToken(response.token || localStorage.getItem('token')));
      return response;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    auth.logout();
    setIsLoggedIn(false);
    setUserId(null);
  };


  const value = {
    isLoggedIn,
    userId,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
