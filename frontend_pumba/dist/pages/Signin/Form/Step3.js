import React from "react";
import { useFormContext } from "./FormContext";
import Input from "../../../components/Reusables/Input";
export default function Step3() {
  const {
    formData,
    handleInputChange,
    prevStep,
    errors
  } = useFormContext();
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col relative gap-5 h-full"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl pb-5"
  }, "Datos de cuenta"), /*#__PURE__*/React.createElement(Input, {
    label: "Email *",
    name: "email",
    type: "email",
    value: formData.email,
    placeholder: "Ingrese su correo electr\xF3nico",
    onChange: handleInputChange,
    error: errors.email
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Contrase\xF1a *",
    name: "password",
    type: "password",
    value: formData.password,
    placeholder: "Ingrese su contrase\xF1a",
    onChange: handleInputChange,
    error: errors.password
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Repetir Contrase\xF1a *",
    name: "repeatedPassword",
    type: "password",
    value: formData.repeatedPassword,
    placeholder: "Ingrese nuevamente la contrase\xF1a",
    onChange: handleInputChange,
    error: errors.repeatedPassword
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-around absolute bottom-10 w-full"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: prevStep,
    className: "w-fit self-center p-5 lg:px-10 border-2 border-black bg-slate-400 py-2 rounded-lg hover:bg-slate-500 transition-all duration-300"
  }, "Anterior"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-fit self-center p-5 lg:px-10 border-2 border-black bg-slate-400 py-2 rounded-lg hover:bg-slate-500 transition-all duration-300"
  }, "Finalizar")));
}