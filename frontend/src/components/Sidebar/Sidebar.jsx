import "./Sidebar.css";
import logoSICA from "../../assets/imagenes/Logo-SICA.png";

function Sidebar() {
    return (
        <aside className="sidebar">

            {/* Logo SICA */}
            <div className="sidebar-logo">
                <img
                    src={logoSICA}
                    alt="Logo SICA"
                    className="sidebar-logo-image"
                />
            </div>

            {/* Menú principal */}
            <nav className="sidebar-menu">
                <p className="sidebar-section-title">
                    MENÚ PRINCIPAL
                </p>

                <button type="button" className="sidebar-item active">
                    <span className="sidebar-icon">⌂</span>
                    <span>Inicio</span>
                </button>

                <button type="button" className="sidebar-item">
                    <span className="sidebar-icon">▦</span>
                    <span>Ambientes</span>
                </button>

                <button type="button" className="sidebar-item">
                    <span className="sidebar-icon">□</span>
                    <span>Inventario</span>
                </button>

                <button type="button" className="sidebar-item">
                    <span className="sidebar-icon">◷</span>
                    <span>Programación</span>
                </button>

                <button type="button" className="sidebar-item">
                    <span className="sidebar-icon">→</span>
                    <span>Movimientos</span>
                </button>

                <button type="button" className="sidebar-item">
                    <span className="sidebar-icon">!</span>
                    <span>Novedades</span>
                </button>
            </nav>

            {/* Información del usuario */}
            <div className="sidebar-bottom">
                <div className="sidebar-user">
                    <div className="sidebar-avatar">
                        U
                    </div>

                    <div className="sidebar-user-info">
                        <strong>Usuario</strong>
                        <span>Sesión activa</span>
                    </div>
                </div>

                <button type="button" className="sidebar-logout">
                    <span className="sidebar-icon">↪</span>
                    <span>Cerrar sesión</span>
                </button>
            </div>

        </aside>
    );
}

export default Sidebar;