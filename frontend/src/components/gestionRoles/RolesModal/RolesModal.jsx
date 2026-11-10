
import "./RolesModal.css";

function RolesModal({
    selectedUser,
    newRole,
    setNewRole,
    roles,
    onClose,
    onSave
}) {
    if (!selectedUser) return null;

    return (
        <div className="roles-modal-overlay" onClick={onClose}>
            <section
                className="roles-modal"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="roles-modal-header">
                    <div>
                        <span>GESTIÓN DE USUARIOS</span>
                        <h2>Asignar rol</h2>
                        <p>
                            Selecciona el rol que tendrá asignado este usuario.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="roles-modal-close"
                        onClick={onClose}
                        aria-label="Cerrar ventana"
                    >
                        ×
                    </button>
                </div>

                <div className="roles-modal-user">
                    <div className="roles-modal-avatar">
                        {selectedUser.name
                            .split(" ")
                            .map((part) => part[0])
                            .slice(0, 2)
                            .join("")}
                    </div>

                    <div>
                        <strong>{selectedUser.name}</strong>
                        <span>CC {selectedUser.document}</span>
                        <span>{selectedUser.email}</span>
                    </div>
                </div>

                <div className="roles-modal-field">
                    <label htmlFor="new-role">
                        Rol asignado
                    </label>

                    <select
                        id="new-role"
                        value={newRole}
                        onChange={(event) => setNewRole(event.target.value)}
                    >
                        <option value="" disabled>
                            Selecciona un rol
                        </option>

                        {roles.map((role) => (
                            <option key={role} value={role}>
                                {role}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="roles-modal-info">
                    El cambio actualizará el rol asignado al usuario.
                </div>

                <div className="roles-modal-actions">
                    <button
                        type="button"
                        className="roles-modal-cancel"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>

                    <button
                        type="button"
                        className="roles-modal-save"
                        onClick={onSave}
                        disabled={!newRole}
                    >
                        Guardar cambios
                    </button>
                </div>
            </section>
        </div>
    );
}

export default RolesModal;
