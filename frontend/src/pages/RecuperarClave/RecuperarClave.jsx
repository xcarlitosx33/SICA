import { useState } from "react";
import { useNavigate } from "react-router-dom";

import fondoSica from "../../assets/imagenes/fondo_sica.png";
import logoSica from "../../assets/imagenes/Logo-Login.png";

import "./RecuperarClave.css";

function RecuperarClave() {
  const navigate = useNavigate();

  const [documento, setDocumento] = useState("");

function enviarEnlace(evento) {
  evento.preventDefault();

  const documentoLimpio = documento.trim();

  if (!documentoLimpio) {
    alert("Por favor ingresa tu documento de identidad.");
    return;
  }

  if (!/^\d+$/.test(documentoLimpio)) {
    alert("El documento debe contener únicamente números.");
    return;
  }

  if (documentoLimpio.length < 6 || documentoLimpio.length > 12) {
    alert("Ingresa un documento de entre 6 y 12 dígitos.");
    return;
  }

  localStorage.setItem("documentoRecuperacion", documentoLimpio);

  navigate("/confirmacion");
}


  function volverLogin() {
    navigate("/");
  }

  return (
    <main
      className="recuperarPagina"
      style={{ backgroundImage: `url("${fondoSica}")` }}
    >
      <section className="recuperarTarjeta">
        <div className="recuperarLogoContenedor">
          <img
            className="recuperarLogo"
            src={logoSica}
            alt="Logo SICA"
          />
        </div>

        <h1 className="recuperarTitulo">
          Recuperar contraseña
        </h1>

        <p className="recuperarMensaje">
          Ingresa tu documento de identidad para recuperar el acceso a tu cuenta.
        </p>

        <form className="recuperarFormulario" onSubmit={enviarEnlace}>
          <label
            className="recuperarEtiqueta"
            htmlFor="documentoRecuperacion"
          >
            Ingresar documento
          </label>

          <input
            id="documentoRecuperacion"
            name="documento"
            type="text"
            inputMode="numeric"
            maxLength={12}
            autoComplete="off"
            placeholder="Ej. 12345678"
            className="recuperarInput"
            value={documento}
            onChange={(evento) => setDocumento(evento.target.value)}
            required
          />

          <button
            className="recuperarBotonPrincipal"
            type="submit"
          >
            Continuar →
          </button>
        </form>

        <button
          className="recuperarBotonSecundario"
          type="button"
          onClick={volverLogin}
        >
          Volver al inicio de sesión
        </button>
      </section>
    </main>
  );
}

export default RecuperarClave;