

import "./PanelProgramacion.css";

function PanelProgramacion({
    sesionSeleccionada,
    sesionesDia = [],
    onSeleccionarSesion,
    onVolverLista
}) {

    const dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ];

    const formatoHora = (hora) =>
        `${String(hora).padStart(2, "0")}:00`;

    const nombresJornada = {
        manana: "Mañana",
        tarde: "Tarde",
        noche: "Noche"
    };

    const nombresSector = {
        tic: "TIC",
        industria: "Industria",
        comercio: "Comercio y Servicios",
        agropecuario: "Agropecuario",
        transversal: "Transversal"
    };

    // ESTADO 1: LISTA DE FICHAS DEL DÍA
    if (!sesionSeleccionada && sesionesDia.length > 0) {
        return (
            <section className="panel-programacion">

                <div className="panel-programacion-header">
                    <div>
                        <span className="panel-programacion-eyebrow">
                            PROGRAMACIÓN DEL DÍA
                        </span>

                        <h3>
                            {dias[sesionesDia[0].diaSemana]}
                        </h3>

                        <p>
                            Selecciona una ficha para consultar su información.
                        </p>
                    </div>

                    <span className="panel-programacion-sector">
                        {sesionesDia.length} sesiones
                    </span>
                </div>

                <div className="panel-programacion-list">

                    {sesionesDia.map((sesion) => (
                        <button
                            type="button"
                            className="panel-programacion-list-item"
                            key={sesion.id}
                            onClick={() => onSeleccionarSesion(sesion)}
                        >
                            <div>
                                <strong>Ficha {sesion.numeroFicha}</strong>
                                <span>{sesion.programa}</span>
                                <small>
                                    {nombresJornada[sesion.jornada]} · {sesion.ambiente}
                                </small>
                            </div>

                            <span className="panel-programacion-list-arrow">
                                 ➔
                            </span>
                        </button>
                    ))}

                </div>

            </section>
        );
    }

    // ESTADO 2: SIN SELECCIÓN
    if (!sesionSeleccionada) {
        return (
            <section className="panel-programacion">
                <div className="panel-programacion-empty">
                    <h3>Detalle de programación</h3>
                    <p>
                        Selecciona una ficha del calendario para consultar
                        toda su información.
                    </p>
                </div>
            </section>
        );
    }

    // ESTADO 3: DETALLE DE LA FICHA
    const sesion = sesionSeleccionada;

    return (
        <section className="panel-programacion">

            {sesionesDia.length > 0 && (
                <button
                    type="button"
                    className="panel-programacion-back"
                    onClick={onVolverLista}
                >
                    ← Volver a las fichas del día
                </button>
            )}

            <div className="panel-programacion-header">
                <div>
                    <span className="panel-programacion-eyebrow">
                        DETALLE DE LA SESIÓN
                    </span>

                    <h3>Ficha {sesion.numeroFicha}</h3>

                    <p>{sesion.programa}</p>
                </div>

                <span className={`panel-programacion-sector ${sesion.sector}`}>
                    {nombresSector[sesion.sector] || sesion.sector}
                </span>
            </div>

            <div className="panel-programacion-grid">

                <article className="panel-programacion-card">
                    <h4>Información de la ficha</h4>

                    <div className="panel-programacion-field">
                        <span>Código de ficha</span>
                        <strong>{sesion.ficha}</strong>
                    </div>

                    <div className="panel-programacion-field">
                        <span>Número de ficha</span>
                        <strong>{sesion.numeroFicha}</strong>
                    </div>

                    <div className="panel-programacion-field">
                        <span>Programa de formación</span>
                        <strong>{sesion.programa}</strong>
                    </div>

                    <div className="panel-programacion-field">
                        <span>Tipo de formación</span>
                        <strong>
                            {sesion.tipo === "tecnologica"
                                ? "Tecnológica"
                                : "Transversal"}
                        </strong>
                    </div>
                </article>

                <article className="panel-programacion-card">
                    <h4>Responsables</h4>

                    <div className="panel-programacion-field">
                        <span>Instructor</span>
                        <strong>{sesion.instructor}</strong>
                    </div>

                    <div className="panel-programacion-field">
                        <span>Facilitador de grupo</span>
                        <strong>{sesion.facilitador}</strong>
                    </div>
                </article>

                <article className="panel-programacion-card">
                    <h4>Programación</h4>

                    <div className="panel-programacion-field">
                        <span>Día de la semana</span>
                        <strong>{dias[sesion.diaSemana]}</strong>
                    </div>

                    <div className="panel-programacion-field">
                        <span>Jornada</span>
                        <strong>
                            {nombresJornada[sesion.jornada] || sesion.jornada}
                        </strong>
                    </div>

                    <div className="panel-programacion-field">
                        <span>Horario</span>
                        <strong>
                            {formatoHora(sesion.inicio)} - {formatoHora(sesion.fin)}
                        </strong>
                    </div>

                    <div className="panel-programacion-field">
                        <span>Ambiente asignado</span>
                        <strong>{sesion.ambiente}</strong>
                    </div>
                </article>

                <article className="panel-programacion-card panel-programacion-card-wide">
                    <h4>Competencia</h4>
                    <p>{sesion.competencia}</p>
                </article>

                <article className="panel-programacion-card panel-programacion-card-wide">
                    <h4>Resultado de aprendizaje (RAP)</h4>
                    <p>{sesion.rap}</p>
                </article>

            </div>

        </section>
    );
}

export default PanelProgramacion;
