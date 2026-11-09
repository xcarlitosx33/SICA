import { useState } from 'react';
import FormularioMovimiento from './FormularioMovimiento';
import TarjetasAccionMovimiento from './TarjetasAccionMovimiento';
import HistorialSidebarMovimiento from './HistorialSidebarMovimiento';
import './AgregarMovimiento.css'; // Usa el mismo CSS que enviaste

const AgregarMovimiento = () => {
  const [formData, setFormData] = useState({
    fecha: '28 FEB 2026',
    hora: '8:44 a.m.',
    placa: '1234567890',
    categoria: 'TECNOLOGÍA',
    nombreElemento: 'TECLADO',
    ambienteOrigen: '102',
    ambienteDestino: '105',
    responsable: 'Instructor',
    descripcion: 'Traslado de equipo por reasignación de ambiente de formación.'
  });

  const historialElemento = [
    {
      id: 1,
      titulo: 'Mantenimiento Preventivo',
      fecha: '24 Feb • Realizado por Almacén',
      estado: 'Cerrado'
    },
    {
      id: 2,
      titulo: 'Reporte de Falla - Tecla suelta',
      fecha: '19 Feb • En revisión',
      estado: 'En Trámite'
    }
  ];

  return (
    <div className="sica-form-layout">
      <main className="sica-form-main-content">
        <FormularioMovimiento formData={formData} setFormData={setFormData} />
        <TarjetasAccionMovimiento />
      </main>
      <HistorialSidebarMovimiento historial={historialElemento} />
    </div>
  );
};

export default AgregarMovimiento;