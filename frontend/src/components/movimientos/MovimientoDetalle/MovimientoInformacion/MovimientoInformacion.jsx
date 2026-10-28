import "./MovimientoInformacion.css";

function MovimientoInformacion({ responsable }) {
    return (
        <section className="movimiento-informacion">
            <div className="movimiento-informacion-header">
                <div>
                    <h2>Información del movimiento</h2>
                    <span>
                        Datos adicionales asociados al movimiento
                    </span>
                </div>
            </div>

            <div className="movimiento-informacion-content">
                <div className="movimiento-responsable">
                    <div className="movimiento-responsable-avatar">
                        {responsable.iniciales}
                    </div>

                    <div className="movimiento-responsable-data">
                        <span>Responsable</span>
                        <h3>{responsable.nombre}</h3>
                        <p>{responsable.cargo}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MovimientoInformacion;