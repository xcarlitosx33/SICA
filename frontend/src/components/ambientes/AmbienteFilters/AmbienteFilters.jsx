
import "./AmbienteFilters.css";

function AmbienteFilters() {
    return (
        <section className="ambiente-filters">
            <div className="filter-group">
                <label htmlFor="buscar-ambiente">
                    Buscar ambiente
                </label>

                <input
                    id="buscar-ambiente"
                    type="text"
                    placeholder="Número del ambiente"
                />
            </div>

            <div className="filter-group">
                <label htmlFor="estado-ambiente">
                    Estado
                </label>

                <select id="estado-ambiente" defaultValue="">
                    <option value="">Todos</option>
                    <option value="disponible">Disponible</option>
                    <option value="mantenimiento">En mantenimiento</option>
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="sede-ambiente">
                    Sede
                </label>

                <select id="sede-ambiente" defaultValue="">
                    <option value="">Todas</option>
                    <option value="principal">Sede Ciudad Verde</option>
                    <option value="sibate">Sede Sibaté</option>
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="piso-ambiente">
                    Piso
                </label>

                <select id="piso-ambiente" defaultValue="">
                    <option value="">Todos los pisos</option>
                    <option value="1">Piso 1</option>
                    <option value="2">Piso 2</option>
                    <option value="3">Piso 3</option>
                    <option value="4">Piso 4</option>
                </select>
            </div>

            <button type="button" className="clear-filters-button">
                Limpiar filtros
            </button>
        </section>
    );
}

export default AmbienteFilters;
