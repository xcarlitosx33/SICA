import "./AmbienteSummary.css";

const SUMMARY_ITEMS = [
    {
        id: 1,
        title: "Total de ambientes",
        value: 16,
        description: "Ambientes registrados",
        type: "total",
    },
    {
        id: 2,
        title: "Ambientes disponibles",
        value: 12,
        description: "Listos para formación",
        type: "available",
    },
    {
        id: 3,
        title: "En mantenimiento",
        value: 2,
        description: "Requieren atención",
        type: "maintenance",
    },
];

function AmbienteSummary() {
    return (
        <section className="ambiente-summary">
            {SUMMARY_ITEMS.map((item) => (
                <article className="summary-card" key={item.id}>
                    <div className="summary-card-header">
                        <span className="summary-card-label">
                            {item.title}
                        </span>

                        <span
                            className={`summary-card-dot summary-card-dot-${item.type}`}
                            aria-hidden="true"
                        />
                    </div>

                    <strong className="summary-card-value">
                        {item.value}
                    </strong>

                    <span className="summary-card-description">
                        {item.description}
                    </span>
                </article>
            ))}
        </section>
    );
}

export default AmbienteSummary;
