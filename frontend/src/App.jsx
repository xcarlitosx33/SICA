
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Auth/Login/Login.jsx";
import RecuperarClave from "./pages/Auth/RecuperarClave/RecuperarClave.jsx";
import CambiarClave from "./pages/Auth/CambiarClave/CambiarClave.jsx";
import EnlaceEnviado from "./pages/Auth/EnlaceEnviado/EnlaceEnviado.jsx";

import Home from "./pages/Dashboard/Roles/Instructor/home.jsx";
import Instructor from "./pages/Dashboard/Roles/Instructor/Instructor.jsx";
import AdminEdificio from "./pages/Dashboard/Roles/AdminEdificio/AdminEdificio.jsx";
import CoordinacionAcademica from "./pages/Dashboard/Roles/CoordinacionAcademica/CoordinacionAcademica.jsx";
import DirectorCentro from "./pages/Dashboard/Roles/DirectorCentro/DirectorCentro.jsx";

import Ambientes from "./pages/Ambientes/Ambientes.jsx";
import AmbienteDetalle from "./pages/Ambientes/AmbienteDetalle/AmbienteDetalle.jsx";
import Novedades from "./pages/Novedades/Novedades.jsx";
import Movimientos from "./pages/Movimientos/Movimientos.jsx";
import MovimientoDetalle from "./pages/Movimientos/MovimientoDetalle/MovimientoDetalle.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Autenticación */}
                <Route path="/" element={<Login />} />
                <Route path="/recuperar-clave" element={<RecuperarClave />} />
                <Route path="/cambiar-clave" element={<CambiarClave />} />
                <Route path="/confirmacion" element={<EnlaceEnviado />} />

                {/* Dashboard y roles */}
                <Route path="/instructor" element={<Home />} />
                <Route path="/instructor/inicio" element={<Instructor />} />
                <Route path="/admin-edificio" element={<AdminEdificio />} />
                <Route
                    path="/coordinacion-academica"
                    element={<CoordinacionAcademica />}
                />
                <Route path="/director-centro" element={<DirectorCentro />} />

                {/* Gestión */}
                <Route path="/ambientes" element={<Ambientes />} />
                <Route
                    path="/ambientes/Detalle/:id"
                    element={<AmbienteDetalle />}
                />
                <Route path="/novedades" element={<Novedades />} />
                <Route path="/movimientos" element={<Movimientos />} />
                <Route
                    path="/movimientos/Detalle/:id"
                    element={<MovimientoDetalle />}
                />

                {/* Rutas inexistentes */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
