import "./MovimientoFilters.css";

function MovimientoFilters() {
    return (
        <section className="movimiento-filters">

            <div className="movimiento-filter-search">
                <label htmlFor="movimiento-search">
                    Buscar
                </label>

                <input
                    id="movimiento-search"
                    type="text"
                    placeholder="Buscar por elemento, serial o ambiente"
                />
            </div>

            <div className="movimiento-filter-group">
                <label htmlFor="movimiento-tipo">
                    Tipo
                </label>

                <select id="movimiento-tipo">
                    <option>Todos</option>
                    <option>Traslado</option>
                    <option>Asignación</option>
                    <option>Baja</option>
                    <option>Reasignación</option>
                </select>
            </div>

            <div className="movimiento-filter-group">
                <label htmlFor="movimiento-estado">
                    Estado
                </label>

                <select id="movimiento-estado">
                    <option>Todos</option>
                    <option>Completado</option>
                    <option>En proceso</option>
                    <option>Pendiente</option>
                    <option>Baja registrada</option>
                </select>
            </div>

            <div className="movimiento-filter-group">
                <label htmlFor="movimiento-origen">
                    Origen
                </label>

                <select id="movimiento-origen">
                    <option>Todos</option>
                    <option>Ambiente</option>
                    <option>Depósito</option>
                    <option>Almacén</option>
                </select>
            </div>

            <div className="movimiento-filter-group">
                <label htmlFor="movimiento-destino">
                    Destino
                </label>

                <select id="movimiento-destino">
                    <option>Todos</option>
                    <option>Ambiente</option>
                    <option>Depósito</option>
                    <option>Almacén</option>
                </select>
            </div>

            <div className="movimiento-filter-group">
                <label htmlFor="movimiento-fecha">
                    Fecha
                </label>

                <select id="movimiento-fecha">
                    <option>Todas</option>
                    <option>Hoy</option>
                    <option>Últimos 7 días</option>
                    <option>Últimos 30 días</option>
                </select>
            </div>

            <button className="clear-filters-button">
                Limpiar filtros
            </button>


        </section>
    );
}

export default MovimientoFilters;