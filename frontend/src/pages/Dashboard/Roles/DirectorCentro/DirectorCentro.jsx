import { useNavigate } from "react-router-dom";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import Button from "../../../../components/Button/Button";
import "../../../../styles/role-dashboard.css";
import "./DirectorCentro.css";

function DirectorCentro() {
    const navigate = useNavigate();

    return (
        <div className="role-dashboard-layout director-centro-dashboard">
            <Sidebar />
            <main className="role-dashboard-main">
                <div className="role-dashboard-content">
                    <PageHeader
                        eyebrow="PANEL DE DIRECCIÓN"
                        title="Panel de dirección"
                        description="Consulta el estado general de los recursos y la operación del centro de formación."
                        icon={
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 21h18" />
                                <path d="M5 21V7l7-4 7 4v14" />
                                <path d="M9 21v-5h6v5" />
                                <path d="M9 9h.01M15 9h.01M9 12h.01M15 12h.01" />
                            </svg>
                        }
                    />

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
                                    <Button
                                        type="button"
                                        variant="primary"
                                        onClick={() => navigate("/ambientes")}
                                    >
                                        Consultar
                                    </Button>
                                </article>
                                <article className="role-list-item">
                                    <div>
                                        <h3>Inventario</h3>
                                        <p>Estado de los recursos registrados.</p>
                                    </div>
                                    <Button
                                        type="button"
                                        variant="primary"
                                        onClick={() => navigate("/inventario")}
                                    >
                                        Consultar
                                    </Button>
                                </article>
                                <article className="role-list-item">
                                    <div>
                                        <h3>Movimientos</h3>
                                        <p>Traslados y bajas de elementos.</p>
                                    </div>
                                    <Button
                                        type="button"
                                        variant="primary"
                                        onClick={() => navigate("/inventario")}
                                    >
                                        Consultar
                                    </Button>
                                </article>
                            </div>
                        </section>
                    </div>


                </div>
            </main>
        </div>
    );
}

export default DirectorCentro;
