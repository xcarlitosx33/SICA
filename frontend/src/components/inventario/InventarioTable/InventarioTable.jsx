
import { useMemo, useState } from "react";
import "./InventarioTable.css";

const bienesIniciales = [
  {
    id: 1,
    nombre: 'Mov. 24" M5',
    placa: "TK-2242-4814",
    categoria: "Cómputo",
    ubicacion: "Lab ICT 1C2",
    estado: "Óptimo",
    cantidad: 15,
    valor: 6500000,
  },
  {
    id: 2,
    nombre: "Videobeam Epson PowerLite",
    placa: "TK-2212-1102",
    categoria: "Audiovisual",
    ubicacion: "Amb. 204",
    estado: "Mantenimiento",
    cantidad: 2,
    valor: 3200000,
  },
  {
    id: 3,
    nombre: "Silla Universitaria Ergonómica",
    placa: "TK-2219-0895",
    categoria: "Mobiliario",
    ubicacion: "Aula Magistral 4",
    estado: "Óptimo",
    cantidad: 60,
    valor: 150000,
  },
  {
    id: 4,
    nombre: "Servidor Blade Dell PowerEdge",
    placa: "TK-2208-B150",
    categoria: "Cómputo / Servidores",
    ubicacion: "Data Center Piso 2",
    estado: "En baja",
    cantidad: 1,
    valor: 18900000,
  },
  {
    id: 5,
    nombre: "Brazo Robótico Educativo KUKA",
    placa: "TK-2231-3217",
    categoria: "Mecatrónica",
    ubicacion: "Taller 201",
    estado: "Óptimo",
    cantidad: 4,
    valor: 24500000,
  },
];

const formatoMoneda = (valor) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(valor);

