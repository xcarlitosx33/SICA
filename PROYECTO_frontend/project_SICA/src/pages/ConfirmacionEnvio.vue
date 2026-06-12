<template>
  <div class="pagina">
    <div class="centeredCard">
      <img
        class="marginIcon"
        loading="lazy"
        alt="Decoración"
        src="/Margin@2x.png"
      />

      <section class="margin">
        <div class="container">
          <div class="heading1">
            <h1 class="text">¡Enlace enviado!</h1>
          </div>

          <div class="container2">
            <div class="text2">
              Hemos enviado un enlace de recuperación a tu correo institucional.
              Por favor revisa tu bandeja de entrada y sigue las instrucciones.
              Si no encuentras el mensaje, revisa la carpeta de spam o correo no deseado.
            </div>
          </div>

          <!-- Muestra el correo con mitad oculta -->
          <div class="background">
            {{ ocultarCorreo(correoUsuario) }}
          </div>

          <div class="container3">
            <div class="text4">
              El enlace de recuperación expirará en 15 minutos por motivos de seguridad.
            </div>
          </div>
        </div>
      </section>

      <div class="container4">
        <button class="button" @click="irLogin">
          Ir al inicio de sesión
        </button>

        <button class="button2" @click="reenviarEnlace">
          Reenviar enlace
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const correoUsuario = ref("");

// Cargar correo guardado desde localStorage
onMounted(() => {
  correoUsuario.value = localStorage.getItem("correoRecuperacion") || "";
});

// Función para ocultar la mitad del correo
function ocultarCorreo(email: string): string {
  if (!email || !email.includes("@")) return "correo@misena.edu.co";

  const [usuario, dominio] = email.split("@");
  const mitad = Math.ceil(usuario.length / 2);
  return usuario.slice(0, 1) + "*".repeat(mitad - 1) + "@" + dominio;
}

function irLogin() {
  router.push("/");
}

function reenviarEnlace() {
  alert(`Se ha reenviado el enlace de recuperación a ${correoUsuario.value}`);
  // Aquí podrías llamar a tu API real para reenviar el correo
}
</script>

<style scoped>
.pagina {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/Confirmaci-n-de-Env-o-Unificada-S-I-C-A@3x.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: "Work Sans", sans-serif;
}

.centeredCard {
  width: 100%;
  max-width: 480px;
  padding: 40px 30px;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.marginIcon {
  width: 70px;
  height: auto;
  margin-bottom: 20px;
}

.heading1 {
  margin-bottom: 16px;
}

.text {
  font-size: 24px;
  font-weight: 600;
  color: #1b1c1c;
  margin: 0;
}

.container2 {
  margin-bottom: 24px;
  font-size: 14px;
  color: #3f4a3e;
  line-height: 20px;
}

.background {
  background-color: #f5f5f5;
  padding: 12px 20px;
  border-radius: 9999px;
  margin-bottom: 24px;
  width: fit-content;
  font-weight: 500;
  color: #007832;
  text-align: center;
  font-size: 16px;
}

.container3 {
  margin-bottom: 24px;
  font-size: 12px;
  opacity: 0.7;
}

.container4 {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px; /* Espacio entre botones */
}

.button {
  width: 100%;
  padding: 12px;
  background-color: #007832;
  color: #fff;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: #269e59;
}

.button2 {
  width: 100%;
  padding: 12px;
  background-color: transparent;
  border: 1px solid #007832;
  border-radius: 9999px;
  cursor: pointer;
}

.button2:hover {
  background-color: rgba(38,158,89,0.1);
}
</style>