
import StatCard from "../../StatCard/StatCard";
import StatCardGrid from "../../StatCard/StatCardGrid";
import "./AmbienteSummary.css";

const SUMMARY_ITEMS = [
    {
        id: 1,
        title: "Total de ambientes",
        value: 16,
        description: "Ambientes registrados",
        status: "neutral",
    },
    {
        id: 2,
        title: "Ambientes disponibles",
        value: 12,
        description: "Listos para formación",
        status: "positive",
    },
    {
        id: 3,
        title: "En mantenimiento",
        value: 2,
        description: "Requieren atención",
        status: "warning",
    },
];

function AmbienteSummary() {
    return (
        <div className="ambiente-summary">
            <StatCardGrid minCardWidth={240}>
                {SUMMARY_ITEMS.map((item) => (
                    <StatCard
                        key={item.id}
                        title={item.title}
                        value={item.value}
                        description={item.description}
                        status={item.status}
                    />
                ))}
            </StatCardGrid>
        </div>
    );
}

export default AmbienteSummary;
