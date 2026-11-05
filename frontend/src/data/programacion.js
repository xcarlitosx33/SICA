
/*
|--------------------------------------------------------------------------
| SICA - Datos de demostración de programación semanal
|--------------------------------------------------------------------------
|
| Reglas:
| - 15 fichas simultáneas por jornada.
| - Cada ficha ocupa un ambiente diferente dentro de su jornada.
| - Los ambientes pueden reutilizarse en otras jornadas.
| - Las fichas rotan entre jornadas durante la semana.
| - Sábado y domingo: programación únicamente en la tarde.
| - Los horarios se repiten cada siete días.
|
| IMPORTANTE:
| Datos ficticios para pruebas de interfaz.
|
*/

// --------------------------------------------------------------------------
// CONFIGURACIÓN GENERAL
// --------------------------------------------------------------------------

const CANTIDAD_FICHAS_POR_JORNADA = 15;

const jornadas = {
    manana: {
        nombre: "Mañana",
        inicio: 6,
        fin: 12
    },
    tarde: {
        nombre: "Tarde",
        inicio: 12,
        fin: 18
    },
    noche: {
        nombre: "Noche",
        inicio: 18,
        fin: 22
    }
};

// --------------------------------------------------------------------------
// AMBIENTES DISPONIBLES
// --------------------------------------------------------------------------

const ambientes = Array.from(
    { length: CANTIDAD_FICHAS_POR_JORNADA },
    (_, index) => `Ambiente ${String(200 + index)}`
);

// --------------------------------------------------------------------------
// FICHAS DE DEMOSTRACIÓN
// --------------------------------------------------------------------------


const programas = [
    { nombre: "ADSO", sector: "tic" },
    { nombre: "Producción Multimedia", sector: "tic" },
    { nombre: "Producción Audiovisual", sector: "tic" },
    { nombre: "Automatización Industrial", sector: "industria" },
    { nombre: "Mecánica Industrial", sector: "industria" },
    { nombre: "Seguridad y Salud en el Trabajo", sector: "industria" },
    { nombre: "Logística y Mercados", sector: "comercio" },
    { nombre: "Administración y Finanzas", sector: "comercio" },
    { nombre: "Estética y Cuidado Personal", sector: "comercio" },
    { nombre: "Turismo", sector: "comercio" },
    { nombre: "Procesamiento de Alimentos", sector: "agropecuario" },
    { nombre: "Investigación Aplicada", sector: "agropecuario" },
    { nombre: "Estrategia AgroSENA", sector: "agropecuario" }
];

const instructores = [
    "Carlos Rodríguez",
    "María Fernanda López",
    "Andrés Martínez",
    "Laura Gómez",
    "Daniel Ramírez"
];

const facilitadores = [
    "Jorge Herrera",
    "Paula Sánchez",
    "Miguel Torres",
    "Diana Castillo",
    "Sebastián Moreno"
];

const competencias = [
    {
        nombre: "Desarrollar aplicaciones de software",
        rap: "Construir soluciones de software según requisitos técnicos."
    },
    {
        nombre: "Gestionar procesos tecnológicos",
        rap: "Aplicar procedimientos técnicos en el entorno de formación."
    },
    {
        nombre: "Implementar soluciones digitales",
        rap: "Desarrollar actividades prácticas de acuerdo con los requerimientos."
    },
    {
        nombre: "Ejecutar procesos de producción",
        rap: "Aplicar técnicas y procedimientos propios del sector productivo."
    }
];





const fichas = Array.from(
    { length: 45 },
    (_, index) => {
        const programa = programas[index % programas.length];
        const competencia = competencias[index % competencias.length];

        return {
            codigo: String(299001 + index),
            numero: String(299001 + index),

            programa: programa.nombre,
            sector: programa.sector,
            tipo: "tecnologica",

            instructor: instructores[index % instructores.length],
            facilitador: facilitadores[index % facilitadores.length],

            competencia: competencia.nombre,
            rap: competencia.rap
        };
    }
);


// --------------------------------------------------------------------------
// GENERADOR DE SESIONES
// --------------------------------------------------------------------------

const sesionesProgramacion = [];

let siguienteId = 1;

function agregarSesiones(diaSemana, jornada, desplazamiento) {
    const horario = jornadas[jornada];

    for (
        let columna = 0;
        columna < CANTIDAD_FICHAS_POR_JORNADA;
        columna++
    ) {
        /*
         * La rotación permite que las fichas cambien de jornada
         * según el día de la semana.
         */
        const indiceFicha =
            (columna + desplazamiento) % fichas.length;

        const ficha = fichas[indiceFicha];

        /*
         * Cada ficha ocupa un ambiente diferente dentro
         * de la misma jornada.
         *
         * Los ambientes se pueden reutilizar en otra jornada.
         */
        const ambiente = ambientes[columna];

       sesionesProgramacion.push({
    id: siguienteId++,

    // Identificación de ficha
    ficha: ficha.codigo,
    numeroFicha: ficha.numero,

    // Información académica
    programa: ficha.programa,
    sector: ficha.sector,
    tipo: ficha.tipo,

    // Responsables
    instructor: ficha.instructor,
    facilitador: ficha.facilitador,

    // Competencia y resultado de aprendizaje
    competencia: ficha.competencia,
    rap: ficha.rap,

    // Programación
    diaSemana,
    jornada,
    ambiente,

    inicio: horario.inicio,
    fin: horario.fin,

    columna
});
    }
}

// --------------------------------------------------------------------------
// PROGRAMACIÓN DE LUNES A VIERNES
// --------------------------------------------------------------------------

for (let dia = 1; dia <= 5; dia++) {
    const desplazamiento = (dia - 1) * 15;

    agregarSesiones(
        dia,
        "manana",
        desplazamiento
    );

    agregarSesiones(
        dia,
        "tarde",
        desplazamiento + 15
    );

    agregarSesiones(
        dia,
        "noche",
        desplazamiento + 30
    );
}

// --------------------------------------------------------------------------
// PROGRAMACIÓN DE SÁBADO Y DOMINGO
// --------------------------------------------------------------------------

/*
 * Los grupos de jornada nocturna también pueden asistir
 * durante la tarde los fines de semana.
 *
 * No se generan sesiones de mañana ni de noche.
 */

agregarSesiones(
    6,
    "tarde",
    30
);

agregarSesiones(
    0,
    "tarde",
    15
);

// --------------------------------------------------------------------------
// EXPORTACIÓN
// --------------------------------------------------------------------------

export default sesionesProgramacion;
