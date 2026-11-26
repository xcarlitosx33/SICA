import "./CoordinacionAcademica.css";
import "../../../../styles/role-dashboard.css";

import Sidebar from "../../../../components/Sidebar/Sidebar";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import Button from "../../../../components/Button/Button";
import ValidacionesPendientes from "../../../../components/dashboard/CoordinacionAcademica/ValidacionesPendientes/ValidacionesPendientes";

import StatCard from "../../../../components/StatCard/StatCard";
import StatCardGrid from "../../../../components/StatCard/StatCardGrid";

function CoordinacionAcademica() {
    return (
        <div className="role-dashboard-layout">
            <Sidebar />

            <main className="role-dashboard-main">
                <div className="role-dashboard-content">
                    <PageHeader
                        eyebrow="PANEL DE COORDINACIÓN"
                        title="Panel de coordinación académica"
                        description="Gestiona las solicitudes de programación y los cambios de ambientes del centro."
                        icon={
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 3 20 7v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z" />
                                <path d="M9 12h6M12 9v6" />
                            </svg>
                        }
                    />

                    <section className="coordinacion-stats">
                        <StatCardGrid minCardWidth={240}>
                            <StatCard
                                title="Solicitudes pendientes"
                                value={3}
                                description="Requieren validación"
                                status="warning"
                            />

                            <StatCard
                                title="Ambientes registrados"
                                value={16}
                                description="Espacios del centro"
                                status="neutral"
                            />

                            <StatCard
                                title="Programación"
                                value="Activa"
                                description="Seguimiento académico"
                                status="positive"
                            />

                            <StatCard
                                title="Historial"
                                value="Disponible"
                                description="Consulta de resoluciones"
                                status="info"
                            />
                        </StatCardGrid>
                    </section>



                    <ValidacionesPendientes />
                </div>
            </main>
        </div>
    );
}

export default CoordinacionAcademica;
