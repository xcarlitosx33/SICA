
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
    return (
        <article className="validacion-card">

            <div className="validacion-card-header">

                <span className={`validacion-type ${tipo.toLowerCase()}`}>
                    {tipo}
                </span>

                <h3>{titulo}</h3>

                <span className="validacion-ficha">
                    Ficha: {ficha}
                </span>

                <span className="validacion-recibido">
                    {recibido}
                </span>

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

                <button
                    type="button"
                    className="validacion-review-button"
                >
                    Revisar detalle
                </button>

                <button
                    type="button"
                    className="validacion-approve-button"
                >
                    ✓ Aprobar cambio
                </button>

            </div>

        </article>
    );
}

export default ValidacionCard;
