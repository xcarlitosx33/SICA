
import { Routes, Route } from "react-router-dom";

// AUTENTICACIÓN
import Login from "../pages/Auth/Login/Login";
import RecuperarClave from "../pages/Auth/RecuperarClave/RecuperarClave";
import EnlaceEnviado from "../pages/Auth/EnlaceEnviado/EnlaceEnviado";
import CambiarClave from "../pages/Auth/CambiarClave/CambiarClave";

// DASHBOARDS
import Instructor from "../pages/Dashboard/Roles/Instructor/Instructor";
import AdminEdificio from "../pages/Dashboard/Roles/AdminEdificio/AdminEdificio";
import DirectorCentro from "../pages/Dashboard/Roles/DirectorCentro/DirectorCentro";
import CoordinacionAcademica from "../pages/Dashboard/Roles/CoordinacionAcademica/CoordinacionAcademica";

// AMBIENTES
import Ambientes from "../pages/Ambientes/Ambientes";
import AmbienteDetalle from "../pages/Ambientes/AmbienteDetalle/AmbienteDetalle";

// INVENTARIO
import Inventario from "../pages/Inventario/Inventario";


function AppRoutes() {
  return (
    <Routes>
      {/* AUTENTICACIÓN */}
      <Route path="/" element={<Login />} />
      <Route path="/recuperar" element={<RecuperarClave />} />
      <Route path="/confirmacion" element={<EnlaceEnviado />} />
      <Route path="/cambiar-clave" element={<CambiarClave />} />

      {/* DASHBOARDS */}
      <Route path="/dashboard/instructor" element={<Instructor />} />
      <Route path="/dashboard/admin-edificio" element={<AdminEdificio />} />
      <Route path="/dashboard/director-centro" element={<DirectorCentro />} />
      <Route
        path="/dashboard/coordinacion-academica"
        element={<CoordinacionAcademica />}
      />

      {/* AMBIENTES */}
      <Route path="/ambientes" element={<Ambientes />} />
      <Route path="/ambientes/Detalle/:id" element={<AmbienteDetalle />} />

      {/* INVENTARIO */}
      <Route path="/inventario" element={<Inventario />} />

    </Routes>
  );
}

export default AppRoutes;
