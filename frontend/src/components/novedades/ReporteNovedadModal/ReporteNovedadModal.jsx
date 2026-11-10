
import "./ReporteNovedadModal.css";
import Button from "../../Button/Button";

function ReporteNovedadModal({ novedad, onClose }) {
    if (!novedad) return null;

    return (
        <div
            className="reporte-modal-overlay"
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <section
                className="reporte-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="reporte-modal-title"
            >
                <header className="reporte-modal-header">
                    <div>
                        <span className="reporte-modal-eyebrow">
                            REPORTE DE NOVEDAD
                        </span>

                        <h2 id="reporte-modal-title">
                            {novedad.id}
                        </h2>

                        <p>Información del incidente reportado.</p>
                    </div>

                    <button
                        type="button"
                        className="reporte-modal-close"
                        onClick={onClose}
                        aria-label="Cerrar ventana"
                    >
                        ×
                    </button>
                </header>

                <div className="reporte-modal-body">
                    <div className="reporte-modal-photo">
                        {novedad.foto ? (
                            <img
                                src={novedad.foto}
                                alt={`Daño reportado en ${novedad.ambiente}`}
                            />
                        ) : (
                            <div className="reporte-modal-no-photo">
                                <strong>Sin fotografía disponible</strong>
                                <p>
                                    Este reporte todavía no tiene una imagen adjunta.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="reporte-modal-information">
                        <div className="reporte-modal-field">
                            <span>Elemento afectado</span>
                            <strong>{novedad.elemento}</strong>
                        </div>

                        <div className="reporte-modal-field">
                            <span>Ambiente</span>
                            <strong>{novedad.ambiente}</strong>
                        </div>

                        <div className="reporte-modal-field">
                            <span>Fecha del reporte</span>
                            <strong>{novedad.fecha}</strong>
                        </div>

                        <div className="reporte-modal-field">
                            <span>Tipo de novedad</span>
                            <strong>{novedad.tipo}</strong>
                        </div>

                        <div className="reporte-modal-field">
                            <span>Estado</span>
                            <strong>{novedad.estado}</strong>
                        </div>

                        <div className="reporte-modal-description">
                            <span>Descripción del problema</span>
                            <p>{novedad.descripcion}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ReporteNovedadModal;
