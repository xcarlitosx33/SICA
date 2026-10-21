
import { useEffect, useState } from "react";

import fondoSica from "../../../assets/imagenes/fondo_sica.png";
import logoSica from "../../../assets/imagenes/Logo-Login.png";

import "./EnlaceEnviado.css";

function EnlaceEnviado() {
  const [correoUsuario, setCorreoUsuario] = useState("");

  useEffect(function () {
    const correoGuardado =
      localStorage.getItem("correoRecuperacion") || "";

    setCorreoUsuario(correoGuardado);
  }, []);

  // Ocultar parcialmente el correo
  function ocultarCorreo(email) {
    if (!email || !email.includes("@")) {
      return "correo@misena.edu.co";
    }

    const partes = email.split("@");
    const usuario = partes[0];
    const dominio = partes.slice(1).join("@");

    if (!usuario || !dominio) {
      return "correo@misena.edu.co";
    }

    const cantidadOculta = Math.max(
      1,
      Math.ceil(usuario.length / 2) - 1
    );

    return (
      usuario.slice(0, 1) +
      "*".repeat(cantidadOculta) +
      "@" +
      dominio
    );
  }

  // Pendiente: conectar con el endpoint de reenvío del backend
  function reenviarEnlace() {
    alert(
      "El reenvío del enlace estará disponible cuando conectemos la API."
    );
  }

  return (
    <main
      className="enlacePagina"
      style={{ backgroundImage: `url("${fondoSica}")` }}
    >
      <section className="enlaceTarjeta">
        <div className="enlaceLogoContenedor">
          <img
            className="enlaceLogo"
            src={logoSica}
            alt="Logo SICA"
          />
        </div>

        <header className="enlaceEncabezado">
          <h1 className="enlaceTitulo">
            ¡Enlace enviado!
          </h1>

          <p className="enlaceDescripcion">
            Hemos enviado un enlace de recuperación a tu correo
            institucional. Revisa tu bandeja de entrada y sigue las
            instrucciones. Si no encuentras el mensaje, revisa la carpeta
            de spam o correo no deseado.
          </p>
        </header>

        <div className="enlaceCorreo">
          {ocultarCorreo(correoUsuario)}
        </div>

        <p className="enlaceNota">
          El enlace de recuperación expirará en 5 minutos por motivos
          de seguridad.
        </p>

        <div className="enlaceAcciones">
          <button
            className="enlaceBoton"
            type="button"
            onClick={reenviarEnlace}
          >
            Reenviar enlace
          </button>
        </div>
      </section>
    </main>
  );
}

export default EnlaceEnviado;
