
import "./CoordinacionAcademica.css";

import Sidebar from "../../../../components/Sidebar/Sidebar";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import ValidacionesPendientes from "../../../../components/dashboard/CoordinacionAcademica/ValidacionesPendientes/ValidacionesPendientes";

function CoordinacionAcademica() {
    return (
        <div className="coordinacion-layout">
            <Sidebar />

            <main className="coordinacion-main">
                <div className="coordinacion-content">
                    <PageHeader
                        title="Panel de Control"
                        description="Bienvenido, Coordinador académico. Aquí tienes un resumen del estado actual de los recursos del centro."
                    />

                    <ValidacionesPendientes />
                </div>
            </main>
        </div>
    );
}

export default CoordinacionAcademica;
