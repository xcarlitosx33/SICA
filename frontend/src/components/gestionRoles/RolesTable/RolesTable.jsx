
import "./RolesTable.css";

function RolesTable({
    users,
    onChangeRole,
    onShowDetails,
    onToggleStatus
}) {
    return (
        <div className="roles-table-wrapper">
            <table className="roles-table">
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Información institucional</th>
                        <th>Rol asignado</th>
                        <th>Estado</th>
                        <th>Última modificación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <div className="roles-user">
                                    <span className="roles-avatar">
                                        {user.name
                                            .split(" ")
                                            .map((part) => part[0])
                                            .slice(0, 2)
                                            .join("")}
                                    </span>

                                    <div>
                                        <strong>{user.name}</strong>
                                        <small>CC {user.document}</small>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="roles-institution">
                                    <strong>{user.email}</strong>
                                    <small>{user.area}</small>
                                </div>
                            </td>

                            <td>
                                <span className="roles-role-badge">
                                    {user.role}
                                </span>
                            </td>

                            <td>
                                <span
                                    className={`roles-status ${
                                        user.status === "Activo"
                                            ? "active"
                                            : "inactive"
                                    }`}
                                >
                                    <span />
                                    {user.status}
                                </span>
                            </td>

                            <td>
                                <span className="roles-date">
                                    {user.date}
                                </span>
                            </td>

                            <td className="roles-actions-cell">
                                <div className="roles-table-actions">
                                    <button
                                        type="button"
                                        className="roles-action-button"
                                        onClick={() => onChangeRole(user)}
                                    >
                                        Cambiar rol
                                    </button>

                                    <button
                                        type="button"
                                        className="roles-detail-button"
                                        onClick={() => onShowDetails(user)}
                                    >
                                        Ver detalle
                                    </button>

                                    <button
                                        type="button"
                                        className="roles-status-button"
                                        onClick={() => onToggleStatus(user.id)}
                                    >
                                        {user.status === "Activo"
                                            ? "Desactivar"
                                            : "Activar"}
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}

                    {users.length === 0 && (
                        <tr>
                            <td colSpan="6" className="roles-empty">
                                No se encontraron usuarios con esos filtros.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default RolesTable;
