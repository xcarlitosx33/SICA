
import { useRef, useState } from "react";
import "./Programacion.css";
import sesionesProgramacion from "../../data/programacion";

import Sidebar from "../../components/Sidebar/Sidebar";
import PageHeader from "../../components/PageHeader/PageHeader";

import ProgramacionSummary from "../../components/programacion/ProgramacionSummary/ProgramacionSummary";
import ProgramacionFilters from "../../components/programacion/ProgramacionFilters/ProgramacionFilters";
import ProgramacionToolbar from "../../components/programacion/ProgramacionToolbar/ProgramacionToolbar";
import Calendario from "../../components/programacion/Calendario/Calendario";
import PanelProgramacion from "../../components/programacion/PanelProgramacion/PanelProgramacion";

function Programacion() {

    const [vistaActiva, setVistaActiva] = useState("semanal");
    const [sesionSeleccionada, setSesionSeleccionada] = useState(null);
    const [sesionesDia, setSesionesDia] = useState([]);
    const panelRef = useRef(null);

    const seleccionarSesion = (sesion) => {
        setSesionSeleccionada(sesion);

        setTimeout(() => {
            panelRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100);
    };

    const seleccionarDia = (sesiones) => {
        setSesionesDia(sesiones);
        setSesionSeleccionada(null);

        setTimeout(() => {
            panelRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100);
    };
    const cambiarVista = (nuevaVista) => {
        setVistaActiva(nuevaVista);
        setSesionSeleccionada(null);
        setSesionesDia([]);
    };
    const volverALista = () => {
        setSesionSeleccionada(null);
    };
    return (
        <div className="programacion-layout">

            <Sidebar />

            <main className="programacion-main">
                <div className="programacion-content">

                    <PageHeader
                        title="Programación de Ambientes"
                        description="Gestiona y consulta la programación de sesiones por grupo, ambiente y competencia."
                    />

                    <ProgramacionSummary />

                    <ProgramacionFilters />

                    <ProgramacionToolbar
                        vistaActiva={vistaActiva}
                        onCambiarVista={cambiarVista}
                    />

                    <Calendario
                        vistaActiva={vistaActiva}
                        sesionSeleccionada={sesionSeleccionada}
                        onSeleccionarSesion={seleccionarSesion}
                        onSeleccionarDia={seleccionarDia}
                    />

                    <div ref={panelRef}>
                        <PanelProgramacion
                            sesionSeleccionada={sesionSeleccionada}
                            sesionesDia={sesionesDia}
                            onSeleccionarSesion={seleccionarSesion}
                            onVolverLista={volverALista}
                        />

                    </div>

                </div>
            </main>

        </div>
    );
}

export default Programacion;
