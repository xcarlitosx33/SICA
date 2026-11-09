
import { useState } from "react";
import "./ProgramacionFilters.css";

function ProgramacionFilters() {

    const [filtros, setFiltros] = useState({
        busqueda: "",
        rama: "Todos",
        programa: "Todos",
        tipo: "Todos"
    });

    const actualizarFiltro = (campo, valor) => {
        setFiltros((prev) => ({
            ...prev,
            [campo]: valor
        }));
    };

    const limpiarFiltros = () => {
        setFiltros({
            busqueda: "",
            rama: "Todos",
            programa: "Todos",
            tipo: "Todos"
        });
    };

    return (
        <section className="programacion-filters">

            {/* BÚSQUEDA */}

            <div className="programacion-filter-group programacion-filter-search">
                <label htmlFor="programacion-busqueda">
                    Buscar
                </label>

                <input
                    id="programacion-busqueda"
                    type="text"
                    placeholder="Buscar ficha, instructor o ambiente..."
                    value={filtros.busqueda}
                    onChange={(e) =>
                        actualizarFiltro("busqueda", e.target.value)
                    }
                />
            </div>

            {/* RAMA O ÁREA */}

            <div className="programacion-filter-group">
                <label htmlFor="programacion-rama">
                    Rama o Área
                </label>

                <select
                    id="programacion-rama"
                    value={filtros.rama}
                    onChange={(e) =>
                        actualizarFiltro("rama", e.target.value)
                    }
                >
                    <option value="Todos">Todas</option>
                    <option value="Industria">Industria</option>
                    <option value="Comercio y Servicios">Comercio y Servicios</option>
                    <option value="TIC">TIC</option>
                    <option value="Agropecuario">Agropecuario</option>
                    <option value="Transversal">Transversal</option>
                </select>
            </div>

            {/* PROGRAMA */}

            <div className="programacion-filter-group">
                <label htmlFor="programacion-programa">
                    Programa
                </label>

                <select
                    id="programacion-programa"
                    value={filtros.programa}
                    onChange={(e) =>
                        actualizarFiltro("programa", e.target.value)
                    }
                >
                    <option value="Todos">Todos</option>
                    <option value="ADSO">ADSO</option>
                    <option value="Producción Multimedia">Producción Multimedia</option>
                    <option value="Automatización Industrial">Automatización Industrial</option>
                    <option value="Logística">Logística</option>
                    <option value="Procesamiento de Alimentos">Procesamiento de Alimentos</option>
                </select>
            </div>

            {/* TIPO DE FORMACIÓN */}

            <div className="programacion-filter-group">
                <label htmlFor="programacion-tipo">
                    Tipo de formación
                </label>

                <select
                    id="programacion-tipo"
                    value={filtros.tipo}
                    onChange={(e) =>
                        actualizarFiltro("tipo", e.target.value)
                    }
                >
                    <option value="Todos">Todos</option>
                    <option value="Tecnológica">Tecnica</option>
                    <option value="Transversal">Tecnológica</option>
                    <option value="Transversal">Transversal</option>
                </select>
            </div>

            {/* LIMPIAR FILTROS */}

            <div className="programacion-filter-actions">
                <button
                    type="button"
                    onClick={limpiarFiltros}
                >
                    Limpiar filtros
                </button>
            </div>

        </section>
    );
}

export default ProgramacionFilters;
