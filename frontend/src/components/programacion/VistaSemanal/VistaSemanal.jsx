
import "./VistaSemanal.css";
import sesionesProgramacion from "../../../data/programacion";

function VistaSemanal({ sesionSeleccionada, onSeleccionarSesion }) {

    const dias = [
        { numero: 1, nombre: "Lunes" },
        { numero: 2, nombre: "Martes" },
        { numero: 3, nombre: "Miércoles" },
        { numero: 4, nombre: "Jueves" },
        { numero: 5, nombre: "Viernes" },
        { numero: 6, nombre: "Sábado" },
        { numero: 0, nombre: "Domingo" }
    ];

    const jornadas = [
        {
            id: "manana",
            nombre: "Mañana",
            horario: "06:00 - 12:00",
            clase: "manana"
        },
        {
            id: "tarde",
            nombre: "Tarde",
            horario: "12:00 - 18:00",
            clase: "tarde"
        },
        {
            id: "noche",
            nombre: "Noche",
            horario: "18:00 - 22:00",
            clase: "noche"
        }
    ];

    const obtenerSesiones = (dia, jornada) => {
        return sesionesProgramacion
            .filter(
                (sesion) =>
                    sesion.diaSemana === dia &&
                    sesion.jornada === jornada
            )
            .sort((a, b) => a.columna - b.columna);
    };

    return (
        <section className="vista-semanal">

            <div className="vista-semanal-header">
                <div>
                    <h3>Programación semanal</h3>
                    <p>
                        Consulta las fichas y ambientes asignados
                        durante cada jornada.
                    </p>
                </div>
            </div>

            <div className="vista-semanal-scroll">

                <div className="vista-semanal-grid">

                    <div className="vista-semanal-corner">
                        Jornada
                    </div>

                    {dias.map((dia) => (
                        <div
                            className="vista-semanal-day-header"
                            key={dia.numero}
                        >
                            {dia.nombre}
                        </div>
                    ))}

                    {jornadas.map((jornada) => (
                        <div
                            className="vista-semanal-row"
                            key={jornada.id}
                        >

                            <div
                                className={`vista-semanal-shift ${jornada.clase}`}
                            >
                                <strong>{jornada.nombre}</strong>
                                <span>{jornada.horario}</span>
                            </div>

                            {dias.map((dia) => {
                                const sesiones = obtenerSesiones(
                                    dia.numero,
                                    jornada.id
                                );

                                return (
                                    <div
                                        className={`vista-semanal-cell ${jornada.clase}`}
                                        key={`${dia.numero}-${jornada.id}`}
                                    >
                                        {sesiones.length > 0 ? (
                                            <div className="vista-semanal-sessions">

                                                {sesiones.map((sesion) => {
                                                    const seleccionada =
                                                        sesionSeleccionada?.id === sesion.id;

                                                    return (
                                                        <article
                                                            className={`vista-semanal-session ${sesion.sector} ${
                                                                seleccionada ? "selected" : ""
                                                            }`}
                                                            key={sesion.id}
                                                            role="button"
                                                            tabIndex={0}
                                                            aria-pressed={seleccionada}
                                                            onClick={() => onSeleccionarSesion(sesion)}
                                                            onKeyDown={(event) => {
                                                                if (
                                                                    event.key === "Enter" ||
                                                                    event.key === " "
                                                                ) {
                                                                    event.preventDefault();
                                                                    onSeleccionarSesion(sesion);
                                                                }
                                                            }}
                                                        >
                                                            <strong>
                                                                {sesion.ficha}
                                                            </strong>

                                                            <span>
                                                                {sesion.ambiente}
                                                            </span>
                                                        </article>
                                                    );
                                                })}

                                            </div>
                                        ) : (
                                            <div className="vista-semanal-empty">
                                                Sin programación
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            <div className="vista-semanal-footer">
                <span>
                    Las sesiones se organizan según el día y la jornada
                    asignada a cada ficha.
                </span>
            </div>

        </section>
    );
}

export default VistaSemanal;

