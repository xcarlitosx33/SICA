
const resoluciones = [
    {
        id: "SOL-001",
        solicitud: "Cambio de salón urgente",
        ficha: "2694582",
        solicitante: "Carlos Méndez",
        programa: "ADSO - Tecnólogo",
        fechaSolicitud: "20 Oct 2026",
        fechaResolucion: "20 Oct 2026",
        responsable: "Coordinación Académica",
        estado: "Aprobada",
        ambienteOrigen: "Ambiente 302",
        ambienteDestino: "Ambiente 405",
        tipoSolicitud: "Cambio de salón urgente",
        decision: "Se aprueba el cambio de ambiente solicitado.",
        justificacion:
            "Se verificó la disponibilidad del ambiente 405 y se confirmó que cuenta con la capacidad necesaria para recibir a los 38 aprendices.",
        observaciones: [
            {
                responsable: "Coordinación Académica",
                fecha: "20 Oct 2026 · 10:45 a. m.",
                contenido:
                    "Se verificó la disponibilidad del ambiente 405 y se confirmó que cuenta con la capacidad necesaria para recibir a los 38 aprendices."
            },
            {
                responsable: "Administrador del edificio",
                fecha: "20 Oct 2026 · 09:30 a. m.",
                contenido:
                    "Se realizó la revisión del espacio y se confirmó que los equipos de cómputo se encuentran disponibles y en condiciones de funcionamiento."
            }
        ]
    },
    {
        id: "SOL-002",
        solicitud: "Préstamo extraordinario de ambiente",
        ficha: "2712903",
        solicitante: "Andrés Silva",
        programa: "ADSO - Tecnólogo",
        fechaSolicitud: "19 Oct 2026",
        fechaResolucion: "20 Oct 2026",
        responsable: "Coordinación Académica",
        estado: "Rechazada",
        ambienteOrigen: "Ambiente 210",
        ambienteDestino: "Laboratorio especializado",
        tipoSolicitud: "Préstamo extraordinario de ambiente",
        decision: "Se rechaza el préstamo extraordinario solicitado.",
        justificacion:
            "El laboratorio especializado ya cuenta con una programación académica durante el horario solicitado y no tiene disponibilidad para un préstamo adicional.",
        observaciones: [
            {
                responsable: "Administrador del edificio",
                fecha: "20 Oct 2026 · 09:15 a. m.",
                contenido:
                    "Se revisó la programación del laboratorio y se identificó una actividad académica previamente asignada."
            },
            {
                responsable: "Coordinación Académica",
                fecha: "20 Oct 2026 · 11:00 a. m.",
                contenido:
                    "Se determinó que no es posible autorizar el préstamo debido a la ocupación del espacio."
            }
        ]
    },
    {
        id: "SOL-003",
        solicitud: "Ajuste de bloque horario",
        ficha: "2589011",
        solicitante: "Marta Rincón",
        programa: "ADSO - Tecnólogo",
        fechaSolicitud: "18 Oct 2026",
        fechaResolucion: "19 Oct 2026",
        responsable: "Coordinación Académica",
        estado: "Aprobada",
        ambienteOrigen: "Ambiente 305",
        ambienteDestino: "Ambiente 305",
        tipoSolicitud: "Ajuste de bloque horario",
        decision: "Se aprueba el ajuste del bloque horario.",
        justificacion:
            "La modificación fue revisada y no presenta cruces con otras actividades académicas programadas.",
        observaciones: [
            {
                responsable: "Coordinación Académica",
                fecha: "19 Oct 2026 · 10:00 a. m.",
                contenido:
                    "Se verificó la programación y se confirmó que el ajuste horario es viable."
            }
        ]
    },
    {
        id: "SOL-004",
        solicitud: "Reasignación de ambiente",
        ficha: "2694582",
        solicitante: "Laura Torres",
        programa: "ADSO - Tecnólogo",
        fechaSolicitud: "15 Oct 2026",
        fechaResolucion: "16 Oct 2026",
        responsable: "Coordinación Académica",
        estado: "Aprobada",
        ambienteOrigen: "Ambiente 302",
        ambienteDestino: "Ambiente 410",
        tipoSolicitud: "Reasignación de ambiente",
        decision: "Se aprueba la reasignación del ambiente.",
        justificacion:
            "El ambiente de destino cumple con las condiciones necesarias para desarrollar la actividad de formación.",
        observaciones: [
            {
                responsable: "Administrador del edificio",
                fecha: "16 Oct 2026 · 08:30 a. m.",
                contenido:
                    "Se verificaron las condiciones físicas y los recursos disponibles en el ambiente de destino."
            }
        ]
    }
];

export default resoluciones;
