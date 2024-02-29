import React, { useState, useEffect } from "react";
import MainBoton from "../../components/Reusables/MainBoton";
export default function CartDisplay({
  cart,
  setCart,
  nombre
}) {
  const [precioProds, setPrecioProds] = useState(0);
  const [descTotal, setDescTotal] = useState(0);
  const [cantidadProds, setCantidadProds] = useState(0);
  useEffect(() => {
    setPrecioProds(sumarProds(cart, "precio"));
    setDescTotal(sumarProds(cart, "descuento"));
    setCantidadProds(sumarProds(cart, "cantidad"));
  }, [cart]);
  const sumarProds = (arrCart, cat, i = 0, sum = 0) => {
    if (i === arrCart.length) return sum;
    if (cat === "precio") sum += arrCart[i].producto[cat] * arrCart[i].cantidad;
    if (cat === "descuento") sum += arrCart[i][cat] * arrCart[i].cantidad;
    if (cat === "cantidad") sum += arrCart[i].cantidad;
    return sumarProds(arrCart, cat, i + 1, sum);
  };
  const handleDeleteItem = productId => {
    const updatedCart = cart.filter(item => item.ID_producto !== productId);
    setCart(updatedCart);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2 p-5 text-sm md:flex-row md:pt-16 min-h-screen  md:justify-around md:text-base"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-5"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "font-bold text-xl md:text-3xl"
  }, "Hola ", nombre, "!"), /*#__PURE__*/React.createElement("p", null, "Bienvenido a tu carrito \uD83D\uDED2, aqu\xED podr\xE1s visualizar informaci\xF3n de tu pedido.", /*#__PURE__*/React.createElement("br", null), "Recuerda que tienes que finalizar tu proceso de compra."), /*#__PURE__*/React.createElement("span", null, "Total de productos: ", cantidadProds), /*#__PURE__*/React.createElement("ul", {
    className: "flex flex-col gap-4"
  }, cart.map(prod => /*#__PURE__*/React.createElement("li", {
    key: prod.ID_producto,
    className: "flex flex-row w-full h-32 p-5 border border-black relative"
  }, /*#__PURE__*/React.createElement("img", {
    src: prod.producto.url_img,
    alt: `imagen de producto ${prod.producto.nombre}`,
    className: "h-full w-2/5 me-8"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-1 md:ms-5"
  }, /*#__PURE__*/React.createElement("h2", null, prod.producto.nombre.toUpperCase()), /*#__PURE__*/React.createElement("p", null, "TAMA\xD1O: ", prod.tamanio), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row gap-4"
  }, /*#__PURE__*/React.createElement("p", null, "Precio: $", prod.producto.precio), /*#__PURE__*/React.createElement("p", null, "Cantidad: ", prod.cantidad))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "absolute top-3 right-3",
    onClick: () => handleDeleteItem(prod.ID_producto)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-x"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-5 md:min-w-64"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-bold mt-10 md:mt-0 md:text-xl"
  }, "RESUMEN DEL PEDIDO"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2 w-full p-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-between w-full"
  }, /*#__PURE__*/React.createElement("p", null, cantidadProds, " productos"), /*#__PURE__*/React.createElement("p", null, "$", precioProds)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-between w-full"
  }, /*#__PURE__*/React.createElement("p", null, "Entrega:"), /*#__PURE__*/React.createElement("p", null, "Gratis")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-between w-full"
  }, /*#__PURE__*/React.createElement("p", null, "Descuento por promoci\xF3n:"), /*#__PURE__*/React.createElement("p", null, "$", descTotal)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-between w-full"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold"
  }, "Total:"), /*#__PURE__*/React.createElement("p", null, "$", precioProds - descTotal))), /*#__PURE__*/React.createElement(MainBoton, {
    linkBoton: "/Thanks",
    textoBoton: "PAGALO AHORA"
  })));
}