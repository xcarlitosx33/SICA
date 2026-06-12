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
                  <h1 class="text3">Crear cuenta</h1>
                </div>
                <div class="container4">
                  <div class="text4">
                    Completa la información para registrarte en el portal institucional.
                  </div>
                </div>
              </div>
            </div>

            <!-- Form -->
            <div class="formmargin">
              <form class="form" @submit.prevent="register">

                <!-- Correo -->
                <div class="emailField">
                  <div class="label">
                    <div class="text5">Correo institucional</div>
                  </div>
                  <div class="container5">
                    <div class="input">
                      <input
                        class="container6"
                        v-model="correo"
                        placeholder="usuario@sena.edu.co"
                        type="email"
                      />
                    </div>
                    <div class="container7"><div class="text6">*</div></div>
                  </div>
                </div>

                <!-- Documento -->
                <div class="emailField">
                  <div class="label">
                    <div class="text5">Número de documento / cédula</div>
                  </div>
                  <div class="container5">
                    <div class="input">
                      <input
                        class="container6"
                        v-model="documento"
                        placeholder="Ej. 1098765432"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <!-- Nombre completo -->
                <div class="emailField">
                  <div class="label">
                    <div class="text5">Nombres y apellidos</div>
                  </div>
                  <div class="container5">
                    <div class="input">
                      <input
                        class="container6"
                        v-model="nombreCompleto"
                        placeholder="Nombre completo"
                        type="text"
                      />
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
                        placeholder="********"
                        type="password"
                      />
                    </div>
                  </div>

                  <div class="passwordRules">
                    <div>
                      <input type="checkbox" :checked="tiene8Caracteres" disabled>
                      Mínimo 8 caracteres
                    </div>
                    <div>
                      <input type="checkbox" :checked="tieneMayuscula" disabled>
                      Al menos una mayúscula
                    </div>
                    <div>
                      <input type="checkbox" :checked="tieneNumero" disabled>
                      Al menos un número
                    </div>
                  </div>
                </div>

                <!-- Confirmar contraseña -->
                <div class="emailField">
                  <div class="label">
                    <div class="text5">Confirmar contraseña</div>
                  </div>
                  <div class="container5">
                    <div class="input">
                      <input
                        class="container6"
                        v-model="confirmPassword"
                        placeholder="********"
                        type="password"
                      />
                    </div>
                  </div>
                </div>

                <!-- Botones -->
                <div class="actions">
                  <button class="button" type="button" @click="router.push('/')">
                    <div class="text10">Volver</div>
                  </button>
                  <button class="button2" type="submit">
                    <div class="text11">Crear cuenta</div>
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
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const tabActivo = ref('registro') // Tab activo por defecto en esta vista

const correo = ref('')
const documento = ref('')
const nombreCompleto = ref('')
const password = ref('')
const confirmPassword = ref('')

const tiene8Caracteres = computed(() => password.value.length >= 8)
const tieneMayuscula = computed(() => /[A-Z]/.test(password.value))
const tieneNumero = computed(() => /\d/.test(password.value))

function register() {
  console.log({
    correo: correo.value,
    documento: documento.value,
    nombreCompleto: nombreCompleto.value,
    password: password.value,
    confirmPassword: confirmPassword.value
  })
}
</script>

<style>
.navInternalTabs {
  display: flex;
  border-bottom: 1px solid #d9d9d9;
}

.link, .link2 {
  flex: 1;
  border: none;
  background: none;
  cursor: pointer;
  padding: 16px 0;
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
  border-bottom: 3px solid var(--color-seagreen);
  margin-bottom: -1px;
}
.passwordRules {
  display: flex;
  flex-direction: column;
  gap: 6px; /* espacio entre cada regla */
  margin-top: 8px;
}

.passwordRules div {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px; /* tamaño más legible */
  color: #1b1c1c; /* negro */
  font-weight: 400;
}

.passwordRules input[type="checkbox"] {
  width: 14px;
  height: 14px;
  margin: 0;
}
</style>