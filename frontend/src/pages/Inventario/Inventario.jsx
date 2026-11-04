import { useMemo, useState } from "react";
import "./Inventario.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const inventarioInicial = [
  { id: 1, ambiente: "101", estado: "Óptimo" },
  { id: 2, ambiente: "204", estado: "Mantenimiento" },
  { id: 3, ambiente: "302", estado: "Óptimo" },
  { id: 4, ambiente: "401", estado: "En baja" },
  { id: 5, ambiente: "201", estado: "Óptimo" },
];

function Inventario() {
  const [bienes, setBienes] = useState(inventarioInicial);
  const [busqueda, setBusqueda] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("Todos");
  const [pagina, setPagina] = useState(1);
  const [mensaje, setMensaje] = useState("");

  const bienesFiltrados = useMemo(() => {
    return bienes.filter((bien) => {
      const texto = busqueda.toLowerCase();

      const coincideBusqueda = bien.ambiente.toLowerCase().includes(texto);

      const coincideEstado =
        filtroEstado === "Todos" || bien.estado === filtroEstado;

      return coincideBusqueda && coincideEstado;
    });
  }, [bienes, busqueda, filtroEstado]);

  const totalPaginas = Math.max(1, Math.ceil(bienesFiltrados.length / 5));
  const bienesPagina = bienesFiltrados.slice((pagina - 1) * 5, pagina * 5);

  const cantidadMantenimiento = bienes.filter(
    (bien) => bien.estado === "Mantenimiento"
  ).length;

  const cantidadBaja = bienes.filter(
    (bien) => bien.estado === "En baja"
  ).length;

  return (
    <div className="inventario-layout">
      <Sidebar />

      <main className="inventario-main">
        <div className="inventario-content">
          <header className="inventario-header">
            <span className="inventario-eyebrow">INVENTARIO</span>
            <h1>Inventario</h1>
            <p>
              Supervisión gerencial, control de costos y auditoría de activos
              en tiempo real.
            </p>
          </header>

          <section className="inventario-kpis">
            <article className="inventario-kpi">
              <div>
                <span className="inventario-kpi-label">
                  EQUIPOS EN MANTENIMIENTO
                </span>
                <strong>{cantidadMantenimiento}</strong>
                <span className="inventario-kpi-note">
                  Bienes que requieren revisión
                </span>
              </div>
              <span className="inventario-kpi-icon mantenimiento-icon">
                ⚒
              </span>
            </article>

            <article className="inventario-kpi">
              <div>
                <span className="inventario-kpi-label">
                  BIENES EN PROCESO DE BAJA
                </span>
                <strong>{cantidadBaja}</strong>
                <span className="inventario-kpi-note">
                  Requieren revisión administrativa
                </span>
              </div>
              <span className="inventario-kpi-icon baja-icon">▤</span>
            </article>
          </section>

          <section className="inventario-toolbar">
            <div className="inventario-toolbar-top">
              <label className="inventario-search">
                <span aria-hidden="true">⌕</span>
                <input
                  type="search"
                  value={busqueda}
                  onChange={(evento) => {
                    setBusqueda(evento.target.value);
                    setPagina(1);
                  }}
                  placeholder="Buscar por número de ambiente..."
                  aria-label="Buscar en el inventario"
                />
              </label>

              <select
                className="inventario-select"
                value={filtroEstado}
                onChange={(evento) => {
                  setFiltroEstado(evento.target.value);
                  setPagina(1);
                }}
                aria-label="Filtrar por estado"
              >
                <option value="Todos">Todos los estados</option>
                <option value="Óptimo">Óptimo</option>
                <option value="Mantenimiento">Mantenimiento</option>
                <option value="En baja">En baja</option>
              </select>
            </div>

            <div className="inventario-toolbar-bottom">
              <span className="inventario-results-count">
                Mostrando {bienesFiltrados.length} de {bienes.length} bienes
                de demostración
              </span>
            </div>
          </section>

          <section className="inventario-table-card">
            <div className="inventario-table-heading">
              <h2>Control</h2>
              <span>DATOS DE DEMOSTRACIÓN</span>
            </div>

            <div className="inventario-table-scroll">
              <table className="inventario-table">
                <thead>
                  <tr>
                    <th>AMBIENTE</th>
                    <th>ESTADO</th>
                    <th>ACCIÓN</th>
                  </tr>
                </thead>

                <tbody>
                  {bienesPagina.map((bien) => (
                    <tr key={bien.id}>
                      <td className="inventario-item-name">
                        <strong>{bien.ambiente}</strong>
                      </td>
                      <td>
                        <span
                          className={`inventario-status status-${bien.estado
                            .toLowerCase()
                            .replace("ó", "o")
                            .replace(" ", "-")}`}
                        >
                          {bien.estado}
                        </span>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="inventario-detail-button"
                          onClick={() =>
                            setMensaje(
                              `Detalle de demostración: Ambiente ${bien.ambiente}.`
                            )
                          }
                        >
                          Ver detalle ›
                        </button>
                      </td>
                    </tr>
                  ))}

                  {bienesPagina.length === 0 && (
                    <tr>
                      <td colSpan="3" className="inventario-empty">
                        No se encontraron ambientes con esos filtros.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="inventario-table-footer">
              <span className="inventario-results-note">
                Registros en esta página: {bienesPagina.length}
              </span>

              <div className="inventario-pagination">
                <span>
                  Página {pagina} de {totalPaginas}
                </span>
                <button
                  type="button"
                  aria-label="Página anterior"
                  disabled={pagina <= 1}
                  onClick={() => setPagina((actual) => actual - 1)}
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Página siguiente"
                  disabled={pagina >= totalPaginas}
                  onClick={() => setPagina((actual) => actual + 1)}
                >
                  ›
                </button>
              </div>
            </div>
          </section>

          {mensaje && (
            <div className="inventario-feedback" role="status">
              <span>{mensaje}</span>
              <button
                type="button"
                onClick={() => setMensaje("")}
                aria-label="Cerrar mensaje"
              >
                ×
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Inventario;