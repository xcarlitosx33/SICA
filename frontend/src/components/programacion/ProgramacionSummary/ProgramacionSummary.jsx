
import "./ProgramacionSummary.css";

function ProgramacionSummary() {

    const resumen = [
        {
            id: 1,
            titulo: "GRUPOS PROGRAMADOS",
            valor: "148",
            descripcion: "Fichas con programación registrada",
            indicador: "Total del periodo",
            tipo: "grupos"
        },
        {
            id: 2,
            titulo: "OCUPACIÓN DE AMBIENTES",
            valor: "78%",
            descripcion: "Utilización de ambientes disponibles",
            indicador: "Ocupación general",
            tipo: "ocupacion"
        },
        {
            id: 3,
            titulo: "CONFLICTOS DE PROGRAMACIÓN",
            valor: "04",
            descripcion: "Sesiones que requieren revisión",
            indicador: "Requieren atención",
            tipo: "conflictos"
        }
    ];

    return (
        <section className="programacion-summary">

            {resumen.map((item) => (
                <article
                    className={`programacion-summary-card ${item.tipo}`}
                    key={item.id}
                >

                    <div className="programacion-summary-header">
                        <span className="programacion-summary-title">
                            {item.titulo}
                        </span>

                        <span className={`programacion-summary-indicator ${item.tipo}`}>
                        </span>
                    </div>

                    <div className="programacion-summary-value">
                        {item.valor}
                    </div>

                    <div className="programacion-summary-footer">
                        <span className={`programacion-summary-tag ${item.tipo}`}>
                            {item.indicador}
                        </span>

                        <span className="programacion-summary-description">
                            {item.descripcion}
                        </span>
                    </div>

                </article>
            ))}

        </section>
    );
}

export default ProgramacionSummary;
