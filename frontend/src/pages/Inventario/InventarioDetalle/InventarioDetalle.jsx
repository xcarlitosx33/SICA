import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../../../components/Sidebar/Sidebar";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Button from "../../../components/Button/Button";

import { inventarios, inventarioDetalle } from "../../../data/inventario";

import "./InventarioDetalle.css";

const ESTADOS = {
    bueno: "Bueno",
    danado: "Dañado",
    mantenimiento: "En mantenimiento",
    fuera_servicio: "Fuera de servicio",
};

function InventarioDetalle() {
    const { id } = useParams();
    const navigate = useNavigate();

    const ambiente = inventarios.find((item) => item.id === id);
    const detalle = inventarioDetalle[id];

    if (!ambiente) {
        return (
            <div className="inventario-detalle-layout">
                <Sidebar />
                <main className="inventario-detalle-main">
                    <div className="inventario-detalle-content">
                        <h1>Ambiente no encontrado</h1>
                        <Button onClick={() => navigate("/inventario")}>
                            Volver al inventario
                        </Button>
                    </div>
                </main>
            </div>
        );
    }

    const categorias = detalle?.categorias || [];
    const elementos = categorias.flatMap((categoria) => categoria.elementos);
    const faltantes = detalle?.faltantes || [];
    const totalElementos = elementos.length;
    const totalNovedades = elementos.filter((item) => item.novedad).length;
    const totalEsperados = totalElementos + faltantes.length;

    return (
        <div className="inventario-detalle-layout">
            <Sidebar />

            <main className="inventario-detalle-main">
                <div className="inventario-detalle-content">
                    <PageHeader
                        title={`Inventario del ambiente ${ambiente.numero}`}
                        description="Consulta los elementos registrados, pendientes y su estado de conservación."
                    />

                    <div className="inventario-detail-actions">
                        <Button
                            type="button"
                            onClick={() => navigate("/inventario")}
                        >
                            ‹ Volver al inventario
                        </Button>
                    </div>

                    <section className="inventario-detail-summary">
                        <article className="inventario-detail-card">
                            <span>Elementos registrados</span>
                            <strong>{totalElementos}</strong>
                            <small>Objetos registrados</small>
                        </article>

                        <article className="inventario-detail-card">
                            <span>Elementos faltantes</span>
                            <strong className={faltantes.length > 0 ? "has-issues" : ""}>
                                {faltantes.length}
                            </strong>
                            <small>Pendientes de registro</small>
                        </article>

                        <article className="inventario-detail-card">
                            <span>Elementos con novedades</span>
                            <strong className={totalNovedades > 0 ? "has-issues" : ""}>
                                {totalNovedades}
                            </strong>
                            <small>Requieren atención</small>
                        </article>
                    </section>

                    <section className="inventario-categories-section">
                        <div className="inventario-section-heading">
                            <div>
                                <h2>Elementos registrados</h2>
                                <p>
                                    {totalElementos} de {totalEsperados} elementos esperados.
                                </p>
                            </div>
                        </div>

                        {categorias.length > 0 ? (
                            <div className="inventario-categories">
                                {categorias.map((categoria, index) => (
                                    <details
                                        className="inventario-category"
                                        key={categoria.id}
                                        open={index === 0}
                                    >
                                        <summary className="inventario-category-summary">
                                            <div className="inventario-category-title">
                                                <span className="inventario-category-icon">
                                                    {categoria.id === "tecnologia"
                                                        ? "▣"
                                                        : categoria.id === "mobiliario"
                                                            ? "▤"
                                                            : "□"}
                                                </span>

                                                <div>
                                                    <strong>{categoria.nombre}</strong>
                                                    <small>
                                                        {categoria.elementos.length} elementos registrados
                                                    </small>
                                                </div>
                                            </div>

                                            <span className="inventario-category-chevron">⌄</span>
                                        </summary>

                                        <div className="inventario-category-content">
                                            {categoria.elementos.length > 0 ? (
                                                categoria.elementos.map((elemento) => (
                                                    <article
                                                        className="inventario-item"
                                                        key={elemento.id}
                                                    >
                                                        <div className="inventario-item-main">
                                                            <div className="inventario-item-heading">
                                                                <h3>{elemento.nombre}</h3>

                                                                <span className={`inventario-item-status ${elemento.estado}`}>
                                                                    <span />
                                                                    {ESTADOS[elemento.estado] || elemento.estado}
                                                                </span>
                                                            </div>

                                                            <div className="inventario-item-data">
                                                                <span>
                                                                    <strong>Código:</strong> {elemento.codigo}
                                                                </span>

                                                                {elemento.serial && (
                                                                    <span>
                                                                        <strong>Serial:</strong> {elemento.serial}
                                                                    </span>
                                                                )}
                                                            </div>

                                                            {elemento.novedad && (
                                                                <div className="inventario-item-issue">
                                                                    <strong>
                                                                        <span className="inventario-issue-dot" />
                                                                        Novedad registrada
                                                                    </strong>
                                                                    <p>{elemento.novedad}</p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </article>
                                                ))
                                            ) : (
                                                <p className="inventario-category-empty">
                                                    No hay elementos registrados en esta categoría.
                                                </p>
                                            )}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        ) : (
                            <div className="inventario-no-data">
                                <h3>Inventario sin información detallada</h3>
                                <p>No hay elementos registrados para este ambiente.</p>
                            </div>
                        )}
                    </section>

                    <section className="inventario-categories-section" style={{ marginTop: "24px" }}>
                        <div className="inventario-section-heading">
                            <div>
                                <h2>Elementos pendientes de registro</h2>
                                <p>Elementos esperados que todavía no aparecen en el inventario.</p>
                            </div>
                        </div>

                        {faltantes.length > 0 ? (
                            <div className="inventario-categories">
                                {faltantes.map((nombre, index) => (
                                    <article className="inventario-item" key={`${nombre}-${index}`}>
                                        <div className="inventario-item-main">
                                            <div className="inventario-item-heading">
                                                <h3>{nombre}</h3>
                                                <span className="inventario-item-status danado">
                                                    <span />
                                                    Pendiente de registro
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <p className="inventario-category-empty">
                                Todos los elementos esperados están registrados.
                            </p>
                        )}
                    </section>
                </div>
            </main>
        </div>
    );
}

export default InventarioDetalle;
