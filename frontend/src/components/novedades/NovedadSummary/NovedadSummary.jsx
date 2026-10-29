import "./NovedadSummary.css";

const SUMMARY_ITEMS = [
    {
        id: 1,
        title: "Total de novedades",
        value: 24,
        description: "Novedades registradas",
        type: "total",
    },
    {
        id: 2,
        title: "Pendientes",
        value: 8,
        description: "Requieren atención",
        type: "pending",
    },
    {
        id: 3,
        title: "En proceso",
        value: 10,
        description: "Actualmente atendidas",
        type: "process",
    },
    {
        id: 4,
        title: "Cerradas",
        value: 6,
        description: "Novedades solucionadas",
        type: "closed",
    },
];

function NovedadSummary() {
    return (
        <section className="novedad-summary">
            {SUMMARY_ITEMS.map((item) => (
                <article
                    className={`novedad-summary-card novedad-summary-${item.type}`}
                    key={item.id}
                >
                    <div className="novedad-summary-info">
                        <span className="novedad-summary-title">
                            {item.title}
                        </span>

                        <strong className="novedad-summary-value">
                            {item.value}
                        </strong>

                        <span className="novedad-summary-description">
                            {item.description}
                        </span>
                    </div>
                </article>
            ))}
        </section>
    );
}

export default NovedadSummary;