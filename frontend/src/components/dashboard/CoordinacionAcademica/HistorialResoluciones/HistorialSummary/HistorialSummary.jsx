
import "./HistorialSummary.css";

function HistorialSummary() {
    const resumen = [
        {
            id: 1,
            titulo: "Total de resoluciones",
            cantidad: 128,
            descripcion: "Solicitudes gestionadas",
            tipo: "total",
        },
        {
            id: 2,
            titulo: "Aprobadas",
            cantidad: 96,
            descripcion: "Solicitudes aprobadas",
            tipo: "aprobadas",
        },
        {
            id: 3,
            titulo: "Rechazadas",
            cantidad: 32,
            descripcion: "Solicitudes rechazadas",
            tipo: "rechazadas",
        },
    ];

    return (
        <section className="historial-summary">

            {resumen.map((item) => (
                <article
                    key={item.id}
                    className={`historial-summary-card ${item.tipo}`}
                >
                    <div className="historial-summary-header">
                        <h3>{item.titulo}</h3>
                        <span className="historial-summary-indicator"></span>
                    </div>

                    <strong className="historial-summary-number">
                        {item.cantidad}
                    </strong>

                    <span className="historial-summary-description">
                        {item.descripcion}
                    </span>
                </article>
            ))}

        </section>
    );
}

export default HistorialSummary;
