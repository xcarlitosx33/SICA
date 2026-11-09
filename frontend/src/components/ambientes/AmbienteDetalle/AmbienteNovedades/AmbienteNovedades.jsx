import "./AmbienteNovedades.css";

function AmbienteNovedades({ novedades = [] }) {
    const estadoTexto = {
        Pendiente: "Abierta",
        "En proceso": "En proceso",
        Cerrada: "Cerrada",
    };

    const estadoClase = {
        Pendiente: "abierta",
        "En proceso": "en-proceso",
        Cerrada: "cerrada",
    };

    return (
        <section className="ambiente-novedades">
            <div className="ambiente-section-header">
                <h3>Novedades del ambiente</h3>
            </div>

            <div className="ambiente-novedades-card">
                <div className="ambiente-novedades-table-wrapper">
                    <table className="ambiente-novedades-table">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Novedad</th>
                                <th>Estado</th>
                                <th>Acción</th>
                            </tr>
                        </thead>

                        <tbody>
                            {novedades.length > 0 ? (
                                novedades.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.fecha}</td>
                                        <td>{item.descripcion}</td>
                                        <td>
                                            <span
                                                className={`ambiente-novedad-status ${estadoClase[item.estado]}`}
                                            >
                                                {estadoTexto[item.estado]}
                                            </span>
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                className="ambiente-novedad-detail-button"
                                                onClick={() =>
                                                    alert(
                                                        `${item.id}\n${item.elemento}\n${item.descripcion}\nEstado: ${item.estado}`
                                                    )
                                                }
                                            >
                                                Ver detalle
                                                <span aria-hidden="true">→</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">
                                        No hay novedades registradas para este ambiente.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default AmbienteNovedades;
