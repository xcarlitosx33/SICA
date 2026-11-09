import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../Button/Button";
import "./ValidacionCard.css";

function ValidacionCard({
    tipo,
    titulo,
    ficha,
    recibido,
    datos,
    motivo,
    descripcion,
}) {
    const navigate = useNavigate();
    const [estado, setEstado] = useState("Pendiente");

    return (
        <article className="validacion-card">
            <div className="validacion-card-header">
                <span className={`validacion-type ${tipo.toLowerCase()}`}>
                    {tipo}
                </span>

                <h3>{titulo}</h3>

                <span className="validacion-ficha">Ficha: {ficha}</span>
                <span className="validacion-recibido">{recibido}</span>
            </div>

            <div className="validacion-card-details">
                {datos.map((dato, index) => (
                    <div className="validacion-detail-item" key={index}>
                        <span>{dato.label}</span>
                        <strong>{dato.valor}</strong>
                    </div>
                ))}
            </div>

            <div className="validacion-justificacion">
                <strong>{motivo}:</strong> {descripcion}
            </div>

            <div className="validacion-card-actions">
                {estado === "Pendiente" ? (
                    <>
                        <Button
                            onClick={() => navigate("/dashboard/coordinacion-academica/historial-resoluciones")}
                        >
                            Revisar historial
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={() => setEstado("Aprobada")}
                        >
                            Aprobar cambio
                        </Button>
                    </>
                ) : (
                    <span className="role-status">
                        Solicitud aprobada en esta demostración
                    </span>
                )}
            </div>
        </article>
    );
}

export default ValidacionCard;
