import "./CoordinacionAcademica.css";
import "../role-dashboard.css";

import Sidebar from "../../../../components/Sidebar/Sidebar";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import Button from "../../../../components/Button/Button";
import ValidacionesPendientes from "../../../../components/dashboard/CoordinacionAcademica/ValidacionesPendientes/ValidacionesPendientes";

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

                    <div className="role-dashboard-welcome">
                        <h2>Resumen de coordinación</h2>
                        <p>Seguimiento de requerimientos académicos y disponibilidad de espacios.</p>
                    </div>

                    <section className="role-dashboard-stats">
                        <article className="role-stat-card warning">
                            <span>Solicitudes pendientes</span>
                            <strong>3</strong>
                            <small>Requieren validación</small>
                        </article>
                        <article className="role-stat-card">
                            <span>Ambientes registrados</span>
                            <strong>16</strong>
                            <small>Espacios del centro</small>
                        </article>
                        <article className="role-stat-card info">
                            <span>Programación</span>
                            <strong>Activa</strong>
                            <small>Seguimiento académico</small>
                        </article>
                        <article className="role-stat-card">
                            <span>Historial</span>
                            <strong>Disponible</strong>
                            <small>Consulta de resoluciones</small>
                        </article>
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
