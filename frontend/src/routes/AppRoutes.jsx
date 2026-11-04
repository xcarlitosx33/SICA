
import { Routes, Route } from "react-router-dom";

// AUTENTICACIÓN
import Login from "../pages/Auth/Login/Login";
import RecuperarClave from "../pages/Auth/RecuperarClave/RecuperarClave";
import EnlaceEnviado from "../pages/Auth/EnlaceEnviado/EnlaceEnviado";
import CambiarClave from "../pages/Auth/CambiarClave/CambiarClave";

<<<<<<< HEAD
// DASHBOARDS
=======
import CoordinacionAcademica from "../pages/Dashboard/Roles/CoordinacionAcademica/CoordinacionAcademica";
import HistorialResoluciones from "../pages/Dashboard/Roles/CoordinacionAcademica/HistorialResoluciones/HistorialResoluciones";
import ResolucionDetalle from "../pages/Dashboard/Roles/CoordinacionAcademica/HistorialResoluciones/ResolucionDetalle/ResolucionDetalle";

>>>>>>> 211b8e6c492978af0554b0e67d12b767c5ad696d
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

<<<<<<< HEAD
      {/* DASHBOARDS */}
      <Route path="/dashboard/instructor" element={<Instructor />} />
      <Route path="/dashboard/admin-edificio" element={<AdminEdificio />} />
      <Route path="/dashboard/director-centro" element={<DirectorCentro />} />
      <Route
        path="/dashboard/coordinacion-academica"
        element={<CoordinacionAcademica />}
      />
=======
        <Route path="/dashboard/coordinacion-academica" element={<CoordinacionAcademica />}/>
        <Route path="/dashboard/coordinacion-academica/historial-resoluciones" element={<HistorialResoluciones />}/>
        <Route path="/dashboard/coordinacion-academica/historial-resoluciones/detalle/:id" element={<ResolucionDetalle />} />
        
        <Route path="/dashboard/instructor" element={<Instructor />} />
        <Route path="/dashboard/admin-edificio" element={<AdminEdificio />} />
        <Route path="/dashboard/director-centro" element={<DirectorCentro />} />
        <Route path="/dashboard/coordinacion-academica" element={<CoordinacionAcademica />}/>
>>>>>>> 211b8e6c492978af0554b0e67d12b767c5ad696d

      {/* AMBIENTES */}
      <Route path="/ambientes" element={<Ambientes />} />
      <Route path="/ambientes/Detalle/:id" element={<AmbienteDetalle />} />

      {/* INVENTARIO */}
      <Route path="/inventario" element={<Inventario />} />

    </Routes>
  );
}

export default AppRoutes;
