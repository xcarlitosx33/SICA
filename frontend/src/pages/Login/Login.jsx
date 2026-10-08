import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [documento, setDocumento] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  function irRegistro() {
    navigate("/registro");
  }

  function irRecuperar() {
    navigate("/recuperar");
  }

  function volverInicio() {
    navigate("/");
  }

  async function login(evento) {
    evento.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        documento: documento,
        password: password,
      }),
    });

    const data = await res.json();

    console.log("RESPUESTA:", data);

    setMensaje(data.mensaje);

    setTipoMensaje(
      data.mensaje === "Bienvenido, al sistema SICA"
        ? "success"
        : "error"
    );

    if (data.mensaje === "Bienvenido, al sistema SICA") {
      setTimeout(function () {
        navigate("/dashboard");
      }, 1000);
    }
  }

  return (
    <div className="mainContentParent">
      <main className="mainContent">
        <div className="container">
          <div className="loginCard">

            {/* Tabs */}
            <div className="navInternalTabs">

              <button
                className="link"
                type="button"
                onClick={volverInicio}
              >
                <div className="text">Iniciar sesión</div>
              </button>

              <button
                className="link2"
                type="button"
                onClick={irRegistro}
              >
                <div className="text">Registrarse</div>
              </button>

            </div>

            {/* Branding */}
            <section className="container2">

              <div className="brandingInsideCardmargin">
                <div className="brandingInsideCard">

                  <img
                    className="senaLogoIcon"
                    loading="lazy"
                    alt="SENA Logo"
                    src="/SENA-Logo@2x.png"
                  />

                  <h3 className="heading1">S.I.C.A</h3>

                </div>
              </div>

              <div className="margin">
                <div className="container3">

                  <div className="heading2">
                    <h1 className="text3">
                      Bienvenido de nuevo
                    </h1>
                  </div>

                  <div className="container4">
                    <div className="text4">
                      Ingresa tus credenciales institucionales
                      <br />
                      para continuar.
                    </div>
                  </div>

                </div>
              </div>

              {mensaje && (
                <div
                  className={tipoMensaje}
                  style={{
                    marginBottom: "20px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {mensaje}
                </div>
              )}

              {/* Formulario */}
              <div className="formmargin">

                <form className="form" onSubmit={login}>

                  {/* Documento */}
                  <div className="emailField">

                    <div className="label">
                      <div className="text5">
                        Documento
                      </div>
                    </div>

                    <div className="container5">

                      <div className="input">
                        <input
                          className="container6"
                          value={documento}
                          onChange={function (evento) {
                            setDocumento(evento.target.value);
                          }}
                          placeholder="ejemplo:123456789*"
                          type="text"
                        />
                      </div>

                      <div className="container7">
                        <div className="text6">*</div>
                      </div>

                    </div>

                  </div>

                  {/* Contraseña */}
                  <div className="emailField">

                    <div className="label">
                      <div className="text5">
                        Contraseña
                      </div>
                    </div>

                    <div className="container5">

                      <div className="input">
                        <input
                          className="container6"
                          value={password}
                          onChange={function (evento) {
                            setPassword(evento.target.value);
                          }}
                          placeholder="*************"
                          type="password"
                        />
                      </div>

                    </div>

                    {/* Recuperar contraseña */}
                    <div className="container11">

                      <a
                        className="linkNo"
                        href="/recuperar"
                        onClick={function (evento) {
                          evento.preventDefault();
                          irRecuperar();
                        }}
                      >
                        ¿No recuerdas tu contraseña?
                      </a>

                    </div>

                  </div>

                  {/* Recordar sesión */}
                  <div className="checkbox">

                    <div className="label3">

                      <input
                        className="input3"
                        type="checkbox"
                      />

                      <div className="margin2">
                        <div className="container12">
                          <div className="text9">
                            Recordar mi inicio de sesión
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Botones */}
                  <div className="actions">

                    <button
                      className="button"
                      type="button"
                      onClick={volverInicio}
                    >
                      <div className="text10">
                        Volver
                      </div>
                    </button>

                    <button
                      className="button2"
                      type="submit"
                    >
                      <div className="text11">
                        Continuar
                      </div>
                    </button>

                  </div>

                </form>

              </div>

            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <section className="footer">

        <div className="margin3">

          <div className="text4">
            © Servicio Nacional de Aprendizaje SENA
          </div>

        </div>

      </section>

    </div>
  );
}

export default Login;