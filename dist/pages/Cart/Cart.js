import React from 'react';
import { useUserContext } from '../../context/UserContext';
import CartDisplay from './CartDisplay';
import MainBoton from '../../components/Reusables/MainBoton';
export default function Cart() {
  const {
    user,
    cart,
    setCart
  } = useUserContext();
  return /*#__PURE__*/React.createElement("main", null, cart.length > 0 && /*#__PURE__*/React.createElement(CartDisplay, {
    cart: cart,
    nombre: user.name,
    setCart: setCart
  }), cart.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 justify-center items-center h-screen"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "font-bold text-3xl"
  }, "Tu carrito est\xE1 vac\xEDo"), /*#__PURE__*/React.createElement("p", {
    className: "text-base mb-10"
  }, "Una vez que a\xF1adas algo a tu carrito, aparecer\xE1 aqu\xED.", /*#__PURE__*/React.createElement("br", null), "\xBFListo para empezar?"), /*#__PURE__*/React.createElement(MainBoton, {
    linkBoton: "/",
    textoBoton: "COMENZAR"
  })));
}