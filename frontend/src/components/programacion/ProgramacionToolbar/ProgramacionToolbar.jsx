
import "./ProgramacionToolbar.css";

function ProgramacionToolbar({ vistaActiva, onCambiarVista }) {

    const vistas = [
        {
            id: "diaria",
            nombre: "Diaria"
        },
        {
            id: "semanal",
            nombre: "Semanal"
        },
        {
            id: "mensual",
            nombre: "Mensual"
        }
    ];

    return (
        <section className="programacion-toolbar">

            <div className="programacion-toolbar-info">
                <h2>Calendario de programación</h2>
                <p>Selecciona cómo deseas consultar las sesiones.</p>
            </div>

            <div className="programacion-view-selector">

                <span className="programacion-view-label">
                    Vista:
                </span>

                <div className="programacion-view-options">

                    {vistas.map((vista) => (
                        <button
                            key={vista.id}
                            type="button"
                            className={`programacion-view-button ${
                                vistaActiva === vista.id ? "active" : ""
                            }`}
                            aria-pressed={vistaActiva === vista.id}
                            onClick={() => onCambiarVista(vista.id)}
                        >
                            {vista.nombre}
                        </button>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default ProgramacionToolbar;
