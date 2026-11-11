import { useNavigate } from "react-router-dom";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import Button from "../../../../components/Button/Button";
import "../../../../styles/role-dashboard.css";
import "./Instructor.css";
const agenda = [
    {
        hora: "07:00 - 10:00",
        ficha: "2791834",
        modulo: "Programación Web",
        ambiente: "Ambiente 204",
        estado: "En curso",
        descripcion: "Arquitecturas Backend y Frameworks REST.",
    },
    {
        hora: "10:30 - 13:00",
        ficha: "2843920",
        modulo: "Bases de Datos",
        ambiente: "Lab IoT 102",
        estado: "Próximo",
        descripcion: "Práctica de integración con PostgreSQL.",
    },
    {
        hora: "14:00 - 17:00",
        ficha: "2791834",
        modulo: "Tutoría técnica",
        ambiente: "Aula Magistral 4",
        estado: "Programado",
        descripcion: "Revisión de proyectos formativos.",
    },
];

const ambientes = [
    {
        numero: "204",
        nombre: "Software y Sistemas",
        capacidad: "30 aprendices",
        estado: "En uso normal",
    },
    {
        numero: "102",
        nombre: "Laboratorio IoT",
        capacidad: "25 aprendices",
        estado: "Disponible próximo bloque",
    },
    {
        numero: "M4",
        nombre: "Aula Magistral 4",
        capacidad: "60 aprendices",
        estado: "Libre",
    },
];

function Home() {
    const navigate = useNavigate();

    return (
        <div className="role-dashboard-layout instructor-dashboard">
            <Sidebar />

            <main className="role-dashboard-main">
                <div className="role-dashboard-content">
                    <PageHeader
                        title="Panel del instructor"
                        description="Consulta tus ambientes asignados, agenda académica y novedades."
                    />



                    <section className="role-dashboard-stats">
                        <article className="role-stat-card">
                            <span>Ambientes asignados</span>
                            <strong>3</strong>
                            <small>Espacios de esta semana</small>
                        </article>
                        <article className="role-stat-card danger">
                            <span>Novedades activas</span>
                            <strong>1</strong>
                            <small>Requiere seguimiento</small>
                        </article>
                        <article className="role-stat-card info">
                            <span>Bloques académicos</span>
                            <strong>3</strong>
                            <small>Programados para hoy</small>
                        </article>
                        <article className="role-stat-card warning">
                            <span>Checklists</span>
                            <strong>1</strong>
                            <small>Pendiente de completar</small>
                        </article>
                    </section>

                    <div className="role-dashboard-grid">
                        <section className="role-panel">
                            <div className="role-panel-header">
                                <div>
                                    <h2>Mis ambientes asignados</h2>
                                    <p>Consulta el estado de los espacios bajo tu responsabilidad.</p>
                                </div>
                                <Button onClick={() => navigate("/ambientes")}>
                                    Ver ambientes
                                </Button>
                            </div>

                            <div className="role-list">
                                {ambientes.map((ambiente) => (
                                    <article className="role-list-item" key={ambiente.numero}>
                                        <div>
                                            <h3>{ambiente.nombre} · {ambiente.numero}</h3>
                                            <p>{ambiente.capacidad} · Revisión y seguimiento de espacio.</p>
                                        </div>
                                        <span className="role-status">{ambiente.estado}</span>
                                    </article>
                                ))}
                            </div>

                            <div className="role-quick-actions">
                                <Button onClick={() => navigate("/inventario")}>
                                    Consultar inventario
                                </Button>
                                <Button onClick={() => navigate("/novedades")}>
                                    Ver novedades
                                </Button>
                            </div>
                        </section>

                        <section className="role-panel">
                            <div className="role-panel-header">
                                <div>
                                    <h2>Mi agenda de hoy</h2>
                                    <p>Bloques académicos programados.</p>
                                </div>
                            </div>

                            <div className="role-list">
                                {agenda.map((item) => (
                                    <article className="role-list-item" key={item.hora}>
                                        <div>
                                            <h3>{item.hora} · {item.modulo}</h3>
                                            <p>{item.ficha} · {item.ambiente}</p>
                                            <p>{item.descripcion}</p>
                                        </div>
                                        <span className={`role-status ${item.estado === "En curso" ? "" : "pending"}`}>
                                            {item.estado}
                                        </span>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </div>

                    <section className="role-panel">
                        <div className="role-panel-header">
                            <div>
                                <h2>Accesos rápidos</h2>
                                <p>Gestiona las actividades relacionadas con tus espacios.</p>
                            </div>
                        </div>
                        <div className="role-quick-actions">
                            <Button onClick={() => navigate("/novedades")}>
                                Reportar o consultar novedades
                            </Button>
                            <Button onClick={() => navigate("/movimientos")}>
                                Consultar movimientos
                            </Button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Home;
