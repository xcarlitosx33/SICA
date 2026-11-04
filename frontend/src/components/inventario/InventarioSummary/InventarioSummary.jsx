
import "./InventarioSummary.css";

function InventarioSummary() {
  return (
    <section className="inventario-summary">
      <article className="inventario-summary-card">
        <div>
          <span className="inventario-summary-label">
            EQUIPOS EN MANTENIMIENTO
          </span>

          <strong className="inventario-summary-number">1</strong>

          <p>Bienes que requieren revisión</p>
        </div>

        <span className="inventario-summary-icon maintenance">
          ✖
        </span>
      </article>

      <article className="inventario-summary-card">
        <div>
          <span className="inventario-summary-label">
            BIENES EN PROCESO DE BAJA
          </span>

          <strong className="inventario-summary-number">1</strong>

          <p>Requieren revisión administrativa</p>
        </div>

        <span className="inventario-summary-icon baja">
          ▤
        </span>
      </article>
    </section>
  );
}

export default InventarioSummary;
