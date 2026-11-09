const FormularioMovimiento = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="sica-report-section">
      <div className="sica-section-badge">
        <div>
          <h2>Información del movimiento</h2>
          <p>Registro de traslado o reasignación de elementos del inventario</p>
        </div>
        <span className="system-date">
          <span className="date-dot"></span>
          Fecha del sistema: 28 FEB 2026 - 08:44 AM
        </span>
      </div>

      <div className="sica-section-intro">
        Complete los siguientes campos para registrar formalmente el traslado de un elemento entre ambientes o áreas del centro.
      </div>

      <div className="sica-form-fields">
        <div className="sica-grid-row">
          <div className="sica-input-group">
            <label>Fecha del movimiento</label>
            <input type="text" value={formData.fecha} readOnly />
          </div>
          <div className="sica-input-group">
            <label>Hora</label>
            <input type="text" value={formData.hora} readOnly />
          </div>
          <div className="sica-input-group">
            <label>Número de placa / Código</label>
            <input type="text" value={formData.placa} readOnly />
          </div>
          <div className="sica-input-group">
            <label>Categoría</label>
            <select name="categoria" value={formData.categoria} onChange={handleChange}>
              <option value="TECNOLOGÍA">Tecnología</option>
              <option value="INFRAESTRUCTURA">Infraestructura</option>
              <option value="MOBILIARIO">Mobiliario</option>
            </select>
          </div>
        </div>

        <div className="sica-grid-row trio">
          <div className="sica-input-group">
            <label>Nombre del elemento</label>
            <input type="text" name="nombreElemento" value={formData.nombreElemento} onChange={handleChange} />
          </div>
          <div className="sica-input-group">
            <label>Ambiente Origen</label>
            <input type="text" name="ambienteOrigen" value={formData.ambienteOrigen} onChange={handleChange} />
          </div>
          <div className="sica-input-group span-2">
            <label>Ambiente Destino</label>
            <input type="text" name="ambienteDestino" value={formData.ambienteDestino} onChange={handleChange} />
          </div>
        </div>

        <div className="sica-input-group full-width">
          <div className="sica-label-row">
            <label>Motivo del movimiento y observaciones</label>
            <span className="optional-label">Máximo 500 caracteres</span>
          </div>
          <textarea
            name="descripcion"
            rows="5"
            value={formData.descripcion}
            maxLength="500"
            onChange={handleChange}
            placeholder="Describa el motivo por el cual se realiza este traslado..."
          />
          <div className="char-counter">{formData.descripcion.length} / 500 caracteres</div>
        </div>
      </div>

      <div className="helper-note">
        <span className="helper-icon">i</span>
        <p>Verifique que el ambiente destino cuenta con la capacidad espacial y de red (si aplica) para recibir este elemento.</p>
      </div>
    </section>
  );
};

export default FormularioMovimiento;