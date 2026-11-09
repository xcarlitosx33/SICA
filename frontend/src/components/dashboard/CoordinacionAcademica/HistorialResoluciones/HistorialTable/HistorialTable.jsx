
import { useNavigate } from "react-router-dom";
import "./HistorialTable.css";
import resoluciones from "../../../../../data/resoluciones.js";
function HistorialTable() {
    const navigate = useNavigate();

    return (
        <section className="historial-table-section">

            <div className="historial-table-heading">
                <h2>Resoluciones registradas</h2>
                <span>Registro histórico de solicitudes gestionadas</span>
            </div>

            <div className="historial-table-container">
                <table className="historial-table">

                    <thead>
                        <tr>
                            <th>Solicitud</th>
                            <th>Ficha</th>
                            <th>Solicitante</th>
                            <th>Fecha de solicitud</th>
                            <th>Fecha de resolución</th>
                            <th>Responsable</th>
                            <th>Estado</th>
                            <th>Acción</th>
                        </tr>
                    </thead>

                    <tbody>
                        {resoluciones.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <strong>{item.solicitud}</strong>
                                    <span className="historial-request-id">
                                        {item.id}
                                    </span>
                                </td>

                                <td>{item.ficha}</td>
                                <td>{item.solicitante}</td>
                                <td>{item.fechaSolicitud}</td>
                                <td>{item.fechaResolucion}</td>
                                <td>{item.responsable}</td>

                                <td>
                                    <span className={`historial-status ${item.estado.toLowerCase()}`}>
                                        {item.estado}
                                    </span>
                                </td>

                                <td>
                                    <button
                                        type="button"
                                        className="historial-detail-button"
                                        onClick={() =>
                                            navigate(
                                                `/dashboard/coordinacion-academica/historial-resoluciones/detalle/${item.id}`
                                            )
                                        }
                                    >
                                        Ver detalle →
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </section>
    );
}

export default HistorialTable;
