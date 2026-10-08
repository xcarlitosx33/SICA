import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./EnlaceEnviado.css";

function EnlaceEnviado() {
  const navigate = useNavigate();

  const [correoUsuario, setCorreoUsuario] = useState("");

  // Cargar correo guardado desde localStorage
  useEffect(function () {
    const correoGuardado =
      localStorage.getItem("correoRecuperacion") || "";

    setCorreoUsuario(correoGuardado);
  }, []);

  // Ocultar la mitad del correo
  function ocultarCorreo(email) {
    if (!email || !email.includes("@")) {
      return "correo@misena.edu.co";
    }

    const partes = email.split("@");
    const usuario = partes[0];
    const dominio = partes[1];

    const mitad = Math.ceil(usuario.length / 2);

    return (
      usuario.slice(0, 1) +
      "*".repeat(mitad - 1) +
      "@" +
      dominio
    );
  }

  function irLogin() {
    navigate("/");
  }

  function reenviarEnlace() {
    alert(
      `Se ha reenviado el enlace de recuperación a ${correoUsuario}`
    );

    // Aquí posteriormente conectaremos la API real
  }

  return (
    <div className="pagina">

      <div className="centeredCard">

        <img
          className="marginIcon"
          loading="lazy"
          alt="Decoración"
          src="/Margin@2x.png"
        />

        <section className="margin">

          <div className="container">

            <div className="heading1">
              <h1 className="text">
                ¡Enlace enviado!
              </h1>
            </div>

            <div className="container2">
              <div className="text2">
                Hemos enviado un enlace de recuperación a tu
                correo institucional. Por favor revisa tu bandeja
                de entrada y sigue las instrucciones. Si no
                encuentras el mensaje, revisa la carpeta de spam
                o correo no deseado.
              </div>
            </div>

            {/* Correo parcialmente oculto */}
            <div className="background">
              {ocultarCorreo(correoUsuario)}
            </div>

            <div className="container3">
              <div className="text4">
                El enlace de recuperación expirará en 15
                minutos por motivos de seguridad.
              </div>
            </div>

          </div>

        </section>

        <div className="container4">

          <button
            className="button"
            type="button"
            onClick={irLogin}
          >
            Ir al inicio de sesión
          </button>

          <button
            className="button2"
            type="button"
            onClick={reenviarEnlace}
          >
            Reenviar enlace
          </button>

        </div>

      </div>

    </div>
  );
}

export default EnlaceEnviado;