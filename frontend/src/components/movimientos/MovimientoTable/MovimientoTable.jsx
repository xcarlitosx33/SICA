import { useNavigate } from "react-router-dom";

import "./MovimientoTable.css";

function MovimientoTable() {

    const navigate = useNavigate();

    return (
        <section className="movimiento-table-container">

            <div className="movimiento-table-header">

                <div>

                    <h2>Movimientos registrados</h2>

                </div>

                <div className="movimiento-table-updated">
                    <span></span>
                    Actualizado hace 2 min
                </div>

            </div>

            <div className="movimiento-table-wrapper">

                <table className="movimiento-table">

                    <thead>
                        <tr>
                            <th>Movimiento</th>
                            <th>Elemento</th>
                            <th>Origen</th>
                            <th>Destino</th>
                            <th>Responsable</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                            <th>Acción</th>
                        </tr>
                    </thead>

                    <tbody>

                        {/* MOVIMIENTO 1 */}
                        <tr>
                            <td>
                                <strong>Traslado de elemento</strong>
                                <span>#MOV-2026-0186</span>
                            </td>

                            <td>
                                <strong>Computador All-in-One</strong>
                                <span>SENA-COMP-302-001</span>
                            </td>

                            <td>
                                <strong>Ambiente 201</strong>
                                <span>Bloque A · Piso 1</span>
                            </td>

                            <td>
                                <strong className="destination">
                                    Ambiente 302
                                </strong>
                                <span>Bloque A · Piso 2</span>
                            </td>

                            <td>
                                <div className="movement-responsible">
                                    <span className="movement-avatar green">
                                        CM
                                    </span>

                                    <div>
                                        <strong>Carlos Méndez</strong>
                                        <span>Instructor</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <strong>20 Oct 2026</strong>
                                <span>10:35 AM</span>
                            </td>

                            <td>
                                <span className="movement-status completed">
                                    Completado
                                </span>
                            </td>

                            <td>
                                <button
                                    className="movement-detail-button"
                                    onClick={() =>
                                        navigate("/movimientos/Detalle/MOV-2026-0186")
                                    }
                                >
                                    Ver detalle
                                    <span>›</span>
                                </button>
                            </td>
                        </tr>

                        {/* MOVIMIENTO 2 */}
                        <tr>
                            <td>
                                <strong>Reasignación por sobrecupo</strong>
                                <span>#MOV-2026-0185</span>
                            </td>

                            <td>
                                <strong>Router Modular Cisco 2911</strong>
                                <span>SENA-RED-LAB-04</span>
                            </td>

                            <td>
                                <strong>Lab. Redes CISCO</strong>
                                <span>Piso 1 · Bloque B</span>
                            </td>

                            <td>
                                <strong className="destination">
                                    Ambiente 405
                                </strong>
                                <span>Bloque B · Piso 3</span>
                            </td>

                            <td>
                                <div className="movement-responsible">
                                    <span className="movement-avatar blue">
                                        AS
                                    </span>

                                    <div>
                                        <strong>Andrés Silva</strong>
                                        <span>Líder Técnico</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <strong>19 Oct 2026</strong>
                                <span>03:15 PM</span>
                            </td>

                            <td>
                                <span className="movement-status process">
                                    En proceso
                                </span>
                            </td>

                            <td>
                                <button
                                    className="movement-detail-button"
                                    onClick={() =>
                                        navigate("/movimientos/Detalle/MOV-2026-0185")
                                    }
                                >
                                    Ver detalle
                                    <span>›</span>
                                </button>
                            </td>
                        </tr>

                        {/* MOVIMIENTO 3 */}
                        <tr>
                            <td>
                                <strong>Asignación de equipo audiovisual</strong>
                                <span>#MOV-2026-0184</span>
                            </td>

                            <td>
                                <strong>Proyector Láser HDMI 4K</strong>
                                <span>SENA-PROY-302-001</span>
                            </td>

                            <td>
                                <strong>Depósito Central</strong>
                                <span>Sótano · Almacén</span>
                            </td>

                            <td>
                                <strong className="destination">
                                    Ambiente 302
                                </strong>
                                <span>Bloque A · Piso 2</span>
                            </td>

                            <td>
                                <div className="movement-responsible">
                                    <span className="movement-avatar gray">
                                        ST
                                    </span>

                                    <div>
                                        <strong>Soporte Técnico</strong>
                                        <span>Infraestructura</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <strong>18 Oct 2026</strong>
                                <span>08:40 AM</span>
                            </td>

                            <td>
                                <span className="movement-status completed">
                                    Completado
                                </span>
                            </td>

                            <td>
                                <button
                                    className="movement-detail-button"
                                    onClick={() =>
                                        navigate("/movimientos/Detalle/MOV-2026-0184")
                                    }
                                >
                                    Ver detalle
                                    <span>›</span>
                                </button>
                            </td>
                        </tr>

                        {/* MOVIMIENTO 4 */}
                        <tr>
                            <td>
                                <strong>Traslado temporal de mobiliario</strong>
                                <span>#MOV-2026-0183</span>
                            </td>

                            <td>
                                <strong>Mesa doble de cómputo</strong>
                                <span>SENA-MOB-302-14</span>
                            </td>

                            <td>
                                <strong>Ambiente 302</strong>
                                <span>Bloque A · Piso 2</span>
                            </td>

                            <td>
                                <strong className="destination">
                                    Taller Soldadura 102
                                </strong>
                                <span>Bloque Industrial</span>
                            </td>

                            <td>
                                <div className="movement-responsible">
                                    <span className="movement-avatar pink">
                                        MR
                                    </span>

                                    <div>
                                        <strong>Marta Rincón</strong>
                                        <span>Instructora</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <strong>17 Oct 2026</strong>
                                <span>11:20 AM</span>
                            </td>

                            <td>
                                <span className="movement-status pending">
                                    Pendiente
                                </span>
                            </td>

                            <td>
                                <button
                                    className="movement-detail-button"
                                    onClick={() =>
                                        navigate("/movimientos/Detalle/MOV-2026-0183")
                                    }
                                >
                                    Ver detalle
                                    <span>›</span>
                                </button>
                            </td>
                        </tr>

                        {/* MOVIMIENTO 5 */}
                        <tr>
                            <td>
                                <strong>Baja preventiva por daño severo</strong>
                                <span>#MOV-2026-0181</span>
                            </td>

                            <td>
                                <strong>Silla ergonómica de oficina</strong>
                                <span>SENA-SIL-201-09</span>
                            </td>

                            <td>
                                <strong>Ambiente 201</strong>
                                <span>Bloque A · Piso 1</span>
                            </td>

                            <td>
                                <strong className="destination danger">
                                    Área de Desincorporación
                                </strong>
                                <span>Bodega General</span>
                            </td>

                            <td>
                                <div className="movement-responsible">
                                    <span className="movement-avatar pink">
                                        MR
                                    </span>

                                    <div>
                                        <strong>Marta Rincón</strong>
                                        <span>Instructora</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <strong>15 Oct 2026</strong>
                                <span>09:10 AM</span>
                            </td>

                            <td>
                                <span className="movement-status registered">
                                    Baja registrada
                                </span>
                            </td>

                            <td>
                                <button
                                    className="movement-detail-button"
                                    onClick={() =>
                                        navigate("/movimientos/Detalle/MOV-2026-0181")
                                    }
                                >
                                    Ver detalle
                                    <span>›</span>
                                </button>
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </section>
    );
}

export default MovimientoTable;