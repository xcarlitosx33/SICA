
import { useState } from "react";
import "./HistorialFilters.css";

function HistorialFilters({ onFilterChange }) {
    const [busqueda, setBusqueda] = useState("");
    const [estado, setEstado] = useState("Todos");
    const [fecha, setFecha] = useState("Todas");

    function actualizarFiltros(nuevaBusqueda, nuevoEstado, nuevaFecha) {
        if (onFilterChange) {
            onFilterChange({
                busqueda: nuevaBusqueda,
                estado: nuevoEstado,
                fecha: nuevaFecha,
            });
        }
    }

    function handleBusqueda(value) {
        setBusqueda(value);
        actualizarFiltros(value, estado, fecha);
    }

    function handleEstado(value) {
        setEstado(value);
        actualizarFiltros(busqueda, value, fecha);
    }

    function handleFecha(value) {
        setFecha(value);
        actualizarFiltros(busqueda, estado, value);
    }

    function limpiarFiltros() {
        setBusqueda("");
        setEstado("Todos");
        setFecha("Todas");

        actualizarFiltros("", "Todos", "Todas");
    }

    return (
        <section className="historial-filters">

            <div className="historial-filter-group historial-search-group">
                <label htmlFor="historial-search">
                    Buscar
                </label>

                <input
                    id="historial-search"
                    type="text"
                    placeholder="Buscar solicitud, ficha o solicitante..."
                    value={busqueda}
                    onChange={(e) => handleBusqueda(e.target.value)}
                />
            </div>

            <div className="historial-filter-group">
                <label htmlFor="historial-status">
                    Estado
                </label>

                <select
                    id="historial-status"
                    value={estado}
                    onChange={(e) => handleEstado(e.target.value)}
                >
                    <option value="Todos">Todos</option>
                    <option value="Aprobada">Aprobadas</option>
                    <option value="Rechazada">Rechazadas</option>
                </select>
            </div>

            <div className="historial-filter-group">
                <label htmlFor="historial-date">
                    Fecha
                </label>

                <select
                    id="historial-date"
                    value={fecha}
                    onChange={(e) => handleFecha(e.target.value)}
                >
                    <option value="Todas">Todas</option>
                    <option value="7 días">Últimos 7 días</option>
                    <option value="30 días">Últimos 30 días</option>
                    <option value="Este año">Este año</option>
                </select>
            </div>

            <button
                type="button"
                className="historial-clear-button"
                onClick={limpiarFiltros}
            >
                Limpiar filtros
            </button>

        </section>
    );
}

export default HistorialFilters;
