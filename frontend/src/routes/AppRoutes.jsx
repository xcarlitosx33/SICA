import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import RecuperarClave from "../pages/RecuperarClave/RecuperarClave";
import EnlaceEnviado from "../pages/EnlaceEnviado/EnlaceEnviado";

import Instructor from "../pages/Dashboard/Roles/Instructor/Instructor";
import AdminEdificio from "../pages/Dashboard/Roles/AdminEdificio/AdminEdificio";
import DirectorCentro from "../pages/Dashboard/Roles/DirectorCentro/DirectorCentro";
import CoordinacionAcademica from "../pages/Dashboard/Roles/CoordinacionAcademica/CoordinacionAcademica";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recuperar" element={<RecuperarClave />} />
        <Route path="/confirmacion" element={<EnlaceEnviado />} />

        <Route path="/dashboard/instructor" element={<Instructor />} />
        <Route path="/dashboard/admin-edificio" element={<AdminEdificio />} />
        <Route path="/dashboard/director-centro" element={<DirectorCentro />} />
        <Route path="/dashboard/coordinacion-academica" element={<CoordinacionAcademica />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;