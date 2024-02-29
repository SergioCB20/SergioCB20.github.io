import React, { useState } from "react";
import FormLogin from "./FormLogin";
import PumbaImg from "../../assets/logo.webp";
import LoginImg from "../../assets/imagen_login.webp";
import { Link } from "react-router-dom";
export default function Login() {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center w-screen h-screen lg:text-sm bg-gradient-to-br from-white via-gray-300 to-black"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-black border-2 max-w-6xl flex bg-white"
  }, /*#__PURE__*/React.createElement("section", {
    className: "lg:w-1/2 px-20 flex flex-col gap-10 py-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "font-bold text-xl w-fit"
  }, "Bienvenido a"), /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: PumbaImg,
    alt: "Logo de Pumba",
    className: "w-32"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "h-10 text-center text-xs lg:text-sm text-gray-400"
  }, "Inicia sesi\xF3n y desbloquea todos los beneficios y funcionalidades de nuestra web no oficial"), /*#__PURE__*/React.createElement(FormLogin, null)), /*#__PURE__*/React.createElement("section", {
    className: "lg:w-1/2 hidden lg:block"
  }, /*#__PURE__*/React.createElement("img", {
    src: LoginImg,
    alt: "",
    className: "w-full h-full"
  }))));
}