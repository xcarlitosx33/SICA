import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Registro from "../pages/Registro/Registro";
import RecuperarClave from "../pages/RecuperarClave/RecuperarClave";
import EnlaceEnviado from "../pages/EnlaceEnviado/EnlaceEnviado";
import Dashboard from "../pages/Dashboard/Dashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/registro" element={<Registro />} />

        <Route path="/recuperar" element={<RecuperarClave />} />

        <Route path="/confirmacion" element={<EnlaceEnviado />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;