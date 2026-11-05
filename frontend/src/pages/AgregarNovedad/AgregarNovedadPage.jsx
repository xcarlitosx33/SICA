import Sidebar from '../../components/Sidebar/Sidebar'; 
import AgregarNovedad from '../../components/novedades/AgregarNovedad/AgregarNovedad';

const AgregarNovedadPage = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      
      {/* Menú Lateral */}
      <Sidebar />

      {/* Contenedor del Formulario (Le damos margen izquierdo para que no lo tape el Sidebar) */}
      <div style={{ 
        flex: 1, 
        padding: '24px', 
        marginLeft: '260px', /* <--- ESTO EMPUJA EL FORMULARIO A LA DERECHA */
        overflowY: 'auto' 
      }}>
        <AgregarNovedad />
      </div>

    </div>
  );
};

export default AgregarNovedadPage;