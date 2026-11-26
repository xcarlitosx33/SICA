
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Novedades.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import PageHeader from "../../components/PageHeader/PageHeader";
import Button from "../../components/Button/Button";

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

    const canAdd =
        localStorage.getItem("sicaRolDemo") !== "administrador";

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
        navigate("/novedades/agregar");
    }

    return (
        <div className="novedades-layout">
            <Sidebar />

            <main className="novedades-main">
                <div className="novedades-content">

                    <PageHeader
                        eyebrow="GESTIÓN DE NOVEDADES"
                        title="Novedades"
                        description="Consulta y realiza seguimiento de las novedades reportadas en los ambientes de formación."
                        icon={
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" />
                                <path d="M10 21h4" />
                            </svg>
                        }
                    />

                    <NovedadSummary />

                    <NovedadFilters
                        filters={filters}
                        onFilterChange={handleFilterChange}
                        onClear={handleClearFilters}
                    />

                    {canAdd && (
                        <div className="novedades-page-actions">
                            <Button
                                type="button"
                                variant="primary"
                                onClick={handleAddNovedad}
                            >
                                <span aria-hidden="true">＋</span>
                                Agregar novedad
                            </Button>
                        </div>
                    )}

                    <NovedadTable filters={filters} />

                </div>
            </main>
        </div>
    );
}

export default Novedades;
