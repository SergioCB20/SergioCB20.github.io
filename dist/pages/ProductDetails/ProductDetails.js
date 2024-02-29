import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useProductosContext } from "../../context/ProductosContext";
import MainBoton from "../../components/Reusables/MainBoton";
export default function ProductDetails() {
  const {
    cart,
    setCart
  } = useUserContext();
  const {
    productId
  } = useParams();
  const {
    productos
  } = useProductosContext();
  const [producto, setProducto] = useState(null);
  const [tallaSelected, setTallaSelected] = useState(null);
  const [errorMessage, setErrorMesage] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const tallaKids = ["US-4", "US-5", "US-6", "US-7", "US-8"];
  const tallaNoKids = ["US-9", "US-10", "US-11", "US-12", "US-13"];
  useEffect(() => {
    const selectedProduct = productos.find(prod => prod.ID_producto === parseInt(productId));
    setProducto(selectedProduct);
  }, [productos, productId]);
  const handleClick = () => {
    const actualizarCarrito = productoCarrito => {
      if (cart.length === 0) return [...cart, productoCarrito];
      let productoRepetido = false,
        idx;
      for (let i = 0; i < cart.length; i++) if (cart[i].producto.ID_producto === productoCarrito.producto.ID_producto && cart[i].tamanio === productoCarrito.tamanio) {
        productoRepetido = true;
        idx = i;
      }
      if (productoRepetido) {
        cart[idx].cantidad++;
        return cart;
      } else {
        return [...cart, productoCarrito];
      }
    };
    if (producto && tallaSelected) {
      setErrorMesage("");
      const productoCarrito = {
        producto,
        tamanio: tallaSelected,
        cantidad: 1,
        descuento: 0
      };
      const carritoActualizado = actualizarCarrito(productoCarrito);
      const token = localStorage.getItem("token");
      localStorage.setItem(`cart-${token}`, JSON.stringify(carritoActualizado));
      setCart(carritoActualizado);
      setConfirmationMessage("Producto agregado al carrito");
    } else if (!tallaSelected) {
      setErrorMesage("Tienes que elegir una talla para tu producto");
    }
  };
  const handleSelectSize = size => {
    setTallaSelected(size);
  };
  return /*#__PURE__*/React.createElement("main", {
    className: "flex flex-col w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center relative p-10 h-screen"
  }, producto ? /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-5 md:flex-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex w-full justify-center md:w-1/2"
  }, /*#__PURE__*/React.createElement("img", {
    src: producto.url_img,
    alt: `imagen del producto ${producto.nombre}`,
    className: "w-1/2 md:w-3/4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:text-base md:ps-32"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-red-700 font-semibold"
  }, producto.nombreMarca), /*#__PURE__*/React.createElement("h1", {
    className: "text-lg font-bold md:text-xl"
  }, producto.nombre), /*#__PURE__*/React.createElement("p", {
    className: "text-sm mt-2 mb-5"
  }, "$ ", producto.precio), /*#__PURE__*/React.createElement("ul", {
    className: "grid grid-cols-4 text-center border border-black mb-10"
  }, producto.genero === "niños" && tallaKids.map(size => /*#__PURE__*/React.createElement("li", {
    key: size,
    className: `cursor-pointer border-e-2 border-b-2 border-black  ${tallaSelected === size ? "bg-gray-300" : ""}`,
    onClick: () => handleSelectSize(size)
  }, size)), producto.genero != "niños" && tallaNoKids.map(size => /*#__PURE__*/React.createElement("li", {
    key: size,
    className: `cursor-pointer border-e-2 border-b-2 border-black ${tallaSelected === size ? "bg-gray-300" : ""}`,
    onClick: () => handleSelectSize(size)
  }, size))), /*#__PURE__*/React.createElement(MainBoton, {
    textoBoton: "Agregar al carrito",
    handleClick: handleClick
  }), errorMessage && /*#__PURE__*/React.createElement("p", {
    className: "absolute bottom-60 md:bottom-64 text-red-600"
  }, errorMessage), confirmationMessage && /*#__PURE__*/React.createElement("p", {
    className: "absolute bottom-60 md:bottom-64 text-green-600"
  }, confirmationMessage))) : /*#__PURE__*/React.createElement("p", null, "Cargando producto...")));
}