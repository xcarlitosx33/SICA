
import "./ResolucionInformacion.css";

function ResolucionInformacion({
    ficha = "2694582",
    programa = "ADSO - Tecnólogo",
    solicitante = "Carlos Méndez",
    ambienteOrigen = "Ambiente 302",
    ambienteDestino = "Ambiente 405",
    tipoSolicitud = "Cambio de salón urgente",
}) {
    const informacion = [
        {
            etiqueta: "Número de ficha",
            valor: ficha,
        },
        {
            etiqueta: "Programa de formación",
            valor: programa,
        },
        {
            etiqueta: "Instructor solicitante",
            valor: solicitante,
        },
        {
            etiqueta: "Tipo de solicitud",
            valor: tipoSolicitud,
        },
        {
            etiqueta: "Ambiente de origen",
            valor: ambienteOrigen,
        },
        {
            etiqueta: "Ambiente de destino",
            valor: ambienteDestino,
        },
    ];

    return (
        <section className="resolucion-informacion">

            <div className="resolucion-informacion-heading">
                <h2>Información de la solicitud</h2>
                <p>
                    Datos registrados al momento de realizar la solicitud.
                </p>
            </div>

            <div className="resolucion-informacion-grid">

                {informacion.map((item, index) => (
                    <div
                        className="resolucion-informacion-item"
                        key={index}
                    >
                        <span>{item.etiqueta}</span>
                        <strong>{item.valor}</strong>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default ResolucionInformacion;
