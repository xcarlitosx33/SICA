import Sidebar from "../../../components/Sidebar/Sidebar";
import AgregarMovimiento from "../../../components/movimientos/AgregarMovimiento/AgregarMovimiento";

const AgregarMovimientoPage = () => {
  return (
    <div style={{ display: 'flex', width: '100%', minHeight: '100vh', backgroundColor: '#F6F6F6' }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: '260px', overflowX: 'hidden' }}>
         <AgregarMovimiento />
      </div>
    </div>
  );
};

export default AgregarMovimientoPage;