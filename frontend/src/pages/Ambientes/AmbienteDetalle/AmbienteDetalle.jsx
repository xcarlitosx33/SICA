import { useParams, useNavigate } from "react-router-dom";

import { ambientes } from "../../../data/ambientes";

import Sidebar from "../../../components/Sidebar/Sidebar";
import PageHeader from "../../../components/PageHeader/PageHeader";

import AmbienteDetalleHeader from "../../../components/ambientes/AmbienteDetalle/AmbienteDetalleHeader/AmbienteDetalleHeader";
import AmbienteInformacion from "../../../components/ambientes/AmbienteDetalle/AmbienteInformacion/AmbienteInformacion";
import AmbienteCaracteristicas from "../../../components/ambientes/AmbienteDetalle/AmbienteCaracteristicas/AmbienteCaracteristicas";
import AmbienteDescripcion from "../../../components/ambientes/AmbienteDetalle/AmbienteDescripcion/AmbienteDescripcion";
import AmbienteObservaciones from "../../../components/ambientes/AmbienteDetalle/AmbienteObservaciones/AmbienteObservaciones";
import AmbienteNovedades from "../../../components/ambientes/AmbienteDetalle/AmbienteNovedades/AmbienteNovedades";

import "./AmbienteDetalle.css";

function AmbienteDetalle() {
    const { id } = useParams();
    const navigate = useNavigate();

    const ambiente = ambientes.find((item) => item.id === id);

    if (!ambiente) {
        return (
            <main>
                <h1>Ambiente no encontrado</h1>

                <button
                    type="button"
                    onClick={() => navigate("/ambientes")}
                >
                    Volver a ambientes
                </button>
            </main>
        );
    }

    return (
        <div className="ambiente-detalle-page">
            <Sidebar />

            <main className="ambiente-detalle-content">
                <PageHeader
                    title="Detalle de ambiente"
                    description="Consulta la información y características del ambiente de formación."
                />

                <div className="ambiente-detalle-container">
                    <AmbienteDetalleHeader ambiente={ambiente} />

                    <AmbienteInformacion ambiente={ambiente} />

                    <AmbienteCaracteristicas ambiente={ambiente} />

                    <AmbienteDescripcion ambiente={ambiente} />

                    <AmbienteObservaciones ambiente={ambiente} />

                    <AmbienteNovedades
                        novedades={[
                            {
                                id: "NOV-001",
                                fecha: "2026-10-20",
                                descripcion: "Luz del techo fundida en la zona central",
                                estado: "abierta",
                                estadoTexto: "Abierta",
                            },
                            {
                                id: "NOV-002",
                                fecha: "2026-09-15",
                                descripcion: "Daño en proyector multimedia",
                                estado: "en-proceso",
                                estadoTexto: "En proceso",
                            },
                            {
                                id: "NOV-003",
                                fecha: "2026-08-10",
                                descripcion: "Mantenimiento general de equipos",
                                estado: "cerrada",
                                estadoTexto: "Cerrada",
                            },
                        ]}
                    />
                </div>
            </main>
        </div>
    );
}

export default AmbienteDetalle;