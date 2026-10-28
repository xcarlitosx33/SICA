import "./Movimientos.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import PageHeader from "../../components/PageHeader/PageHeader";

import MovimientoSummary from "../../components/movimientos/MovimientoSummary/MovimientoSummary";
import MovimientoFilters from "../../components/movimientos/MovimientoFilters/MovimientoFilters";
import MovimientoTable from "../../components/movimientos/MovimientoTable/MovimientoTable";

function Movimientos() {
    return (
        <div className="movimientos-layout">

            <Sidebar />

            <main className="movimientos-main">
                <div className="movimientos-content">

                <PageHeader 
                    title="Movimientos"
                    description="Consulta y supervisa los movimientos realizados sobre los elementos y ambientes del centro."
                />

                    <MovimientoSummary />
                    <MovimientoFilters />
                    <MovimientoTable />

                </div>
            </main>

        </div>
    );
}

export default Movimientos;