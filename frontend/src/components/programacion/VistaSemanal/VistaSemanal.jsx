
import "./VistaSemanal.css";
import sesionesProgramacion from "../../../data/programacion";

function VistaSemanal() {
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

            {/* ENCABEZADO */}
            <div className="vista-semanal-header">
                <div>
                    <h3>Programación semanal</h3>
                    <p>
                        Consulta las fichas y ambientes asignados
                        durante cada jornada.
                    </p>
                </div>
            </div>

            {/* TABLA SEMANAL */}
            <div className="vista-semanal-scroll">

                <div className="vista-semanal-grid">

                    {/* CABECERA DE DÍAS */}
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

                    {/* JORNADAS */}
                    {jornadas.map((jornada) => (
                        <div
                            className="vista-semanal-row"
                            key={jornada.id}
                        >

                            {/* COLUMNA DE JORNADA */}
                            <div
                                className={`vista-semanal-shift ${jornada.clase}`}
                            >
                                <strong>{jornada.nombre}</strong>
                                <span>{jornada.horario}</span>
                            </div>

                            {/* DÍAS DE LA SEMANA */}
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

                                                {sesiones.map((sesion) => (
                                                    <article
                                                        className={`vista-semanal-session ${sesion.sector}`}
                                                        key={sesion.id}
                                                    >
                                                        <strong>
                                                            {sesion.ficha}
                                                        </strong>

                                                        <span>
                                                            {sesion.ambiente}
                                                        </span>
                                                    </article>
                                                ))}

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

            {/* PIE */}
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
