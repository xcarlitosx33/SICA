
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DetalleNovedad.css";

import Sidebar from "../../../components/Sidebar/Sidebar";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Button from "../../../components/Button/Button";

import {
    getNovedades,
    subscribeNovedades,
    updateNovedadEstado,
} from "../../../data/novedadesStorage";

function DetalleNovedad() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [novedadesActuales, setNovedadesActuales] = useState(getNovedades);

    const novedad = novedadesActuales.find((item) => item.id === id);
    const previewUrls = useRef(new Set());

    const [intervenciones, setIntervenciones] = useState([]);
    const [formulario, setFormulario] = useState({
        diagnostico: "",
        trabajoRealizado: "",
        materialesUtilizados: "",
        materialesPendientes: "",
        estado: novedad?.estado || "En proceso",
        evidencias: [],
    });

    const [mensaje, setMensaje] = useState("");
    const [tipoMensaje, setTipoMensaje] = useState("");

    // Limpiar las URL temporales de las fotografías al salir del componente.
    useEffect(() => {
        return () => {
            previewUrls.current.forEach((url) => URL.revokeObjectURL(url));
            previewUrls.current.clear();
        };
    }, []);

    // Mantener sincronizada la novedad con los datos compartidos.
    useEffect(() => {
        return subscribeNovedades(() => {
            setNovedadesActuales(getNovedades());
        });
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormulario((previo) => ({
            ...previo,
            [name]: value,
        }));
    }

    function handlePhotos(event) {
        const archivos = Array.from(event.target.files || []);

        const imagenes = archivos.filter((archivo) =>
            archivo.type.startsWith("image/")
        );

        const nuevasEvidencias = imagenes.map((archivo) => {
            const preview = URL.createObjectURL(archivo);
            previewUrls.current.add(preview);

            return {
                id: `${Date.now()}-${Math.random()}`,
                file: archivo,
                preview,
            };
        });

        setFormulario((previo) => ({
            ...previo,
            evidencias: [...previo.evidencias, ...nuevasEvidencias],
        }));

        if (archivos.length !== imagenes.length) {
            setMensaje("Se omitieron los archivos que no son imágenes.");
            setTipoMensaje("error");
        } else {
            setMensaje("");
            setTipoMensaje("");
        }

        event.target.value = "";
    }

    function handleRemovePhoto(photoId) {
        const foto = formulario.evidencias.find(
            (item) => item.id === photoId
        );

        if (foto) {
            URL.revokeObjectURL(foto.preview);
            previewUrls.current.delete(foto.preview);
        }

        setFormulario((previo) => ({
            ...previo,
            evidencias: previo.evidencias.filter(
                (item) => item.id !== photoId
            ),
        }));
    }

    function handleSave(event) {
        event.preventDefault();

        setMensaje("");
        setTipoMensaje("");

        if (!formulario.diagnostico.trim()) {
            setMensaje("Debes ingresar el diagnóstico técnico.");
            setTipoMensaje("error");
            return;
        }

        if (!formulario.trabajoRealizado.trim()) {
            setMensaje("Debes describir el trabajo realizado.");
            setTipoMensaje("error");
            return;
        }

        if (
            formulario.estado === "Pendiente" &&
            !formulario.materialesPendientes.trim()
        ) {
            setMensaje(
                "Explica por qué la novedad queda pendiente de atención."
            );
            setTipoMensaje("error");
            return;
        }

        if (
            formulario.estado === "Cerrada" &&
            formulario.evidencias.length === 0
        ) {
            setMensaje(
                "Debes adjuntar al menos una fotografía para cerrar la novedad."
            );
            setTipoMensaje("error");
            return;
        }

        const nuevaIntervencion = {
            id: Date.now(),
            fecha: new Date().toLocaleString("es-CO"),
            diagnostico: formulario.diagnostico.trim(),
            trabajoRealizado: formulario.trabajoRealizado.trim(),
            materialesUtilizados: formulario.materialesUtilizados.trim(),
            materialesPendientes: formulario.materialesPendientes.trim(),
            estado: formulario.estado,
            evidencias: [...formulario.evidencias],
        };

        // Actualizar el estado de la novedad en el almacenamiento compartido.
        updateNovedadEstado(id, formulario.estado);

        setIntervenciones((previas) => [
            ...previas,
            nuevaIntervencion,
        ]);

        setFormulario({
            diagnostico: "",
            trabajoRealizado: "",
            materialesUtilizados: "",
            materialesPendientes: "",
            estado: formulario.estado,
            evidencias: [],
        });
        setMensaje("Intervención registrada correctamente.");
        setTipoMensaje("success");
    }

    if (!novedad) {
        return (
            <div className="novedad-detail-layout">
                <Sidebar />
                <main className="novedad-detail-main">
                    <h2>Novedad no encontrada</h2>
                    <Button onClick={() => navigate("/novedades")}>
                        Volver a novedades
                    </Button>
                </main>
            </div>
        );
    }

    return (
        <div className="novedad-detail-layout">
            <Sidebar />

            <main className="novedad-detail-main">
                <div className="novedad-detail-content">
                    <PageHeader
                        title={`Detalle ${novedad.id}`}
                        description="Consulta el reporte y registra las intervenciones técnicas."
                    />

                    <div className="novedad-detail-back">
                        <Button
                            type="button"
                            onClick={() => navigate("/novedades")}
                        >
                            ← Volver a novedades
                        </Button>
                    </div>

                    <section className="novedad-detail-card">
                        <h2>Información del reporte</h2>

                        <div className="novedad-detail-grid">
                            <div>
                                <span>ID</span>
                                <strong>{novedad.id}</strong>
                            </div>

                            <div>
                                <span>Fecha del reporte</span>
                                <strong>{novedad.fecha}</strong>
                            </div>

                            <div>
                                <span>Ambiente</span>
                                <strong>{novedad.ambiente}</strong>
                            </div>

                            <div>
                                <span>Tipo</span>
                                <strong>{novedad.tipo}</strong>
                            </div>

                            <div>
                                <span>Elemento afectado</span>
                                <strong>{novedad.elemento}</strong>
                            </div>

                            <div>
                                <span>Estado actual</span>
                                <strong>{novedad.estado}</strong>
                            </div>
                        </div>

                        <div className="novedad-detail-description">
                            <span>Descripción del daño</span>
                            <p>{novedad.descripcion}</p>
                        </div>
                    </section>

                    <section className="novedad-detail-card">
                        <div className="novedad-detail-section-heading">
                            <div>
                                <h2>Registrar intervención técnica</h2>
                                <p>
                                    Registra el diagnóstico y las actividades
                                    realizadas durante la atención.
                                </p>
                            </div>
                        </div>

                        <form
                            className="novedad-detail-form"
                            onSubmit={handleSave}
                        >
                            <div className="novedad-detail-form-field">
                                <label htmlFor="diagnostico">
                                    Diagnóstico técnico *
                                </label>
                                <textarea
                                    id="diagnostico"
                                    name="diagnostico"
                                    value={formulario.diagnostico}
                                    onChange={handleChange}
                                    placeholder="Describe la causa del problema..."
                                    required
                                />
                            </div>

                            <div className="novedad-detail-form-field">
                                <label htmlFor="trabajoRealizado">
                                    Trabajo realizado *
                                </label>
                                <textarea
                                    id="trabajoRealizado"
                                    name="trabajoRealizado"
                                    value={formulario.trabajoRealizado}
                                    onChange={handleChange}
                                    placeholder="Describe las actividades realizadas..."
                                    required
                                />
                            </div>

                            <div className="novedad-detail-form-field">
                                <label htmlFor="materialesUtilizados">
                                    Materiales utilizados
                                </label>
                                <textarea
                                    id="materialesUtilizados"
                                    name="materialesUtilizados"
                                    value={formulario.materialesUtilizados}
                                    onChange={handleChange}
                                    placeholder="Materiales utilizados durante la reparación..."
                                />
                            </div>

                            <div className="novedad-detail-form-field">
                                <label htmlFor="materialesPendientes">
                                    Materiales pendientes
                                </label>
                                <textarea
                                    id="materialesPendientes"
                                    name="materialesPendientes"
                                    value={formulario.materialesPendientes}
                                    onChange={handleChange}
                                    placeholder="Indica si hacen falta materiales..."
                                />
                            </div>

                            <div className="novedad-detail-form-field novedad-detail-status-field">
                                <label htmlFor="estado">
                                    Estado de la novedad
                                </label>
                                <select
                                    id="estado"
                                    name="estado"
                                    value={formulario.estado}
                                    onChange={handleChange}
                                >
                                    <option value="Pendiente">Pendiente</option>
                                    <option value="En proceso">En proceso</option>
                                    <option value="Cerrada">Cerrada</option>
                                </select>
                                <small>
                                    Selecciona el resultado de esta intervención.
                                </small>
                            </div>

                            <div className="novedad-detail-upload-field">
                                <div className="novedad-detail-upload-heading">
                                    <label>Fotografías de la intervención</label>
                                    <span>
                                        {formulario.evidencias.length} seleccionada(s)
                                    </span>
                                </div>

                                <label
                                    htmlFor="evidencias"
                                    className="novedad-upload-zone"
                                >
                                    <span className="novedad-upload-icon">＋</span>
                                    <strong>Agregar fotografías</strong>
                                    <span>
                                        Selecciona imágenes desde tu equipo
                                    </span>
                                    <small>
                                        También puedes seleccionar varias imágenes
                                    </small>
                                </label>

                                <input
                                    id="evidencias"
                                    className="novedad-upload-input"
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handlePhotos}
                                />

                                {formulario.evidencias.length > 0 && (
                                    <div className="novedad-upload-preview">
                                        {formulario.evidencias.map((foto) => (
                                            <article
                                                className="novedad-upload-item"
                                                key={foto.id}
                                            >
                                                <img
                                                    src={foto.preview}
                                                    alt={foto.file.name}
                                                />

                                                <div className="novedad-upload-item-info">
                                                    <span title={foto.file.name}>
                                                        {foto.file.name}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleRemovePhoto(foto.id)
                                                        }
                                                    >
                                                        Eliminar foto
                                                    </button>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                )}

                                <small className="novedad-upload-help">
                                    Adjunta evidencias que permitan verificar el trabajo realizado.
                                </small>
                            </div>

                            {mensaje && (
                                <p
                                    className={`novedad-detail-message novedad-detail-message--${tipoMensaje}`}
                                    role="status"
                                >
                                    {mensaje}
                                </p>
                            )}

                            <div className="novedad-detail-form-actions">
                                <Button type="submit">
                                    Guardar intervención
                                </Button>
                            </div>
                        </form>
                    </section>

                    <section className="novedad-detail-card">
                        <div className="novedad-detail-section-heading">
                            <div>
                                <h2>Historial de intervenciones</h2>
                                <p>
                                    Registro de las atenciones realizadas a esta novedad.
                                </p>
                            </div>
                            <span className="novedad-history-count">
                                {intervenciones.length}
                            </span>
                        </div>

                        {intervenciones.length === 0 ? (
                            <p className="novedad-detail-empty">
                                Todavía no se han registrado intervenciones.
                            </p>
                        ) : (
                            <div className="novedad-intervention-list">
                                {intervenciones.map((intervencion) => (
                                    <article
                                        className="novedad-intervention"
                                        key={intervencion.id}
                                    >
                                        <div className="novedad-intervention-header">
                                            <strong>Intervención técnica</strong>
                                            <span>{intervencion.fecha}</span>
                                        </div>

                                        <p>
                                            <strong>Diagnóstico:</strong>{" "}
                                            {intervencion.diagnostico}
                                        </p>
                                        <p>
                                            <strong>Trabajo realizado:</strong>{" "}
                                            {intervencion.trabajoRealizado}
                                        </p>
                                        <p>
                                            <strong>Materiales utilizados:</strong>{" "}
                                            {intervencion.materialesUtilizados || "No registrados"}
                                        </p>
                                        <p>
                                            <strong>Materiales pendientes:</strong>{" "}
                                            {intervencion.materialesPendientes || "Ninguno"}
                                        </p>
                                        <p>
                                            <strong>Estado registrado:</strong>{" "}
                                            {intervencion.estado}
                                        </p>

                                        {intervencion.evidencias.length > 0 && (
                                            <div className="novedad-intervention-photos">
                                                {intervencion.evidencias.map((foto) => (
                                                    <img
                                                        key={foto.id}
                                                        src={foto.preview}
                                                        alt={foto.file.name}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </article>
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </div>
    );
}

export default DetalleNovedad;
