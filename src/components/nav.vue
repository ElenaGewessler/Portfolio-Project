<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="nav">
    <header class="site-header">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Über mich</RouterLink>
        <RouterLink to="/projects">Projekte</RouterLink>

      </nav>
    </header>
  </div>
</template>

<style scoped>
.site-header {
  background-color: #c8fff6;
  padding: 1rem;
}
</style>
