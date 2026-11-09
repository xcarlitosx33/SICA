import Button from "../../Button/Button";
import "./InventarioFilters.css";

function InventarioFilters({
    busqueda,
    setBusqueda,
    estado,
    setEstado,
    limpiarFiltros,
}) {
    return (
        <section className="inventario-filters">
            <div className="inventario-filter-group">
                <label htmlFor="buscar-inventario">
                    Buscar ambiente
                </label>

                <input
                    id="buscar-inventario"
                    type="text"
                    placeholder="Número del ambiente"
                    value={busqueda}
                    onChange={(event) => setBusqueda(event.target.value)}
                />
            </div>

            <div className="inventario-filter-group">
                <label htmlFor="estado-inventario">
                    Estado del inventario
                </label>

                <select
                    id="estado-inventario"
                    value={estado}
                    onChange={(event) => setEstado(event.target.value)}
                >
                    <option value="">Todos los estados</option>
                    <option value="completo">Completo</option>
                    <option value="revision">En revisión</option>
                    <option value="incompleto">Incompleto</option>
                </select>
            </div>

            <Button
                type="button"
                className="inventario-clear-button"
                onClick={limpiarFiltros}
            >
                Limpiar filtros
            </Button>
        </section>
    );
}

export default InventarioFilters;
