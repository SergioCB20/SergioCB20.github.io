import React, { useEffect } from "react";
import MainBoton from "../../components/Reusables/MainBoton";
import { useUserContext } from "../../context/UserContext";
export default function ThanksPage() {
  const {
    setCart
  } = useUserContext();
  useEffect(() => {
    const token = localStorage.getItem("token");
    localStorage.setItem(`cart-${token}`, []);
    setCart([]);
  }, []);
  return /*#__PURE__*/React.createElement("main", {
    className: "flex flex-col gap-6 justify-center items-center w-screen h-screen md:text-base"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl font-extrabold"
  }, "\xA1Gracias por su compra!"), /*#__PURE__*/React.createElement("p", {
    className: "w-3/4 text-justify md:w-fit"
  }, "Al ser de nuestros primeros clientes", " ", /*#__PURE__*/React.createElement("b", null, "(no porque no seamos una tienda real)"), " ", "No va a tener que pagar nada. ", /*#__PURE__*/React.createElement("br", null), "!As\xED que espere su pedido, que le puede llegar en cualquier d\xEDa y hora!"), /*#__PURE__*/React.createElement(MainBoton, {
    linkBoton: "/",
    textoBoton: "Siga explorando nuestros productos!"
  }));
}