import { useParams, useNavigate } from "react-router-dom";

import { ambientes } from "../../../data/ambientes";
import { novedades } from "../../../data/novedades";

import Sidebar from "../../../components/Sidebar/Sidebar";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Button from "../../../components/Button/Button";

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

                <Button
                    type="button"
                    variant="primary"
                    onClick={() => navigate("/ambientes")}
                >
                    ‹ Volver a ambientes
                </Button>
            </main>
        );
    }

    return (
        <div className="ambiente-detalle-page">
            <Sidebar />

            <main className="ambiente-detalle-content">
                <PageHeader
                    eyebrow="GESTIÓN DE AMBIENTES"
                    title="Detalle del ambiente"
                    description="Consulta la información y características del ambiente de formación."
                    icon={
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="4" y="3" width="16" height="18" rx="2" />
                            <path d="M9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1M10 21v-3h4v3" />
                        </svg>
                    }
                />
                <div className="ambiente-detalle-container">
                    <AmbienteDetalleHeader ambiente={ambiente} />

                    <AmbienteInformacion ambiente={ambiente} />

                    <AmbienteCaracteristicas ambiente={ambiente} />

                    <AmbienteDescripcion ambiente={ambiente} />

                    <AmbienteObservaciones ambiente={ambiente} />

                    <AmbienteNovedades novedades={novedades.filter((item) => item.ambienteId === ambiente.id)} />
                </div>
            </main>
        </div>
    );
}

export default AmbienteDetalle;