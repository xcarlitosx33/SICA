import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="dashboard-container">
      {/* SIDEBAR */}
{/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-logo-container">
          <img 
            src={'src/assets/imagenes/sica.jpeg'} 
            alt="Logo SICA" 
            style={{ width: '100%', maxWidth: '160px', height: 'auto', objectFit: 'contain' }} 
          />
        </div>
        
        <nav className="sidebar-menu">
          <div className="nav-item active">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <span>Inicio</span>
          </div>
          
          <div className="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            <span>Mi horario</span>
          </div>
          
          <div className="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
            <span>Inventario del ambiente</span>
          </div>
          
          <div className="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            <span>Novedades</span>
          </div>
          
          <div className="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
            <span>Movimientos</span>
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="user-badge">
            <div className="user-avatar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--sena-green)"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <span className="user-role">INSTRUCTOR</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="main-content">
        
        <header className="header-section">
          <h1 className="page-title">Panel de Control</h1>
          <p className="page-subtitle">Bienvenido, Instructor. Aquí tienes un resumen del estado actual de los recursos del centro.</p>
        </header>

        {/* TARJETAS SUPERIORES */}
        <section className="stats-grid">
          {/* Card 1 */}
          <div className="stat-card green-border">
            <div className="stat-header">
              <span className="stat-title">MIS AMBIENTES ASIGNADOS</span>
              <div className="stat-icon" style={{ backgroundColor: '#dcfce3', color: 'var(--sena-green)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              </div>
            </div>
            <div className="stat-content">
              <div className="stat-number-group">
                <span className="stat-number">3</span>
                <span className="stat-text">ambientes esta semana</span>
              </div>
              <div className="badges-row">
                <span className="badge" style={{ backgroundColor: '#f4f4f5', color: 'var(--color-neutral-700)' }}>Ambiente 204</span>
                <span className="badge" style={{ backgroundColor: '#f4f4f5', color: 'var(--color-neutral-700)' }}>Lab IoT 102</span>
                <span className="badge" style={{ backgroundColor: '#f4f4f5', color: 'var(--color-neutral-700)' }}>Aula Magistral 4</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="stat-card red-border">
            <div className="stat-header">
              <span className="stat-title">NOVEDADES PENDIENTES</span>
              <div className="stat-icon" style={{ backgroundColor: '#fee2e2', color: 'var(--color-red-600)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>
            </div>
            <div className="stat-content">
              <div className="stat-number-group">
                <span className="stat-number" style={{ color: 'var(--color-red-600)' }}>1</span>
                <span className="stat-text" style={{ color: 'var(--color-red-600)' }}>observación activa</span>
              </div>
              <p className="stat-text">Proyector HDMI con parpadeo intermitente (Ambiente 204)</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="stat-card lime-border">
            <div className="stat-header">
              <span className="stat-title">MOVIMIENTOS DE HOY</span>
              <div className="stat-icon" style={{ backgroundColor: '#ecfccb', color: 'var(--color-lime-700)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
            </div>
            <div className="stat-content">
              <div className="stat-number-group">
                <span className="stat-number">2</span>
                <span className="stat-text" style={{ color: 'var(--color-lime-700)', fontWeight: '600' }}>registros formalizados</span>
              </div>
              <p className="stat-text">Entrada 06:52 (Llave recibida) • Última verificación 09:45</p>
            </div>
          </div>
        </section>

        {/* PANELES INFERIORES */}
        <section className="panels-layout">
          
          {/* COLUMNA IZQUIERDA: Ambientes */}
          <div className="panel-card">
            <div className="panel-header">
              <div>
                <h2 className="panel-title">Estado de Ambientes a Cargo</h2>
                <p className="stat-text" style={{ marginTop: '4px' }}>Seguimiento físico y disponibilidad sin permisos de alteración de configuración</p>
              </div>
              <span className="badge" style={{ backgroundColor: '#dcfce3', color: 'var(--sena-green)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--sena-green)', borderRadius: '50%' }}></div>
                3 Espacios Asignados
              </span>
            </div>

            {/* Ambiente 204 */}
            <div className="environment-item">
              <div className="env-top-row">
                <div className="env-info">
                  <div className="env-icon" style={{ backgroundColor: 'var(--sena-green)' }}>204</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-zinc-900)' }}>Ambiente 204 Software y Sistemas</h3>
                      <span className="badge" style={{ backgroundColor: '#dcfce3', color: 'var(--sena-green)' }}>En uso normal</span>
                    </div>
                    <p className="stat-text">Capacidad: 30 aprendices • 31 PCs All-in-One • Bloque B Piso 2</p>
                  </div>
                </div>
                <div className="env-actions">
                  <button className="btn-action" style={{ backgroundColor: '#fee2e2', color: 'var(--color-red-600)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    1 Observación
                  </button>
                  <button className="btn-action" style={{ backgroundColor: 'white', border: '1px solid var(--border-medium)', color: 'var(--color-zinc-900)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    Ver Lista Bienes
                  </button>
                </div>
              </div>
              <div className="env-grid-bottom">
                <div>
                  <span className="grid-label">Checklist Entrada</span>
                  <span className="grid-value" style={{ color: 'var(--color-green-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Aprobado
                  </span>
                </div>
                <div><span className="grid-label">Custodio Actual</span><span className="grid-value">Ing. R. Gómez</span></div>
                <div><span className="grid-label">Cierre Previsto</span><span className="grid-value">10:00 AM</span></div>
              </div>
            </div>

            {/* Ambiente IoT */}
            <div className="environment-item">
              <div className="env-top-row">
                <div className="env-info">
                  <div className="env-icon" style={{ backgroundColor: '#1e3a8a' }}>IoT</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-zinc-900)' }}>Lab IoT 102 - Prototipado Electrónico</h3>
                      <span className="badge" style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}>Disponible próximo bloque</span>
                    </div>
                    <p className="stat-text">Capacidad: 25 aprendices • 12 Osciloscopios • Bloque A Piso 1</p>
                  </div>
                </div>
                <div className="env-actions">
                  <button className="btn-action" style={{ backgroundColor: '#dcfce3', color: 'var(--color-green-700)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Conforme
                  </button>
                  <button className="btn-action" style={{ backgroundColor: 'white', border: '1px solid var(--border-medium)', color: 'var(--color-zinc-900)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    Ver Lista Bienes
                  </button>
                </div>
              </div>
              <div className="env-grid-bottom">
                <div><span className="grid-label">Próxima Ocupación</span><span className="grid-value">10:30 AM</span></div>
                <div><span className="grid-label">Llave / Custodia</span><span className="grid-value" style={{ color: 'var(--color-neutral-500)', fontWeight: '500' }}>En Guardia A</span></div>
                <div><span className="grid-label">Ficha</span><span className="grid-value" style={{ color: 'var(--color-green-700)' }}>2843920</span></div>
              </div>
            </div>

            {/* Ambiente M4 */}
            <div className="environment-item">
              <div className="env-top-row">
                <div className="env-info">
                  <div className="env-icon" style={{ backgroundColor: '#e4e4e7', color: '#3f3f46' }}>M4</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-zinc-900)' }}>Aula Magistral 4 - Conferencias</h3>
                      <span className="badge" style={{ backgroundColor: '#e4e4e7', color: '#52525b' }}>Libre</span>
                    </div>
                    <p className="stat-text">Capacidad: 60 sillas universitarias • Sistema acústico • Bloque C</p>
                  </div>
                </div>
                <div className="env-actions">
                  <button className="btn-action" style={{ backgroundColor: '#f4f4f5', border: '1px solid var(--border-light)', color: 'var(--color-neutral-500)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    Sin Novedad
                  </button>
                  <button className="btn-action" style={{ backgroundColor: 'white', border: '1px solid var(--border-medium)', color: 'var(--color-zinc-900)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    Ver Lista Bienes
                  </button>
                </div>
              </div>
              <div className="env-grid-bottom">
                <div><span className="grid-label">Bloque Asignado</span><span className="grid-value">14:00 - 17:00</span></div>
                <div><span className="grid-label">Condición Aire</span><span className="grid-value">Óptimo (21°C)</span></div>
                <div><span className="grid-label">Entrega Llave</span><span className="grid-value" style={{ color: 'var(--color-neutral-500)', fontWeight: '500' }}>Pendiente 13:45</span></div>
              </div>
            </div>

            {/* Aviso Novedad */}
            <div style={{ backgroundColor: '#fff1f2', border: '1px dashed #fecdd3', borderRadius: '0.5rem', padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-red-600)', fontWeight: '700', fontSize: '0.875rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  Detalle de Novedad Activa:
                </div>
                <span className="badge" style={{ color: 'var(--color-red-600)', fontSize: '0.7rem' }}>En Revisión</span>
              </div>
              <p className="stat-text" style={{ color: 'var(--color-zinc-700)' }}>"Proyector HDMI con parpadeo intermitente en Ambiente 204" registrado hoy a las 07:15. Notificación enviada a Almacén e Infraestructura. Soporte técnico asignado con ticket #TK-8841.</p>
            </div>
          </div>

          {/* COLUMNA DERECHA: Agenda */}
          <div className="panel-card">
            <div className="panel-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--sena-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <h2 className="panel-title">Mi Agenda Hoy</h2>
              </div>
              <span className="badge" style={{ backgroundColor: '#f4f4f5', color: 'var(--color-neutral-700)' }}>3 Bloques Lectivos</span>
            </div>

            {/* Bloque Llaves */}
            <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0.5rem', padding: '1rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--sena-green)', letterSpacing: '0.05em' }}>ESTADO DE RECEPCIÓN / LLAVES</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--sena-green)" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                <div style={{ flex: 1, backgroundColor: 'white', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--sena-green)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--color-neutral-500)', display: 'block' }}>Ambiente 204</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--color-zinc-900)' }}>Llave en mano</span>
                  </div>
                </div>
                <div style={{ flex: 1, backgroundColor: 'white', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-neutral-500)" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--color-neutral-500)', display: 'block' }}>Lab IoT 102</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--color-zinc-900)' }}>Pendiente retiro</span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.7rem', color: 'var(--color-neutral-500)', textAlign: 'center' }}>Checklist digital obligatorio al finalizar cada sesión</p>
            </div>

            {/* Timeline */}
            <div className="timeline-container">
              <div className="timeline-line"></div>
              
              {/* Event 1 */}
              <div className="timeline-item">
                <div className="timeline-dot" style={{ backgroundColor: 'var(--sena-green)', borderColor: '#dcfce3', borderWidth: '3px' }}></div>
                <div className="timeline-card active">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span className="badge" style={{ backgroundColor: '#dcfce3', color: 'var(--sena-green)' }}>07:00 - 10:00 • EN CURSO</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-neutral-500)' }}>Ambiente 204</span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.25rem' }}>Ficha 2791834 - Programación Web</h3>
                  <p className="stat-text" style={{ marginBottom: '1rem' }}>Módulo: Arquitecturas Backend y Frameworks REST. 28 aprendices registrados en lista biométrica.</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--sena-green)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 12l2 2 4-4"></path></svg> Checklist Apertura OK
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--sena-green)', fontWeight: '700', cursor: 'pointer' }}>Finalizar Turno →</span>
                  </div>
                </div>
              </div>

              {/* Event 2 */}
              <div className="timeline-item">
                <div className="timeline-dot" style={{ backgroundColor: 'var(--border-medium)' }}></div>
                <div className="timeline-card inactive">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span className="badge" style={{ backgroundColor: '#f4f4f5', color: 'var(--color-neutral-700)' }}>10:30 - 13:00 • PRÓXIMO</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-neutral-500)' }}>Lab IoT 102</span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.25rem' }}>Ficha 2843920 - Bases de Datos</h3>
                  <p className="stat-text" style={{ marginBottom: '1rem' }}>Práctica de integración microcontroladores ESP32 con bases de datos PostgreSQL.</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-neutral-500)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Recepción Llave 10:20
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--sena-green)', fontWeight: '700', cursor: 'pointer' }}>Abrir Checklist</span>
                  </div>
                </div>
              </div>

              {/* Event 3 */}
              <div className="timeline-item">
                <div className="timeline-dot" style={{ backgroundColor: 'var(--border-medium)' }}></div>
                <div className="timeline-card inactive">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span className="badge" style={{ backgroundColor: '#f4f4f5', color: 'var(--color-neutral-700)' }}>14:00 - 17:00 • TARDE</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-neutral-500)' }}>Aula Magistral 4</span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.25rem' }}>Tutoría Técnica y Revisión de Proyectos</h3>
                  <p className="stat-text" style={{ marginBottom: '1rem' }}>Evaluación formativa de Fase 3 y retroalimentación individual con semilleros de investigación SENNOVA.</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-neutral-500)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> Equipos Audiovisuales
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-neutral-500)' }}>Aula Libre</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default Home;