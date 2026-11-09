import { useNavigate } from "react-router-dom";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import Button from "../../../../components/Button/Button";
import "../role-dashboard.css";

function AdminEdificio() {
    const navigate = useNavigate();

    return (
        <div className="role-dashboard-layout">
            <Sidebar />
            <main className="role-dashboard-main">
                <div className="role-dashboard-content">
                    <PageHeader
                        title="Administración del edificio"
                        description="Supervisa los ambientes, el inventario y las condiciones de infraestructura."
                    />

                    <div className="role-dashboard-welcome">
                        <h2>Resumen operativo</h2>
                        <p>Estado general de los espacios y recursos asignados al edificio.</p>
                    </div>

                    <section className="role-dashboard-stats">
                        <article className="role-stat-card">
                            <span>Ambientes registrados</span>
                            <strong>16</strong>
                            <small>Espacios disponibles en SICA</small>
                        </article>
                        <article className="role-stat-card warning">
                            <span>Inventarios incompletos</span>
                            <strong>3</strong>
                            <small>Requieren actualización</small>
                        </article>
                        <article className="role-stat-card danger">
                            <span>Novedades activas</span>
                            <strong>4</strong>
                            <small>Pendientes o en proceso</small>
                        </article>
                        <article className="role-stat-card info">
                            <span>Movimientos</span>
                            <strong>5</strong>
                            <small>Registros de demostración</small>
                        </article>
                    </section>

                    <div className="role-dashboard-grid">
                        <section className="role-panel">
                            <div className="role-panel-header">
                                <div>
                                    <h2>Seguimiento de inventarios</h2>
                                    <p>Ambientes que requieren atención.</p>
                                </div>
                                <Button onClick={() => navigate("/inventario")}>
                                    Ver inventario
                                </Button>
                            </div>

                            <div className="role-list">
                                <article className="role-list-item">
                                    <div>
                                        <h3>Ambiente 103</h3>
                                        <p>3 elementos pendientes de registro.</p>
                                    </div>
                                    <span className="role-status pending">Incompleto</span>
                                </article>
                                <article className="role-list-item">
                                    <div>
                                        <h3>Ambiente 203</h3>
                                        <p>4 elementos pendientes de registro.</p>
                                    </div>
                                    <span className="role-status pending">Incompleto</span>
                                </article>
                                <article className="role-list-item">
                                    <div>
                                        <h3>Ambiente 402</h3>
                                        <p>2 elementos pendientes de registro.</p>
                                    </div>
                                    <span className="role-status pending">Incompleto</span>
                                </article>
                            </div>
                        </section>

                        <section className="role-panel">
                            <div className="role-panel-header">
                                <div>
                                    <h2>Novedades por atender</h2>
                                    <p>Reportes que requieren seguimiento.</p>
                                </div>
                            </div>
                            <div className="role-list">
                                <article className="role-list-item">
                                    <div>
                                        <h3>Aire acondicionado</h3>
                                        <p>Ambiente 101 · Mantenimiento.</p>
                                    </div>
                                    <span className="role-status pending">Pendiente</span>
                                </article>
                                <article className="role-list-item">
                                    <div>
                                        <h3>Proyector</h3>
                                        <p>Ambiente 102 · Equipamiento.</p>
                                    </div>
                                    <span className="role-status alert">En proceso</span>
                                </article>
                            </div>
                            <div className="role-quick-actions">
                                <Button onClick={() => navigate("/novedades")}>
                                    Revisar novedades
                                </Button>
                            </div>
                        </section>
                    </div>

                    <section className="role-panel">
                        <div className="role-panel-header">
                            <div>
                                <h2>Gestión del edificio</h2>
                                <p>Accede a las herramientas operativas.</p>
                            </div>
                        </div>
                        <div className="role-quick-actions">
                            <Button onClick={() => navigate("/ambientes")}>Administrar ambientes</Button>
                            <Button onClick={() => navigate("/inventario")}>Consultar inventario</Button>
                            <Button onClick={() => navigate("/movimientos")}>Consultar movimientos</Button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default AdminEdificio;
