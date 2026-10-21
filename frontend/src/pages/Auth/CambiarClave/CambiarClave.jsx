
import { useState } from "react";

import fondoSica from "../../../assets/imagenes/fondo_sica.png";
import logoSica from "../../../assets/imagenes/Logo-Login.png";

import "./CambiarClave.css";

function CambiarClave() {
  const [nuevaClave, setNuevaClave] = useState("");
  const [confirmarClave, setConfirmarClave] = useState("");
  const [mostrarNueva, setMostrarNueva] = useState(false);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [mensaje, setMensaje] = useState("");

  function cambiarContrasena(evento) {
    evento.preventDefault();
    setMensaje("");

    if (!nuevaClave || !confirmarClave) {
      setMensaje("Completa los dos campos de contraseña.");
      return;
    }

    if (nuevaClave !== confirmarClave) {
      setMensaje("Las contraseñas no coinciden.");
      return;
    }

    if (nuevaClave.length < 8) {
      setMensaje("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    setMensaje(
      "Las contraseñas son válidas. Falta conectar el cambio con el servidor."
    );
  }

  return (
    <main
      className="cambiarClavePagina"
      style={{ backgroundImage: `url("${fondoSica}")` }}
    >
      <section className="cambiarClaveTarjeta">
        <div className="cambiarClaveLogoContenedor">
          <img
            className="cambiarClaveLogo"
            src={logoSica}
            alt="Logo SICA"
          />
        </div>

        <header className="cambiarClaveEncabezado">
          <h1 className="cambiarClaveTitulo">
            Crear nueva contraseña
          </h1>

          <p className="cambiarClaveDescripcion">
            Establece una nueva contraseña para recuperar el acceso a tu cuenta
            SICA.
          </p>
        </header>

        <form
          className="cambiarClaveFormulario"
          onSubmit={cambiarContrasena}
        >
          {/* Nueva contraseña */}
          <div className="cambiarClaveCampo">
            <label htmlFor="nuevaClave">
              Nueva contraseña
            </label>

            <div className="cambiarClaveEntrada">
              <input
                id="nuevaClave"
                name="nuevaClave"
                type={mostrarNueva ? "text" : "password"}
                placeholder="Ingresa tu nueva contraseña"
                value={nuevaClave}
                onChange={function (evento) {
                  setNuevaClave(evento.target.value);
                  setMensaje("");
                }}
                autoComplete="new-password"
                minLength={8}
                required
              />

              <button
                className="cambiarClaveMostrar"
                type="button"
                aria-label={
                  mostrarNueva
                    ? "Ocultar contraseña"
                    : "Mostrar contraseña"
                }
                onClick={function () {
                  setMostrarNueva(!mostrarNueva);
                }}
              >
                {mostrarNueva ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 3l18 18" />
                    <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                    <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.5 5 9 7a12.7 12.7 0 0 1-3.1 4.7" />
                    <path d="M6.2 6.2C3.8 7.8 2.3 10.4 2 12c.5 2 4 7 10 7a10 10 0 0 0 3-.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Confirmar contraseña */}
          <div className="cambiarClaveCampo">
            <label htmlFor="confirmarClave">
              Confirmar contraseña
            </label>

            <div className="cambiarClaveEntrada">
              <input
                id="confirmarClave"
                name="confirmarClave"
                type={mostrarConfirmacion ? "text" : "password"}
                placeholder="Confirma tu nueva contraseña"
                value={confirmarClave}
                onChange={function (evento) {
                  setConfirmarClave(evento.target.value);
                  setMensaje("");
                }}
                autoComplete="new-password"
                minLength={8}
                required
              />

              <button
                className="cambiarClaveMostrar"
                type="button"
                aria-label={
                  mostrarConfirmacion
                    ? "Ocultar confirmación"
                    : "Mostrar confirmación"
                }
                onClick={function () {
                  setMostrarConfirmacion(!mostrarConfirmacion);
                }}
              >
                {mostrarConfirmacion ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 3l18 18" />
                    <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                    <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.5 5 9 7a12.7 12.7 0 0 1-3.1 4.7" />
                    <path d="M6.2 6.2C3.8 7.8 2.3 10.4 2 12c.5 2 4 7 10 7a10 10 0 0 0 3-.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mensajes de validación */}
          {mensaje && (
            <p
              className="cambiarClaveMensaje"
              role="status"
              aria-live="polite"
            >
              {mensaje}
            </p>
          )}

          <button
            className="cambiarClaveBoton"
            type="submit"
          >
            Cambiar contraseña
          </button>
        </form>

        <p className="cambiarClaveNota">
          Por tu seguridad, utiliza una contraseña segura que no hayas utilizado
          anteriormente.
        </p>
      </section>
    </main>
  );
}

export default CambiarClave;
