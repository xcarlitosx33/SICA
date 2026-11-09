import { ambientes } from "./ambientes";
import { novedades } from "./novedades";

// Datos ficticios para demostración.
const elementosFaltantes = {
    "AMB-103": [
        "Computador adicional",
        "Silla ergonómica",
        "Regulador de voltaje",
    ],
    "AMB-203": [
        "Monitor adicional",
        "Teclado",
        "Mouse",
        "Proyector",
    ],
    "AMB-402": [
        "Computador portátil",
        "Sistema de videoconferencia",
    ],
};

const elementosPorTipo = {
    Laboratorio: {
        tecnologia: ["Computador de escritorio", "Monitor", "Teclado", "Mouse", "Proyector", "Regulador de voltaje"],
        mobiliario: ["Mesa de trabajo", "Silla ergonómica", "Escritorio del instructor", "Tablero"],
        otros: ["Extensión eléctrica", "Caneca de residuos", "Ventilador"],
    },
    "Aula de formación": {
        tecnologia: ["Computador del instructor", "Monitor", "Proyector", "Parlantes"],
        mobiliario: ["Mesa de trabajo", "Silla", "Escritorio del instructor", "Tablero acrílico"],
        otros: ["Ventilador", "Caneca de residuos", "Extensión eléctrica"],
    },
    "Aula multimedia": {
        tecnologia: ["Computador de escritorio", "Monitor", "Proyector multimedia", "Parlantes", "Cámara web"],
        mobiliario: ["Mesa de trabajo", "Silla", "Escritorio del instructor"],
        otros: ["Extensión eléctrica", "Regleta de conexiones", "Caneca de residuos"],
    },
    "Sala de reuniones": {
        tecnologia: ["Computador portátil", "Monitor", "Proyector", "Sistema de videoconferencia"],
        mobiliario: ["Mesa de reuniones", "Silla", "Escritorio auxiliar"],
        otros: ["Extensión eléctrica", "Caneca de residuos", "Ventilador"],
    },
};

let siguienteId = 1;

function crearElemento(nombre, ambiente, categoria, indice) {
    const codigos = {
        tecnologia: "TEC",
        mobiliario: "MOB",
        otros: "OTR",
    };

    const novedadActiva = novedades.find((item) =>
        item.ambienteId === ambiente.id &&
        item.estado !== "Cerrada" &&
        item.elemento?.toLowerCase() === nombre.toLowerCase()
    );

    let estado = "bueno";

    if (novedadActiva) {
        estado = novedadActiva.tipo === "Mantenimiento"
            ? "mantenimiento"
            : "danado";
    }

    return {
        id: siguienteId++,
        nombre,
        codigo: `${codigos[categoria]}-${ambiente.numero}-${String(indice + 1).padStart(3, "0")}`,
        serial: categoria === "mobiliario"
            ? null
            : `DEMO-${ambiente.numero}-${String(indice + 1).padStart(3, "0")}`,
        estado,
        novedad: novedadActiva?.descripcion || null,
    };
}

function crearCategorias(ambiente) {
    const listas = elementosPorTipo[ambiente.tipo] || elementosPorTipo.Laboratorio;

    return [
        {
            id: "tecnologia",
            nombre: "Tecnología",
            elementos: listas.tecnologia.map((nombre, indice) =>
                crearElemento(nombre, ambiente, "tecnologia", indice)
            ),
        },
        {
            id: "mobiliario",
            nombre: "Mobiliario",
            elementos: listas.mobiliario.map((nombre, indice) =>
                crearElemento(nombre, ambiente, "mobiliario", indice)
            ),
        },
        {
            id: "otros",
            nombre: "Otros elementos",
            elementos: listas.otros.map((nombre, indice) =>
                crearElemento(nombre, ambiente, "otros", indice)
            ),
        },
    ];
}

export const inventarioDetalle = Object.fromEntries(
    ambientes.map((ambiente) => [
        ambiente.id,
        {
            faltantes: elementosFaltantes[ambiente.id] || [],
            categorias: crearCategorias(ambiente),
        },
    ])
);

export const inventarios = ambientes
    .map((ambiente) => {
        const detalle = inventarioDetalle[ambiente.id];

        const tieneNovedades = detalle.categorias
            .flatMap((categoria) => categoria.elementos)
            .some((elemento) => elemento.novedad !== null);

        let estado = "completo";

        if (detalle.faltantes.length > 0) {
            estado = "incompleto";
        } else if (tieneNovedades) {
            estado = "revision";
        }

        return {
            id: ambiente.id,
            numero: ambiente.numero,
            estado,
        };
    })
    .sort((a, b) => Number(a.numero) - Number(b.numero));
