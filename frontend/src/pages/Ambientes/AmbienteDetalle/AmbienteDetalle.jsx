import { useParams, useNavigate } from "react-router-dom";

import { ambientes } from "../../../data/ambientes";
import { novedades } from "../../../data/novedades";

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

                    <AmbienteNovedades novedades={novedades.filter((item) => item.ambienteId === ambiente.id)} />
                </div>
            </main>
        </div>
    );
}

export default AmbienteDetalle;