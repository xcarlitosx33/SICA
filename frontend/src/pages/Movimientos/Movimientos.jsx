
import { useNavigate } from "react-router-dom";

import "./Movimientos.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import PageHeader from "../../components/PageHeader/PageHeader";
import Button from "../../components/Button/Button";

import MovimientoSummary from "../../components/movimientos/MovimientoSummary/MovimientoSummary";
import MovimientoFilters from "../../components/movimientos/MovimientoFilters/MovimientoFilters";
import MovimientoTable from "../../components/movimientos/MovimientoTable/MovimientoTable";

function Movimientos() {
    const navigate = useNavigate();

    return (
        <div className="movimientos-layout">
            <Sidebar />

            <main className="movimientos-main">
                <div className="movimientos-content">

                    <PageHeader
                        eyebrow="CONTROL DE RECURSOS"
                        title="Movimientos"
                        description="Consulta y supervisa los movimientos realizados sobre los elementos y ambientes del centro."
                        icon={
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M7 7h14l-4-4" />
                                <path d="M17 17H3l4 4" />
                            </svg>
                        }
                    />

                    <MovimientoSummary />

                    <MovimientoFilters />

                    <div className="movimientos-actions">
                        <Button
                            variant="primary"
                            onClick={() => navigate("/movimientos/agregar")}
                        >
                            <span>+</span>
                            Agregar movimiento
                        </Button>
                    </div>

                    <MovimientoTable />

                </div>
            </main>
        </div>
    );
}

export default Movimientos;