function InventarioTable() {
  const [bienes] = useState(bienesIniciales);
  const [busqueda, setBusqueda] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("Todos");
  const [filtroAmbiente, setFiltroAmbiente] = useState("Todos");
  const [seleccionados, setSeleccionados] = useState([]);
  const [pagina, setPagina] = useState(1);

  const elementosPorPagina = 5;

  const bienesFiltrados = useMemo(() => {
    return bienes.filter((bien) => {
      const texto = busqueda.toLowerCase();

      const coincideBusqueda =
        bien.nombre.toLowerCase().includes(texto) ||
        bien.placa.toLowerCase().includes(texto) ||
        bien.categoria.toLowerCase().includes(texto) ||
        bien.ubicacion.toLowerCase().includes(texto);

      const coincideEstado =
        filtroEstado === "Todos" || bien.estado === filtroEstado;

      const coincideAmbiente =
        filtroAmbiente === "Todos" ||
        bien.ubicacion === filtroAmbiente;

      return coincideBusqueda && coincideEstado && coincideAmbiente;
    });
  }, [bienes, busqueda, filtroEstado, filtroAmbiente]);

  const totalPaginas = Math.max(
    1,
    Math.ceil(bienesFiltrados.length / elementosPorPagina)
  );

  const bienesPagina = bienesFiltrados.slice(
    (pagina - 1) * elementosPorPagina,
    pagina * elementosPorPagina
  );

  const cambiarBusqueda = (valor) => {
    setBusqueda(valor);
    setPagina(1);
  };

  const cambiarEstado = (estado) => {
    setFiltroEstado(estado);
    setPagina(1);
  };

  const cambiarAmbiente = (ambiente) => {
    setFiltroAmbiente(ambiente);
    setPagina(1);
  };

  const seleccionarBien = (id) => {
    setSeleccionados((actuales) =>
      actuales.includes(id)
        ? actuales.filter((item) => item !== id)
        : [...actuales, id]
    );
  };

  const seleccionarTodos = () => {
    const idsPagina = bienesPagina.map((bien) => bien.id);
    const todosSeleccionados = idsPagina.every((id) =>
      seleccionados.includes(id)
    );

    if (todosSeleccionados) {
      setSeleccionados((actuales) =>
        actuales.filter((id) => !idsPagina.includes(id))
      );
    } else {
      setSeleccionados((actuales) => [
        ...new Set([...actuales, ...idsPagina]),
      ]);
    }
  };

  const exportarCSV = () => {
    const encabezados = [
      "Bien",
      "Placa",
      "Categoría",
      "Ubicación",
      "Estado",
      "Cantidad",
      "Valor unitario",
    ];

    const filas = bienesFiltrados.map((bien) => [
      bien.nombre,
      bien.placa,
      bien.categoria,
      bien.ubicacion,
      bien.estado,
      bien.cantidad,
      bien.valor,
    ]);

    const contenido = [encabezados, ...filas]
      .map((fila) =>
        fila.map((dato) => `"${String(dato).replace(/"/g, '""')}"`).join(";")
      )
      .join("\n");

    const archivo = new Blob(["\uFEFF" + contenido], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(archivo);
    const enlace = document.createElement("a");

    enlace.href = url;
    enlace.download = "inventario-sica.csv";
    enlace.click();

    URL.revokeObjectURL(url);
  };

  const verDetalle = (bien) => {
    window.alert(
      `Detalle del bien:\n${bien.nombre}\nPlaca: ${bien.placa}\nEstado: ${bien.estado}`
    );
  };

  const solicitarMantenimiento = () => {
    window.alert(
      `Se solicitará mantenimiento para ${seleccionados.length} bien(es). Esta es una demostración.`
    );
  };

  const generarActa = () => {
    window.alert(
      `Se generará un acta para ${seleccionados.length} bien(es). Esta es una demostración.`
    );
  };

  const todosPaginaSeleccionados =
    bienesPagina.length > 0 &&
    bienesPagina.every((bien) => seleccionados.includes(bien.id));

  return (
    <section className="inventario-toolbar-section">

      {/* BÚSQUEDA Y FILTROS */}
      <div className="inventario-toolbar">
        <div className="inventario-toolbar-top">
          <label className="inventario-search">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Buscar por placa, bien o ambiente..."
              value={busqueda}
              onChange={(e) => cambiarBusqueda(e.target.value)}
            />
          </label>

          <select
            className="inventario-select"
            value={filtroAmbiente}
            onChange={(e) => cambiarAmbiente(e.target.value)}
          >
            <option value="Todos">Todos los ambientes</option>
            <option value="Lab ICT 1C2">Lab ICT 1C2</option>
            <option value="Amb. 204">Amb. 204</option>
            <option value="Aula Magistral 4">Aula Magistral 4</option>
            <option value="Data Center Piso 2">Data Center Piso 2</option>
            <option value="Taller 201">Taller 201</option>
          </select>

          <button
            className="inventario-button inventario-button-outline"
            onClick={exportarCSV}
          >
            ↓ Exportar informe CSV
          </button>
        </div>

        <div className="inventario-toolbar-bottom">
          <div className="inventario-filter-tabs">
            {["Todos", "Óptimo", "Mantenimiento", "En baja"].map((estado) => (
              <button
                key={estado}
                className={`inventario-filter-tab ${
                  filtroEstado === estado ? "selected" : ""
                }`}
                onClick={() => cambiarEstado(estado)}
              >
                {estado}
              </button>
            ))}
          </div>

          <span className="inventario-results-count">
            Mostrando {bienesFiltrados.length} de {bienes.length} bienes de
            demostración
          </span>
        </div>
      </div>

      {/* TABLA */}
      <div className="inventario-table-card">
        <div className="inventario-table-heading">
          <h2>INVENTARIO</h2>
          <span>DATOS DE DEMOSTRACIÓN</span>
        </div>

        <div className="inventario-table-scroll">
          <table className="inventario-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={todosPaginaSeleccionados}
                    onChange={seleccionarTodos}
                    aria-label="Seleccionar todos los bienes de esta página"
                  />
                </th>
                <th>BIEN / PLACA</th>
                <th>CATEGORÍA</th>
                <th>UBICACIÓN</th>
                <th>ESTADO</th>
                <th>CANT.</th>
                <th>V. UNITARIO</th>
                <th>ACCIÓN</th>
              </tr>
            </thead>

            <tbody>
              {bienesPagina.length > 0 ? (
                bienesPagina.map((bien) => (
                  <tr key={bien.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={seleccionados.includes(bien.id)}
                        onChange={() => seleccionarBien(bien.id)}
                        aria-label={`Seleccionar ${bien.nombre}`}
                      />
                    </td>

                    <td className="inventario-item-name">
                      <strong>{bien.nombre}</strong>
                      <span>{bien.placa}</span>
                    </td>

                    <td>{bien.categoria}</td>
                    <td>{bien.ubicacion}</td>

                    <td>
                      <span
                        className={`inventario-status ${
                          bien.estado === "Óptimo"
                            ? "status-optimo"
                            : bien.estado === "Mantenimiento"
                            ? "status-mantenimiento"
                            : "status-en-baja"
                        }`}
                      >
                        {bien.estado}
                      </span>
                    </td>

                    <td>{bien.cantidad}</td>
                    <td>{formatoMoneda(bien.valor)}</td>

                    <td>
                      <button
                        className="inventario-detail-button"
                        onClick={() => verDetalle(bien)}
                      >
                        Ver detalle
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="inventario-empty">
                    No se encontraron bienes con esos filtros.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PIE DE TABLA */}
        <div className="inventario-table-footer">
          <div className="inventario-selection-actions">
            <span>{seleccionados.length} activos seleccionados</span>

            <button
              disabled={seleccionados.length === 0}
              onClick={generarActa}
            >
              Generar acta
            </button>

            <button
              disabled={seleccionados.length === 0}
              onClick={solicitarMantenimiento}
            >
              Solicitar mantenimiento
            </button>
          </div>

          <div className="inventario-pagination">
            <span>
              Página {pagina} de {totalPaginas}
            </span>

            <button
              disabled={pagina === 1}
              onClick={() => setPagina((actual) => actual - 1)}
              aria-label="Página anterior"
            >
              ‹
            </button>

            <button
              disabled={pagina === totalPaginas}
              onClick={() => setPagina((actual) => actual + 1)}
              aria-label="Página siguiente"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InventarioTable;
