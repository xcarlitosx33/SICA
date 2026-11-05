
import { useState } from "react";
import "./Programacion.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import PageHeader from "../../components/PageHeader/PageHeader";

import ProgramacionSummary from "../../components/programacion/ProgramacionSummary/ProgramacionSummary";
import ProgramacionFilters from "../../components/programacion/ProgramacionFilters/ProgramacionFilters";
import ProgramacionToolbar from "../../components/programacion/ProgramacionToolbar/ProgramacionToolbar";
import Calendario from "../../components/programacion/Calendario/Calendario";

function Programacion() {

    const [vistaActiva, setVistaActiva] = useState("semanal");

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
                        onCambiarVista={setVistaActiva}
                    />

                    <Calendario
                        vistaActiva={vistaActiva}
                    />

                </div>
            </main>

        </div>
    );
}

export default Programacion;
