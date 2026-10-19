import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import RecuperarClave from "../pages/RecuperarClave/RecuperarClave";
import EnlaceEnviado from "../pages/EnlaceEnviado/EnlaceEnviado";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recuperar" element={<RecuperarClave />} />
        <Route path="/confirmacion" element={<EnlaceEnviado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;