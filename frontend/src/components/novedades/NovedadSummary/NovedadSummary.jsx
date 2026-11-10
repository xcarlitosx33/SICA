
import { useEffect, useState } from "react";
import "./NovedadSummary.css";

import {
    getNovedades,
    subscribeNovedades,
} from "../../../data/novedadesStorage";

function NovedadSummary() {
    const [novedadesActuales, setNovedadesActuales] = useState(getNovedades);

    useEffect(() => {
        return subscribeNovedades(() => {
            setNovedadesActuales(getNovedades());
        });
    }, []);

    const pendientes = novedadesActuales.filter(
        (item) => item.estado === "Pendiente"
    ).length;

    const enProceso = novedadesActuales.filter(
        (item) => item.estado === "En proceso"
    ).length;

    const cerradas = novedadesActuales.filter(
        (item) => item.estado === "Cerrada"
    ).length;

    const items = [
        {
            id: 1,
            title: "Total de novedades",
            value: novedadesActuales.length,
            description: "Novedades registradas",
            type: "total",
        },
        {
            id: 2,
            title: "Pendientes",
            value: pendientes,
            description: "Requieren atención",
            type: "pending",
        },
        {
            id: 3,
            title: "En proceso",
            value: enProceso,
            description: "Actualmente atendidas",
            type: "process",
        },
        {
            id: 4,
            title: "Cerradas",
            value: cerradas,
            description: "Novedades solucionadas",
            type: "closed",
        },
    ];

    return (
        <section className="novedad-summary">
            {items.map((item) => (
                <article className="novedad-summary-card" key={item.id}>
                    <div className="novedad-summary-header">
                        <span className="novedad-summary-title">
                            {item.title}
                        </span>

                        <span
                            className={`novedad-summary-dot novedad-summary-dot-${item.type}`}
                            aria-hidden="true"
                        />
                    </div>

                    <strong className="novedad-summary-value">
                        {item.value}
                    </strong>

                    <span className="novedad-summary-description">
                        {item.description}
                    </span>
                </article>
            ))}
        </section>
    );
}

export default NovedadSummary;
