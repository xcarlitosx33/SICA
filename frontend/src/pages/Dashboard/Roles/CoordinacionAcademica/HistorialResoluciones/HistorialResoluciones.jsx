
import { useNavigate } from "react-router-dom";

import "./HistorialResoluciones.css";

import Sidebar from "../../../../../components/Sidebar/Sidebar";
import PageHeader from "../../../../../components/PageHeader/PageHeader";

import HistorialSummary from "../../../../../components/dashboard/CoordinacionAcademica/HistorialResoluciones/HistorialSummary/HistorialSummary";
import HistorialFilters from "../../../../../components/dashboard/CoordinacionAcademica/HistorialResoluciones/HistorialFilters/HistorialFilters";
import HistorialTable from "../../../../../components/dashboard/CoordinacionAcademica/HistorialResoluciones/HistorialTable/HistorialTable";

function HistorialResoluciones() {

    const navigate = useNavigate();

    return (
        <div className="historial-layout">

            <Sidebar />

            <main className="historial-main">
                <div className="historial-content">

                    <PageHeader
                        title="Historial de resoluciones"
                        description="Consulta y revisa el historial de solicitudes gestionadas por Coordinación Académica."
                    />


                    <section className="historial-container">
                        <button
                            type="button"
                            className="historial-back-button"
                            onClick={() => navigate("/dashboard/coordinacion-academica")}
                        >
                            ← Volver al dashboard
                        </button>

                        <HistorialSummary />
                        <HistorialFilters />
                        <HistorialTable />
                    </section>

                </div>
            </main>

        </div>
    );
}

export default HistorialResoluciones;
