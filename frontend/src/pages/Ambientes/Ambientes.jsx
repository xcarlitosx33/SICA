
import "./Ambientes.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import PageHeader from "../../components/PageHeader/PageHeader";
import AmbienteSummary from "../../components/ambientes/AmbienteSummary/AmbienteSummary";
import AmbienteFilters from "../../components/ambientes/AmbienteFilters/AmbienteFilters";
import AmbienteTable from "../../components/ambientes/AmbienteTable/AmbienteTable";

function Ambientes() {
    return (
        <div className="ambientes-layout">
            <Sidebar />

            <main className="ambientes-main">
                <div className="ambientes-content">
                    <PageHeader
                        title="Ambientes"
                        description="Consulta la información y disponibilidad de los ambientes de formación."
                    />

                    <AmbienteSummary />
                    <AmbienteFilters />
                    <AmbienteTable />
                </div>
            </main>
        </div>
    );
}

export default Ambientes;
