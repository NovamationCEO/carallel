import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const { loginWithRedirect, logout, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState(null);

  const getToken = async () => {
    try {
      const newToken = await getAccessTokenSilently();
      setToken(newToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ token, loginWithRedirect, logout, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};