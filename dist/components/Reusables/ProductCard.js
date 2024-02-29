import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function ProductCard({
  prod
}) {
  const navigate = useNavigate();
  return /*#__PURE__*/React.createElement("div", {
    key: prod.ID_producto,
    className: "flex flex-col gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-black",
    onClick: () => navigate(`/Shop/${prod.ID_producto}`)
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-h-28 md:h-64 md:max-h-none"
  }, /*#__PURE__*/React.createElement("img", {
    src: prod.url_img,
    alt: "",
    className: "w-full h-full"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-1"
  }, /*#__PURE__*/React.createElement("p", null, prod.nombre), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-between"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-red-600"
  }, prod.nombreMarca), /*#__PURE__*/React.createElement("p", null, "$", prod.precio))));
}