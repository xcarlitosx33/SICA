import "./InventarioSummary.css";

function InventarioSummary({ inventarios }) {
    const total = inventarios.length;
    const completos = inventarios.filter((item) => item.estado === "completo").length;
    const revision = inventarios.filter((item) => item.estado === "revision").length;
    const incompletos = inventarios.filter((item) => item.estado === "incompleto").length;

    const items = [
        {
            id: 1,
            title: "Total de inventarios",
            value: total,
            description: "Ambientes registrados",
            type: "total",
        },
        {
            id: 2,
            title: "Completos",
            value: completos,
            description: "Inventarios verificados",
            type: "complete",
        },
        {
            id: 3,
            title: "En revisión",
            value: revision,
            description: "Requieren verificación",
            type: "review",
        },
        {
            id: 4,
            title: "Incompletos",
            value: incompletos,
            description: "Presentan faltantes",
            type: "incomplete",
        },
    ];

    return (
        <section className="inventario-summary">
            {items.map((item) => (
                <article className="inventario-summary-card" key={item.id}>
                    <div className="inventario-summary-header">
                        <span>{item.title}</span>
                        <span
                            className={`inventario-summary-dot ${item.type}`}
                            aria-hidden="true"
                        />
                    </div>

                    <strong>{item.value}</strong>
                    <span className="inventario-summary-description">
                        {item.description}
                    </span>
                </article>
            ))}
        </section>
    );
}

export default InventarioSummary;
