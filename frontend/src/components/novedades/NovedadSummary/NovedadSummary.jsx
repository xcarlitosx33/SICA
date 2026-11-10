
import { useEffect, useState } from "react";
import "./NovedadSummary.css";

import {
    getNovedades,
    subscribeNovedades,
} from "../../../data/novedadesStorage";

import StatCard from "../../StatCard/StatCard";
import StatCardGrid from "../../StatCard/StatCardGrid";

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
            status: "neutral",
        },
        {
            id: 2,
            title: "Pendientes",
            value: pendientes,
            description: "Requieren atención",
            status: "warning",
        },
        {
            id: 3,
            title: "En proceso",
            value: enProceso,
            description: "Actualmente atendidas",
            status: "info",
        },
        {
            id: 4,
            title: "Cerradas",
            value: cerradas,
            description: "Novedades solucionadas",
            status: "positive",
        },
    ];

    return (
        <section className="novedad-summary">
            <StatCardGrid minCardWidth={240}>
                {items.map((item) => (
                    <StatCard
                        key={item.id}
                        title={item.title}
                        value={item.value}
                        description={item.description}
                        status={item.status}
                    />
                ))}
            </StatCardGrid>
        </section>
    );
}

export default NovedadSummary;
