import React, { useRef } from "react";
import { Player } from "@lordicon/react";
import { Link } from "react-router-dom";
import ARROW_I from "../../animated_icons/arrowIcon.json";
export default function MainBoton({
  linkBoton,
  textoBoton,
  handleClick
}) {
  const isInternalLink = linkBoton.startsWith("/");
  const isExternalLink = !isInternalLink && linkBoton !== "#";
  const arrowIconRef = useRef();
  const renderLink = () => {
    if (isInternalLink) {
      return /*#__PURE__*/React.createElement(Link, {
        to: linkBoton
      }, renderButtonContent());
    } else if (isExternalLink) {
      return /*#__PURE__*/React.createElement("a", {
        href: linkBoton
      }, renderButtonContent());
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "cursor-pointer",
        onClick: handleClick
      }, renderButtonContent());
    }
  };
  const renderButtonContent = () => /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-5 pt-1",
    onMouseEnter: () => arrowIconRef.current.playFromBeginning()
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs lg:text-base"
  }, textoBoton.toUpperCase()), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Player, {
    ref: arrowIconRef,
    size: 35,
    icon: ARROW_I,
    colorize: "#ffffff"
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-black px-4 py-2 w-fit text-white hover:text-gray-400 transition-all"
  }, renderLink());
}
MainBoton.defaultProps = {
  linkBoton: "#",
  textoBoton: "TEXTO POR DEFAULT"
};