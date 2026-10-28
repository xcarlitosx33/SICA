import "./MovimientoObservaciones.css";

function MovimientoObservaciones({ observaciones }) {
    return (
        <section className="movimiento-observaciones">
            <div className="movimiento-observaciones-header">
                <div>
                    <h2>Observaciones</h2>
                    <span>
                        Información adicional relacionada con el movimiento
                    </span>
                </div>
            </div>

            <div className="movimiento-observaciones-content">
                <p>{observaciones}</p>
            </div>
        </section>
    );
}

export default MovimientoObservaciones;