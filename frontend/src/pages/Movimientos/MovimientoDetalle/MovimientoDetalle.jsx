import { useNavigate, useParams } from "react-router-dom";

import "./MovimientoDetalle.css";

import Sidebar from "../../../components/Sidebar/Sidebar";
import PageHeader from "../../../components/PageHeader/PageHeader";
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

    if (!movimiento) {
        return (
            <div className="movimiento-detalle-layout">
                <Sidebar />

                <main className="movimiento-detalle-main">
                    <div className="movimiento-detalle-content">

                        <PageHeader
                            title="Movimiento no encontrado"
                            description="No fue posible encontrar la información del movimiento solicitado."
                        />

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
                        title="Detalle del movimiento"
                        description="Consulta la información completa del movimiento registrado."
                    />
                    <button
                        className="movimiento-detalle-volver"
                        onClick={() => navigate("/movimientos")}
                    >
                        <span>←</span>
                        Volver a movimientos
                    </button>

                    <MovimientoDetalleHeader movimiento={movimiento} />

                    <MovimientoElemento elemento={movimiento.elemento} />

                    <MovimientoObservaciones observaciones={movimiento.observaciones} />

                    <MovimientoOrigenDestino
                        origen={movimiento.origen}
                        destino={movimiento.destino} />

                    <MovimientoInformacion responsable={movimiento.responsable} />

                    <MovimientoHistorial historial={movimiento.historial} />

                    <MovimientoAdjuntos adjuntos={movimiento.adjuntos} />

                    <button
                        className="movimiento-detalle-reporte"
                        onClick={() =>
                            alert("El reporte se descargó correctamente.")
                        }
                    >
                        Descargar reporte
                        <span>↓</span>
                    </button>

                </div>

            </main>

        </div>
    );
}

export default MovimientoDetalle;