
import "./RolesWelcome.css";

function RolesWelcome() {
    return (
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
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                >
                    <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                    <path d="M8.5 16a4 4 0 0 1 7 0" />
                </svg>
            </div>
        </section>
    );
}

export default RolesWelcome;
