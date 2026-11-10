
import StatCard from "../../StatCard/StatCard";
import StatCardGrid from "../../StatCard/StatCardGrid";
import "./ProgramacionSummary.css";

function ProgramacionSummary() {
    const resumen = [
        {
            id: 1,
            title: "GRUPOS PROGRAMADOS",
            value: "148",
            description: "Fichas con programación registrada",
            badge: "Total del periodo",
            status: "positive",
        },
        {
            id: 2,
            title: "OCUPACIÓN DE AMBIENTES",
            value: "78%",
            description: "Utilización de ambientes disponibles",
            badge: "Ocupación general",
            status: "info",
        },
        {
            id: 3,
            title: "CONFLICTOS DE PROGRAMACIÓN",
            value: "04",
            description: "Sesiones que requieren revisión",
            badge: "Requieren atención",
            status: "warning",
        },
    ];

    return (
        <section className="programacion-summary">
            <StatCardGrid minCardWidth={240}>
                {resumen.map((item) => (
                    <StatCard
                        key={item.id}
                        title={item.title}
                        value={item.value}
                        description={item.description}
                        badge={item.badge}
                        status={item.status}
                    />
                ))}
            </StatCardGrid>
        </section>
    );
}

export default ProgramacionSummary;
