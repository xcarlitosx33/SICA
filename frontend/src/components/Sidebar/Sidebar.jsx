
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./Sidebar.css";

import logoSICA from "../../assets/imagenes/Logo-SICA.png";

const ROLES = {
    instructor: {
        name: "Instructor",
        path: "/dashboard/instructor",
        menu: [
            { label: "Inicio", path: "/dashboard/instructor", icon: "home", end: true },
            { label: "Ambientes", path: "/ambientes", icon: "building" },
            { label: "Inventario", path: "/inventario", icon: "inventory" },
            { label: "Novedades", path: "/novedades", icon: "alert" },
            { label: "Movimientos", path: "/movimientos", icon: "movement" },
        ],
    },

    administrador: {
        name: "Administrador del edificio",
        path: "/dashboard/admin-edificio",
        menu: [
            { label: "Inicio", path: "/dashboard/admin-edificio", icon: "home", end: true },
            { label: "Ambientes", path: "/ambientes", icon: "building" },
            { label: "Inventario", path: "/inventario", icon: "inventory" },
            { label: "Novedades", path: "/novedades", icon: "alert" },
        ],
    },

    coordinacion: {
        name: "Coordinación académica",
        path: "/dashboard/coordinacion-academica",
        menu: [
            {
                label: "Inicio",
                path: "/dashboard/coordinacion-academica",
                icon: "home",
                end: true
            },
            {
                label: "Historial de resoluciones",
                path: "/dashboard/coordinacion-academica/historial-resoluciones",
                icon: "calendar",
            },
            {
                label: "Programación",
                path: "/programacion",
                icon: "schedule",
            },
            {
                label: "Gestión de roles",
                path: "/gestion-roles",
                icon: "shieldUser",
            },
            { label: "Ambientes", path: "/ambientes", icon: "building" },
            { label: "Inventario", path: "/inventario", icon: "inventory" },
            { label: "Novedades", path: "/novedades", icon: "alert" },
            { label: "Movimientos", path: "/movimientos", icon: "movement" },
        ],
    },

    director: {
        name: "Director de centro",
        path: "/dashboard/director-centro",
        menu: [
            { label: "Inicio", path: "/dashboard/director-centro", icon: "home", end: true },
            { label: "Ambientes", path: "/ambientes", icon: "building" },
            { label: "Inventario", path: "/inventario", icon: "inventory" },
            { label: "Novedades", path: "/novedades", icon: "alert" },
            { label: "Movimientos", path: "/movimientos", icon: "movement" },
        ],
    },
};

const ICONS = {
    home: (
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />
    ),

    calendar: (
        <>
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M16 3v4M8 3v4M3 11h18" />
        </>
    ),

    schedule: (
        <>
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M16 3v4M8 3v4M3 11h18" />
            <circle cx="16.5" cy="15.5" r="3.5" />
            <path d="M16.5 13.5v2l1.5 1" />
        </>
    ),

    building: (
        <>
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <path d="M9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1M10 21v-3h4v3" />
        </>
    ),

    inventory: (
        <>
            <path d="m3 7 9-4 9 4-9 4-9-4Z" />
            <path d="M3 7v10l9 4 9-4V7M12 11v10" />
        </>
    ),

    alert: (
        <>
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" />
            <path d="M10 21h4" />
        </>
    ),

    movement: (
        <>
            <path d="M7 7h14l-4-4" />
            <path d="M17 17H3l4 4" />
        </>
    ),

    shieldUser: (
        <>
            <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
            <circle cx="12" cy="10" r="2.5" />
            <path d="M8.5 16a4 4 0 0 1 7 0" />
        </>
    ),

    logout: (
        <>
            <path d="M10 17l5-5-5-5M15 12H3" />
            <path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" />
        </>
    ),

    menu: <path d="M4 6h16M4 12h16M4 18h16" />,

    close: <path d="m18 6-12 12M6 6l12 12" />,

    chevron: <path d="m7 10 5 5 5-5" />,
};

