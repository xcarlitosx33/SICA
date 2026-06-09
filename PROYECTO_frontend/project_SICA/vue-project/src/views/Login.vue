<template>
  <div style="max-width: 400px; margin: 50px auto;">

    <div
      v-if="mensaje"
      :style="{
        color: tipoMensaje === 'success' ? 'green' : 'red',
        fontWeight: 'bold',
        marginBottom: '15px'
      }"
    >
      {{ tipoMensaje === 'success' ? '✅' : '❌' }}
      {{ mensaje }}
    </div>

    <h1>Iniciar Sesión</h1>

    <div>
      <label>Correo</label>
      <br>
      <input
        v-model="correo"
        type="email"
        placeholder="usuario@sena.edu.co"
      >
    </div>

    <br>

    <div>
      <label>Contraseña</label>
      <br>
      <input
        v-model="password"
        type="password"
        placeholder="********"
      >
    </div>

    <br>

    <button @click="iniciarSesion">
      Iniciar sesión
    </button>

    <br><br>

    <button @click="irARegistro">
      Registrarse
    </button>

    <br><br>

    <button @click="irARecuperar">
      Recuperar contraseña
    </button>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const correo = ref('')
const password = ref('')

const mensaje = ref('')
const tipoMensaje = ref('')

const router = useRouter()

async function iniciarSesion() {

  const respuesta = await fetch('http://127.0.0.1:8000/api/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      correo: correo.value,
      password: password.value
    })
  })

  const datos = await respuesta.json()

  mensaje.value = datos.mensaje

  if (datos.mensaje === 'Bienvenido, al sistema SICA') {

    tipoMensaje.value = 'success'

    setTimeout(() => {

      correo.value = ''
      password.value = ''

      router.push('/home')

    }, 1000)

  } else {

    tipoMensaje.value = 'error'

  }

}

function irARegistro() {
  router.push('/registro')
}

function irARecuperar() {
  router.push('/recuperar')
}
</script>