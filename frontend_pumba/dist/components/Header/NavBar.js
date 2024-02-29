import React from "react";
import NavBarDeskstop from "./NavBarDeskstop";
import NavBarMobile from "./NavBarMobile";
export default function NavBar({
  categorias
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "h-16 w-full max-w-screens-2xl border-b-black border-2 flex justify-center px-10 bg-white ilg:h-24 ilg:text-sm"
  }, /*#__PURE__*/React.createElement(NavBarDeskstop, {
    categorias: categorias
  }), /*#__PURE__*/React.createElement(NavBarMobile, {
    categorias: categorias
  }));
}