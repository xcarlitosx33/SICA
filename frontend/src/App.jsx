import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Autenticación
import Login from "./pages/Auth/Login/Login.jsx";
import RecuperarClave from "./pages/Auth/RecuperarClave/RecuperarClave.jsx";
import CambiarClave from "./pages/Auth/CambiarClave/CambiarClave.jsx";
import EnlaceEnviado from "./pages/Auth/EnlaceEnviado/EnlaceEnviado.jsx";

// Dashboards
import CoordinacionAcademica from "./pages/Dashboard/Roles/CoordinacionAcademica/CoordinacionAcademica";
import HistorialResoluciones from "./pages/Dashboard/Roles/CoordinacionAcademica/HistorialResoluciones/HistorialResoluciones";
import ResolucionDetalle from "./pages/Dashboard/Roles/CoordinacionAcademica/HistorialResoluciones/ResolucionDetalle/ResolucionDetalle";

import Home from "./pages/Dashboard/Roles/Instructor/home.jsx";
import Instructor from "./pages/Dashboard/Roles/Instructor/Instructor.jsx";
import AdminEdificio from "./pages/Dashboard/Roles/AdminEdificio/AdminEdificio.jsx";
import DirectorCentro from "./pages/Dashboard/Roles/DirectorCentro/DirectorCentro.jsx";

// Módulos
import GestionRoles from "./pages/GestionRoles/GestionRoles";
import Ambientes from "./pages/Ambientes/Ambientes.jsx";
import AmbienteDetalle from "./pages/Ambientes/AmbienteDetalle/AmbienteDetalle.jsx";
import Programacion from "./pages/Programacion/Programacion";
import Novedades from "./pages/Novedades/Novedades.jsx";
import AgregarNovedadPage from "./pages/AgregarNovedad/AgregarNovedadPage.jsx";
import Movimientos from "./pages/Movimientos/Movimientos.jsx";
import MovimientoDetalle from "./pages/Movimientos/MovimientoDetalle/MovimientoDetalle.jsx";
import AgregarMovimientoPage from "./pages/Movimientos/AgregarMovimiento/AgregarMovimientoPage.jsx";
import Inventario from "./pages/Inventario/Inventario.jsx";
import InventarioDetalle from "./pages/Inventario/InventarioDetalle/InventarioDetalle.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Autenticación */}
                <Route path="/" element={<Login />} />
                <Route path="/recuperar-clave" element={<RecuperarClave />} />
                <Route path="/cambiar-clave" element={<CambiarClave />} />
                <Route path="/confirmacion" element={<EnlaceEnviado />} />

<<<<<<< HEAD
                {/* Dashboards oficiales */}
                <Route
                    path="/dashboard/instructor"
                    element={<Home />}
                />

                <Route
                    path="/dashboard/admin-edificio"
                    element={<AdminEdificio />}
                />

                <Route
                    path="/dashboard/coordinacion-academica"
                    element={<CoordinacionAcademica />}
                />

                <Route
                    path="/dashboard/director-centro"
                    element={<DirectorCentro />}
                />

                {/* Historial de resoluciones */}
                <Route
                    path="/dashboard/coordinacion-academica/historial-resoluciones"
                    element={<HistorialResoluciones />}
                />

                <Route
                    path="/dashboard/coordinacion-academica/historial-resoluciones/detalle/:id"
                    element={<ResolucionDetalle />}
                />

                {/* Gestión de roles */}
                <Route
                    path="/gestion-roles"
                    element={<GestionRoles />}
                />

                {/* Rutas anteriores: compatibilidad */}

                <Route path="/instructor" element={<Navigate to="/dashboard/instructor" replace />} />
                <Route path="/instructor/inicio" element={<Navigate to="/dashboard/instructor" replace />} />
=======
                <Route path="/dashboard/coordinacion-academica" element={<CoordinacionAcademica />} />
                <Route path="/dashboard/coordinacion-academica/historial-resoluciones" element={<HistorialResoluciones />} />
                <Route path="/dashboard/coordinacion-academica/historial-resoluciones/detalle/:id" element={<ResolucionDetalle />} />
                
                {/* Dashboard y roles */}
                <Route path="/instructor" element={<Home />} />
                <Route path="/instructor/inicio" element={<Instructor />} />
>>>>>>> 2a346c6 (feat:vistas de movimiento y novedades)
                <Route path="/admin-edificio" element={<AdminEdificio />} />
                <Route path="/coordinacion-academica" element={<CoordinacionAcademica />} />
                <Route path="/director-centro" element={<DirectorCentro />} />

                {/* Módulos generales */}
                <Route path="/ambientes" element={<Ambientes />} />
                <Route path="/ambientes/Detalle/:id" element={<AmbienteDetalle />} />
<<<<<<< HEAD

                <Route path="/programacion" element={<Programacion />} />

                <Route path="/novedades" element={<Novedades />} />

=======
                
                <Route path="/novedades" element={<Novedades />} />
                <Route path="/novedades/nueva" element={<AgregarNovedadPage />} />
                
>>>>>>> 2a346c6 (feat:vistas de movimiento y novedades)
                <Route path="/movimientos" element={<Movimientos />} />
                <Route path="/movimientos/nuevo" element={<AgregarMovimientoPage />} />
                <Route path="/movimientos/Detalle/:id" element={<MovimientoDetalle />} />
<<<<<<< HEAD

=======
                
>>>>>>> 2a346c6 (feat:vistas de movimiento y novedades)
                <Route path="/inventario" element={<Inventario />} />
                <Route path="/inventario/detalle/:id" element={<InventarioDetalle />} />

                {/* Ruta no encontrada */}
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;