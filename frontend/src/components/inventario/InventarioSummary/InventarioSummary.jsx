
import StatCard from "../../StatCard/StatCard";
import StatCardGrid from "../../StatCard/StatCardGrid";
import "./InventarioSummary.css";

function InventarioSummary({ inventarios }) {
    const total = inventarios.length;

    const completos = inventarios.filter(
        (item) => item.estado === "completo"
    ).length;

    const revision = inventarios.filter(
        (item) => item.estado === "revision"
    ).length;

    const incompletos = inventarios.filter(
        (item) => item.estado === "incompleto"
    ).length;

    const items = [
        {
            id: 1,
            title: "Total de inventarios",
            value: total,
            description: "Ambientes registrados",
            status: "neutral",
        },
        {
            id: 2,
            title: "Completos",
            value: completos,
            description: "Inventarios verificados",
            status: "positive",
        },
        {
            id: 3,
            title: "En revisión",
            value: revision,
            description: "Requieren verificación",
            status: "warning",
        },
        {
            id: 4,
            title: "Incompletos",
            value: incompletos,
            description: "Presentan faltantes",
            status: "negative",
        },
    ];

    return (
        <section className="inventario-summary">
            <StatCardGrid minCardWidth={240}>
                {items.map((item) => (
                    <StatCard
                        key={item.id}
                        title={item.title}
                        value={item.value}
                        description={item.description}
                        status={item.status}
                    />
                ))}
            </StatCardGrid>
        </section>
    );
}

export default InventarioSummary;
