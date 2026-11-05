
import { useState } from "react";
import "./VistaMensual.css";
import sesionesProgramacion from "../../../data/programacion";

function VistaMensual() {
    const periodos = [
        { id: "2026-1", nombre: "2026 - Periodo 1", inicio: 0 },
        { id: "2026-2", nombre: "2026 - Periodo 2", inicio: 3 },
        { id: "2026-3", nombre: "2026 - Periodo 3", inicio: 6 },
        { id: "2026-4", nombre: "2026 - Periodo 4", inicio: 9 }
    ];

    const nombresMeses = [
        "Enero", "Febrero", "Marzo",
        "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre",
        "Octubre", "Noviembre", "Diciembre"
    ];

    const diasSemana = [
        "Lunes", "Martes", "Miércoles",
        "Jueves", "Viernes", "Sábado", "Domingo"
    ];

    const [periodoSeleccionado, setPeriodoSeleccionado] = useState("2026-4");

    const [mesSeleccionado, setMesSeleccionado] =useState(10);

    const [fechaSeleccionada, setFechaSeleccionada] = useState(4);

    const periodoActual = periodos.find(
        (periodo) => periodo.id === periodoSeleccionado );

    const primerMes = periodoActual.inicio;
    const ultimoMes = primerMes + 2;

    const anio = 2026;

    const primerDiaMes = new Date(
        anio,
        mesSeleccionado,
        1
    );

    const cantidadDias = new Date(
        anio,
        mesSeleccionado + 1,
        0
    ).getDate();

    // Ajustar calendario para iniciar el lunes.
    // Lunes = 0 ... Domingo = 6
    const espaciosIniciales = (primerDiaMes.getDay() + 6) % 7;

    const diasCalendario = [
        ...Array(espaciosIniciales).fill(null),
        ...Array.from(
            { length: cantidadDias },
            (_, index) => index + 1
        )
    ];

    // Completar la última semana del calendario.
    while (diasCalendario.length % 7 !== 0) {
        diasCalendario.push(null);
    }

    const cambiarPeriodo = (nuevoPeriodo) => {
        const periodo = periodos.find(
            (item) => item.id === nuevoPeriodo
        );

        setPeriodoSeleccionado(nuevoPeriodo);
        setMesSeleccionado(periodo.inicio);
        setFechaSeleccionada(null);
    };

    const cambiarMes = (direccion) => {
        const nuevoMes = mesSeleccionado + direccion;

        if (nuevoMes < primerMes || nuevoMes > ultimoMes) {
            return;
        }

        setMesSeleccionado(nuevoMes);
        setFechaSeleccionada(null);
    };

    // Obtener los indicadores de programación de cada fecha.
    const obtenerIndicadores = (dia) => {
        if (!dia) return [];

        const fecha = new Date(anio, mesSeleccionado, dia);

        const diaSemana = fecha.getDay();

        const sesionesDelDia = sesionesProgramacion.filter(
            (sesion) => sesion.diaSemana === diaSemana
        );

        // Agrupar indicadores por rama o área.
        const sectores = [
            ...new Set(
                sesionesDelDia.map((sesion) => sesion.sector)
            )
        ];

        return sectores;
    };

    return (
        <section className="vista-mensual">

            {/* ENCABEZADO */}
            <div className="vista-mensual-header">

                <div>
                    <h3>Programación mensual</h3>
                    <p>
                        Consulta la distribución de las sesiones
                        durante el periodo académico.
                    </p>
                </div>

                <select className="vista-mensual-period-select"
                    value={periodoSeleccionado} onChange={(event) =>
                        cambiarPeriodo(event.target.value) }
                >
                    {periodos.map((periodo) => (
                        <option
                            key={periodo.id}
                            value={periodo.id}
                        >
                            {periodo.nombre}
                        </option>
                    ))}
                </select>

            </div>

            {/* NAVEGACIÓN DEL MES */}
            <div className="vista-mensual-navigation">

                <button
                    type="button"
                    onClick={() => cambiarMes(-1)}
                    disabled={mesSeleccionado === primerMes}
                    aria-label="Mes anterior"
                >
                    <svg viewBox="0 0 24 24">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </button>

                <h4>
                    {nombresMeses[mesSeleccionado]} {anio}
                </h4>

                <button
                    type="button"
                    onClick={() => cambiarMes(1)}
                    disabled={mesSeleccionado === ultimoMes}
                    aria-label="Mes siguiente"
                >
                    <svg viewBox="0 0 24 24">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>

            </div>

            {/* CALENDARIO */}
            <div className="vista-mensual-calendar">

                {/* DÍAS DE LA SEMANA */}
                <div className="vista-mensual-weekdays">
                    {diasSemana.map((dia) => (
                        <div key={dia}>
                            {dia}
                        </div>
                    ))}
                </div>

                {/* DÍAS DEL MES */}
                <div className="vista-mensual-days">

                    {diasCalendario.map((dia, index) => {

                        const indicadores =
                            obtenerIndicadores(dia);

                        const tieneProgramacion = indicadores.length > 0;

                        const seleccionado =
                            tieneProgramacion && dia === fechaSeleccionada;


                        return (
                            <button
                                type="button"
                                key={`${mesSeleccionado}-${index}`}
                                className={`vista-mensual-day ${dia ? "" : "empty"
                                    } ${seleccionado ? "selected" : ""}`}
                                disabled={!dia || !tieneProgramacion}
                                onClick={() =>
                                    setFechaSeleccionada(dia)
                                }
                            >

                                {dia && (
                                    <>
                                        <span className="vista-mensual-day-number">
                                            {dia}
                                        </span>

                                        <div className="vista-mensual-indicators">

                                            {indicadores.map((sector) => (
                                                <span
                                                    key={sector}
                                                    className={`vista-mensual-indicator ${sector}`}
                                                />
                                            ))}

                                        </div>
                                    </>
                                )}

                            </button>
                        );
                    })}

                </div>

            </div>

            {/* LEYENDA */}
            <div className="vista-mensual-legend">

                <span>
                    <i className="industria" />
                    Industria
                </span>

                <span>
                    <i className="comercio" />
                    Comercio y Servicios
                </span>

                <span>
                    <i className="tic" />
                    TIC
                </span>

                <span>
                    <i className="agropecuario" />
                    Agropecuario
                </span>

                <span>
                    <i className="transversal" />
                    Transversal
                </span>

            </div>

        </section>
    );
}

export default VistaMensual;
