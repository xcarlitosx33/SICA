
import { useMemo, useState, useRef } from "react";
import "./Nuevaprogramacion.css";

import Sidebar from "../../../../../components/Sidebar/Sidebar";
import Button from "../../../../../components/Button/Button";

// Calcula el siguiente periodo trimestral
function obtenerSiguientePeriodo() {
    const fecha = new Date();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();

    const trimestreActual = Math.ceil(mes / 3);

    if (trimestreActual === 4) {
        return {
            anio: anio + 1,
            periodo: 1
        };
    }

    return {
        anio,
        periodo: trimestreActual + 1
    };
}

// Genera las opciones disponibles
function generarPeriodos(inicial, cantidad = 8) {
    const opciones = [];

    let anio = inicial.anio;
    let periodo = inicial.periodo;

    for (let i = 0; i < cantidad; i++) {
        opciones.push({
            valor: `${anio}-${periodo}`,
            nombre: `${anio} - ${["I", "II", "III", "IV"][periodo - 1]}`
        });

        periodo++;

        if (periodo > 4) {
            periodo = 1;
            anio++;
        }
    }

    return opciones;
}

function Nuevaprogramacion() {

    const archivoInputRef = useRef(null);

    const periodoInicial = useMemo(
        () => obtenerSiguientePeriodo(),
        []
    );

    const periodos = useMemo(
        () => generarPeriodos(periodoInicial),
        [periodoInicial]
    );

    const [periodoSeleccionado, setPeriodoSeleccionado] = useState(
        `${periodoInicial.anio}-${periodoInicial.periodo}`
    );

    const [archivo, setArchivo] = useState(null);

    // Datos de ejemplo para el historial
    const programacionesAnteriores = [
        {
            id: 1,
            periodo: "2026 - IV",
            fecha: "15/09/2026",
            estado: "Cargada"
        },
        {
            id: 2,
            periodo: "2026 - III",
            fecha: "10/06/2026",
            estado: "Cargada"
        },
        {
            id: 3,
            periodo: "2026 - II",
            fecha: "12/03/2026",
            estado: "Cargada"
        },
        {
            id: 4,
            periodo: "2026 - I",
            fecha: "15/12/2025",
            estado: "Cargada"
        }
    ];

    const manejarArchivo = (event) => {
        const seleccionado = event.target.files?.[0];

        if (!seleccionado) return;

        const extension = seleccionado.name.split(".").pop().toLowerCase();

        if (!["xlsx", "xls"].includes(extension)) {
            alert("Selecciona un archivo Excel con extensión .xlsx o .xls");
            event.target.value = "";
            return;
        }

        setArchivo(seleccionado);
    };

    const procesarProgramacion = () => {
        if (!archivo) {
            alert("Primero debes seleccionar un archivo Excel.");
            return;
        }

        alert("La lectura y generación de la programación se implementará en la siguiente etapa.");
    };

    return (
        <div className="nueva-programacion-layout">

            <Sidebar />

            <main className="nueva-programacion-main">

                <div className="nueva-programacion-content">

                    {/* ENCABEZADO */}

                    <header className="nueva-programacion-header">
                        <div>
                            <h1>Nueva programación</h1>
                            <p>
                                Registra una nueva programación de ambientes
                                mediante la carga de un archivo Excel.
                            </p>
                        </div>
                    </header>

                    {/* HISTORIAL */}

                    <section className="nueva-programacion-section">

                        <div className="nueva-programacion-section-heading">
                            <h2>Programaciones anteriores</h2>
                            <p>
                                Consulta los periodos que ya cuentan con
                                una programación registrada.
                            </p>
                        </div>

                        <div className="programaciones-grid">

                            {programacionesAnteriores.map((item) => (
                                <article
                                    className="programacion-history-card"
                                    key={item.id}
                                >
                                    <div className="programacion-history-top">
                                        <span>Programación registrada</span>

                                        <span className="programacion-history-status">
                                            {item.estado}
                                        </span>
                                    </div>

                                    <h3>{item.periodo}</h3>

                                    <div className="programacion-history-date">
                                        <span>Fecha de carga</span>
                                        <strong>{item.fecha}</strong>
                                    </div>
                                </article>
                            ))}

                        </div>

                    </section>

                    {/* FORMULARIO */}

                    <section className="nueva-programacion-section">

                        <div className="nueva-programacion-section-heading">
                            <h2>Registrar programación</h2>
                            <p>
                                Selecciona el periodo y carga el archivo
                                correspondiente.
                            </p>
                        </div>

                        <div className="nueva-programacion-form">

                            {/* SELECTOR DE PERIODO */}

                            <div className="periodo-selector-container">

                                <label htmlFor="periodo-programacion">
                                    Periodo de la nueva programación
                                </label>

                                <select
                                    id="periodo-programacion"
                                    value={periodoSeleccionado}
                                    onChange={(event) =>
                                        setPeriodoSeleccionado(event.target.value)
                                    }
                                >
                                    {periodos.map((periodo) => (
                                        <option
                                            key={periodo.valor}
                                            value={periodo.valor}
                                        >
                                            {periodo.nombre}
                                        </option>
                                    ))}
                                </select>

                                <small>
                                    El periodo siguiente se selecciona
                                    automáticamente según la fecha actual.
                                </small>

                            </div>

                            {/* CARGA DE EXCEL */}

                            <div className="archivo-programacion-container">

                                <div className="archivo-programacion-heading">
                                    <h3>Archivo de programación</h3>
                                    <p>
                                        Carga el Excel que contiene los horarios
                                        de las fichas y sus ambientes.
                                    </p>
                                </div>

                                <label
                                    htmlFor="archivo-programacion"
                                    className={`archivo-dropzone ${archivo ? "archivo-seleccionado" : ""
                                        }`}
                                >

                                    <div className="archivo-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="36"
                                            height="36"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                            <path d="M14 2v6h6" />
                                            <path d="M8 13h2" />
                                            <path d="M8 17h8" />
                                            <path d="M8 9h2" />
                                        </svg>
                                    </div>

                                    {archivo ? (
                                        <>
                                            <strong>{archivo.name}</strong>
                                            <span>
                                                Archivo seleccionado correctamente
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <strong>Subir archivo Excel</strong>
                                            <span>
                                                Arrastra tu archivo aquí o
                                                selecciónalo desde tu equipo.
                                            </span>
                                            <small>
                                                Formatos permitidos: .xlsx y .xls
                                            </small>
                                        </>
                                    )}

                                    <span className="archivo-select-button">
                                        {archivo ? "Cambiar archivo" : "Seleccionar archivo"}
                                    </span>

                                    <input
                                        id="archivo-programacion"
                                        type="file"
                                        accept=".xlsx,.xls"
                                        onChange={manejarArchivo}
                                    />

                                </label>

                            </div>

                            {/* ACCIÓN */}
                            <div className="nueva-programacion-actions">

                                <Button
                                    variant="danger"
                                    onClick={() => {
                                        setArchivo(null);

                                        if (archivoInputRef.current) {
                                            archivoInputRef.current.value = "";
                                        }
                                    }}
                                >
                                    Limpiar selección
                                </Button>

                                <Button
                                    variant="secondary"
                                    className="btn-procesar-programacion"
                                    onClick={procesarProgramacion}
                                >
                                    <span>+</span>
                                    Procesar programación
                                </Button>

                            </div>

                        </div>

                    </section>

                </div>

            </main>

        </div>
    );
}

export default Nuevaprogramacion;
