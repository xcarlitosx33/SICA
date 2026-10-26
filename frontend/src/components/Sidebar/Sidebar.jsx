import "./Sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">

            {/* Logo */}
            <div className="sidebar-logo">
                <div className="sidebar-logo-placeholder">
                    SICA
                </div>
            </div>

            {/* Menú */}
            <div className="sidebar-menu">

                <p className="sidebar-section-title">
                    MENÚ PRINCIPAL
                </p>

                <button className="sidebar-item active">
                    <span className="sidebar-icon">⌂</span>
                    <span>Inicio</span>
                </button>

                <button className="sidebar-item">
                    <span className="sidebar-icon">▦</span>
                    <span>Ambientes</span>
                </button>

                <button className="sidebar-item">
                    <span className="sidebar-icon">□</span>
                    <span>Inventario</span>
                </button>

                <button className="sidebar-item">
                    <span className="sidebar-icon">◷</span>
                    <span>Programación</span>
                </button>

                <button className="sidebar-item">
                    <span className="sidebar-icon">→</span>
                    <span>movimientos</span>
                </button>

                <button className="sidebar-item">
                    <span className="sidebar-icon">!</span>
                    <span>novedades</span>
                </button>

            </div>

            {/* Usuario */}
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

                <button className="sidebar-logout">
                    <span className="sidebar-icon">↪</span>
                    <span>Cerrar sesión</span>
                </button>

            </div>

        </aside>
    );
}

export default Sidebar;