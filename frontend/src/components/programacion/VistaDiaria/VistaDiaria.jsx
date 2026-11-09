
import { useState } from "react";
import "./VistaDiaria.css";
import sesionesProgramacion from "../../../data/programacion";

function VistaDiaria({
    sesionSeleccionada,
    onSeleccionarSesion
}) {
    const [fechaSeleccionada, setFechaSeleccionada] = useState(
        new Date(2026, 10, 4)
    );

    const horas = Array.from(
        { length: 17 },
        (_, index) => index + 6
    );

    const alturaHora = 64;
    const anchoColumna = 220;

    const nombreDia = new Intl.DateTimeFormat("es-CO", {
        weekday: "long"
    }).format(fechaSeleccionada);

    const fechaCompleta = new Intl.DateTimeFormat("es-CO", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(fechaSeleccionada);

    // Navegación entre días
    const cambiarDia = (cantidad) => {
        setFechaSeleccionada((fechaActual) => {
            const nuevaFecha = new Date(fechaActual);

            nuevaFecha.setDate(
                nuevaFecha.getDate() + cantidad
            );

            return nuevaFecha;
        });
    };

    // Obtener el día de la semana:
    // Domingo = 0, Lunes = 1 ... Sábado = 6
    const diaSemana = fechaSeleccionada.getDay();

    // Obtener las sesiones que corresponden al día seleccionado
    const sesionesDelDia = sesionesProgramacion.filter(
        (sesion) => sesion.diaSemana === diaSemana
    );

    // Ordenar las sesiones por hora y columna
    const sesionesOrdenadas = [...sesionesDelDia].sort(
        (a, b) => {
            if (a.inicio !== b.inicio) {
                return a.inicio - b.inicio;
            }

            return a.columna - b.columna;
        }
    );

    return (
        <section className="vista-diaria">

            {/* ENCABEZADO Y NAVEGACIÓN */}
            <div className="vista-diaria-header">

                <button
                    type="button"
                    className="vista-diaria-navigation"
                    onClick={() => cambiarDia(-1)}
                    aria-label="Consultar día anterior"
                >
                    <svg viewBox="0 0 24 24">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </button>

                <div className="vista-diaria-date">
                    <h3>
                        {nombreDia.charAt(0).toUpperCase() +
                            nombreDia.slice(1)}
                    </h3>

                    <p>{fechaCompleta}</p>
                </div>

                <button
                    type="button"
                    className="vista-diaria-navigation"
                    onClick={() => cambiarDia(1)}
                    aria-label="Consultar día siguiente"
                >
                    <svg viewBox="0 0 24 24">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>

            </div>

            {/* CRONOGRAMA */}
            <div className="vista-diaria-scroll">

                <div className="vista-diaria-timeline">

                    {/* COLUMNA DE HORAS */}
                    <div className="vista-diaria-hours">

                        {horas.map((hora) => (
                            <div
                                className="vista-diaria-hour"
                                key={hora}
                            >
                                {String(hora).padStart(2, "0")}:00
                            </div>
                        ))}

                    </div>

                    {/* ÁREA DE PROGRAMACIÓN */}
                    <div className="vista-diaria-schedule">

                        {/* LÍNEAS HORARIAS */}
                        <div className="vista-diaria-grid">

                            {horas.map((hora) => (
                                <div
                                    className="vista-diaria-grid-line"
                                    key={hora}
                                />
                            ))}

                        </div>

                        {/* SESIONES */}
                        {sesionesOrdenadas.map((sesion) => {

                            const duracion =
                                sesion.fin - sesion.inicio;

                            return (
                                <article
                                    key={sesion.id}
                                    role="button"
                                    tabIndex={0}
                                    aria-pressed={sesionSeleccionada?.id === sesion.id}
                                    className={`vista-diaria-session ${sesion.sector} ${sesionSeleccionada?.id === sesion.id ? "selected" : ""
                                        }`}
                                    onClick={() => onSeleccionarSesion(sesion)}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter" || event.key === " ") {
                                            event.preventDefault();
                                            onSeleccionarSesion(sesion);
                                        }
                                    }}
                                    style={{
                                        top: `${(sesion.inicio - 6) *
                                            alturaHora
                                            }px`,

                                        height: `${duracion * alturaHora - 6
                                            }px`,

                                        left: `${sesion.columna *
                                            anchoColumna + 8
                                            }px`,

                                        width: `${anchoColumna - 16}px`
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

                        {/* ESTADO VACÍO */}
                        {sesionesDelDia.length === 0 && (
                            <div className="vista-diaria-no-sessions">
                                No hay sesiones programadas para este día.
                            </div>
                        )}

                    </div>

                </div>

            </div>



        </section>
    );
}

export default VistaDiaria;
