import React from "react";
import { useState } from "react";
//recuerda agregar si es password, el ojito
export default function Input({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  error
}) {
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: `flex flex-col gap-1 ${error ? "text-red-600" : ""}`
  }, label, /*#__PURE__*/React.createElement("div", {
    className: "flex relative w-full"
  }, /*#__PURE__*/React.createElement("input", {
    type: type === "password" ? showPass ? "text" : "password" : type,
    name: name,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    className: `border-black border-b-2 focus:outline-none pe-5 w-full ${error ? "border-red-600" : ""}`
  }), type === "password" && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleShowPass
  }, showPass ? /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-eye-slash"
  }) : /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-eye"
  }))), error && /*#__PURE__*/React.createElement("sup", {
    className: "pt-4 pb-1"
  }, error));
}
Input.defaultProps = {
  label: "label por defecto",
  name: "nombrePorDefecto",
  type: "text",
  value: "",
  placeholder: "placeholder por defecto",
  onChange: "",
  error: ""
};