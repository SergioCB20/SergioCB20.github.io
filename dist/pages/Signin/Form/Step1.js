import React from "react";
import { useFormContext } from "./FormContext";
import Input from "../../../components/Reusables/Input";
export default function Step1() {
  const {
    formData,
    handleInputChange,
    nextStep,
    errors
  } = useFormContext();
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col relative gap-4 h-full"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl pb-2"
  }, "Datos personales"), /*#__PURE__*/React.createElement(Input, {
    label: "Nombre *",
    name: "name",
    type: "text",
    value: formData.name,
    placeholder: "Ingrese su nombre",
    onChange: handleInputChange,
    error: errors.name
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Apellidos *",
    name: "surname",
    type: "text",
    value: formData.surname,
    placeholder: "Ingrese sus Apellidos",
    onChange: handleInputChange,
    error: errors.surname
  }), /*#__PURE__*/React.createElement(Input, {
    label: "N\xFAmero telef\xF3nico (incluyendo c\xF3digo de pa\xEDs) *",
    name: "phone_number",
    type: "tel",
    value: formData.phone_number,
    placeholder: "Ejm: +51 964844541",
    onChange: handleInputChange,
    error: errors.phone_number
  }), /*#__PURE__*/React.createElement("label", {
    className: `flex flex-col gap-1 ${errors.gender ? "text-red-600" : ""}`
  }, "G\xE9nero *", /*#__PURE__*/React.createElement("select", {
    name: "gender",
    value: formData.gender,
    onChange: handleInputChange,
    className: `border-black border-b-2 focus:outline-none  w-full ${errors.gender ? "border-red-600" : ""}`
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Seleccione un g\xE9nero"), /*#__PURE__*/React.createElement("option", {
    value: "masculino"
  }, "Masculino"), /*#__PURE__*/React.createElement("option", {
    value: "femenino"
  }, "Femenino"), /*#__PURE__*/React.createElement("option", {
    value: "dinosaurio"
  }, "Dinosaurio")), errors.gender && /*#__PURE__*/React.createElement("sup", {
    className: "pt-4"
  }, errors.gender)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: nextStep,
    className: "w-fit self-center p-5 lg:px-10 border-2 border-black bg-slate-400 py-2 absolute bottom-3 rounded-lg hover:bg-slate-500 transition-all duration-300"
  }, "Siguiente"));
}