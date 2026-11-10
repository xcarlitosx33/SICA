import { useNavigate } from "react-router-dom";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import Button from "../../../../components/Button/Button";
import "../../../../styles/role-dashboard.css";

function DirectorCentro() {
    const navigate = useNavigate();

    return (
        <div className="role-dashboard-layout">
            <Sidebar />
            <main className="role-dashboard-main">
                <div className="role-dashboard-content">
                    <PageHeader
                        title="Panel de dirección"
                        description="Consulta el estado general de los recursos y la operación del centro de formación."
                    />

                    <div className="role-dashboard-welcome">
                        <h2>Resumen institucional</h2>
                        <p>Indicadores generales para el seguimiento y la toma de decisiones.</p>
                    </div>

                    <section className="role-dashboard-stats">
                        <article className="role-stat-card">
                            <span>Ambientes registrados</span>
                            <strong>16</strong>
                            <small>Espacios del centro</small>
                        </article>
                        <article className="role-stat-card warning">
                            <span>Inventarios incompletos</span>
                            <strong>3</strong>
                            <small>Requieren seguimiento</small>
                        </article>
                        <article className="role-stat-card danger">
                            <span>Novedades activas</span>
                            <strong>4</strong>
                            <small>Reportes por atender</small>
                        </article>
                        <article className="role-stat-card info">
                            <span>Movimientos registrados</span>
                            <strong>5</strong>
                            <small>Registros de demostración</small>
                        </article>
                    </section>

                    <div className="role-dashboard-grid">
                        <section className="role-panel">
                            <div className="role-panel-header">
                                <div>
                                    <h2>Alertas institucionales</h2>
                                    <p>Situaciones que requieren seguimiento.</p>
                                </div>
                            </div>
                            <div className="role-list">
                                <article className="role-list-item">
                                    <div>
                                        <h3>Inventarios incompletos</h3>
                                        <p>Ambientes 103, 203 y 402 presentan elementos pendientes.</p>
                                    </div>
                                    <span className="role-status pending">Seguimiento</span>
                                </article>
                                <article className="role-list-item">
                                    <div>
                                        <h3>Novedades de infraestructura y equipos</h3>
                                        <p>Existen reportes pendientes o en proceso de atención.</p>
                                    </div>
                                    <span className="role-status alert">Atención</span>
                                </article>
                                <article className="role-list-item">
                                    <div>
                                        <h3>Solicitudes de coordinación</h3>
                                        <p>Requerimientos académicos pendientes de validación.</p>
                                    </div>
                                    <span className="role-status pending">Pendiente</span>
                                </article>
                            </div>
                        </section>

                        <section className="role-panel">
                            <div className="role-panel-header">
                                <div>
                                    <h2>Accesos institucionales</h2>
                                    <p>Consulta la operación del centro.</p>
                                </div>
                            </div>
                            <div className="role-list">
                                <article className="role-list-item">
                                    <div>
                                        <h3>Ambientes</h3>
                                        <p>Disponibilidad y distribución de espacios.</p>
                                    </div>
                                    <Button onClick={() => navigate("/ambientes")}>Consultar</Button>
                                </article>
                                <article className="role-list-item">
                                    <div>
                                        <h3>Inventario</h3>
                                        <p>Estado de los recursos registrados.</p>
                                    </div>
                                    <Button onClick={() => navigate("/inventario")}>Consultar</Button>
                                </article>
                                <article className="role-list-item">
                                    <div>
                                        <h3>Movimientos</h3>
                                        <p>Traslados y bajas de elementos.</p>
                                    </div>
                                    <Button onClick={() => navigate("/movimientos")}>Consultar</Button>
                                </article>
                            </div>
                        </section>
                    </div>

                    <section className="role-panel">
                        <div className="role-panel-header">
                            <div>
                                <h2>Seguimiento del centro</h2>
                                <p>Accesos a los módulos de gestión.</p>
                            </div>
                        </div>
                        <div className="role-quick-actions">
                            <Button onClick={() => navigate("/novedades")}>Consultar novedades</Button>
                            <Button onClick={() => navigate("/ambientes")}>Ver ambientes</Button>
                            <Button onClick={() => navigate("/inventario")}>Ver inventario</Button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default DirectorCentro;
