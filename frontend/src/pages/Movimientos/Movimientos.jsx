import "./Movimientos.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import MovimientoSummary from "../../components/movimientos/MovimientoSummary/MovimientoSummary";
import MovimientoFilters from "../../components/movimientos/MovimientoFilters/MovimientoFilters";
import MovimientoTable from "../../components/movimientos/MovimientoTable/MovimientoTable";

function Movimientos() {
    return (
        <div className="movimientos-layout">

            <Sidebar />

            <main className="movimientos-main">
                <div className="movimientos-content">

                    <section className="movimientos-header">

                        <div className="movimientos-header-info">
                            <h1>Movimientos</h1>

                            <p>
                                Consulta y supervisa los movimientos realizados
                                sobre los elementos y ambientes del centro.
                            </p>
                        </div>

                    </section>

                    <MovimientoSummary />
                    <MovimientoFilters />
                    <MovimientoTable />

                </div>
            </main>

        </div>
    );
}

export default Movimientos;