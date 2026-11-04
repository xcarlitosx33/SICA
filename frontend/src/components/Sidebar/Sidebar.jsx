
import "./Sidebar.css";
import logoSICA from "../../assets/imagenes/Logo-SICA.png";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Inicio",
      path: "/",
      icon: "⌂",
    },
    {
      label: "Ambientes",
      path: "/ambientes",
      icon: "▦",
    },
    {
      label: "Inventario",
      path: "/inventario",
      icon: "□",
    },
    {
      label: "Programación",
      path: "/programacion",
      icon: "◷",
    },
    {
      label: "Movimientos",
      path: "/movimientos",
      icon: "→",
    },
    {
      label: "Novedades",
      path: "/novedades",
      icon: "!",
    },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

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

        {menuItems.map((item) => (
          <button
            key={item.path}
            type="button"
            className={`sidebar-item ${
              isActive(item.path) ? "active" : ""
            }`}
            onClick={() => navigate(item.path)}
            aria-current={
              isActive(item.path) ? "page" : undefined
            }
          >
            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Información del usuario */}
      <div className="sidebar-bottom">
        <div className="sidebar-user">
          <div className="sidebar-avatar">U</div>

          <div className="sidebar-user-info">
            <strong>Usuario</strong>
            <span>Sesión activa</span>
          </div>
        </div>

        <button
          type="button"
          className="sidebar-logout"
          onClick={() => navigate("/")}
        >
          <span className="sidebar-icon">↪</span>
          <span>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
