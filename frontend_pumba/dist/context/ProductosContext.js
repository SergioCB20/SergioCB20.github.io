import React, { createContext, useContext, useState } from 'react';
const ProductosContext = /*#__PURE__*/createContext();
export const useProductosContext = () => {
  return useContext(ProductosContext);
};
export const ProductosProvider = ({
  children
}) => {
  const [productos, setProductos] = useState([]);
  const contextValue = {
    productos,
    setProductos
  };
  return /*#__PURE__*/React.createElement(ProductosContext.Provider, {
    value: contextValue
  }, children);
};