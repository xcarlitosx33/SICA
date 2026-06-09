<template>
  <div style="text-align: center; margin-top: 50px;">

    <h1>🏠 Home SICA</h1>

    <h2>Bienvenido al sistema</h2>

    <button @click="volver">
      Cerrar sesión
    </button>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function volver() {
  router.push('/')
}
</script>