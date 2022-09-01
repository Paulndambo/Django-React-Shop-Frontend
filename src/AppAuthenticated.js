import React from 'react';
import App from './App';
import {AuthProvider} from './context/AuthContext';

const AppAuthenticated = () => {
  return <AuthProvider>
    <App />
  </AuthProvider>
}

export default AppAuthenticated