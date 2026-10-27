
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./Sidebar.css";

import logoSICA from "../../assets/imagenes/Logo-SICA.png";

const MENU_ITEMS = [
    { label: "Inicio", path: "/dashboard", icon: "home", end: true },
    {
        label: "Programación de ambientes",
        path: "/programacion",
        icon: "calendar",
    },
    { label: "Ambientes", path: "/ambientes", icon: "building" },
    { label: "Inventario", path: "/inventario", icon: "inventory" },
    { label: "Novedades", path: "/novedades", icon: "alert" },
    { label: "Movimientos", path: "/movimientos", icon: "movement" },
];

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
    building: (
        <>
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <path d="M9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1M10 21v-3h4v3" />
        </>
    ),
    inventory: (
        <>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M8 8h8M8 12h8M8 16h5" />
        </>
    ),
    alert: (
        <>
            <path d="m10.3 3.9-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.1l-8-14a2 2 0 0 0-3.4 0Z" />
            <path d="M12 9v4m0 4h.01" />
        </>
    ),
    movement: (
        <>
            <path d="M17 3l4 4-4 4M3 7h18" />
            <path d="M7 21l-4-4 4-4M21 17H3" />
        </>
    ),
    logout: (
        <>
            <path d="M10 17l5-5-5-5M15 12H3" />
            <path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" />
        </>
    ),
    menu: (
        <path d="M4 6h16M4 12h16M4 18h16" />
    ),
    close: (
        <path d="m18 6-12 12M6 6l12 12" />
    ),
};

function Sidebar({
    userName = "Usuario del SENA",
    userRole = "Usuario",
    menuItems = MENU_ITEMS,
    onLogout,
}) {
    const location = useLocation();
    const { logout } = useAuth();

    const [menuOpen, setMenuOpen] = useState(false);
    const [loggingOut, setLoggingOut] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    useEffect(() => {
        closeMenu();
    }, [location.pathname]);

    useEffect(() => {
        function handleEscape(event) {
            if (event.key === "Escape") {
                closeMenu();
            }
        }

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);

    useEffect(() => {
        if (!menuOpen) {
            return undefined;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [menuOpen]);

    function isItemActive(item) {
        if (item.path === "/dashboard") {
            return (
                location.pathname === "/dashboard" ||
                location.pathname.startsWith("/dashboard/")
            );
        }

        return (
            location.pathname === item.path ||
            location.pathname.startsWith(`${item.path}/`)
        );
    }

    async function handleLogout() {
        if (loggingOut) {
            return;
        }

        setLoggingOut(true);

        try {
            if (typeof onLogout === "function") {
                await onLogout();
            }

            logout();
            closeMenu();
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        } finally {
            setLoggingOut(false);
        }
    }

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

    return (
        <>
            <button
                type="button"
                className="sidebar-mobile-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
                aria-controls="sica-sidebar"
            >
                {renderIcon(menuOpen ? "close" : "menu")}
            </button>

            <button
                type="button"
                className={`sidebar-backdrop ${menuOpen ? "visible" : ""}`}
                onClick={closeMenu}
                aria-label="Cerrar menú"
                tabIndex={menuOpen ? 0 : -1}
                aria-hidden={!menuOpen}
            />

            <aside
                id="sica-sidebar"
                className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}
            >
                <div className="sidebar-logo">
                    <img
                        src={logoSICA}
                        alt="Logo SICA"
                        className="sidebar-logo-image"
                    />
                </div>

                <nav className="sidebar-menu" aria-label="Menú principal">
                    <p className="sidebar-section-title">
                        MENÚ PRINCIPAL
                    </p>

                    <div className="sidebar-menu-items">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.end}
                                onClick={closeMenu}
                                className={() =>
                                    `sidebar-item ${
                                        isItemActive(item) ? "active" : ""
                                    }`
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
                    <div className="sidebar-user">
                        <div className="sidebar-avatar" aria-hidden="true">
                            {userName.trim().charAt(0).toUpperCase() || "U"}
                        </div>

                        <div className="sidebar-user-info">
                            <strong title={userName}>
                                {userName}
                            </strong>

                            <span title={userRole}>
                                {userRole}
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="sidebar-logout"
                        onClick={handleLogout}
                        disabled={loggingOut}
                    >
                        {renderIcon("logout")}

                        <span>
                            {loggingOut
                                ? "Cerrando sesión..."
                                : "Cerrar sesión"}
                        </span>
                    </button>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
