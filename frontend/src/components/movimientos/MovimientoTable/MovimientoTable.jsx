import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import { movimientos } from "../../../data/movimientos";

import "./MovimientoTable.css";

function MovimientoTable() {
    const navigate = useNavigate();

    function getStatusClass(estado) {
        const clases = {
            "Completado": "completed",
            "En proceso": "process",
            "Pendiente": "pending",
            "Baja registrada": "registered",
        };

        return clases[estado] || "pending";
    }

    return (
        <section className="movimiento-table-container">
            <div className="movimiento-table-header">
                <div>
                    <h2>Movimientos registrados</h2>
                </div>

                <div className="movimiento-table-updated">
                    <span></span>
                    Actualizado hace 2 min
                </div>
            </div>

            <div className="movimiento-table-wrapper">
                <table className="movimiento-table">
                    <thead>
                        <tr>
                            <th>Movimiento</th>
                            <th>Elemento</th>
                            <th>Origen</th>
                            <th>Destino</th>
                            <th>Responsable</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                            <th>Acción</th>
                        </tr>
                    </thead>

                    <tbody>
                        {movimientos.map((movimiento) => (
                            <tr key={movimiento.id}>
                                <td>
                                    <strong>{movimiento.tipo}</strong>
                                    <span>#{movimiento.id}</span>
                                </td>

                                <td>
                                    <strong>{movimiento.elemento.nombre}</strong>
                                    <span>{movimiento.elemento.serial}</span>
                                </td>

                                <td>
                                    <strong>{movimiento.origen.nombre}</strong>
                                    <span>{movimiento.origen.ubicacion}</span>
                                </td>

                                <td>
                                    <strong
                                        className={
                                            movimiento.estado === "Baja registrada"
                                                ? "destination danger"
                                                : "destination"
                                        }
                                    >
                                        {movimiento.destino.nombre}
                                    </strong>
                                    <span>{movimiento.destino.ubicacion}</span>
                                </td>

                                <td>
                                    <div className="movement-responsible">
                                        <span className="movement-avatar green">
                                            {movimiento.responsable.iniciales}
                                        </span>

                                        <div>
                                            <strong>{movimiento.responsable.nombre}</strong>
                                            <span>{movimiento.responsable.cargo}</span>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <strong>{movimiento.fecha}</strong>
                                    <span>{movimiento.hora}</span>
                                </td>

                                <td>
                                    <span
                                        className={`movement-status ${getStatusClass(
                                            movimiento.estado
                                        )}`}
                                    >
                                        {movimiento.estado}
                                    </span>
                                </td>

                                <td>
                                    <Button
                                        className="movement-detail-button"
                                        onClick={() =>
                                            navigate(`/movimientos/Detalle/${movimiento.id}`)
                                        }
                                    >
                                        Ver detalle
                                        <span>›</span>
                                    </Button>
                                </td>
                            </tr>
                        ))}

                        {movimientos.length === 0 && (
                            <tr>
                                <td colSpan="8">
                                    No hay movimientos registrados.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default MovimientoTable;
