
import { useState } from "react";
import "./InventarioAudit.css";

function InventarioAudit() {
  const [observacion, setObservacion] = useState("");
  const [observaciones, setObservaciones] = useState([]);

  const registrarObservacion = (e) => {
    e.preventDefault();

    const texto = observacion.trim();

    if (!texto) {
      return;
    }

    setObservaciones((actuales) => [
      ...actuales,
      {
        id: Date.now(),
        texto,
        fecha: new Date().toLocaleString("es-CO"),
      },
    ]);

    setObservacion("");
  };

  return (
    <section className="inventario-audit-card">
      <div className="inventario-audit-heading">
        <div>
          <h2>PANEL DE OBSERVACIONES Y AUDITORÍA DE DIRECCIÓN</h2>
          <p>
            Espacio para observaciones de baja de activos y auditorías
            de inventario.
          </p>
        </div>

        <span className="inventario-signature-status">
          • Firma electrónica por integrar
        </span>
      </div>

      <div className="inventario-audit-grid">

        {/* NOTAS Y DOCUMENTOS */}
        <div className="inventario-notes">
          <h3>NOTAS Y DOCUMENTOS</h3>

          <article className="inventario-note">
            <div>
              <strong>Registro de ejemplo</strong>
              <p>
                Aquí se mostrarán las observaciones registradas
                cuando exista conexión con el backend.
              </p>
            </div>

            <span>DEMOSTRACIÓN</span>
          </article>

          <article className="inventario-note">
            <div>
              <strong>Historial de auditoría</strong>
              <p>
                Los dictámenes y las fechas reales se cargarán
                desde el sistema.
              </p>
            </div>

            <span>POR INTEGRAR</span>
          </article>

          {observaciones.map((item) => (
            <article className="inventario-note" key={item.id}>
              <div>
                <strong>Nueva observación</strong>
                <p>{item.texto}</p>
                <small>{item.fecha}</small>
              </div>

              <span>LOCAL</span>
            </article>
          ))}
        </div>

        {/* NUEVA OBSERVACIÓN */}
        <form
          className="inventario-directive"
          onSubmit={registrarObservacion}
        >
          <h3>NUEVA OBSERVACIÓN O DIRECTRIZ</h3>

          <textarea
            placeholder="Escribe una observación para revisión..."
            value={observacion}
            onChange={(e) => setObservacion(e.target.value)}
            maxLength={1000}
          />

          <div className="inventario-directive-footer">
            <span>
              El registro definitivo requiere conexión al servidor.
            </span>

            <button
              type="submit"
              className="inventario-button inventario-button-primary"
              disabled={!observacion.trim()}
            >
              Registrar observación
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}

export default InventarioAudit;
