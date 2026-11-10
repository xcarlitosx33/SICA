
import "./ProgramacionToolbar.css";

import Button from "../../Button/Button";

function ProgramacionToolbar({
    vistaActiva,
    onCambiarVista,
    onNuevaProgramacion
}) {

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

            <div className="programacion-toolbar-main">

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
                                className={`programacion-view-button ${vistaActiva === vista.id ? "active" : ""
                                    }`}
                                aria-pressed={vistaActiva === vista.id}
                                onClick={() => onCambiarVista(vista.id)}
                            >
                                {vista.nombre}
                            </button>
                        ))}

                    </div>

                </div>

            </div>

            <div className="programacion-toolbar-actions">

                <Button
                    variant="secondary"
                    className="btn-nueva-programacion"
                    onClick={onNuevaProgramacion}
                >
                    <span>+</span>
                    Nueva programación
                </Button>

            </div>

        </section>
    );
}

export default ProgramacionToolbar;
