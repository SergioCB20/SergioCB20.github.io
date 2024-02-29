import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainBoton from "../../components/Reusables/MainBoton";
import { Player } from "@lordicon/react";
import CROSS_I from "../../animated_icons/crossIcon.json";
export default function Filter({
  isDisplayed,
  setter,
  filters,
  setFilters
}) {
  const location = useLocation();
  const crossIconRef = useRef();
  const [localFilters, setLocalFilters] = useState(filters);
  useEffect(() => {
    resetFilters();
  }, [location.search]);
  const handleFilterChange = (key, value) => {
    setLocalFilters(prevFilters => ({
      ...prevFilters,
      [key]: value
    }));
  };
  const handleFilter = () => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...localFilters
    }));
    setter(false);
  };
  const resetFilters = () => {
    setLocalFilters({
      gender: "all",
      minPrice: "0",
      maxPrice: "99999",
      marca: "all",
      category: "all",
      text: "",
      typeSort: "asc",
      sortedBy: "nombre"
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `absolute flex flex-col top-0 right-0 h-screen w-full z-50 pt-32 ps-2 bg-white transition-all text-sm ${isDisplayed ? "translate-x-0" : "translate-x-hiddenRight"}`
  }, /*#__PURE__*/React.createElement("h1", {
    className: "font-bold text-xl pt-1.5 md:pt-5"
  }, "FILTRAR POR:"), /*#__PURE__*/React.createElement("div", {
    className: "py-2"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "gender",
    className: "block font-bold"
  }, "G\xE9nero:"), /*#__PURE__*/React.createElement("select", {
    id: "gender",
    className: "w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mt-1",
    value: localFilters.gender,
    onChange: e => handleFilterChange("gender", e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "Todos"), /*#__PURE__*/React.createElement("option", {
    value: "hombre"
  }, "Hombre"), /*#__PURE__*/React.createElement("option", {
    value: "mujer"
  }, "Mujer"), /*#__PURE__*/React.createElement("option", {
    value: "ni\xF1os"
  }, "Ni\xF1os"))), /*#__PURE__*/React.createElement("div", {
    className: "py-2"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "minPrice",
    className: "block font-bold"
  }, "Precio M\xEDnimo ($):"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    id: "minPrice",
    className: "w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mt-1",
    value: localFilters.minPrice,
    onChange: e => handleFilterChange("minPrice", e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "py-2"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "maxPrice",
    className: "block font-bold"
  }, "Precio M\xE1ximo ($):"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    id: "maxPrice",
    className: "w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mt-1",
    value: localFilters.maxPrice,
    onChange: e => handleFilterChange("maxPrice", e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "py-2"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "marca",
    className: "block font-bold"
  }, "Marca:"), /*#__PURE__*/React.createElement("select", {
    id: "marca",
    className: "w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mt-1",
    value: localFilters.marca,
    onChange: e => handleFilterChange("marca", e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "Todas"), /*#__PURE__*/React.createElement("option", {
    value: "Mike"
  }, "Mike"), /*#__PURE__*/React.createElement("option", {
    value: "MarcaPNG"
  }, "MarcaPNG"), /*#__PURE__*/React.createElement("option", {
    value: "Runner"
  }, "Runner"))), /*#__PURE__*/React.createElement("div", {
    className: "py-2"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "category",
    className: "block font-bold"
  }, "Categor\xEDa:"), /*#__PURE__*/React.createElement("select", {
    id: "category",
    className: "w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mt-1",
    value: localFilters.category,
    onChange: e => handleFilterChange("category", e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "Todas"), /*#__PURE__*/React.createElement("option", {
    value: "Zapatillas"
  }, "Zapatillas"), /*#__PURE__*/React.createElement("option", {
    value: "Gorras"
  }, "Gorras"), /*#__PURE__*/React.createElement("option", {
    value: "Camisetas"
  }, "Camisetas"), /*#__PURE__*/React.createElement("option", {
    value: "Calcetines"
  }, "Calcetines"))), /*#__PURE__*/React.createElement("h1", {
    className: "font-bold text-xl pt-5"
  }, "ORDENAMIENTO:"), /*#__PURE__*/React.createElement("div", {
    className: "py-2"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "typeSort",
    className: "block font-bold"
  }, "Tipo:"), /*#__PURE__*/React.createElement("select", {
    id: "typeSort",
    className: "w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mt-1",
    value: localFilters.typeSort,
    onChange: e => handleFilterChange("typeSort", e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "asc"
  }, "Ascendente"), /*#__PURE__*/React.createElement("option", {
    value: "desc"
  }, "Descendente"))), /*#__PURE__*/React.createElement("div", {
    className: "py-2"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "sortedBy",
    className: "block font-bold"
  }, "Por:"), /*#__PURE__*/React.createElement("select", {
    id: "sortedBy",
    className: "w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 mt-1",
    value: localFilters.sortedBy,
    onChange: e => handleFilterChange("sortedBy", e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "nombre"
  }, "Nombre"), /*#__PURE__*/React.createElement("option", {
    value: "precio"
  }, "Precio"))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 md:-bottom-3 flex justify-around w-full mb-5"
  }, /*#__PURE__*/React.createElement(MainBoton, {
    textoBoton: "Aplicar",
    handleClick: handleFilter
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "flex flex-row gap-3 border-2 border-black w-fit p-2 py-3 me-5",
    onClick: resetFilters,
    onMouseEnter: () => crossIconRef.current.playFromBeginning()
  }, /*#__PURE__*/React.createElement("p", {
    className: "pt-2 md:pt-1"
  }, "RESETEAR TODO"), /*#__PURE__*/React.createElement(Player, {
    ref: crossIconRef,
    size: 30,
    icon: CROSS_I
  }))));
}