<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/nav.vue'

</script>

<template>
  <div id="app">
    <Nav> </Nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.site-header {
  background-color: #c8fff6;
  padding: 1rem;
}
</style>
