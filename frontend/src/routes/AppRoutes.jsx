import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Auth/Login/Login";
import RecuperarClave from "../pages/Auth/RecuperarClave/RecuperarClave";
import EnlaceEnviado from "../pages/Auth/EnlaceEnviado/EnlaceEnviado";
import CambiarClave from "../pages/Auth/CambiarClave/CambiarClave";

import Instructor from "../pages/Dashboard/Roles/Instructor/Instructor";
import AdminEdificio from "../pages/Dashboard/Roles/AdminEdificio/AdminEdificio";
import DirectorCentro from "../pages/Dashboard/Roles/DirectorCentro/DirectorCentro";
import CoordinacionAcademica from "../pages/Dashboard/Roles/CoordinacionAcademica/CoordinacionAcademica";

import Ambientes from "../pages/Ambientes/Ambientes";
import Movimientos from "../pages/Movimientos/Movimientos";
import MovimientoDetalle from "../pages/MovimientoDetalle/MovimientoDetalle";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recuperar" element={<RecuperarClave />} />
        <Route path="/confirmacion" element={<EnlaceEnviado />} />
        <Route path="/cambiar-clave" element={<CambiarClave />} />

        <Route path="/dashboard/instructor" element={<Instructor />} />
        <Route path="/dashboard/admin-edificio" element={<AdminEdificio />} />
        <Route path="/dashboard/director-centro" element={<DirectorCentro />} />
        <Route path="/dashboard/coordinacion-academica" element={<CoordinacionAcademica />}/>

        <Route path="/ambientes" element={<Ambientes />} />
        <Route path="/movimientos" element={<Movimientos />} />
        <Route path="/movimientos/Detalle/:id" element={<MovimientoDetalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;