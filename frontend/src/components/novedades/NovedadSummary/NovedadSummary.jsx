import "./NovedadSummary.css";
import { novedades } from "../../../data/novedades";

function NovedadSummary() {
    const pendientes = novedades.filter(
        (item) => item.estado === "Pendiente"
    ).length;

    const enProceso = novedades.filter(
        (item) => item.estado === "En proceso"
    ).length;

    const cerradas = novedades.filter(
        (item) => item.estado === "Cerrada"
    ).length;

    const items = [
        {
            id: 1,
            title: "Total de novedades",
            value: novedades.length,
            description: "Novedades registradas",
            type: "total",
        },
        {
            id: 2,
            title: "Pendientes",
            value: pendientes,
            description: "Requieren atención",
            type: "pending",
        },
        {
            id: 3,
            title: "En proceso",
            value: enProceso,
            description: "Actualmente atendidas",
            type: "process",
        },
        {
            id: 4,
            title: "Cerradas",
            value: cerradas,
            description: "Novedades solucionadas",
            type: "closed",
        },
    ];

    return (
        <section className="novedad-summary">
            {items.map((item) => (
                <article className="novedad-summary-card" key={item.id}>
                    <div className="novedad-summary-header">
                        <span className="novedad-summary-title">
                            {item.title}
                        </span>
                        <span
                            className={`novedad-summary-dot novedad-summary-dot-${item.type}`}
                            aria-hidden="true"
                        />
                    </div>
                    <strong className="novedad-summary-value">
                        {item.value}
                    </strong>
                    <span className="novedad-summary-description">
                        {item.description}
                    </span>
                </article>
            ))}
        </section>
    );
}

export default NovedadSummary;
