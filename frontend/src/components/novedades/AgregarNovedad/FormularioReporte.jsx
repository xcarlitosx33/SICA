const FormularioReporte = ({ formData, setFormData }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="sica-report-section">

      <div className="sica-section-badge">
        <div>
          <h2>Información del reporte</h2>
          <p>Registro de novedades del inventario institucional</p>
        </div>

        <span className="system-date">
          <span className="date-dot"></span>
          Fecha del sistema: 28 FEB 2026 - 08:44 AM
        </span>
      </div>

      <div className="sica-section-intro">
        Complete los siguientes campos para registrar una novedad
        relacionada con un elemento del inventario de un ambiente
        de formación.
      </div>

      <div className="sica-form-fields">

        <div className="sica-grid-row">

          <div className="sica-input-group">
            <label>Fecha del reporte</label>
            <input
              type="text"
              value={formData.fecha}
              readOnly
            />
          </div>

          <div className="sica-input-group">
            <label>Hora del reporte</label>
            <input
              type="text"
              value={formData.hora}
              readOnly
            />
          </div>

          <div className="sica-input-group">
            <label>Número de placa / Código</label>
            <input
              type="text"
              value={formData.placa}
              readOnly
            />
          </div>

          <div className="sica-input-group">
            <label>Categoría</label>
            <select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
            >
              <option value="TECNOLOGÍA">Tecnología</option>
              <option value="INFRAESTRUCTURA">Infraestructura</option>
              <option value="MOBILIARIO">Mobiliario</option>
            </select>
          </div>

        </div>

        <div className="sica-grid-row trio">

          <div className="sica-input-group">
            <label>Nombre del elemento</label>
            <input
              type="text"
              name="nombreElemento"
              value={formData.nombreElemento}
              onChange={handleChange}
            />
          </div>

          <div className="sica-input-group">
            <label>Número de ambiente</label>
            <input
              type="text"
              name="ambiente"
              value={formData.ambiente}
              onChange={handleChange}
            />
          </div>

          <div className="sica-input-group span-2">
            <label>Nombre del centro</label>
            <input
              type="text"
              value={formData.centro}
              readOnly
            />
          </div>

        </div>

        <div className="sica-grid-row duo-small">

          <div className="sica-input-group">
            <label>Sede</label>
            <input
              type="text"
              value={formData.sede}
              readOnly
            />
          </div>

          <div className="sica-input-group">
            <label>Piso</label>
            <input
              type="text"
              value={formData.piso}
              readOnly
            />
          </div>

        </div>

        <div className="sica-input-group full-width">

          <div className="sica-label-row">
            <label>Descripción detallada del daño o condición</label>
            <span className="optional-label">Máximo 500 caracteres</span>
          </div>

          <textarea
            name="descripcion"
            rows="5"
            value={formData.descripcion}
            maxLength="500"
            onChange={handleChange}
            placeholder="Describa detalladamente la novedad encontrada..."
          />

          <div className="char-counter">
            {formData.descripcion.length} / 500 caracteres
          </div>

        </div>

      </div>

      <div className="helper-note">
        <span className="helper-icon">i</span>
        <p>
          Especifique las condiciones del elemento y si requiere
          reparación, mantenimiento o baja patrimonial.
        </p>
      </div>

    </section>
  );
};

export default FormularioReporte;