
import "./RolesDetails.css";

function RolesDetails({ user, onClose }) {
    if (!user) return null;

    return (
        <div className="roles-details-overlay" onClick={onClose}>
            <section
                className="roles-details-modal"
                onClick={(event) => event.stopPropagation()}
            >
                <header className="roles-details-header">
                    <div>
                        <span>INFORMACIÓN DEL USUARIO</span>
                        <h2>Detalle del usuario</h2>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar ventana"
                    >
                        ×
                    </button>
                </header>

                <div className="roles-details-profile">
                    <div className="roles-details-avatar">
                        {user.name
                            .split(" ")
                            .map((part) => part[0])
                            .slice(0, 2)
                            .join("")}
                    </div>

                    <div>
                        <h3>{user.name}</h3>
                        <span>{user.email}</span>
                    </div>
                </div>

                <div className="roles-details-grid">
                    <div className="roles-details-field">
                        <span>Documento</span>
                        <strong>{user.document}</strong>
                    </div>

                    <div className="roles-details-field">
                        <span>Área institucional</span>
                        <strong>{user.area}</strong>
                    </div>

                    <div className="roles-details-field">
                        <span>Rol asignado</span>
                        <strong>{user.role}</strong>
                    </div>

                    <div className="roles-details-field">
                        <span>Estado</span>
                        <strong
                            className={
                                user.status === "Activo"
                                    ? "roles-details-active"
                                    : "roles-details-inactive"
                            }
                        >
                            {user.status}
                        </strong>
                    </div>

                    <div className="roles-details-field">
                        <span>Última modificación</span>
                        <strong>{user.date}</strong>
                    </div>
                </div>

                <footer className="roles-details-footer">
                    <button type="button" onClick={onClose}>
                        Cerrar
                    </button>
                </footer>
            </section>
        </div>
    );
}

export default RolesDetails;
