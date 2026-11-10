
import StatCard from "../../../../StatCard/StatCard";
import StatCardGrid from "../../../../StatCard/StatCardGrid";
import "./HistorialSummary.css";

function HistorialSummary() {
    const resumen = [
        {
            id: 1,
            title: "Total de resoluciones",
            value: 128,
            description: "Solicitudes gestionadas",
            status: "neutral",
        },
        {
            id: 2,
            title: "Aprobadas",
            value: 96,
            description: "Solicitudes aprobadas",
            status: "positive",
        },
        {
            id: 3,
            title: "Rechazadas",
            value: 32,
            description: "Solicitudes rechazadas",
            status: "negative",
        },
    ];

    return (
        <section className="historial-summary">
            <StatCardGrid minCardWidth={240}>
                {resumen.map((item) => (
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

export default HistorialSummary;
