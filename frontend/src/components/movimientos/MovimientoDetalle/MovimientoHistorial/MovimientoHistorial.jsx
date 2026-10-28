import "./MovimientoHistorial.css";

function MovimientoHistorial({ historial }) {
    return (
        <section className="movimiento-historial">
            <div className="movimiento-historial-header">
                <div>
                    <h2>Historial del movimiento</h2>
                    <span>
                        Seguimiento de las etapas realizadas durante el movimiento
                    </span>
                </div>
            </div>

            <div className="movimiento-historial-content">
                {historial.map((evento, index) => (
                    <div
                        className={`movimiento-historial-item ${
                            index === historial.length - 1
                                ? "ultimo"
                                : ""
                        }`}
                        key={`${evento.fecha}-${evento.hora}-${index}`}
                    >
                        <div className="movimiento-historial-linea">
                            <span className="movimiento-historial-punto"></span>
                        </div>

                        <div className="movimiento-historial-evento">
                            <div className="movimiento-historial-evento-top">
                                <h3>{evento.titulo}</h3>

                                <span className="movimiento-historial-estado">
                                    {evento.estado}
                                </span>
                            </div>

                            <p>{evento.descripcion}</p>

                            <div className="movimiento-historial-fecha">
                                <span>{evento.fecha}</span>
                                <span>•</span>
                                <span>{evento.hora}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MovimientoHistorial;