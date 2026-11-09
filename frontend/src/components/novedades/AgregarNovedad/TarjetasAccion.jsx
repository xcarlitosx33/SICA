const TarjetasAccion = () => {

  return (
    <section className="sica-actions-section">

      <div className="sica-actions-heading">
        <div>
          <h2>Gestión del reporte</h2>
          <p>Adjunte evidencias y gestione la radicación de la novedad.</p>
        </div>
      </div>

      <div className="sica-cards-grid">

        {/* Evidencia fotográfica */}
        <div className="sica-card-box">

          <div className="card-box-header">
            <h3>Foto del elemento</h3>
            <span className="badge-count">Adjunto 1/1</span>
          </div>

          <p className="card-box-desc">
            Registre una fotografía que permita identificar
            el estado actual del elemento reportado.
          </p>

          <div className="evidence-preview-container">

            <div className="mock-image-thumb">
              <span>IMG</span>
            </div>

            <div className="evidence-info">
              <strong>evidencia_teclado.jpg</strong>
              <span>1.8 MB • JPG</span>
            </div>

          </div>

          <button
            className="sica-btn-secondary"
            type="button"
          >
            <span>＋</span> Cambiar evidencia
          </button>

        </div>

        {/* Documento PDF */}
        <div className="sica-card-box">

          <div className="card-box-header">
            <h3>Exportar documento</h3>
            <span className="badge-pdf">PDF S.I.C.A.</span>
          </div>

          <p className="card-box-desc">
            Generación del documento de soporte para
            formalizar el registro de la novedad.
          </p>

          <div className="pdf-mock-card">

            <div className="pdf-icon">PDF</div>

            <div>
              <strong>Acta_Novedad.pdf</strong>
              <small>Formato F-GD-04</small>
              <div className="pdf-status">
                <span></span> Listo para exportar
              </div>
            </div>

          </div>

          <div className="pdf-actions">

            <button
              className="sica-btn-text"
              type="button"
            >
              Previsualizar
            </button>

            <button
              className="sica-btn-text"
              type="button"
            >
              Descargar
            </button>

          </div>

        </div>

        {/* Radicación */}
        <div className="sica-card-box">

          <div className="card-box-header">
            <h3>Radicación oficial</h3>
            <span className="badge-pending">Pendiente</span>
          </div>

          <p className="card-box-desc">
            Revise la información registrada antes de
            realizar el envío de la novedad.
          </p>

          <div className="radicacion-meta">

            <span>
              <strong>Responsable:</strong> Instructor
            </span>

            <span>
              <strong>Estado:</strong> Pendiente de envío
            </span>

          </div>

          <button
            className="sica-btn-primary"
            type="button"
          >
            Aceptar y enviar →
          </button>

        </div>

      </div>

    </section>
  );
};

export default TarjetasAccion;