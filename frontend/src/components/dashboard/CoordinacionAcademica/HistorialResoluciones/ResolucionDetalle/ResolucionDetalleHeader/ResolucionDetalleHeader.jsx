
import "./ResolucionDetalleHeader.css";

function ResolucionDetalleHeader({
    id,
    solicitud = "Cambio de salón urgente",
    estado = "Aprobada",
    fechaSolicitud = "20 Oct 2026",
    fechaResolucion = "20 Oct 2026",
}) {
    return (
        <section className="resolucion-header">

            <div className="resolucion-header-main">

                <div className="resolucion-header-info">
                    <span className="resolucion-header-id">
                        {id}
                    </span>

                    <h2>{solicitud}</h2>

                    <span className="resolucion-header-description">
                        Registro de la solicitud y decisión de Coordinación Académica.
                    </span>
                </div>

                <span
                    className={`resolucion-header-status ${estado.toLowerCase()}`}
                >
                    {estado}
                </span>

            </div>

            <div className="resolucion-header-dates">

                <div className="resolucion-header-date">
                    <span>Fecha de solicitud</span>
                    <strong>{fechaSolicitud}</strong>
                </div>

                <div className="resolucion-header-date">
                    <span>Fecha de resolución</span>
                    <strong>{fechaResolucion}</strong>
                </div>

            </div>

        </section>
    );
}

export default ResolucionDetalleHeader;
