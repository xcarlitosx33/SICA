import "./MovimientoSummary.css";

function MovimientoSummary() {
    return (
        <section className="movimiento-summary">

            <div className="movimiento-summary-card">
                <div className="movimiento-summary-header">
                    <span>Total de movimientos</span>
                    <span className="summary-indicator neutral"></span>
                </div>

                <strong>186</strong>

                <p>
                    <span className="summary-status active">
                        Activos
                    </span>
                    Movimientos registrados
                </p>
            </div>

            <div className="movimiento-summary-card">
                <div className="movimiento-summary-header">
                    <span>Traslados</span>
                    <span className="summary-indicator info"></span>
                </div>

                <strong>72</strong>

                <p>
                    <span>38.7%</span>
                    Movimientos entre ambientes
                </p>
            </div>

            <div className="movimiento-summary-card">
                <div className="movimiento-summary-header">
                    <span>Asignaciones</span>
                    <span className="summary-indicator success"></span>
                </div>

                <strong>64</strong>

                <p>
                    <span>34.4%</span>
                    Asignaciones de elementos
                </p>
            </div>

            <div className="movimiento-summary-card">
                <div className="movimiento-summary-header">
                    <span>Recientes</span>
                    <span className="summary-indicator recent"></span>
                </div>

                <strong>18</strong>

                <p>
                    <span className="summary-status recent-label">
                        Semana 42
                    </span>
                    Realizados en los últimos 7 días
                </p>
            </div>

        </section>
    );
}

export default MovimientoSummary;