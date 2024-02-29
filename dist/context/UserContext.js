import React, { createContext, useContext, useState } from 'react';
const UserContext = /*#__PURE__*/createContext();
export const useUserContext = () => {
  return useContext(UserContext);
};
export const UserProvider = ({
  children
}) => {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState(() => {
    const token = localStorage.getItem('token');
    const storedCart = localStorage.getItem(`cart-${token}`);
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const contextValue = {
    user,
    setUser,
    cart,
    setCart
  };
  return /*#__PURE__*/React.createElement(UserContext.Provider, {
    value: contextValue
  }, children);
};