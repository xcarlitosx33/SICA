import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Registro.css";

function Registro() {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [documento, setDocumento] = useState("");
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Reglas de contraseña
  const tiene8Caracteres = password.length >= 8;
  const tieneMayuscula = /[A-Z]/.test(password);
  const tieneNumero = /\d/.test(password);

  function register(evento) {
    evento.preventDefault();

    console.log({
      correo: correo,
      documento: documento,
      nombreCompleto: nombreCompleto,
      password: password,
      confirmPassword: confirmPassword
    });
  }

  function irLogin() {
    navigate("/");
  }

  function irRegistro() {
    navigate("/registro");
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
                onClick={irLogin}
              >
                <div className="text">Iniciar sesión</div>
              </button>

              <button
                className="link2 activo"
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
                      Crear cuenta
                    </h1>
                  </div>

                  <div className="container4">
                    <div className="text4">
                      Completa la información para registrarte en el portal institucional.
                    </div>
                  </div>

                </div>
              </div>

              {/* Formulario */}
              <div className="formmargin">

                <form
                  className="form"
                  onSubmit={register}
                >

                  {/* Correo */}
                  <div className="emailField">

                    <div className="label">
                      <div className="text5">
                        Correo institucional
                      </div>
                    </div>

                    <div className="container5">

                      <div className="input">
                        <input
                          className="container6"
                          value={correo}
                          onChange={(evento) =>
                            setCorreo(evento.target.value)
                          }
                          placeholder="usuario@sena.edu.co"
                          type="email"
                        />
                      </div>

                      <div className="container7">
                        <div className="text6">
                          *
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Documento */}
                  <div className="emailField">

                    <div className="label">
                      <div className="text5">
                        Número de documento / cédula
                      </div>
                    </div>

                    <div className="container5">

                      <div className="input">
                        <input
                          className="container6"
                          value={documento}
                          onChange={(evento) =>
                            setDocumento(evento.target.value)
                          }
                          placeholder="Ej. 1098765432"
                          type="text"
                        />
                      </div>

                    </div>

                  </div>

                  {/* Nombre completo */}
                  <div className="emailField">

                    <div className="label">
                      <div className="text5">
                        Nombres y apellidos
                      </div>
                    </div>

                    <div className="container5">

                      <div className="input">
                        <input
                          className="container6"
                          value={nombreCompleto}
                          onChange={(evento) =>
                            setNombreCompleto(evento.target.value)
                          }
                          placeholder="Nombre completo"
                          type="text"
                        />
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
                          onChange={(evento) =>
                            setPassword(evento.target.value)
                          }
                          placeholder="********"
                          type="password"
                        />
                      </div>

                    </div>

                    {/* Reglas de contraseña */}
                    <div className="passwordRules">

                      <div>
                        <input
                          type="checkbox"
                          checked={tiene8Caracteres}
                          disabled
                          readOnly
                        />
                        Mínimo 8 caracteres
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          checked={tieneMayuscula}
                          disabled
                          readOnly
                        />
                        Al menos una mayúscula
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          checked={tieneNumero}
                          disabled
                          readOnly
                        />
                        Al menos un número
                      </div>

                    </div>

                  </div>

                  {/* Confirmar contraseña */}
                  <div className="emailField">

                    <div className="label">
                      <div className="text5">
                        Confirmar contraseña
                      </div>
                    </div>

                    <div className="container5">

                      <div className="input">
                        <input
                          className="container6"
                          value={confirmPassword}
                          onChange={(evento) =>
                            setConfirmPassword(evento.target.value)
                          }
                          placeholder="********"
                          type="password"
                        />
                      </div>

                    </div>

                  </div>

                  {/* Botones */}
                  <div className="actions">

                    <button
                      className="button"
                      type="button"
                      onClick={irLogin}
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
                        Crear cuenta
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

export default Registro;