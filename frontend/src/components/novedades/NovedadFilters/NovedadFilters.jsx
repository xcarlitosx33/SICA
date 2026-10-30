import "./NovedadFilters.css";

function NovedadFilters({ filters, onFilterChange, onClear }) {
    return (
        <section className="novedad-filters">
            <div className="novedad-filters-header">
                <div>
                    <h2>Listado de novedades</h2>
                    <p>Busca y filtra las novedades registradas.</p>
                </div>

                <button
                    type="button"
                    className="novedad-filters-clear"
                    onClick={onClear}
                >
                    Limpiar filtros
                </button>
            </div>

            <div className="novedad-filters-controls">
                <div className="novedad-filter-search">
                    <label htmlFor="novedad-search">
                        Buscar novedad
                    </label>

                    <input
                        id="novedad-search"
                        type="search"
                        placeholder="Buscar por descripción o ambiente..."
                        value={filters.search}
                        onChange={(event) =>
                            onFilterChange("search", event.target.value)
                        }
                    />
                </div>

                <div className="novedad-filter-field">
                    <label htmlFor="novedad-estado">Estado</label>

                    <select
                        id="novedad-estado"
                        value={filters.estado}
                        onChange={(event) =>
                            onFilterChange("estado", event.target.value)
                        }
                    >
                        <option value="">Todos los estados</option>
                        <option value="Pendiente">Pendiente</option>
                        <option value="En proceso">En proceso</option>
                        <option value="Cerrada">Cerrada</option>
                    </select>
                </div>

                <div className="novedad-filter-field">
                    <label htmlFor="novedad-tipo">Tipo de novedad</label>

                    <select
                        id="novedad-tipo"
                        value={filters.tipo}
                        onChange={(event) =>
                            onFilterChange("tipo", event.target.value)
                        }
                    >
                        <option value="">Todos los tipos</option>
                        <option value="Mantenimiento">Mantenimiento</option>
                        <option value="Infraestructura">Infraestructura</option>
                        <option value="Equipamiento">Equipamiento</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                <div className="novedad-filter-field">
                    <label htmlFor="novedad-ambiente">Ambiente</label>

                    <select
                        id="novedad-ambiente"
                        value={filters.ambiente}
                        onChange={(event) =>
                            onFilterChange("ambiente", event.target.value)
                        }
                    >
                        <option value="">Todos los ambientes</option>
                        <option value="Ambiente 101">Ambiente 101</option>
                        <option value="Ambiente 102">Ambiente 102</option>
                        <option value="Ambiente 103">Ambiente 103</option>
                        <option value="Ambiente 104">Ambiente 104</option>
                    </select>
                </div>
            </div>
        </section>
    );
}

export default NovedadFilters;