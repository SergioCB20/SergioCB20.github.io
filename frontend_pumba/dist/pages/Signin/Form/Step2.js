import React from "react";
import { useFormContext } from "./FormContext";
import Input from "../../../components/Reusables/Input";
export default function Step2() {
  const {
    formData,
    handleInputChange,
    nextStep,
    prevStep,
    errors
  } = useFormContext();
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col relative gap-5  h-full"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl pb-5"
  }, "Datos de adicionales (opcional)"), /*#__PURE__*/React.createElement(Input, {
    label: "Direcci\xF3n",
    name: "address",
    type: "text",
    value: formData.address,
    placeholder: "Ingrese su correo electr\xF3nico",
    onChange: handleInputChange,
    error: errors.address
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Cumplea\xF1os",
    name: "birthday",
    type: "text",
    value: formData.birthday,
    placeholder: "dd/mm",
    onChange: handleInputChange,
    error: errors.birthday
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full flex justify-around absolute bottom-10"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: prevStep,
    className: "w-fit self-center p-5 lg:px-10 border-2 border-black bg-slate-400 py-2 rounded-lg hover:bg-slate-500 transition-all duration-300"
  }, "Anterior"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: nextStep,
    className: "w-fit self-center p-5 lg:px-10 border-2 border-black bg-slate-400 py-2 rounded-lg hover:bg-slate-500 transition-all duration-300"
  }, "Siguiente")));
}