
import "./Calendario.css";

import VistaDiaria from "../VistaDiaria/VistaDiaria";
import VistaSemanal from "../VistaSemanal/VistaSemanal";
import VistaMensual from "../VistaMensual/VistaMensual";

function Calendario({ vistaActiva }) {

    return (
        <section className="programacion-calendar">

            <div className="programacion-calendar-content">

                {vistaActiva === "diaria" && ( <VistaDiaria />)}

                {vistaActiva === "semanal" && (<VistaSemanal /> )}

                {vistaActiva === "mensual" && ( <VistaMensual /> )}

            </div>

        </section>
    );
}

export default Calendario;
