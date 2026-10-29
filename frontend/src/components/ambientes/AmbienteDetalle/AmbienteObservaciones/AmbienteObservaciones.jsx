import "./AmbienteObservaciones.css";

function AmbienteObservaciones({ ambiente }) {
    const observacion =
        ambiente.observaciones ||
        "No hay observaciones registradas para este ambiente.";

    return (
        <section className="ambiente-observaciones">
            <div className="ambiente-observaciones-header">
                <h3>Observaciones</h3>
            </div>

            <div className="ambiente-observaciones-card">
                <div className="ambiente-observacion-item">
                    <p>{observacion}</p>
                </div>

                <div className="ambiente-observaciones-footer">
                    <button type="button">
                        <span aria-hidden="true">+</span>
                        Agregar observación
                    </button>
                </div>
            </div>
        </section>
    );
}

export default AmbienteObservaciones;