function Sidebar({ userName = "Usuario del SENA", onLogout }) {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useAuth();

    const [role, setRole] = useState(() =>
        localStorage.getItem("sicaRolDemo") || "director"
    );

    const [roleOpen, setRoleOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [loggingOut, setLoggingOut] = useState(false);

    const currentRole = ROLES[role] || ROLES.director;

    useEffect(() => {
        localStorage.setItem("sicaRolDemo", role);
    }, [role]);

    useEffect(() => {
        setMenuOpen(false);
        setRoleOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        function handleEscape(event) {
            if (event.key === "Escape") {
                setMenuOpen(false);
                setRoleOpen(false);
            }
        }

        window.addEventListener("keydown", handleEscape);

        return () => window.removeEventListener("keydown", handleEscape);
    }, []);

    function renderIcon(name) {
        return (
            <svg
                className="sidebar-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                {ICONS[name] || ICONS.home}
            </svg>
        );
    }

    function isItemActive(item) {
        if (item.end) {
            return location.pathname === item.path;
        }

        return location.pathname === item.path ||
            location.pathname.startsWith(`${item.path}/`);
    }

    function changeRole(nextRole) {
        setRole(nextRole);
        setRoleOpen(false);
        setMenuOpen(false);
        navigate(ROLES[nextRole].path);
    }

    async function handleLogout() {
        if (loggingOut) return;

        setLoggingOut(true);

        try {
            if (typeof onLogout === "function") {
                await onLogout();
            }

            logout();
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        } finally {
            setLoggingOut(false);
        }
    }

    return (
        <>
            <button
                type="button"
                className="sidebar-mobile-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
            >
                {renderIcon(menuOpen ? "close" : "menu")}
            </button>

            <button
                type="button"
                className={`sidebar-backdrop ${menuOpen ? "visible" : ""}`}
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
                tabIndex={menuOpen ? 0 : -1}
            />

            <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
                <div className="sidebar-logo">
                    <img
                        src={logoSICA}
                        alt="Logo SICA"
                        className="sidebar-logo-image"
                    />
                </div>

                <nav className="sidebar-menu" aria-label="Menú principal">
                    <p className="sidebar-section-title">MENÚ PRINCIPAL</p>

                    <div className="sidebar-menu-items">
                        {currentRole.menu.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.end}
                                onClick={() => setMenuOpen(false)}
                                className={() =>
                                    `sidebar-item ${isItemActive(item) ? "active" : ""}`
                                }
                            >
                                {renderIcon(item.icon)}
                                <span className="sidebar-item-label">
                                    {item.label}
                                </span>
                            </NavLink>
                        ))}
                    </div>
                </nav>

                <div className="sidebar-bottom">
                    <div className="sidebar-role-wrapper">
                        <button
                            type="button"
                            className={`sidebar-user ${roleOpen ? "role-open" : ""}`}
                            onClick={() => setRoleOpen(!roleOpen)}
                            aria-expanded={roleOpen}
                        >
                            <div className="sidebar-avatar">
                                {userName.trim().charAt(0).toUpperCase() || "U"}
                            </div>

                            <div className="sidebar-user-info">
                                <strong>{userName}</strong>
                                <span>{currentRole.name}</span>
                            </div>

                            {renderIcon("chevron")}
                        </button>

                        {roleOpen && (
                            <div className="sidebar-role-menu">
                                <p>CAMBIAR DE ROL</p>

                                {Object.entries(ROLES).map(([key, item]) => (
                                    <button
                                        type="button"
                                        key={key}
                                        className={role === key ? "selected" : ""}
                                        onClick={() => changeRole(key)}
                                    >
                                        <span>{item.name}</span>
                                        {role === key && <span>✓</span>}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        type="button"
                        className="sidebar-logout"
                        onClick={handleLogout}
                        disabled={loggingOut}
                    >
                        {renderIcon("logout")}
                        <span>
                            {loggingOut ? "Cerrando sesión..." : "Cerrar sesión"}
                        </span>
                    </button>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
