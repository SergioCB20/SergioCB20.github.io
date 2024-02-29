import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Player } from "@lordicon/react";
import { useProductosContext } from "../../context/ProductosContext";
import ProductCard from "../../components/Reusables/ProductCard";
import Filter from "./Filter";
import COMPARE_I from "../../animated_icons/compareIcon.json";
export default function Shop() {
  const location = useLocation();
  const parametrosURL = new URLSearchParams(location.search);
  const filterType = parametrosURL.get("type");
  const filter = parametrosURL.get("filter");
  const compareIconRef = useRef();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: "0",
    maxPrice: "99999",
    gender: "all",
    marca: "all",
    text: "",
    typeSort: "asc",
    sortedBy: "nombre"
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const {
    productos
  } = useProductosContext();
  function bubbleSortProds(arr, campo, dir = "asc") {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1; j++) {
        //asc
        if (arr[j][campo] > arr[j + 1][campo] && dir === "asc") {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        //desc
        if (arr[j][campo] < arr[j + 1][campo] && dir === "desc") {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  useEffect(() => {
    setFilters({
      category: "all",
      minPrice: "0",
      maxPrice: "99999",
      gender: "all",
      marca: "all",
      text: "",
      typeSort: "asc",
      sortedBy: "nombre"
    });
    let filtered = [...productos];
    if (filterType && filter) {
      const lowerCaseFilter = filter.toLowerCase();
      if (filterType === "cat") {
        setFilters(prevFilters => ({
          ...prevFilters,
          category: lowerCaseFilter
        }));
      } else if (filterType === "gen") {
        setFilters(prevFilters => ({
          ...prevFilters,
          gender: lowerCaseFilter
        }));
      } else if (filterType === "text") {
        setFilters(prevFilters => ({
          ...prevFilters,
          text: filter
        }));
      }
    }
    setFilteredProducts(filtered);
  }, [location.search, productos]);
  useEffect(() => {
    const newProductsDisplayed = productos.filter(prod => {
      const categoryFilter = filters.category === "all" || prod.nombreCategoria.toLowerCase() === filters.category.toLowerCase();
      const marcaFilter = filters.marca === "all" || prod.nombreMarca.toLowerCase() === filters.marca.toLowerCase();
      const priceFilter = prod.precio >= parseInt(filters.minPrice) && prod.precio <= parseInt(filters.maxPrice);
      const genderFilter = filters.gender === "all" || prod.genero.toLowerCase() === filters.gender.toLowerCase();
      const textFilter = prod.nombre.toLowerCase().includes(filters.text.toLocaleLowerCase());
      return categoryFilter && marcaFilter && priceFilter && genderFilter && textFilter;
    });
    const sortedProducts = bubbleSortProds(newProductsDisplayed, filters.sortedBy, filters.typeSort);
    setFilteredProducts(sortedProducts);
  }, [filters]);
  return /*#__PURE__*/React.createElement("main", null, filteredProducts.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "px-5 md:text-base"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-between"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "font-bold text-xl ps-1 md:ps-5 pt-7"
  }, "Resultados de b\xFAsqueda:"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "flex flex-row items-center gap-3 mt-5 me-5 p-3 w-fit h-fit md:border-black md:border-2",
    onMouseEnter: () => compareIconRef.current.playFromBeginning(),
    onClick: () => setIsFilterOpen(true)
  }, /*#__PURE__*/React.createElement("p", {
    className: "hidden md:block"
  }, "Filtrar y ordenar"), /*#__PURE__*/React.createElement("div", {
    className: "-translate-y-1 md:translate-y-0"
  }, /*#__PURE__*/React.createElement(Player, {
    ref: compareIconRef,
    size: 35,
    icon: COMPARE_I
  })))), /*#__PURE__*/React.createElement("ul", {
    className: "grid grid-cols-2 gap-3 my-5 md:grid-cols-3 lg:grid-cols-4"
  }, filteredProducts.map(prod => /*#__PURE__*/React.createElement(ProductCard, {
    key: prod.id,
    prod: prod
  }))), /*#__PURE__*/React.createElement(Filter, {
    isDisplayed: isFilterOpen,
    setter: setIsFilterOpen,
    filters: filters,
    setFilters: setFilters
  })) : /*#__PURE__*/React.createElement("div", {
    className: "w-screen h-screen flex justify-center items-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-bold w-fit"
  }, "Lo sentimos, no se encontraron resultados")));
}