<template>
  <div class="pagina">
    <header class="header">
      <h2>Dashboard Administrativo</h2>
    </header>

    <main class="contenido">
      <p>¡Bienvenido al Dashboard! Aquí irá todo el contenido administrativo.</p>
    </main>

    <footer class="footer">
      S.I.C.A | © 2024 Servicio Nacional de Aprendizaje SENA.
    </footer>
  </div>
</template>

<script setup lang="ts">
// Por ahora no necesitas nada adicional, luego puedes agregar lógica aquí
</script>

<style scoped>
.pagina {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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

.footer {
  text-align: center;
  padding: 20px;
  font-size: 14px;
  opacity: 0.7;
}
</style>