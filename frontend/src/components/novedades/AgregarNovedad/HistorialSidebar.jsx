const HistorialSidebar = ({ historial }) => {
  return (
    <div className="sica-form-sidebar">
      {/* Se eliminó la tarjeta de "Rol de Operación" que estaba aquí arriba */}

      <div className="sidebar-history-box">
        <div className="history-header">
          <h3>Historial en Ambiente 102</h3>
          <span className="history-pill">Últimos 15 días</span>
        </div>

        {historial.map(item => (
          <div key={item.id} className="history-item">
            <div className={`status-dot ${item.estado === 'Cerrado' ? 'closed' : 'pending'}`}></div>
            <div className="history-info">
              <strong>{item.titulo}</strong>
              <small>{item.fecha}</small>
            </div>
            <span className={`status-text-pill ${item.estado === 'Cerrado' ? 'closed' : 'pending'}`}>
              {item.estado}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistorialSidebar;