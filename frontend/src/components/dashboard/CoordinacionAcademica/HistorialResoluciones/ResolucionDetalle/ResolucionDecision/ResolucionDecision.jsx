
import "./ResolucionDecision.css";

function ResolucionDecision({
    estado = "Aprobada",
    decision = "Se aprueba el cambio de ambiente solicitado.",
    responsable = "Coordinación Académica",
    fecha = "20 Oct 2026",
    justificacion = "Se verificó la disponibilidad del ambiente 405 y se confirmó que cuenta con la capacidad necesaria para atender a los 38 aprendices matriculados.",
}) {
    return (
        <section className="resolucion-decision">

            <div className="resolucion-decision-heading">
                <h2>Decisión de Coordinación Académica</h2>
                <p>
                    Información correspondiente a la resolución de la solicitud.
                </p>
            </div>

            <div className="resolucion-decision-grid">

                <div className="resolucion-decision-item">
                    <span>Estado de la resolución</span>

                    <strong className={`resolucion-decision-status ${estado.toLowerCase()}`}>
                        {estado}
                    </strong>
                </div>

                <div className="resolucion-decision-item">
                    <span>Responsable de la decisión</span>
                    <strong>{responsable}</strong>
                </div>

                <div className="resolucion-decision-item">
                    <span>Fecha de resolución</span>
                    <strong>{fecha}</strong>
                </div>

                <div className="resolucion-decision-item">
                    <span>Decisión tomada</span>
                    <strong>{decision}</strong>
                </div>

            </div>

            <div className="resolucion-decision-justification">
                <h3>Justificación de la decisión</h3>
                <p>{justificacion}</p>
            </div>

        </section>
    );
}

export default ResolucionDecision;
