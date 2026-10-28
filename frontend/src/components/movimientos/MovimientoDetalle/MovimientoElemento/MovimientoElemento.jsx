import "./MovimientoElemento.css";

function MovimientoElemento({ elemento }) {
    return (
        <section className="movimiento-elemento">

            <div className="movimiento-elemento-header">
                <div>
                    <h2>Elemento</h2>
                    <span>Información del elemento asociado al movimiento</span>
                </div>
            </div>

            <div className="movimiento-elemento-content">

                <div className="movimiento-elemento-image">
                    <img
                        src={elemento.imagen}
                        alt={elemento.nombre}
                    />
                </div>

                <div className="movimiento-elemento-info">

                    <div className="movimiento-elemento-title">
                        <h3>{elemento.nombre}</h3>

                        <span className="movimiento-elemento-estado">
                            {elemento.estado}
                        </span>
                    </div>

                    <div className="movimiento-elemento-serial">
                        <span>Serial SENA</span>
                        <strong>{elemento.serial}</strong>
                    </div>

                    <div className="movimiento-elemento-details">

                        <div>
                            <span>Categoría</span>
                            <strong>{elemento.categoria}</strong>
                        </div>

                        <div>
                            <span>Marca</span>
                            <strong>{elemento.marca}</strong>
                        </div>

                        <div>
                            <span>Modelo</span>
                            <strong>{elemento.modelo}</strong>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default MovimientoElemento;