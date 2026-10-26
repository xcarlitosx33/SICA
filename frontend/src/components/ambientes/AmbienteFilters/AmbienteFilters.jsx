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
                    placeholder="Numero del ambiente"
                />
            </div>

            <div className="filter-group">
                <label htmlFor="estado-ambiente">
                    Estado
                </label>

                <select id="estado-ambiente">
                    <option value="">Todos</option>
                    <option value="disponible">Disponible</option>
                    <option value="mantenimiento">En mantenimiento</option>
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="sede-ambiente">
                    Sede
                </label>

                <select id="sede-ambiente">
                    <option value="">Todas</option>
                    <option value="principal">Sede Cdad. verde</option>
                    <option value="principal">Sede Sibate</option>
                </select>
            </div>

            <button type="button" className="filter-button">
                Buscar
            </button>

        </section>
    );
}

export default AmbienteFilters;