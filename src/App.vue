<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="fixed top-0 w-full z-50">
      <NavBar />
    </header>
    <main class="flex-grow pt-16 md:pt-20 w-full max-w-screen-lg mx-auto px-4 md:px-8">
      <router-view />
    </main>
  </div>
</template>
