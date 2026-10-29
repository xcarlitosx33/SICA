import "./AmbienteNovedades.css";

function AmbienteNovedades() {
    const novedades = [
        {
            id: 1,
            fecha: "2026-10-20",
            novedad: "Luz del techo fundida en la zona central",
            estado: "abierta",
        },
        {
            id: 2,
            fecha: "2026-09-15",
            novedad: "Daño en proyector multimedia",
            estado: "en-proceso",
        },
        {
            id: 3,
            fecha: "2026-08-10",
            novedad: "Mantenimiento general de equipos",
            estado: "cerrada",
        },
    ];

    const estadoTexto = {
        abierta: "Abierta",
        "en-proceso": "En proceso",
        cerrada: "Cerrada",
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
                            {novedades.map((novedad) => (
                                <tr key={novedad.id}>
                                    <td>{novedad.fecha}</td>

                                    <td>{novedad.novedad}</td>

                                    <td>
                                        <span
                                            className={`ambiente-novedad-status ${novedad.estado}`}
                                        >
                                            {estadoTexto[novedad.estado]}
                                        </span>
                                    </td>

                                    <td>
                                        <button
                                            type="button"
                                            className="ambiente-novedad-detail-button"
                                        >
                                            Ver detalle
                                            <span aria-hidden="true">→</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default AmbienteNovedades;