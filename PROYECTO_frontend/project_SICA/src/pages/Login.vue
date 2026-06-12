<template>
  <div class="mainContentParent">
    <main class="mainContent">
      <div class="container">
        <div class="loginCard">

          <!-- Tabs -->
          <div class="navInternalTabs">
            <button
              class="link"
              type="button"
              :class="{ activo: tabActivo === 'login' }"
              @click="tabActivo = 'login'; router.push('/')"
            >
              <div class="text">Iniciar sesión</div>
            </button>

            <button
              class="link2"
              type="button"
              :class="{ activo: tabActivo === 'registro' }"
              @click="tabActivo = 'registro'; router.push('/registro')"
            >
              <div class="text">Registrarse</div>
            </button>
          </div>

          <!-- Branding -->
          <section class="container2">
            <div class="brandingInsideCardmargin">
              <div class="brandingInsideCard">
                <img
                  class="senaLogoIcon"
                  loading="lazy"
                  alt="SENA Logo"
                  src="/SENA-Logo@2x.png"
                />
                <h3 class="heading1">S.I.C.A</h3>
              </div>
            </div>

            <div class="margin">
              <div class="container3">
                <div class="heading2">
                  <h1 class="text3">Bienvenido de nuevo</h1>
                </div>
                <div class="container4">
                  <div class="text4">
                    Ingresa tus credenciales institucionales
                    <br />
                    para continuar.
                  </div>
                </div>
              </div>
            </div>
              <div
                 v-if="mensaje"
                :class="tipoMensaje"
                style="margin-bottom:20px; text-align:center; font-weight:bold;">
                {{ mensaje }}
              </div>
            <!-- Form -->
            <div class="formmargin">
              <form class="form" @submit.prevent="login">

                <!-- Correo -->
                <div class="emailField">
                  <div class="label">
                    <div class="text5">Correo electrónico</div>
                  </div>
                  <div class="container5">
                    <div class="input">
                      <input
                        class="container6"
                        v-model="correo"
                        placeholder="Usuario@sena.edu.co*"
                        type="text"
                      />
                    </div>
                    <div class="container7">
                      <div class="text6">*</div>
                    </div>
                  </div>
                </div>

                <!-- Contraseña -->
                <div class="emailField">
                  <div class="label">
                    <div class="text5">Contraseña</div>
                  </div>
                  <div class="container5">
                    <div class="input">
                      <input
                        class="container6"
                        v-model="password"
                        placeholder="*************"
                        type="password"
                      />
                    </div>
                  </div>

                  <!-- Olvidaste contraseña -->
                  <div class="container11">
                    <a
                      class="linkNo"
                      @click.prevent="router.push('/recuperar')"
                    >
                      ¿No recuerdas tu contraseña?
                    </a>
                  </div>
                </div>

                <!-- Recordar sesión -->
                <div class="checkbox">
                  <div class="label3">
                    <input class="input3" type="checkbox" />
                    <div class="margin2">
                      <div class="container12">
                        <div class="text9">
                          Recordar mi inicio de sesión
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Botones -->
                <div class="actions">
                  <button class="button" type="button" @click="router.push('/')">
                    <div class="text10">Volver</div>
                  </button>
                  <button class="button2" type="submit">
                    <div class="text11">Continuar</div>
                  </button>
                </div>

              </form>
            </div>

          </section>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <section class="footer">
      <div class="margin3">
        <div class="text4">
          © Servicio Nacional de Aprendizaje SENA
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const tabActivo = ref('login') // Tab activo por defecto en login
const correo = ref('')
const password = ref('')
const mensaje = ref('')
const tipoMensaje = ref('')

async function login() {

  const res = await fetch('http://127.0.0.1:8000/api/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      correo: correo.value,
      password: password.value
    })
  })

  const data = await res.json()

  console.log("RESPUESTA:", data)

  mensaje.value = data.mensaje

  tipoMensaje.value =
    data.mensaje === "Bienvenido, al sistema SICA"
      ? "success"
      : "error"

  if (data.mensaje === "Bienvenido, al sistema SICA") {

    setTimeout(() => {

      router.push('/dashboard')

    }, 1000)

  }

}
</script>

