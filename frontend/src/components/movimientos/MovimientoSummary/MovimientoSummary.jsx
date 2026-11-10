
import StatCard from "../../StatCard/StatCard";
import StatCardGrid from "../../StatCard/StatCardGrid";
import "./MovimientoSummary.css";

const MOVIMIENTO_ITEMS = [
    {
        id: 1,
        title: "Total de movimientos",
        value: 186,
        badge: "Activos",
        description: "Movimientos registrados",
        status: "neutral",
    },
    {
        id: 2,
        title: "Traslados",
        value: 72,
        detail: "38.7%",
        description: "Movimientos entre ambientes",
        status: "info",
    },
    {
        id: 3,
        title: "Asignaciones",
        value: 64,
        detail: "34.4%",
        description: "Asignaciones de elementos",
        status: "positive",
    },
    {
        id: 4,
        title: "Recientes",
        value: 18,
        badge: "Semana 42",
        description: "Realizados en los últimos 7 días",
        status: "info",
    },
];

function MovimientoSummary() {
    return (
        <section className="movimiento-summary">
            <StatCardGrid minCardWidth={240}>
                {MOVIMIENTO_ITEMS.map((item) => (
                    <StatCard
                        key={item.id}
                        title={item.title}
                        value={item.value}
                        badge={item.badge}
                        detail={item.detail}
                        description={item.description}
                        status={item.status}
                    />
                ))}
            </StatCardGrid>
        </section>
    );
}

export default MovimientoSummary;
