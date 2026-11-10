
import "./RolesFilters.css";

function RolesFilters({
    search,
    setSearch,
    roleFilter,
    setRoleFilter,
    statusFilter,
    setStatusFilter,
    roles,
    onClearFilters
}) {
    return (
        <div className="roles-filters">

            <div className="roles-search">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4" />
                </svg>

                <input
                    type="text"
                    placeholder="Buscar por nombre, documento o correo..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </div>

            <select
                value={roleFilter}
                onChange={(event) => setRoleFilter(event.target.value)}
            >
                <option value="Todos">Todos los roles</option>

                {roles.map((role) => (
                    <option key={role} value={role}>
                        {role}
                    </option>
                ))}
            </select>

            <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
            >
                <option value="Todos">Todos los estados</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
            </select>

            <button
                className="roles-clear-button"
                type="button"
                onClick={onClearFilters}
            >
                Limpiar
            </button>

        </div>
    );
}

export default RolesFilters;
