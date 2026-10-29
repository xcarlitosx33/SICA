import { useNavigate } from "react-router-dom";
import "./AmbienteDetalleHeader.css";

function AmbienteDetalleHeader({ ambiente }) {
    const navigate = useNavigate();

    const estadoTexto =
        ambiente.estado === "disponible"
            ? "Disponible"
            : "Mantenimiento";

    return (
        <section className="ambiente-detalle-header">
            <button
                type="button"
                className="ambiente-back-button"
                onClick={() => navigate("/ambientes")}
            >
                <span aria-hidden="true">←</span>
                Volver a ambientes
            </button>

            <div className="ambiente-detalle-identity">
                <div className="ambiente-detalle-title">
                    <span>Ambiente {ambiente.numero}</span>
                    <h2>{ambiente.nombre}</h2>
                </div>

                <div className="ambiente-detalle-status">
                    <span>Estado</span>

                    <strong className={ambiente.estado}>
                        <span
                            className="status-dot"
                            aria-hidden="true"
                        ></span>
                        {estadoTexto}
                    </strong>
                </div>
            </div>
        </section>
    );
}

export default AmbienteDetalleHeader;