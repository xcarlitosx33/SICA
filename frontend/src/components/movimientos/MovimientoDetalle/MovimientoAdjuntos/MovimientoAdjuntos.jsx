import "./MovimientoAdjuntos.css";

function MovimientoAdjuntos({ adjuntos }) {
    return (
        <section className="movimiento-adjuntos">
            <div className="movimiento-adjuntos-header">
                <div>
                    <h2>Archivos adjuntos</h2>
                    <span>
                        Evidencias y documentos relacionados con el movimiento
                    </span>
                </div>
            </div>

            <div className="movimiento-adjuntos-content">
                {adjuntos.length > 0 ? (
                    <div className="movimiento-adjuntos-list">
                        {adjuntos.map((archivo) => (
                            <div
                                className="movimiento-adjunto"
                                key={archivo.nombre}
                            >
                                <div className="movimiento-adjunto-icono">
                                    {archivo.tipo === "Imagen" ? "IMG" : "DOC"}
                                </div>

                                <div className="movimiento-adjunto-info">
                                    <h3>{archivo.nombre}</h3>

                                    <div className="movimiento-adjunto-meta">
                                        <span>{archivo.tipo}</span>
                                        <span>•</span>
                                        <span>{archivo.tamaño}</span>
                                        <span>•</span>
                                        <span>{archivo.fecha}</span>
                                    </div>
                                </div>

                                <a
                                    className="movimiento-adjunto-button"
                                    href={archivo.archivo}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Ver archivo
                                    <span>↗</span>
                                </a>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="movimiento-adjuntos-empty">
                        <strong>No hay archivos adjuntos</strong>
                        <span>
                            Este movimiento no tiene evidencias o documentos
                            asociados.
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
}

export default MovimientoAdjuntos;