import "./MovimientoDetalleHeader.css";

function MovimientoDetalleHeader({ movimiento }) {
    return (
        <section className="movimiento-detalle-header">

            <div className="movimiento-detalle-header-main">

                <div className="movimiento-detalle-header-info">

                    <span className="movimiento-detalle-id">
                        #{movimiento.id}
                    </span>

                    <h2>{movimiento.tipo}</h2>

                    <p>{movimiento.descripcion}</p>

                </div>

                <div className="movimiento-detalle-header-status">

                    <span className={`movimiento-detalle-status ${movimiento.estado
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                        {movimiento.estado}
                    </span>

                    <span className="movimiento-detalle-status-description">
                        {movimiento.estadoDescripcion}
                    </span>

                </div>

            </div>

            <div className="movimiento-detalle-header-meta">

                <div>
                    <span>Fecha</span>
                    <strong>{movimiento.fecha}</strong>
                </div>

                <div>
                    <span>Hora</span>
                    <strong>{movimiento.hora}</strong>
                </div>

            </div>

        </section>
    );
}

export default MovimientoDetalleHeader;