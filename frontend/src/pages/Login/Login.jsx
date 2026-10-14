import { useState } from "react";
import { useNavigate } from "react-router-dom";

import fondoSica from "../../assets/imagenes/fondo_sica.png";
import logoSica from "../../assets/imagenes/Logo-Login.png";

import api from "../../services/api.js";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [documento, setDocumento] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [recordarSesion, setRecordarSesion] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(false);

  async function login(evento) {
    evento.preventDefault();
    setMensaje("");

    if (!documento.trim() || !password) {
      setMensaje("Ingresa tu documento y tu contraseña.");
      return;
    }

    setCargando(true);

    try {
      const respuesta = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          documento: documento.trim(),
          password: password,
        }),
      });

      const data = await respuesta.json();

      if (!respuesta.ok) {
        setMensaje(data.mensaje || "No fue posible iniciar sesión.");
        return;
      }

      setMensaje(data.mensaje || "Respuesta recibida del servidor.");

      if (data.mensaje === "Bienvenido, al sistema SICA") {
        if (recordarSesion) {
          sessionStorage.removeItem("sicaSesion");
          localStorage.setItem("sicaSesion", "recordar");
        } else {
          localStorage.removeItem("sicaSesion");
          sessionStorage.setItem("sicaSesion", "temporal");
        }

        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);

      setMensaje(
        "No se pudo conectar con el servidor. Comprueba que Django esté ejecutándose."
      );
    } finally {
      setCargando(false);
    }
  }

  return (
    <main
      className="loginPage"
      style={{ backgroundImage: `url("${fondoSica}")` }}
    >
      <section className="loginCard">
        {/* Panel de identidad de SICA */}
        <aside className="loginBrand">
          <div className="loginBrandContent">
            <div className="loginLogoContainer">
              <img
                className="loginLogo"
                src={logoSica}
                alt="Logo SICA"
              />
            </div>

            <p className="loginBrandDescription">
              SISTEMA INTEGRAL DE
              <br />
              CORRESPONSABILIDAD DE AMBIENTE
            </p>
          </div>
        </aside>

        {/* Formulario de inicio de sesión */}
        <section className="loginFormPanel">
          <div className="loginFormContent">
            <div className="loginIcon" aria-hidden="true">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 4h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5" />
                <path d="M3 12h12" />
                <path d="m10 7 5 5-5 5" />
              </svg>
            </div>

            <h1>Iniciar sesión</h1>

            <p className="loginSubtitle">
              Ingrese su documento y contraseña del SENA Sofia Plus
            </p>

            <form onSubmit={login}>
              {/* Documento */}
              <div className="loginField">
                <input
                  id="documento"
                  name="documento"
                  type="text"
                  autoComplete="username"
                  aria-label="Documento de identidad"
                  placeholder="Ej. 12345678"
                  value={documento}
                  onChange={(evento) => setDocumento(evento.target.value)}
                  required
                />
              </div>

              {/* Contraseña */}
              <div className="loginField">
                <label htmlFor="password">Contraseña</label>

                <div className="loginPasswordInput">
                  <input
                    id="password"
                    name="password"
                    type={mostrarPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(evento) => setPassword(evento.target.value)}
                    required
                  />

                  <button
                    className="loginShowPassword"
                    type="button"
                    aria-label={
                      mostrarPassword
                        ? "Ocultar contraseña"
                        : "Mostrar contraseña"
                    }
                    onClick={() => setMostrarPassword(!mostrarPassword)}
                  >
                    {mostrarPassword ? (
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
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Recuperar contraseña */}
                <div className="loginForgotContainer">
                  <button
                    className="loginForgotLink"
                    type="button"
                    onClick={() => navigate("/recuperar")}
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
              </div>

              {/* Recordar sesión */}
              <label className="loginRemember">
                <input
                  type="checkbox"
                  checked={recordarSesion}
                  onChange={(evento) =>
                    setRecordarSesion(evento.target.checked)
                  }
                />
                <span>Recordar sesión</span>
              </label>

              {/* Mensajes del servidor */}
              {mensaje && (
                <p className="loginMessage" role="status">
                  {mensaje}
                </p>
              )}

              {/* Botón de acceso */}
              <button
                className="loginSubmit"
                type="submit"
                disabled={cargando}
              >
                {cargando ? "Ingresando..." : "Iniciar sesión →"}
              </button>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Login;