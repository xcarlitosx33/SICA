
import "./Calendario.css";

import VistaDiaria from "../VistaDiaria/VistaDiaria";
import VistaSemanal from "../VistaSemanal/VistaSemanal";
import VistaMensual from "../VistaMensual/VistaMensual";

function Calendario({
    vistaActiva,
    sesionSeleccionada,
    onSeleccionarSesion,
    onSeleccionarDia
}) {
    const propsCalendario = {
        sesionSeleccionada,
        onSeleccionarSesion
    };

    return (
        <section className="programacion-calendar">
            <div className="programacion-calendar-content">

                {vistaActiva === "diaria" && (
                    <VistaDiaria {...propsCalendario} />
                )}

                {vistaActiva === "semanal" && (
                    <VistaSemanal {...propsCalendario} />
                )}

                {vistaActiva === "mensual" && (
                    <VistaMensual
                        {...propsCalendario}
                        onSeleccionarDia={onSeleccionarDia}
                    />
                )}

            </div>
        </section>
    );
}

export default Calendario;
