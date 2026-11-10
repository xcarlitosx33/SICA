
import { useMemo, useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import PageHeader from "../../components/PageHeader/PageHeader";

import RolesWelcome from "../../components/gestionRoles/RolesWelcome/RolesWelcome";
import RolesStats from "../../components/gestionRoles/RolesStats/RolesStats";
import RolesFilters from "../../components/gestionRoles/RolesFilters/RolesFilters";
import RolesTable from "../../components/gestionRoles/RolesTable/RolesTable";
import RolesModal from "../../components/gestionRoles/RolesModal/RolesModal";
import RolesDetails from "../../components/gestionRoles/RolesDetails/RolesDetails";

import { ROLES, INITIAL_USERS } from "../../data/roles";

import "./GestionRoles.css";

function GestionRoles() {
    const [users, setUsers] = useState(INITIAL_USERS);

    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("Todos");
    const [statusFilter, setStatusFilter] = useState("Todos");

    const [selectedUser, setSelectedUser] = useState(null);
    const [newRole, setNewRole] = useState("");
    const [showDetails, setShowDetails] = useState(null);

    // Filtrar usuarios
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

    // Estadísticas
    const activeUsers = users.filter(
        (user) => user.status === "Activo"
    ).length;

    // Abrir ventana para cambiar rol
    function openRoleModal(user) {
        setSelectedUser(user);
        setNewRole(user.role);
    }

    // Guardar cambio de rol
    function saveRole() {
        if (!selectedUser || !newRole) return;

        setUsers((previousUsers) =>
            previousUsers.map((user) =>
                user.id === selectedUser.id
                    ? {
                        ...user,
                        role: newRole,
                        date: "09 nov 2026",
                    }
                    : user
            )
        );

        setSelectedUser(null);
    }

    // Activar o desactivar usuario
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
    }

    // Limpiar filtros
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

                    <RolesWelcome />

                    <RolesStats
                        totalUsuarios={users.length}
                        usuariosActivos={activeUsers}
                        totalRoles={ROLES.length}
                    />

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

                        <RolesFilters
                            search={search}
                            setSearch={setSearch}
                            roleFilter={roleFilter}
                            setRoleFilter={setRoleFilter}
                            statusFilter={statusFilter}
                            setStatusFilter={setStatusFilter}
                            roles={ROLES}
                            onClearFilters={clearFilters}
                        />

                        <RolesTable
                            users={filteredUsers}
                            onChangeRole={openRoleModal}
                            onShowDetails={setShowDetails}
                            onToggleStatus={toggleStatus}
                        />

                        <div className="roles-table-footer">
                            <span>
                                Mostrando {filteredUsers.length} de {users.length} usuarios
                            </span>
                        </div>

                    </section>
                </div>
            </main>

            <RolesModal
                selectedUser={selectedUser}
                newRole={newRole}
                setNewRole={setNewRole}
                roles={ROLES}
                onClose={() => setSelectedUser(null)}
                onSave={saveRole}
            />

            <RolesDetails
                user={showDetails}
                onClose={() => setShowDetails(null)}
            />
        </div>
    );
}

export default GestionRoles;
