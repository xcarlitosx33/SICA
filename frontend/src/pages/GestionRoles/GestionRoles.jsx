
import { useMemo, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./GestionRoles.css";

const ROLES = [
    "Instructor",
    "Coordinación académica",
    "Administrador de edificio",
    "Director de centro",
];

const INITIAL_USERS = [
    {
        id: 1,
        name: "Carlos Moreno",
        document: "1.020.435.912",
        email: "cmoreno@sena.edu.co",
        area: "Instructor ADSO",
        role: "Instructor",
        status: "Activo",
        date: "09 nov 2026",
    },
    {
        id: 2,
        name: "Diana Arango",
        document: "1.017.204.178",
        email: "darango@sena.edu.co",
        area: "Coordinación académica",
        role: "Coordinación académica",
        status: "Activo",
        date: "05 nov 2026",
    },
    {
        id: 3,
        name: "Andrés Silva",
        document: "98.654.720",
        email: "asilva@sena.edu.co",
        area: "Instructor ADSO",
        role: "Instructor",
        status: "Activo",
        date: "02 nov 2026",
    },
    {
        id: 4,
        name: "Laura Gómez",
        document: "70.154.390",
        email: "lgomez@sena.edu.co",
        area: "Administración de ambientes",
        role: "Administrador de edificio",
        status: "Inactivo",
        date: "28 oct 2026",
    },
    {
        id: 5,
        name: "Jhon Castro",
        document: "43.892.103",
        email: "jcastro@sena.edu.co",
        area: "Dirección del centro",
        role: "Director de centro",
        status: "Activo",
        date: "20 oct 2026",
    },
];

function GestionRoles() {
    const [users, setUsers] = useState(INITIAL_USERS);
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("Todos");
    const [statusFilter, setStatusFilter] = useState("Todos");
    const [selectedUser, setSelectedUser] = useState(null);
    const [newRole, setNewRole] = useState("");
    const [openMenu, setOpenMenu] = useState(null);
    const [showDetails, setShowDetails] = useState(null);

    const filteredUsers = useMemo(() => {
        return users.filter((user) => {
            const term = search.toLowerCase();

            const matchesSearch =
                user.name.toLowerCase().includes(term) ||
                user.document.includes(term) ||
                user.email.toLowerCase().includes(term);

            const matchesRole =
                roleFilter === "Todos" || user.role === roleFilter;

            const matchesStatus =
                statusFilter === "Todos" || user.status === statusFilter;

            return matchesSearch && matchesRole && matchesStatus;
        });
    }, [users, search, roleFilter, statusFilter]);

    const activeUsers = users.filter(
        (user) => user.status === "Activo"
    ).length;

    function openRoleModal(user) {
        setSelectedUser(user);
        setNewRole(user.role);
        setOpenMenu(null);
    }

    function saveRole() {
        if (!selectedUser || !newRole) return;

        setUsers((previousUsers) =>
            previousUsers.map((user) =>
                user.id === selectedUser.id
                    ? { ...user, role: newRole, date: "09 nov 2026" }
                    : user
            )
        );

        setSelectedUser(null);
    }

    function toggleStatus(id) {
        setUsers((previousUsers) =>
            previousUsers.map((user) =>
                user.id === id
                    ? {
                        ...user,
                        status:
                            user.status === "Activo"
                                ? "Inactivo"
                                : "Activo",
                    }
                    : user
            )
        );

        setOpenMenu(null);
    }

    function clearFilters() {
        setSearch("");
        setRoleFilter("Todos");
        setStatusFilter("Todos");
    }

    return (
        <div className="role-management-layout">
            <Sidebar />

            <main className="role-management-main">
                <div className="role-management-content">
                    <PageHeader
                        title="Gestión de roles"
                        description="Administra los roles y accesos de los usuarios del sistema SICA."
                    />

                    <section className="roles-welcome">
                        <div>
                            <span className="roles-eyebrow">
                                ADMINISTRACIÓN DEL SISTEMA
                            </span>
                            <h2>Usuarios y permisos</h2>
                            <p>
                                Consulta los usuarios registrados y administra
                                el rol que tienen asignado.
                            </p>
                        </div>
                        <div className="roles-welcome-icon">
                            <svg viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="1.6">
                                <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                                <circle cx="12" cy="10" r="2.5" />
                                <path d="M8.5 16a4 4 0 0 1 7 0" />
                            </svg>
                        </div>
                    </section>

                    <section className="roles-stats">
                        <article className="roles-stat-card">
                            <span className="roles-stat-icon green">U</span>
                            <div>
                                <p>Usuarios registrados</p>
                                <strong>{users.length}</strong>
                                <small>Usuarios en el sistema</small>
                            </div>
                        </article>

                        <article className="roles-stat-card">
                            <span className="roles-stat-icon blue">✓</span>
                            <div>
                                <p>Usuarios activos</p>
                                <strong>{activeUsers}</strong>
                                <small>Con acceso habilitado</small>
                            </div>
                        </article>

                        <article className="roles-stat-card">
                            <span className="roles-stat-icon orange">R</span>
                            <div>
                                <p>Roles disponibles</p>
                                <strong>{ROLES.length}</strong>
                                <small>Perfiles del sistema</small>
                            </div>
                        </article>
                    </section>

                    <section className="roles-table-card">
                        <div className="roles-table-heading">
                            <div>
                                <h2>Usuarios y roles</h2>
                                <p>
                                    Lista de usuarios, su rol actual y estado.
                                </p>
                            </div>
                            <span className="roles-total">
                                {filteredUsers.length} resultados
                            </span>
                        </div>

                        <div className="roles-filters">
                            <div className="roles-search">
                                <svg viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="7" />
                                    <path d="m20 20-4-4" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Buscar por nombre, documento o correo..."
                                    value={search}
                                    onChange={(event) =>
                                        setSearch(event.target.value)
                                    }
                                />
                            </div>

                            <select
                                value={roleFilter}
                                onChange={(event) =>
                                    setRoleFilter(event.target.value)
                                }
                            >
                                <option value="Todos">Todos los roles</option>
                                {ROLES.map((role) => (
                                    <option key={role} value={role}>
                                        {role}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={statusFilter}
                                onChange={(event) =>
                                    setStatusFilter(event.target.value)
                                }
                            >
                                <option value="Todos">Todos los estados</option>
                                <option value="Activo">Activo</option>
                                <option value="Inactivo">Inactivo</option>
                            </select>

                            <button
                                className="roles-clear-button"
                                onClick={clearFilters}
                                type="button"
                            >
                                Limpiar
                            </button>
                        </div>

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
                                    {filteredUsers.map((user) => (
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
                                                <span className={`roles-status ${user.status === "Activo" ? "active" : "inactive"}`}>
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
                                                <button
                                                    className="roles-action-button"
                                                    type="button"
                                                    onClick={() =>
                                                        setOpenMenu(
                                                            openMenu === user.id
                                                                ? null
                                                                : user.id
                                                        )
                                                    }
                                                >
                                                    Acciones
                                                    <span>⌄</span>
                                                </button>

                                                {openMenu === user.id && (
                                                    <div className="roles-action-menu">
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                openRoleModal(user)
                                                            }
                                                        >
                                                            Asignar / cambiar rol
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setShowDetails(user);
                                                                setOpenMenu(null);
                                                            }}
                                                        >
                                                            Ver detalle
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                toggleStatus(user.id)
                                                            }
                                                        >
                                                            {user.status === "Activo"
                                                                ? "Desactivar usuario"
                                                                : "Activar usuario"}
                                                        </button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}

                                    {filteredUsers.length === 0 && (
                                        <tr>
                                            <td colSpan="6" className="roles-empty">
                                                No se encontraron usuarios con esos filtros.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div className="roles-table-footer">
                            <span>
                                Mostrando {filteredUsers.length} de {users.length} usuarios
                            </span>
                        </div>
                    </section>
                </div>
            </main>

            {selectedUser && (
                <div className="roles-modal-overlay"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setSelectedUser(null);
                        }
                    }}
                >
                    <section className="roles-modal">
                        <div className="roles-modal-heading">
                            <div>
                                <span>GESTIÓN DE USUARIOS</span>
                                <h2>Asignar rol</h2>
                                <p>Modifica el rol asignado al usuario.</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSelectedUser(null)}
                                aria-label="Cerrar"
                            >
                                ×
                            </button>
                        </div>

                        <div className="roles-modal-user">
                            <span className="roles-avatar">
                                {selectedUser.name
                                    .split(" ")
                                    .map((part) => part[0])
                                    .slice(0, 2)
                                    .join("")}
                            </span>
                            <div>
                                <strong>{selectedUser.name}</strong>
                                <small>CC {selectedUser.document}</small>
                            </div>
                        </div>

                        <label className="roles-modal-label" htmlFor="new-role">
                            Rol del usuario
                        </label>
                        <select
                            id="new-role"
                            value={newRole}
                            onChange={(event) => setNewRole(event.target.value)}
                        >
                            {ROLES.map((role) => (
                                <option key={role} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>

                        <div className="roles-modal-note">
                            El cambio se reflejará en esta vista de demostración.
                            Todavía no se guarda en el servidor.
                        </div>

                        <div className="roles-modal-actions">
                            <button
                                type="button"
                                className="roles-cancel"
                                onClick={() => setSelectedUser(null)}
                            >
                                Cancelar
                            </button>
                            <button
                                type="button"
                                className="roles-save"
                                onClick={saveRole}
                            >
                                Guardar cambios
                            </button>
                        </div>
                    </section>
                </div>
            )}

            {showDetails && (
                <div className="roles-modal-overlay"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setShowDetails(null);
                        }
                    }}
                >
                    <section className="roles-modal">
                        <div className="roles-modal-heading">
                            <div>
                                <span>INFORMACIÓN DEL USUARIO</span>
                                <h2>Detalle del usuario</h2>
                            </div>
                            <button
                                type="button"
                                onClick={() => setShowDetails(null)}
                                aria-label="Cerrar"
                            >
                                ×
                            </button>
                        </div>

                        <div className="roles-detail-list">
                            <p><strong>Nombre:</strong> {showDetails.name}</p>
                            <p><strong>Documento:</strong> {showDetails.document}</p>
                            <p><strong>Correo:</strong> {showDetails.email}</p>
                            <p><strong>Área:</strong> {showDetails.area}</p>
                            <p><strong>Rol:</strong> {showDetails.role}</p>
                            <p><strong>Estado:</strong> {showDetails.status}</p>
                        </div>

                        <div className="roles-modal-actions">
                            <button
                                type="button"
                                className="roles-save"
                                onClick={() => setShowDetails(null)}
                            >
                                Cerrar
                            </button>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}

export default GestionRoles;
