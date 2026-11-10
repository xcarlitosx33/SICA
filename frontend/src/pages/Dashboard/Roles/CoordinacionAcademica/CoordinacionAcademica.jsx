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
                        title="Panel de coordinación académica"
                        description="Gestiona las solicitudes de programación y los cambios de ambientes del centro."
                    />

                    <section className="role-dashboard-stats">
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

                    <section className="role-panel">
                        <div className="role-panel-header">
                            <div>
                                <h2>Herramientas de coordinación</h2>
                                <p>Accesos a los módulos de seguimiento académico.</p>
                            </div>
                        </div>
                        <div className="role-quick-actions">
                            <Button onClick={() => window.location.assign("/dashboard/coordinacion-academica/historial-resoluciones")}>
                                Historial de resoluciones
                            </Button>
                            <Button onClick={() => window.location.assign("/programacion")}>
                                Programación
                            </Button>
                            <Button onClick={() => window.location.assign("/ambientes")}>
                                Consultar ambientes
                            </Button>
                            <Button onClick={() => window.location.assign("/movimientos")}>
                                Consultar movimientos
                            </Button>
                        </div>
                    </section>

                    <ValidacionesPendientes />
                </div>
            </main>
        </div>
    );
}

export default CoordinacionAcademica;
