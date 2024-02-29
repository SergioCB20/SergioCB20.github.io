import { useState, useEffect, useRef } from "react";
import React from "react";
import Logo from "../../assets/logo.webp";
import { Player } from "@lordicon/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useProductosContext } from "../../context/ProductosContext";
import SEARCH_I from "../../animated_icons/searchIcon.json";
import BAG_I from "../../animated_icons/bagIcon.json";
import AVATAR_I from "../../animated_icons/avatarIcon.json";
export default function NavBarMobile({
  categorias
}) {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [productosMostrados, setProductosMostrados] = useState([]);
  const {
    user
  } = useUserContext();
  const {
    productos
  } = useProductosContext();
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const searchIconRef = useRef(null);
  const bagIconRef = useRef(null);
  const avatarIconRef = useRef(null);
  const handleSearch = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCloseSearch();
      navigate("/Shop?type=text&filter=" + e.target.value);
    }
  };
  const handleChange = e => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
    let productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(searchTextValue.toLowerCase()));
    let mostrar = productosFiltrados.slice(0, 5);
    setProductosMostrados(mostrar);
  };
  const handleOpenSideBar = () => {
    setIsOpenSideBar(true);
  };
  const handleCloseSideBar = () => {
    setIsOpenSideBar(false);
  };
  const handleOpenSearch = () => {
    setIsOpenSearch(true);
  };
  const handleCloseSearch = () => {
    setIsOpenSearch(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-around w-full ilg:hidden"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleOpenSideBar
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-bars fa-2x"
  })), /*#__PURE__*/React.createElement("div", {
    className: "h-full w-20 ps-1 pt-3"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: Logo,
    alt: "logo_pumba",
    className: "w-full"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ms-2 py-5 flex flex-row gap-5"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/Login"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center -my-2",
    onMouseEnter: () => avatarIconRef.current.playFromBeginning()
  }, /*#__PURE__*/React.createElement(Player, {
    ref: avatarIconRef,
    size: 35,
    icon: AVATAR_I
  }), user ? /*#__PURE__*/React.createElement("p", {
    className: "text-xs -my-1 "
  }, user.name) : /*#__PURE__*/React.createElement("p", null, " "))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "-my-2",
    onClick: handleOpenSearch,
    onMouseEnter: () => searchIconRef.current.playFromBeginning()
  }, /*#__PURE__*/React.createElement(Player, {
    ref: searchIconRef,
    size: 30,
    icon: SEARCH_I
  })), /*#__PURE__*/React.createElement("div", {
    className: "-translate-y-1",
    onMouseEnter: () => bagIconRef.current.playFromBeginning()
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/Cart"
  }, /*#__PURE__*/React.createElement(Player, {
    ref: bagIconRef,
    size: 30,
    icon: BAG_I
  })))), /*#__PURE__*/React.createElement("div", {
    className: `absolute inset-0 h-screen w-screen transition-all ${isOpenSideBar ? "translate-x-0" : "translate-x-hiddenLeft"}`
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleCloseSideBar,
    className: "absolute inset-x-5 pt-5"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-x fa-2x"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "flex flex-col justify-around items-center h-full bg-white"
  }, categorias.map((categoria, idx) => /*#__PURE__*/React.createElement("li", {
    className: "font-bold text-center",
    key: idx
  }, /*#__PURE__*/React.createElement(Link, {
    to: categoria.url,
    onClick: handleCloseSideBar
  }, categoria.nombre.toUpperCase()))))), /*#__PURE__*/React.createElement("div", {
    className: `absolute right-0 top-0 h-screen w-screen bg-white transition-all ${isOpenSearch ? "translate-x-0" : "translate-x-hiddenRight"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b-2 border-black h-10 flex rounded-md flex-row pt-3 text-sm bg-slate-300"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleCloseSearch,
    className: "px-4"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-left "
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "buscador",
    placeholder: "Busca algo...",
    id: "buscador",
    onKeyDown: handleSearch,
    value: searchText,
    onChange: handleChange,
    className: "focus:outline-none focus:border-none w-full pb-1 bg-slate-300"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "ps-5"
  }, searchText && productosMostrados.length > 0 && productosMostrados.map(producto => /*#__PURE__*/React.createElement("li", {
    key: producto.ID_producto,
    className: "w-full text-base"
  }, /*#__PURE__*/React.createElement(Link, {
    to: `/Shop/${producto.ID_producto}`,
    onClick: () => setIsOpenSearch(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full flex flex-row gap-14"
  }, /*#__PURE__*/React.createElement("img", {
    src: producto.url_img,
    alt: "",
    className: "h-6"
  }), /*#__PURE__*/React.createElement("p", {
    className: "max-w-full"
  }, producto.nombre))))))));
}