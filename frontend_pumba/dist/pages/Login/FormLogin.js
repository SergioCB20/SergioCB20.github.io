import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
export default function FormLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loginError, setLoginError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = event => {
    const {
      name,
      value
    } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const handleLogin = async event => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Credenciales incorrectas");
      }
      const respuestaServer = await response.json();
      console.log("Usuario autenticado exitosamente");
      console.log('Token recibido en el cliente:', respuestaServer.token);
      localStorage.setItem('token', respuestaServer.token);
      localStorage.setItem(`cart-${respuestaServer.token}`, []);
      setLoginError("");
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Error de autenticación:", error.message);
      setLoginError("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleLogin,
    className: "flex flex-col gap-10 pb-8 relative"
  }, /*#__PURE__*/React.createElement("label", {
    className: "flex flex-row border-2 border-black p-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-regular fa-circle-user"
  }), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    value: formData.email,
    onChange: handleInputChange,
    className: "focus:outline-none ps-1 ms-2 lg:ps-4 lg:ms-4 ",
    placeholder: "Ingrese su correo electr\xF3nico"
  })), /*#__PURE__*/React.createElement("label", {
    className: " flex flex-row border-2 border-black p-2 relative"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-lock"
  }), /*#__PURE__*/React.createElement("input", {
    type: showPass ? "text" : "password",
    name: "password",
    value: formData.password,
    placeholder: "Ingrese su contrase\xF1a",
    className: "focus:outline-none ps-1 ms-2  lg:ps-4 lg:ms-4",
    onChange: handleInputChange
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleShowPass,
    className: "absolute right-5"
  }, showPass ? /*#__PURE__*/React.createElement("i", {
    class: "fa-solid fa-eye-slash"
  }) : /*#__PURE__*/React.createElement("i", {
    class: "fa-solid fa-eye"
  }))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "border-2 border-black bg-slate-400 py-2 rounded-lg hover:bg-slate-500 transition-all duration-300"
  }, "Iniciar sesi\xF3n"), /*#__PURE__*/React.createElement("span", null, "\xBFNo tienes cuenta?", " ", /*#__PURE__*/React.createElement(Link, {
    to: "/Signin",
    className: "text-gray-700 hover:font-semibold transition-all duration-100"
  }, "Registrate aqu\xED")), loginError && /*#__PURE__*/React.createElement("p", {
    className: "text-red-600 absolute bottom-0"
  }, loginError));
}