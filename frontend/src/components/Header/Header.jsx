import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderPromo from "./Header_Promo";
import NavBar from "./NavBar";

const Header = () => {
  const ofertas = [
    "50% de descuento en zapatillas seleccionadas",
    "2x1 en camisetas de selecciones nacionales de fútbol",
    "Obtén tu cupón de descuento para tu compra",
    "30% de descuento en polos para niños",
    "Disfruta de más beneficios adquiriendo PumbaPLUS",
  ];

  const categorias = [
    {
      nombre:"Promociones",
      url:"/Shop/Promotions"
    },
    {
      nombre:"Camisetas",
      url:"/Shop?type=cat&filter=Camisetas"
    },
    {
      nombre:"Hombres",
      url:"/Shop?type=gen&filter=hombre"
    },
    {
      nombre:"Mujeres",
      url:"/Shop?type=gen&filter=mujer"
    },
    {
      nombre:"Niños",
      url:"/Shop?type=gen&filter=niños"
    },
    {
      nombre:"Calzado",
      url:"/Shop?type=cat&filter=Zapatillas"
    },
  ];

  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(()=>{
    setIsLogin(location.pathname === "/Login" || location.pathname === "/Signin");
  },[location.pathname])

  return (
    <header className={`fixed inset-x-0 inset-y-0 w-screen ${isLogin?"hidden":""}`}>
      <HeaderPromo ofertas={ofertas} />
      <NavBar categorias={categorias} />
    </header>
  );
};
export default Header;
