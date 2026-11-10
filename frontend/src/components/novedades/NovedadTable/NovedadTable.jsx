
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./NovedadTable.css";
import {
    getNovedades,
    subscribeNovedades,
} from "../../../data/novedadesStorage";

import Button from "../../Button/Button";
import ReporteNovedadModal from "../ReporteNovedadModal/ReporteNovedadModal";

function NovedadTable({ filters }) {
    const navigate = useNavigate();

    const [novedadesActuales, setNovedadesActuales] = useState(getNovedades);
    const [reporteSeleccionado, setReporteSeleccionado] = useState(null);

    useEffect(() => {
        return subscribeNovedades(() => {
            setNovedadesActuales(getNovedades());
        });
    }, []);

    const rol = localStorage.getItem("sicaRolDemo") || "director";
    const esAdministrador = rol === "administrador";

    const normalizedSearch = filters.search.trim().toLowerCase();

    const filteredNovedades = novedadesActuales.filter((novedad) => {
        const matchesSearch =
            `${novedad.id} ${novedad.ambiente} ${novedad.tipo} ${novedad.descripcion}`
                .toLowerCase()
                .includes(normalizedSearch);

        const matchesEstado =
            !filters.estado || novedad.estado === filters.estado;

        const matchesTipo =
            !filters.tipo || novedad.tipo === filters.tipo;

        const matchesAmbiente =
            !filters.ambiente || novedad.ambiente === filters.ambiente;

        return matchesSearch && matchesEstado && matchesTipo && matchesAmbiente;
    });

    function handleViewReport(novedad) {
        setReporteSeleccionado(novedad);
    }

    function handleAttend(novedad) {
        navigate(`/novedades/detalle/${novedad.id}`);
    }

    function getStatusClass(estado) {
        if (estado === "Pendiente") return "pendiente";
        if (estado === "En proceso") return "en-proceso";
        return "cerrada";
    }

    return (
        <>
            <section className="novedad-table-section">
                <div className="novedad-table-wrapper">
                    <table className="novedad-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fecha</th>
                                <th>Ambiente</th>
                                <th>Tipo</th>
                                <th>Descripción</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredNovedades.length > 0 ? (
                                filteredNovedades.map((novedad) => (
                                    <tr key={novedad.id}>
                                        <td className="novedad-table-id">
                                            {novedad.id}
                                        </td>

                                        <td>{novedad.fecha}</td>
                                        <td>{novedad.ambiente}</td>
                                        <td>{novedad.tipo}</td>

                                        <td className="novedad-table-description">
                                            {novedad.descripcion}
                                        </td>

                                        <td>
                                            <span
                                                className={`novedad-status ${getStatusClass(novedad.estado)}`}
                                            >
                                                {novedad.estado}
                                            </span>
                                        </td>

                                        <td>
                                            <div className="novedad-table-actions">
                                                <Button
                                                    type="button"
                                                    className="novedad-table-action"
                                                    onClick={() =>
                                                        handleViewReport(novedad)
                                                    }
                                                >
                                                    Ver reporte
                                                </Button>

                                                {esAdministrador && (
                                                    <Button
                                                        type="button"
                                                        variant="secondary"
                                                        className="novedad-table-action"
                                                        onClick={() =>
                                                            handleAttend(novedad)
                                                        }
                                                    >
                                                        Atender
                                                    </Button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="7"
                                        className="novedad-table-empty"
                                    >
                                        No se encontraron novedades con esos filtros.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="novedad-table-footer">
                    <span>
                        Mostrando {filteredNovedades.length} de{" "}
                        {novedadesActuales.length} novedades
                    </span>
                </div>
            </section>

            <ReporteNovedadModal
                novedad={reporteSeleccionado}
                onClose={() => setReporteSeleccionado(null)}
            />
        </>
    );
}

export default NovedadTable;
