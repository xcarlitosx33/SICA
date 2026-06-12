<template>
  <div class="pagina">
    <!-- Header -->
    <header class="header">
      <h2>S.I.C.A.</h2>
    </header>

    <!-- Main content -->
    <main class="contenido">
      <div class="centeredCard">
        <h1 class="titulo">¿Olvidaste tu contraseña?</h1>
        <p class="mensaje">Ingresa tu correo institucional para recibir un enlace de recuperación.</p>

        <input v-model="correo" type="email" placeholder="Correo institucional" class="input" />

        <button class="btnPrincipal" @click="enviarEnlace">Enviar enlace de recuperación →</button>
        <button class="btnSecundario" @click="volverLogin">Volver al inicio de sesión</button>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      S.I.C.A | © 2024 Servicio Nacional de Aprendizaje SENA.
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const correo = ref("");

function enviarEnlace() {
  if (!correo.value) {
    alert("Por favor ingresa tu correo institucional");
    return;
  }

  // Guardamos el correo en localStorage para usarlo en la pantalla de confirmación
  localStorage.setItem("correoRecuperacion", correo.value);

  // Redirige a la pantalla de confirmación
  router.push("/confirmacion");
}

function volverLogin() {
  router.push("/");
}
</script>

<style scoped>
.pagina {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url("/Confirmaci-n-de-Env-o-Unificada-S-I-C-A@3x.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: "Work Sans", sans-serif;
}

.header {
  display: flex;
  justify-content: center;
  padding: 40px 0;
  color: #007832;
  font-weight: 700;
  font-size: 24px;
}

.contenido {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.centeredCard {
  background-color: white;
  border-radius: 24px;
  max-width: 480px;
  width: 100%;
  padding: 40px 30px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.titulo {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1b1c1c;
}

.mensaje {
  font-size: 14px;
  margin-bottom: 24px;
  color: #3f4a3e;
}

.input {
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 9999px;
}

.btnPrincipal {
  width: 100%;
  padding: 12px;
  background-color: #007832;
  color: white;
  border: none;
  border-radius: 9999px;
  margin-bottom: 12px;
  cursor: pointer;
}

.btnPrincipal:hover {
  background-color: #269e59;
}

.btnSecundario {
  width: 100%;
  padding: 12px;
  background-color: transparent;
  border: none;
  color: #007832;
  text-decoration: underline;
  cursor: pointer;
}

.footer {
  text-align: center;
  padding: 20px;
  font-size: 14px;
  opacity: 0.7;
}
</style>