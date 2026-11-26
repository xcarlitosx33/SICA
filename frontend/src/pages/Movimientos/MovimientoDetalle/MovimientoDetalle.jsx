
import { useNavigate, useParams } from "react-router-dom";

import "./MovimientoDetalle.css";

import Sidebar from "../../../components/Sidebar/Sidebar";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Button from "../../../components/Button/Button";

import MovimientoDetalleHeader from "../../../components/movimientos/MovimientoDetalle/MovimientoDetalleHeader/MovimientoDetalleHeader";
import MovimientoElemento from "../../../components/movimientos/MovimientoDetalle/MovimientoElemento/MovimientoElemento";
import MovimientoOrigenDestino from "../../../components/movimientos/MovimientoDetalle/MovimientoOrigenDestino/MovimientoOrigenDestino";
import MovimientoInformacion from "../../../components/movimientos/MovimientoDetalle/MovimientoInformacion/MovimientoInformacion";
import MovimientoHistorial from "../../../components/movimientos/MovimientoDetalle/MovimientoHistorial/MovimientoHistorial";
import MovimientoObservaciones from "../../../components/movimientos/MovimientoDetalle/MovimientoObservaciones/MovimientoObservaciones";
import MovimientoAdjuntos from "../../../components/movimientos/MovimientoDetalle/MovimientoAdjuntos/MovimientoAdjuntos";

import { movimientos } from "../../../data/movimientos";

function MovimientoDetalle() {
    const navigate = useNavigate();
    const { id } = useParams();

    const movimiento = movimientos.find(
        (item) => item.id === id
    );

    const movimientoIcon = (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7 7h14l-4-4" />
            <path d="M17 17H3l4 4" />
        </svg>
    );

    if (!movimiento) {
        return (
            <div className="movimiento-detalle-layout">
                <Sidebar />

                <main className="movimiento-detalle-main">
                    <div className="movimiento-detalle-content">

                        <PageHeader
                            eyebrow="CONTROL DE RECURSOS"
                            title="Movimiento no encontrado"
                            description="No fue posible encontrar la información del movimiento solicitado."
                            icon={movimientoIcon}
                        />

                        <Button
                            type="button"
                            variant="primary"
                            onClick={() => navigate("/movimientos")}
                        >
                            <span>←</span>
                            Volver a movimientos
                        </Button>

                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="movimiento-detalle-layout">

            <Sidebar />

            <main className="movimiento-detalle-main">

                <div className="movimiento-detalle-content">

                    <PageHeader
                        eyebrow="CONTROL DE RECURSOS"
                        title="Detalle del movimiento"
                        description="Consulta la información completa del movimiento registrado."
                        icon={movimientoIcon}
                    />

                    <div className="movimiento-detalle-actions">
                        <Button
                            variant="primary"
                            onClick={() => navigate("/movimientos")}
                        >
                            <span>←</span>
                            Volver a movimientos
                        </Button>
                    </div>

                    <MovimientoDetalleHeader movimiento={movimiento} />

                    <MovimientoElemento elemento={movimiento.elemento} />

                    <MovimientoObservaciones observaciones={movimiento.observaciones} />

                    <MovimientoOrigenDestino
                        origen={movimiento.origen}
                        destino={movimiento.destino}
                    />

                    <MovimientoInformacion responsable={movimiento.responsable} />

                    <MovimientoHistorial historial={movimiento.historial} />

                    <MovimientoAdjuntos adjuntos={movimiento.adjuntos} />

                    <div className="movimiento-detalle-actions">
                        <Button
                            variant="primary"
                            onClick={() =>
                                alert("El reporte se descargó correctamente.")
                            }
                        >
                            Descargar reporte
                            <span>↓</span>
                        </Button>
                    </div>

                </div>

            </main>

        </div>
    );
}

export default MovimientoDetalle;
