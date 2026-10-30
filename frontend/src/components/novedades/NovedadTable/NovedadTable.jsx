import "./NovedadTable.css";
import Button from "../../Button/Button";

const NOVEDADES = [
    {
        id: "NOV-001",
        fecha: "28/10/2026",
        ambiente: "Ambiente 101",
        tipo: "Mantenimiento",
        descripcion: "Aire acondicionado presenta fallas.",
        estado: "Pendiente",
    },
    {
        id: "NOV-002",
        fecha: "27/10/2026",
        ambiente: "Ambiente 102",
        tipo: "Equipamiento",
        descripcion: "Proyector no enciende.",
        estado: "En proceso",
    },
    {
        id: "NOV-003",
        fecha: "26/10/2026",
        ambiente: "Ambiente 103",
        tipo: "Infraestructura",
        descripcion: "Filtración de agua en el techo.",
        estado: "Cerrada",
    },
    {
        id: "NOV-004",
        fecha: "25/10/2026",
        ambiente: "Ambiente 104",
        tipo: "Mantenimiento",
        descripcion: "Revisión de tomacorrientes.",
        estado: "Pendiente",
    },
    {
        id: "NOV-005",
        fecha: "24/10/2026",
        ambiente: "Ambiente 101",
        tipo: "Equipamiento",
        descripcion: "Teclado presenta fallas.",
        estado: "En proceso",
    },
];

function NovedadTable({ filters }) {
    const normalizedSearch = filters.search.trim().toLowerCase();

    const filteredNovedades = NOVEDADES.filter((novedad) => {
        const matchesSearch =
            `${novedad.id} ${novedad.ambiente} ${novedad.tipo} ${novedad.descripcion}`
                .toLowerCase()
                .includes(normalizedSearch);

        const matchesEstado =
            !filters.estado || novedad.estado === filters.estado;

        const matchesTipo =
            !filters.tipo || novedad.tipo === filters.tipo;

        const matchesAmbiente =
            !filters.ambiente || novedad.ambiente === filters.ambiente;

        return (
            matchesSearch &&
            matchesEstado &&
            matchesTipo &&
            matchesAmbiente
        );
    });

    function handleView(novedad) {
        alert(
            `Detalle de ${novedad.id}\n\n` +
            `Ambiente: ${novedad.ambiente}\n` +
            `Tipo: ${novedad.tipo}\n` +
            `Descripción: ${novedad.descripcion}\n` +
            `Estado: ${novedad.estado}`
        );
    }

    function getStatusClass(estado) {
        if (estado === "Pendiente") return "pendiente";
        if (estado === "En proceso") return "en-proceso";
        return "cerrada";
    }

    return (
        <section className="novedad-table-section">
            <div className="novedad-table-wrapper">
                <table className="novedad-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Fecha</th>
                            <th>Ambiente</th>
                            <th>Tipo</th>
                            <th>Descripción</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredNovedades.length > 0 ? (
                            filteredNovedades.map((novedad) => (
                                <tr key={novedad.id}>
                                    <td className="novedad-table-id">
                                        {novedad.id}
                                    </td>
                                    <td>{novedad.fecha}</td>
                                    <td>{novedad.ambiente}</td>
                                    <td>{novedad.tipo}</td>
                                    <td className="novedad-table-description">
                                        {novedad.descripcion}
                                    </td>
                                    <td>
                                        <span
                                            className={`novedad-status ${getStatusClass(
                                                novedad.estado
                                            )}`}
                                        >
                                            {novedad.estado}
                                        </span>
                                    </td>
                                    <td>
                                        <Button
                                            type="button"
                                            className="novedad-table-action"
                                            onClick={() => handleView(novedad)}
                                        >
                                            Ver detalle
                                            <span aria-hidden="true">›</span>
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="novedad-table-empty">
                                    No se encontraron novedades con esos filtros.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="novedad-table-footer">
                <span>
                    Mostrando {filteredNovedades.length} de {NOVEDADES.length} novedades
                </span>
            </div>
        </section>
    );
}

export default NovedadTable;