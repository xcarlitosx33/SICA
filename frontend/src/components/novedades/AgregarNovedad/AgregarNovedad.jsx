import { useState } from 'react';
import FormularioReporte from './FormularioReporte';
import TarjetasAccion from './TarjetasAccion';
import HistorialSidebar from './HistorialSidebar';
import './AgregarNovedad.css';

const AgregarNovedad = () => {
  const [formData, setFormData] = useState({
    fecha: '28 FEB 2026',
    hora: '8:44 a.m.',
    placa: '1234567890',
    categoria: 'TECNOLOGÍA',
    nombreElemento: 'TECLADO',
    ambiente: '102',
    centro: 'CENTRO INDUSTRIAL DE DESARROLLO EMPRESARIAL : CIDE',
    sede: '1',
    piso: '1',
    descripcion:
      'Teclado negro del Ambiente 102 presenta fallas en varias teclas y daño en el cable.'
  });

  const historialAmbiente = [
    {
      id: 1,
      titulo: 'Cable HDMI Proyectores',
      fecha: '24 Feb • Resuelto por Almacén',
      estado: 'Cerrado'
    },
    {
      id: 2,
      titulo: 'PC Docente - Puerto USB',
      fecha: '19 Feb • En Mantenimiento',
      estado: 'En Trámite'
    }
  ];

  return (
    <div className="sica-form-layout">

      <main className="sica-form-main-content">

        <FormularioReporte
          formData={formData}
          setFormData={setFormData}
        />

        <TarjetasAccion />

      </main>

      <HistorialSidebar historial={historialAmbiente} />

    </div>
  );
};

export default AgregarNovedad;