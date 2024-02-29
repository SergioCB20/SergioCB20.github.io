import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PumbaPlus from "./pages/PumbaPlus/PumbaPlus,jsx";
import ThanksPage from "./pages/ThanksCLI/ThanksPage.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import Promotions from "./pages/Promotions/Promotions.jsx";
import { useUserContext } from "./context/UserContext.jsx";
import { useProductosContext } from "./context/ProductosContext.jsx";

const App = () => {
  const { user, setUser } = useUserContext();
  const { setProductos } = useProductosContext();

  useEffect(() => {
    function decodeToken(token) {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(jsonPayload);
    }

    function updateUserData() {
      const token = localStorage.getItem("token");
      if(token){
        const decodedToken = decodeToken(token);
        setUser(decodedToken.usuario);
      }
    }

    updateUserData();

  }, [setUser]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/productos');
        if (!response.ok) {
          throw new Error('Error al cargar productos');
        }
        const data = await response.json();
        console.log(data)
        setProductos(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchProducts();
  }, []);


  return (
    <div className="w-full bg-white text-xs relative">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Shop/:productId" element={<ProductDetails/>}/>
          <Route path="/Shop/Promotions" element={<Promotions/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/PumbaPlus" element={<PumbaPlus />} />
          <Route path="/Thanks" element={<ThanksPage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
