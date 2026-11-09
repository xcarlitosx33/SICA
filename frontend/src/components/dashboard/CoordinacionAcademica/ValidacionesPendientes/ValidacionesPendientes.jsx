
import { useNavigate } from "react-router-dom";

import "./ValidacionesPendientes.css";
import ValidacionCard from "../ValidacionCard/ValidacionCard";

const validaciones = [
    {
        id: 1,
        tipo: "URGENTE",
        titulo: "Cambio de salón urgente",
        ficha: "2694582",
        recibido: "Recibido hace 25 min",
        datos: [
            { label: "Programa", valor: "ADSO - Tecnólogo" },
            { label: "Instructor solicitante", valor: "Carlos Méndez" },
            { label: "Transición de espacio", valor: "Ambiente 302 → Ambiente 405" },
        ],
        motivo: "Motivo ",
        descripcion:
            "Conflicto de cupos por aumento de 32 a 38 aprendices matriculados. El ambiente 405 cuenta con la capacidad de terminales homologadas requerida.",
    },
    {
        id: 2,
        tipo: "ESPECIALIZADO",
        titulo: "Préstamo extraordinario de ambiente especializado",
        ficha: "2712903",
        recibido: "Recibido hace 1 hora",
        datos: [
            { label: "Espacio académico", valor: "Laboratorio de Redes CISCO" },
            { label: "Jornada requerida", valor: "Sábado 08:00 - 13:00" },
            { label: "Verificación de capacidad", valor: "Cupo disponible (0 cruces)" },
        ],
        motivo: "Justificación de formación",
        descripcion:
            "Taller práctico de enrutamiento dinámico OSPF multinivel programado como refuerzo de proyecto formativo fase 3.",
    },
    {
        id: 3,
        tipo: "REASIGNACIÓN",
        titulo: "Ajuste de bloque horario diurno a nocturno",
        ficha: "2589011",
        recibido: "Recibido ayer 18:30",
        datos: [
            { label: "Taller destino", valor: "Taller de Soldadura 102" },
            { label: "Franja actual", valor: "14:00 - 18:00 (Diurna)" },
            { label: "Nueva franja propuesta", valor: "18:00 - 22:00 (Nocturna)" },
        ],
        motivo: "Observación de coordinación",
        descripcion:
            "Reubicación solicitada por convenio empresarial de aprendices en modalidad dual. Instructor asignado con disponibilidad certificada.",
    },
];

function ValidacionesPendientes() {

    const navigate = useNavigate();

    return (
        <section className="coordinacion-validaciones">

            <div className="coordinacion-section-header">
                <h2>Validaciones Pendientes de Coordinación</h2>

                <div className="coordinacion-section-actions">
                    <span className="coordinacion-pending-count">
                        {validaciones.length} requerimientos
                    </span>

                    <button type="button" className="coordinacion-history-button"
                        onClick={() => navigate("/dashboard/coordinacion-academica/historial-resoluciones")}
                    >
                        Historial de resoluciones →
                    </button>

                </div>
            </div>

            <div className="coordinacion-validaciones-content">
                {validaciones.map((validacion) => (
                    <ValidacionCard
                        key={validacion.id}
                        {...validacion}
                    />
                ))}
            </div>

        </section>
    );
}

export default ValidacionesPendientes;
