import { useMemo, useState } from "react";

import "./Inventario.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import PageHeader from "../../components/PageHeader/PageHeader";

import InventarioSummary from "../../components/inventario/InventarioSummary/InventarioSummary";
import InventarioFilters from "../../components/inventario/InventarioFilters/InventarioFilters";
import InventarioTable from "../../components/inventario/InventarioTable/InventarioTable";

import { inventarios } from "../../data/inventario";

function Inventario() {
    const [busqueda, setBusqueda] = useState("");
    const [estado, setEstado] = useState("");

    const inventariosFiltrados = useMemo(() => {
        return inventarios.filter((item) => {
            const coincideNumero = item.numero
                .toLowerCase()
                .includes(busqueda.trim().toLowerCase());

            const coincideEstado = estado === "" || item.estado === estado;

            return coincideNumero && coincideEstado;
        });
    }, [busqueda, estado]);

    function limpiarFiltros() {
        setBusqueda("");
        setEstado("");
    }

    return (
        <div className="inventario-layout">
            <Sidebar />

            <main className="inventario-main">
                <div className="inventario-content">
                    <PageHeader
                        eyebrow="GESTIÓN DE RECURSOS"
                        title="Inventario de materiales"
                        description="Consulta el estado del inventario de los ambientes de formación."
                        icon={
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m3 7 9-4 9 4-9 4-9-4Z" />
                                <path d="M3 7v10l9 4 9-4V7M12 11v10" />
                            </svg>
                        }
                    />

                    <InventarioSummary inventarios={inventarios} />

                    <InventarioFilters
                        busqueda={busqueda}
                        setBusqueda={setBusqueda}
                        estado={estado}
                        setEstado={setEstado}
                        limpiarFiltros={limpiarFiltros}
                    />

                    <InventarioTable inventarios={inventariosFiltrados} />
                </div>
            </main>
        </div>
    );
}

export default Inventario;
