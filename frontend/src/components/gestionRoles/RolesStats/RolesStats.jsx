
import "./RolesStats.css";

function RolesStats({ totalUsuarios, usuariosActivos, totalRoles }) {
    const estadisticas = [
        {
            id: 1,
            titulo: "Usuarios registrados",
            valor: totalUsuarios,
            descripcion: "Usuarios en el sistema",
            icono: "U",
            color: "green",
        },
        {
            id: 2,
            titulo: "Usuarios activos",
            valor: usuariosActivos,
            descripcion: "Con acceso habilitado",
            icono: "✓",
            color: "blue",
        },
        {
            id: 3,
            titulo: "Roles disponibles",
            valor: totalRoles,
            descripcion: "Perfiles del sistema",
            icono: "R",
            color: "orange",
        },
    ];

    return (
        <section className="roles-stats">
            {estadisticas.map((estadistica) => (
                <article
                    className="roles-stat-card"
                    key={estadistica.id}
                >
                    <span
                        className={`roles-stat-icon ${estadistica.color}`}
                    >
                        {estadistica.icono}
                    </span>

                    <div className="roles-stat-info">
                        <p>{estadistica.titulo}</p>
                        <strong>{estadistica.valor}</strong>
                        <small>{estadistica.descripcion}</small>
                    </div>
                </article>
            ))}
        </section>
    );
}

export default RolesStats;
