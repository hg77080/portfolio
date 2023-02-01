import React from 'react';
export const UserContext = React.createContext(null);
export const useMainContext = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error('MainContext must only be used within its Provider');
  }
  return context;
};