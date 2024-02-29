import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import PumbaPlus from "./pages/PumbaPlus/PumbaPlus";
import ThanksPage from "./pages/ThanksCLI/ThanksPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Promotions from "./pages/Promotions/Promotions";
import { useUserContext } from "./context/UserContext";
import { useProductosContext } from "./context/ProductosContext";
const App = () => {
  const {
    user,
    setUser
  } = useUserContext();
  const {
    setProductos
  } = useProductosContext();
  useEffect(() => {
    function decodeToken(token) {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(atob(base64).split("").map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)).join(""));
      return JSON.parse(jsonPayload);
    }
    function updateUserData() {
      const token = localStorage.getItem("token");
      const decodedToken = decodeToken(token);
      setUser(decodedToken.usuario);
    }
    updateUserData();
  }, [setUser]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/productos');
        if (!response.ok) {
          throw new Error('Error al cargar productos');
        }
        const data = await response.json();
        console.log(data);
        setProductos(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchProducts();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-white text-xs relative"
  }, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/Shop",
    element: /*#__PURE__*/React.createElement(Shop, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/Shop/:productId",
    element: /*#__PURE__*/React.createElement(ProductDetails, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/Shop/Promotions",
    element: /*#__PURE__*/React.createElement(Promotions, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/Login",
    element: /*#__PURE__*/React.createElement(Login, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/Signin",
    element: /*#__PURE__*/React.createElement(Signin, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/Cart",
    element: /*#__PURE__*/React.createElement(Cart, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/PumbaPlus",
    element: /*#__PURE__*/React.createElement(PumbaPlus, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/Thanks",
    element: /*#__PURE__*/React.createElement(ThanksPage, null)
  })), /*#__PURE__*/React.createElement(Footer, null)));
};
export default App;