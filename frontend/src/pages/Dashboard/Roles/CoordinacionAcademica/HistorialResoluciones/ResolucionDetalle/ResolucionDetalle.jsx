
import "./ResolucionDetalle.css";

import { useParams, useNavigate } from "react-router-dom";

import Sidebar from "../../../../../../components/Sidebar/Sidebar";
import PageHeader from "../../../../../../components/PageHeader/PageHeader";

import resoluciones from "../../../../../../data/resoluciones";

import ResolucionDetalleHeader from "../../../../../../components/dashboard/CoordinacionAcademica/HistorialResoluciones/ResolucionDetalle/ResolucionDetalleHeader/ResolucionDetalleHeader";

import ResolucionInformacion from "../../../../../../components/dashboard/CoordinacionAcademica/HistorialResoluciones/ResolucionDetalle/ResolucionInformacion/ResolucionInformacion";

import ResolucionDecision from "../../../../../../components/dashboard/CoordinacionAcademica/HistorialResoluciones/ResolucionDetalle/ResolucionDecision/ResolucionDecision";

import ResolucionObservaciones from "../../../../../../components/dashboard/CoordinacionAcademica/HistorialResoluciones/ResolucionDetalle/ResolucionObservaciones/ResolucionObservaciones";

function ResolucionDetalle() {
    const { id } = useParams();
    const navigate = useNavigate();

    const resolucion = resoluciones.find(
        (item) => item.id === id
    );

    if (!resolucion) {
        return (
            <div className="resolucion-detalle-layout">
                <Sidebar />

                <main className="resolucion-detalle-main">
                    <div className="resolucion-detalle-content">
                        <PageHeader
                            title="Resolución no encontrada"
                            description="No se encontró información para la solicitud seleccionada."
                        />

                        <button
                            type="button"
                            className="resolucion-back-button"
                            onClick={() =>
                                navigate("/dashboard/coordinacion-academica/historial-resoluciones")
                            }
                        >
                            ← Volver al historial
                        </button>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="resolucion-detalle-layout">

            <Sidebar />

            <main className="resolucion-detalle-main">

                <div className="resolucion-detalle-content">

                    <PageHeader
                        title="Detalle de resolución"
                        description="Consulta la información completa de la solicitud y la decisión tomada por Coordinación Académica."
                    />

                    <section className="resolucion-detalle-container">

                        <button
                            type="button"
                            className="resolucion-back-button"
                            onClick={() =>
                                navigate("/dashboard/coordinacion-academica/historial-resoluciones")
                            }
                        >
                            ← Volver al historial
                        </button>

                        <ResolucionDetalleHeader
                            id={resolucion.id}
                            solicitud={resolucion.solicitud}
                            estado={resolucion.estado}
                            fechaSolicitud={resolucion.fechaSolicitud}
                            fechaResolucion={resolucion.fechaResolucion}
                        />

                        <ResolucionInformacion
                            ficha={resolucion.ficha}
                            programa={resolucion.programa}
                            solicitante={resolucion.solicitante}
                            ambienteOrigen={resolucion.ambienteOrigen}
                            ambienteDestino={resolucion.ambienteDestino}
                            tipoSolicitud={resolucion.tipoSolicitud}
                        />

                        <ResolucionDecision
                            estado={resolucion.estado}
                            decision={resolucion.decision}
                            responsable={resolucion.responsable}
                            fecha={resolucion.fechaResolucion}
                            justificacion={resolucion.justificacion}
                        />

                        <ResolucionObservaciones
                            observaciones={resolucion.observaciones}
                        />

                    </section>

                </div>

            </main>

        </div>
    );
}

export default ResolucionDetalle;
