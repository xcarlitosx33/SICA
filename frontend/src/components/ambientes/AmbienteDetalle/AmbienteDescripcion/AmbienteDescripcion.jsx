import "./AmbienteDescripcion.css";

function AmbienteDescripcion({ ambiente }) {
    const descripcion =
        ambiente.descripcion ||
        "Ambiente destinado al desarrollo de actividades de formación, prácticas y trabajo académico relacionadas con el área de formación.";

    return (
        <section className="ambiente-descripcion">
            <div className="ambiente-descripcion-header">
                <h3>Descripción</h3>
            </div>

            <div className="ambiente-descripcion-card">
                <p>{descripcion}</p>
            </div>
        </section>
    );
}

export default AmbienteDescripcion;