
import { novedades } from "./novedades";

const STORAGE_KEY = "sicaNovedades";

export function getNovedades() {
    try {
        const guardadas = localStorage.getItem(STORAGE_KEY);

        if (!guardadas) {
            return novedades;
        }

        const novedadesGuardadas = JSON.parse(guardadas);

        if (!Array.isArray(novedadesGuardadas)) {
            return novedades;
        }

        return novedades.map((novedadOriginal) => {
            const novedadActualizada = novedadesGuardadas.find(
                (item) => item.id === novedadOriginal.id
            );

            return novedadActualizada
                ? { ...novedadOriginal, ...novedadActualizada }
                : novedadOriginal;
        });
    } catch (error) {
        console.error("Error al consultar las novedades:", error);
        return novedades;
    }
}

export function updateNovedadEstado(id, estado) {
    const novedadesActuales = getNovedades();

    const novedadesActualizadas = novedadesActuales.map((novedad) =>
        novedad.id === id
            ? { ...novedad, estado }
            : novedad
    );

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(novedadesActualizadas)
    );

    window.dispatchEvent(new Event("sica-novedades-updated"));
}

export function subscribeNovedades(callback) {
    window.addEventListener("sica-novedades-updated", callback);
    window.addEventListener("storage", callback);

    return () => {
        window.removeEventListener("sica-novedades-updated", callback);
        window.removeEventListener("storage", callback);
    };
}
