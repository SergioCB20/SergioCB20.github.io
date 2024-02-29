import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { ProductosProvider } from "./context/ProductosContext.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(ProductosProvider, null, /*#__PURE__*/React.createElement(UserProvider, null, /*#__PURE__*/React.createElement(App, null)))));