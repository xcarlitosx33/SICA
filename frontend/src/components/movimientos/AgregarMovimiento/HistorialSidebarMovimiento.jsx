const HistorialSidebarMovimiento = ({ historial }) => {
  return (
    <div className="sica-form-sidebar">
      <div className="sidebar-history-box">
        <div className="history-header">
          <h3>Historial del Elemento</h3>
          <span className="history-pill">Últimos 30 días</span>
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

export default HistorialSidebarMovimiento;