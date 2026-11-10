import { useNavigate } from "react-router-dom";
import "./Movimientos.css";

import Sidebar from "../../components/Sidebar/Sidebar";

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
                    
                    {/* Contenedor del Header que alinea el título y los botones */}
                    <div className="movimientos-header">
                        <div className="movimientos-header-info">
                            <h1>Movimientos</h1>
                            <p>Consulta y supervisa los movimientos realizados sobre los elementos y ambientes del centro.</p>
                        </div>
                        
                        {/* Contenedor para los botones de la derecha */}
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            {/* Botón de campana (Notificaciones) */}
                            <button style={{ 
                                width: '40px', 
                                height: '40px', 
                                borderRadius: '8px', 
                                border: '1px solid #E2E7E4', 
                                backgroundColor: 'white', 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                cursor: 'pointer' 
                            }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#18312A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                </svg>
                            </button>

                            {/* Botón principal + Agregar Movimiento */}
                            <button 
                                onClick={() => navigate("/movimientos/agregar")}
                                style={{ 
                                    backgroundColor: '#168747', 
                                    color: 'white', 
                                    border: 'none', 
                                    padding: '0 20px', 
                                    height: '40px',
                                    borderRadius: '8px', 
                                    cursor: 'pointer', 
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    transition: 'background-color 0.2s'
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#126d39'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#168747'}
                            >
                                <span>+</span> Agregar Movimiento
                            </button>
                        </div>
                    </div>

                    <MovimientoSummary />
                    <MovimientoFilters />
                    <MovimientoTable />

                </div>
            </main>
        </div>
    );
}

export default Movimientos;