<style>

  .mainContentParent {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-image: url("/Frame-146@3x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    line-height: normal;
    letter-spacing: normal;
  }
  .mainContent {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-24);
    text-align: center;
    font-size: var(--fs-14);
    color: var(--color-seagreen);
    font-family: var(--font-work-sans);
  }
  .container {
    width: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 480px;
  }
  .loginCard {
    width: 100%;
    box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.08);
    border-radius: 32px;
    background-color: var(--color-white);
    border: 1px solid var(--color-silver-200);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 100%;
  }
  .navInternalTabs {
    align-self: stretch;
    border-bottom: 1px solid var(--color-silver-200);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 0px;
    row-gap: 20px;
  }
  .link {
    align-self: stretch;
    flex: 1;
    background-color: var(--color-whitesmoke);
    border-bottom: 4px solid var(--color-seagreen);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--padding-24) var(--padding-0);
    min-width: 155px;
  }
  .text {
    position: relative;
    letter-spacing: 0.14px;
    line-height: var(--lh-16);
  }
  .link2 {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--padding-24) var(--padding-0);
    box-sizing: border-box;
    min-width: 155px;
    color: var(--color-darkslategray);
  }
  .container2 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--padding-48);
    text-align: center;
    font-size: 24px;
    color: var(--color-seagreen);
    font-family: var(--font-work-sans);
  }
  .brandingInsideCardmargin {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--padding-0) var(--padding-0) 40px;
    flex-shrink: 0;
  }
  .brandingInsideCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-8);
  }
  .senaLogoIcon {
    width: 96px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
  }
  .heading1 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: -0.6px;
    line-height: var(--lh-32);
    font-weight: 400;
    font-family: inherit;
  }
  .margin {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--padding-0) var(--padding-0) var(--padding-32);
    flex-shrink: 0;
    font-size: 32px;
    color: var(--color-gray);
  }
  .container3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .heading2 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text3 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: -0.64px;
    line-height: 40px;
    font-weight: 400;
    font-family: inherit;
  }
  .container4 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 340px;
    font-size: var(--fs-16);
    color: var(--color-darkslategray);
  }
  .text4 {
    position: relative;
    line-height: var(--lh-24);
  }
  .formmargin {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--padding-0) var(--padding-0) var(--padding-16);
  }
  .form {
    margin: 0;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
  .emailField {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: var(--gap-8);
  }
  .label {
    width: 366px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .text5 {
    position: relative;
    font-size: var(--fs-14);
    letter-spacing: 0.14px;
    line-height: var(--lh-16);
    font-family: var(--font-work-sans);
    color: var(--color-darkslategray);
    text-align: left;
  }
  .container5 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    isolation: isolate;
  }
  .input {
    align-self: stretch;
    height: 56px;
    border-radius: 9999px;
    background-color: var(--color-white);
    border: 1px solid var(--color-silver-100);
    box-sizing: border-box;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 17.5px var(--padding-32);
    z-index: 0;
  }
  .container6 {
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    height: var(--height-19);
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: var(--font-work-sans);
    font-size: var(--fs-16);
    color: var(--color-silver-100);
    min-width: 190px;
    max-width: 100%;
  }
  .container7 {
    width: var(--width-11);
    height: 50%;
    margin: 0 !important;
    position: absolute;
    top: 25%;
    right: 31.3px;
    bottom: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;
  }
  .text6 {
    position: relative;
    font-size: var(--fs-18);
    line-height: var(--lh-28);
    font-family: var(--font-work-sans);
    color: var(--color-firebrick);
    text-align: left;
    display: none;
  }
  .container11 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: var(--padding-0) var(--padding-16) var(--padding-0)
      var(--padding-0);
  }
  .linkNo {
    position: relative;
    font-size: 12px;
    line-height: var(--lh-16);
    font-family: var(--font-work-sans);
    color: var(--color-seagreen);
    text-align: right;
  }
  .checkbox {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px var(--padding-0);
  }
  .label3 {
    display: flex;
    align-items: center;
  }
  .input3 {
    margin: 0;
    height: 20px;
    width: 20px;
    position: relative;
    border-radius: 6px;
    border: 1px solid var(--color-silver-100);
    box-sizing: border-box;
  }
  .margin2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--padding-0) var(--padding-0) var(--padding-0)
      var(--padding-12);
  }
  .container12 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text9 {
    position: relative;
    font-size: var(--fs-14);
    line-height: 20px;
    font-family: var(--font-work-sans);
    color: var(--color-darkslategray);
    text-align: center;
  }
  .actions {
    align-self: stretch;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-16) var(--padding-0) var(--padding-0);
    gap: 16px;
  }
  .button {
    cursor: pointer;
    border: 2px solid var(--color-seagreen);
    padding: 13.5px var(--padding-0) 14.5px;
    background-color: transparent;
    height: 56px;
    width: 185px;
    border-radius: 9999px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .button:hover {
    background-color: var(--color-mediumseagreen-200);
    border: 2px solid var(--color-mediumseagreen-100);
    box-sizing: border-box;
  }
  .text10 {
    position: relative;
    font-size: var(--fs-16);
    line-height: var(--lh-24);
    font-family: var(--font-work-sans);
    color: var(--color-seagreen);
    text-align: center;
  }
  .button2 {
    cursor: pointer;
    border: none;
    padding: 15.5px var(--padding-0) 16.5px;
    background-color: var(--color-seagreen);
    height: 56px;
    width: 181px;
    box-shadow: 0px 8px 20px rgba(0, 120, 50, 0.25);
    border-radius: 9999px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
  .button2:hover {
    background-color: var(--color-mediumseagreen-100);
  }
  .text11 {
    position: relative;
    font-size: var(--fs-16);
    line-height: var(--lh-24);
    font-family: var(--font-work-sans);
    color: var(--color-white);
    text-align: center;
  }
.footer {
  width: 100%;
  height: 139px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-48) var(--padding-0);
  box-sizing: border-box;
  text-align: center;
  font-size: var(--fs-16);
  color: var(--color-darkslategray);
  font-family: var(--font-work-sans);
}
  .margin3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--padding-0) var(--padding-0) var(--padding-12);
  }

  @media screen and (max-width: 900px) {
    .mainContent {
      padding-top: var(--padding-20);
      padding-bottom: var(--padding-20);
      box-sizing: border-box;
    }

    .container2 {
      padding-top: 31px;
      padding-bottom: 31px;
      box-sizing: border-box;
    }

    .text3 {
      font-size: 26px;
      line-height: var(--lh-32);
    }
  }
  @media screen and (max-width: 700px) {
    .container {
      max-width: 100%;
    }

    .container2 {
      padding-left: var(--padding-24);
      padding-right: var(--padding-24);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .container2 {
      padding-top: var(--padding-20);
      padding-bottom: var(--padding-20);
      box-sizing: border-box;
    }

    .heading1 {
      font-size: var(--fs-19);
      line-height: 26px;
    }

    .text3 {
      font-size: var(--fs-19);
      line-height: var(--lh-24);
    }

    .actions {
      flex-wrap: wrap;
    }
  }

.link, .link2 {
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  font-family: var(--font-work-sans);
  font-size: var(--fs-16);
  font-weight: 400;
  color: var(--color-darkslategray);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link.activo, .link2.activo {
  color: var(--color-seagreen);
  font-weight: 600;
}
</style>
