
import "./RolesStats.css";
import IconStatCard from "../../StatCard/variants/IconStatCard";

function RolesStats({ totalUsuarios, usuariosActivos, totalRoles }) {
    const estadisticas = [
        {
            id: 1,
            title: "Usuarios registrados",
            value: totalUsuarios,
            description: "Usuarios en el sistema",
            icon: "U",
            status: "positive",
        },
        {
            id: 2,
            title: "Usuarios activos",
            value: usuariosActivos,
            description: "Con acceso habilitado",
            icon: "✓",
            status: "positive",
        },
        {
            id: 3,
            title: "Roles disponibles",
            value: totalRoles,
            description: "Perfiles del sistema",
            icon: "R",
            status: "warning",
        },
    ];

    return (
        <section className="roles-stats">
            {estadisticas.map((estadistica) => (
                <IconStatCard
                    key={estadistica.id}
                    title={estadistica.title}
                    value={estadistica.value}
                    description={estadistica.description}
                    icon={estadistica.icon}
                    status={estadistica.status}
                />
            ))}
        </section>
    );
}

export default RolesStats;
