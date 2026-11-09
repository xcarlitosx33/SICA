import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import "./InventarioTable.css";

const ESTADOS = {
    completo: "Completo",
    revision: "En revisión",
    incompleto: "Incompleto",
};

function InventarioTable({ inventarios }) {
    const navigate = useNavigate();

    return (
        <section className="inventario-table-container">
            <div className="inventario-table-header">
                <div>
                    <h2>Ambientes registrados</h2>
                    <p>Consulta el estado del inventario de cada ambiente.</p>
                </div>

                <span className="inventario-results-count">
                    {inventarios.length} ambientes
                </span>
            </div>

            <div className="inventario-table-wrapper">
                <table className="inventario-table">
                    <thead>
                        <tr>
                            <th>Ambiente</th>
                            <th>Estado del inventario</th>
                            <th>Acción</th>
                        </tr>
                    </thead>

                    <tbody>
                        {inventarios.length > 0 ? (
                            inventarios.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.numero}</td>

                                    <td>
                                        <span className={`inventario-status ${item.estado}`}>
                                            <span className="inventario-status-dot" />
                                            {ESTADOS[item.estado]}
                                        </span>
                                    </td>

                                    <td>
                                        <Button
                                            type="button"
                                            onClick={() =>
                                                navigate(`/inventario/detalle/${item.id}`)
                                            }
                                        >
                                            Ver detalle ›
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="inventario-empty">
                                    No se encontraron ambientes con esos filtros.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default InventarioTable;
