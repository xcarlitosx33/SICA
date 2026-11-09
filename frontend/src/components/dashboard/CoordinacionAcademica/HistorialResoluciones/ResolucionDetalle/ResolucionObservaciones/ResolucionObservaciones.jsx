
import "./ResolucionObservaciones.css";

function ResolucionObservaciones() {
    const observaciones = [
        {
            id: 1,
            responsable: "Coordinación Académica",
            fecha: "20 Oct 2026 · 10:45 a. m.",
            contenido:
                "Se verificó la disponibilidad del ambiente 405 y se confirmó que cuenta con la capacidad necesaria para recibir a los 38 aprendices.",
        },
        {
            id: 2,
            responsable: "Administrador del edificio",
            fecha: "20 Oct 2026 · 09:30 a. m.",
            contenido:
                "Se realizó la revisión del espacio y se confirmó que los equipos de cómputo se encuentran disponibles y en condiciones de funcionamiento.",
        },
    ];

    return (
        <section className="resolucion-observaciones">

            <div className="resolucion-observaciones-heading">
                <h2>Observaciones y seguimiento</h2>
                <p>
                    Registro de comentarios y aclaraciones relacionados
                    con la resolución.
                </p>
            </div>

            <div className="resolucion-observaciones-list">

                {observaciones.map((observacion) => (
                    <article
                        className="resolucion-observacion-item"
                        key={observacion.id}
                    >
                        <div className="resolucion-observacion-header">

                            <strong>
                                {observacion.responsable}
                            </strong>

                            <span>
                                {observacion.fecha}
                            </span>

                        </div>

                        <p>{observacion.contenido}</p>

                    </article>
                ))}

            </div>

        </section>
    );
}

export default ResolucionObservaciones;
