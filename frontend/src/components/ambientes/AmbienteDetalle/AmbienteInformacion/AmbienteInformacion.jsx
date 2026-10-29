import "./AmbienteInformacion.css";

function AmbienteInformacion({ ambiente }) {
    const estadoTexto =
        ambiente.estado === "disponible"
            ? "Disponible"
            : "Mantenimiento";

    return (
        <section className="ambiente-informacion">
            <div className="ambiente-section-header">
                <h3>Información general</h3>
            </div>

            <div className="ambiente-informacion-card">
                <div className="ambiente-info-item">
                    <span>Número</span>
                    <strong>{ambiente.numero}</strong>
                </div>

                <div className="ambiente-info-item">
                    <span>Piso</span>
                    <strong>{ambiente.piso}</strong>
                </div>

                <div className="ambiente-info-item">
                    <span>Sede</span>
                    <strong>{ambiente.sede}</strong>
                </div>

                <div className="ambiente-info-item">
                    <span>Capacidad</span>
                    <strong>{ambiente.capacidad} personas</strong>
                </div>

                <div className="ambiente-info-item">
                    <span>Tipo</span>
                    <strong>{ambiente.tipo || "—"}</strong>
                </div>

                <div className="ambiente-info-item">
                    <span>Estado</span>

                    <strong className={`ambiente-info-status ${ambiente.estado}`}>
                        <span
                            className="ambiente-info-status-dot"
                            aria-hidden="true"
                        ></span>

                        {estadoTexto}
                    </strong>
                </div>
            </div>
        </section>
    );
}

export default AmbienteInformacion;