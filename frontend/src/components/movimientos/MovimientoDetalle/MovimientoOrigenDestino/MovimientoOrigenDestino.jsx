import "./MovimientoOrigenDestino.css";

function MovimientoOrigenDestino({ origen, destino }) {
    return (
        <section className="movimiento-origen-destino">
            <div className="movimiento-origen-destino-header">
                <div>
                    <h2>Origen y destino</h2>
                    <span>
                        Ubicación anterior y nueva ubicación del elemento
                    </span>
                </div>
            </div>

            <div className="movimiento-origen-destino-content">
                <div className="movimiento-ubicacion">
                    <span className="movimiento-ubicacion-label">
                        Origen
                    </span>

                    <h3>{origen.nombre}</h3>

                    <p>{origen.ubicacion}</p>
                </div>

                <div className="movimiento-ubicacion-separador">
                    <span>→</span>
                </div>

                <div className="movimiento-ubicacion">
                    <span className="movimiento-ubicacion-label">
                        Destino
                    </span>

                    <h3>{destino.nombre}</h3>

                    <p>{destino.ubicacion}</p>
                </div>
            </div>
        </section>
    );
}

export default MovimientoOrigenDestino;