
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Novedades.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import PageHeader from "../../components/PageHeader/PageHeader";

import NovedadSummary from "../../components/novedades/NovedadSummary/NovedadSummary";
import NovedadFilters from "../../components/novedades/NovedadFilters/NovedadFilters";
import NovedadTable from "../../components/novedades/NovedadTable/NovedadTable";

const INITIAL_FILTERS = {
    search: "",
    estado: "",
    tipo: "",
    ambiente: "",
};

function Novedades() {
    const [filters, setFilters] = useState(INITIAL_FILTERS);

    const navigate = useNavigate();

    function handleFilterChange(name, value) {
        setFilters((previousFilters) => ({
            ...previousFilters,
            [name]: value,
        }));
    }

    function handleClearFilters() {
        setFilters(INITIAL_FILTERS);
    }

    function handleAddNovedad() {
        navigate("/novedades/nueva");
    }

    return (
        <div className="novedades-layout">
            <Sidebar />

            <main className="novedades-main">
                <div className="novedades-content">

                    <PageHeader
                        title="Novedades"
                        description="Consulta y realiza seguimiento de las novedades reportadas en los ambientes de formación."
                    />

                    <NovedadSummary />

                    <NovedadFilters
                        filters={filters}
                        onFilterChange={handleFilterChange}
                        onClear={handleClearFilters}
                        onAdd={handleAddNovedad}
                    />

                    <NovedadTable filters={filters} />

                </div>
            </main>
        </div>
    );
}

export default Novedades;
