import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./RecuperarClave.css";

function RecuperarClave() {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");

  function enviarEnlace() {
    if (!correo) {
      alert("Por favor ingresa tu correo institucional");
      return;
    }

    // Guardamos el correo para usarlo en la pantalla de confirmación
    localStorage.setItem("correoRecuperacion", correo);

    // Vamos a la pantalla de confirmación
    navigate("/confirmacion");
  }

  function volverLogin() {
    navigate("/");
  }

  return (
    <div className="pagina">

      {/* Header */}
      <header className="header">
        <h2>S.I.C.A.</h2>
      </header>

      {/* Main content */}
      <main className="contenido">

        <div className="centeredCard">

          <h1 className="titulo">
            ¿Olvidaste tu contraseña?
          </h1>

          <p className="mensaje">
            Ingresa tu correo institucional para recibir un enlace de recuperación.
          </p>

          <input
            value={correo}
            onChange={(evento) => setCorreo(evento.target.value)}
            type="email"
            placeholder="Correo institucional"
            className="input"
          />

          <button
            className="btnPrincipal"
            type="button"
            onClick={enviarEnlace}
          >
            Enviar enlace de recuperación →
          </button>

          <button
            className="btnSecundario"
            type="button"
            onClick={volverLogin}
          >
            Volver al inicio de sesión
          </button>

        </div>

      </main>

      {/* Footer */}
      <footer className="footer">
        S.I.C.A | © 2024 Servicio Nacional de Aprendizaje SENA.
      </footer>

    </div>
  );
}

export default RecuperarClave;