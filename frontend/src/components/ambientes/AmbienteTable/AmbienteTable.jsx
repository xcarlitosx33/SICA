import { useNavigate } from "react-router-dom";

import "./AmbienteTable.css";
import { ambientes } from "../../../data/ambientes";

function AmbienteTable() {
    const navigate = useNavigate();

    return (
        <section className="ambiente-table-container">
            <div className="ambiente-table-wrapper">
                <table className="ambiente-table">
                    <thead>
                        <tr>
                            <th>Ambiente</th>
                            <th>Nombre</th>
                            <th>Piso</th>
                            <th>Sede</th>
                            <th>Estado</th>
                            <th>Capacidad</th>
                            <th>Acción</th>
                        </tr>
                    </thead>

                    <tbody>
                        {ambientes.map((ambiente) => (
                            <tr key={ambiente.id}>
                                <td>{ambiente.numero}</td>
                                <td>{ambiente.nombre}</td>
                                <td>{ambiente.piso}</td>
                                <td>{ambiente.sede}</td>
                                <td>
                                    <span
                                        className={`ambiente-status ${ambiente.estado}`}
                                    >
                                        {ambiente.estado === "disponible"
                                            ? "Disponible"
                                            : "Mantenimiento"}
                                    </span>
                                </td>
                                <td>{ambiente.capacidad}</td>

                                <td>
                                    <button
                                        type="button"
                                        className="ambiente-detail-button"
                                        onClick={() => navigate(`/ambientes/Detalle/${ambiente.id}`)}
                                    >
                                        Ver detalle ›
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

export default AmbienteTable;