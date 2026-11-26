
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
                        eyebrow="GESTIÓN DE AMBIENTES"
                        title="Ambientes de formación"
                        description="Consulta la información y disponibilidad de los ambientes de formación."
                        icon={
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="4" y="3" width="16" height="18" rx="2" />
                                <path d="M9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1M10 21v-3h4v3" />
                            </svg>
                        }
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
