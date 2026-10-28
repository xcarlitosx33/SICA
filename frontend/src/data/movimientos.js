export const movimientos = [
    {
        id: "MOV-2026-0186",
        tipo: "Traslado de elemento",
        descripcion:
            "Movimiento de un elemento entre ambientes del centro de formación.",

        estado: "Completado",
        estadoDescripcion: "Movimiento finalizado correctamente",

        fecha: "20 Oct 2026",
        hora: "10:35 AM",

        elemento: {
            nombre: "Computador All-in-One",
            serial: "SENA-COMP-302-001",
            categoria: "Equipos de cómputo",
            marca: "HP",
            modelo: "ProOne 400 G6",
            estado: "Bueno",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZqjGkMLCEp4w15wRD2ktZXVGAZ6sdBK0Qk1bDJx6Nk3hwTnV_YE6W1I&s=10",
        },

        origen: {
            nombre: "Ambiente 201",
            ubicacion: "Bloque A · Piso 1",
        },

        destino: {
            nombre: "Ambiente 302",
            ubicacion: "Bloque A · Piso 2",
        },

        responsable: {
            nombre: "Carlos Méndez",
            cargo: "Instructor",
            iniciales: "CM",
        },

        historial: [
            {
                titulo: "Movimiento registrado",
                descripcion: "Se registra el movimiento en el sistema.",
                fecha: "20 Oct 2026",
                hora: "10:32 AM",
                estado: "completado",
            },
            {
                titulo: "Traslado en proceso",
                descripcion:
                    "El elemento se encuentra en traslado entre ambientes.",
                fecha: "20 Oct 2026",
                hora: "10:34 AM",
                estado: "completado",
            },
            {
                titulo: "Traslado completado",
                descripcion:
                    "El elemento ha sido trasladado correctamente.",
                fecha: "20 Oct 2026",
                hora: "10:35 AM",
                estado: "completado",
            },
        ],

        observaciones:
            "Traslado realizado por solicitud del instructor para el desarrollo de actividades en el Ambiente 302.",

        adjuntos: [
            {
                nombre: "evidencia-traslado.jpg",
                tipo: "Imagen",
                tamaño: "2.4 MB",
                fecha: "20 Oct 2026",
                archivo: "/images/evidencia-traslado.jpg",
            },
        ],
    },

    {
        id: "MOV-2026-0185",
        tipo: "Reasignación por sobrecupo",
        descripcion:
            "Reasignación de un elemento debido a sobrecupo en el ambiente de origen.",

        estado: "En proceso",
        estadoDescripcion: "Movimiento actualmente en proceso",

        fecha: "19 Oct 2026",
        hora: "03:15 PM",

        elemento: {
            nombre: "Router Modular Cisco 2911",
            serial: "SENA-RED-LAB-04",
            categoria: "Equipos de red",
            marca: "Cisco",
            modelo: "2911",
            estado: "Bueno",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_670775-MCO72054101562_102023-O.webp",
        },

        origen: {
            nombre: "Lab. Redes CISCO",
            ubicacion: "Piso 1 · Bloque B",
        },

        destino: {
            nombre: "Ambiente 405",
            ubicacion: "Bloque B · Piso 3",
        },

        responsable: {
            nombre: "Andrés Silva",
            cargo: "Líder Técnico",
            iniciales: "AS",
        },

        historial: [
            {
                titulo: "Movimiento registrado",
                descripcion: "Se registra la solicitud de reasignación.",
                fecha: "19 Oct 2026",
                hora: "03:15 PM",
                estado: "completado",
            },
            {
                titulo: "Reasignación en proceso",
                descripcion:
                    "El elemento se encuentra en proceso de traslado.",
                fecha: "19 Oct 2026",
                hora: "03:30 PM",
                estado: "activo",
            },
        ],

        observaciones:
            "Reasignación solicitada debido al sobrecupo registrado en el ambiente de origen.",

        adjuntos: [],
    },

    {
        id: "MOV-2026-0184",
        tipo: "Asignación de equipo audiovisual",
        descripcion:
            "Asignación de un equipo audiovisual para actividades de formación.",

        estado: "Completado",
        estadoDescripcion: "Movimiento finalizado correctamente",

        fecha: "18 Oct 2026",
        hora: "08:40 AM",

        elemento: {
            nombre: "Proyector Láser HDMI 4K",
            serial: "SENA-PROY-302-001",
            categoria: "Equipos audiovisuales",
            marca: "Epson",
            modelo: "EB-L200F",
            estado: "Bueno",
            imagen: "https://www.microxol.com/wp-content/uploads/2022/02/PA503_L01_l.webp",
        },

        origen: {
            nombre: "Depósito Central",
            ubicacion: "Sótano · Almacén",
        },

        destino: {
            nombre: "Ambiente 302",
            ubicacion: "Bloque A · Piso 2",
        },

        responsable: {
            nombre: "Soporte Técnico",
            cargo: "Infraestructura",
            iniciales: "ST",
        },

        historial: [
            {
                titulo: "Movimiento registrado",
                descripcion: "Se registra la asignación del equipo.",
                fecha: "18 Oct 2026",
                hora: "08:35 AM",
                estado: "completado",
            },
            {
                titulo: "Asignación completada",
                descripcion:
                    "El equipo fue asignado correctamente al ambiente.",
                fecha: "18 Oct 2026",
                hora: "08:40 AM",
                estado: "completado",
            },
        ],

        observaciones:
            "Equipo asignado para apoyar las actividades audiovisuales desarrolladas en el Ambiente 302.",

        adjuntos: [],
    },

    {
        id: "MOV-2026-0183",
        tipo: "Traslado temporal de mobiliario",
        descripcion:
            "Traslado temporal de mobiliario para apoyar actividades de formación.",

        estado: "Pendiente",
        estadoDescripcion: "Movimiento pendiente de ejecución",

        fecha: "17 Oct 2026",
        hora: "11:20 AM",

        elemento: {
            nombre: "Mesa doble de cómputo",
            serial: "SENA-MOB-302-14",
            categoria: "Mobiliario",
            marca: "SENA",
            modelo: "Mesa doble",
            estado: "Bueno",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_797325-MCO83953553386_042025-O.webp",
        },

        origen: {
            nombre: "Ambiente 302",
            ubicacion: "Bloque A · Piso 2",
        },

        destino: {
            nombre: "Taller Soldadura 102",
            ubicacion: "Bloque Industrial",
        },

        responsable: {
            nombre: "Marta Rincón",
            cargo: "Instructora",
            iniciales: "MR",
        },

        historial: [
            {
                titulo: "Movimiento registrado",
                descripcion: "Se registra la solicitud de traslado.",
                fecha: "17 Oct 2026",
                hora: "11:20 AM",
                estado: "activo",
            },
        ],

        observaciones:
            "Traslado temporal solicitado para apoyar las actividades programadas en el Taller Soldadura 102.",

        adjuntos: [],
    },

    {
        id: "MOV-2026-0181",
        tipo: "Baja preventiva por daño severo",
        descripcion:
            "Movimiento generado para registrar la baja preventiva de un elemento con daño severo.",

        estado: "Baja registrada",
        estadoDescripcion: "Elemento registrado para desincorporación",

        fecha: "15 Oct 2026",
        hora: "09:10 AM",

        elemento: {
            nombre: "Silla ergonómica de oficina",
            serial: "SENA-SIL-201-09",
            categoria: "Mobiliario",
            marca: "SENA",
            modelo: "Ergonómica",
            estado: "Dañado",
            imagen: "https://ertekstore.com/wp-content/uploads/2026/01/Catalogo-web_F60-negra_-2-800x800.webp",
        },

        origen: {
            nombre: "Ambiente 201",
            ubicacion: "Bloque A · Piso 1",
        },

        destino: {
            nombre: "Área de Desincorporación",
            ubicacion: "Bodega General",
        },

        responsable: {
            nombre: "Marta Rincón",
            cargo: "Instructora",
            iniciales: "MR",
        },

        historial: [
            {
                titulo: "Novedad registrada",
                descripcion:
                    "Se registra daño severo en el elemento.",
                fecha: "15 Oct 2026",
                hora: "09:05 AM",
                estado: "completado",
            },
            {
                titulo: "Baja preventiva registrada",
                descripcion:
                    "El elemento fue enviado al área de desincorporación.",
                fecha: "15 Oct 2026",
                hora: "09:10 AM",
                estado: "completado",
            },
        ],

        observaciones:
            "Elemento retirado preventivamente debido al daño severo identificado durante la revisión.",

        adjuntos: [],
    },
];