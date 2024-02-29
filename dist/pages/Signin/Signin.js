import React from "react";
import FormSigin from "./Form/FormSigin";
import { FormProvider } from "./Form/FormContext";
import PumbaImg from "../../assets/logo.webp";
import { Link } from "react-router-dom";
export default function Signin() {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center w-screen h-screen lg:text-sm bg-gradient-to-br from-white via-gray-300 to-black"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-black border-2 max-w-6xl lg:w-1/2 h-5/6 flex flex-col items-center bg-white px-10 pt-2",
    style: {
      minWidth: "370px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-center text-xl font-semibold"
  }, "Registro"), /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: PumbaImg,
    alt: "Logo de Pumba",
    className: "w-32 mb-10"
  })), /*#__PURE__*/React.createElement(FormProvider, null, /*#__PURE__*/React.createElement(FormSigin, null))));
}