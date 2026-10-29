import { useNavigate } from "react-router-dom";
import "./AmbienteCaracteristicas.css";

function AmbienteCaracteristicas({ ambiente }) {
    const navigate = useNavigate();

    const caracteristicas = [
        {
            nombre: "Tablero de vidrio",
            valor: "Sí",
        },
        {
            nombre: "Puestos de trabajo (PC)",
            valor: ambiente.capacidad,
        },
        {
            nombre: "Sillas",
            valor: ambiente.capacidad,
        },
        {
            nombre: "Mesas",
            valor: ambiente.capacidad,
        },
        {
            nombre: "Televisores (TV)",
            valor: "4",
            detalle: "3 fijos · 1 móvil",
        },
    ];

    return (
        <section className="ambiente-caracteristicas">
            <div className="ambiente-section-header">
                <h3>Características del ambiente</h3>
            </div>

            <div className="ambiente-caracteristicas-card">
                {caracteristicas.map((caracteristica) => (
                    <div
                        className="ambiente-caracteristica-item"
                        key={caracteristica.nombre}
                    >
                        <div className="ambiente-caracteristica-content">
                            <span>{caracteristica.nombre}</span>

                            <strong>{caracteristica.valor}</strong>

                            {caracteristica.detalle && (
                                <small>{caracteristica.detalle}</small>
                            )}
                        </div>
                    </div>
                ))}

                <button
                    type="button"
                    className="ambiente-inventario-button"
                    onClick={() =>
                        navigate(`/inventario?ambiente=${ambiente.id}`)
                    }
                >
                    <span>Ver inventario del ambiente</span>

                    <span
                        className="ambiente-inventario-arrow"
                        aria-hidden="true"
                    >
                        →
                    </span>
                </button>
            </div>
        </section>
    );
}

export default AmbienteCaracteristicas;