
import Sidebar from "../../components/Sidebar/Sidebar";

import InventarioSummary from "../../components/inventario/InventarioSummary/InventarioSummary";
import InventarioTable from "../../components/inventario/InventarioTable/InventarioTable";
import InventarioAudit from "../../components/inventario/InventarioAudit/InventarioAudit";

import "./Inventario.css";

function Inventario() {
  return (
    <div className="inventario-layout">

      {/* MENÚ LATERAL */}
      <Sidebar />

      {/* CONTENIDO PRINCIPAL */}
      <main className="inventario-main">
        <div className="inventario-content">

          {/* ENCABEZADO */}
          <header className="inventario-header">
            <span className="inventario-eyebrow">
              INVENTARIO
            </span>

            <h1>
              Inventario 
            </h1>

            <p>
              Supervisión gerencial, control de costos y auditoría de activos
              en tiempo real.
            </p>
          </header>

          {/* INDICADORES */}
          <InventarioSummary />

          {/* TABLA, BÚSQUEDA Y FILTROS */}
          <InventarioTable />

          {/* OBSERVACIONES Y AUDITORÍA */}
          <InventarioAudit />

        </div>
      </main>

    </div>
  );
}

export default Inventario;
