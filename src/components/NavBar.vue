<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="bg-gray-800 p-4">
      <ul class="flex justify-center space-x-4">
        <li><RouterLink class="text-white" to="/">Home</RouterLink></li>
        <li><RouterLink class="text-white" to="/task1">Task 1</RouterLink></li>
        <li><RouterLink class="text-white" to="/task2">Task 2</RouterLink></li>
        <li><RouterLink class="text-white" to="/task3">Task 3</RouterLink></li>
      </ul>
    </nav>
  </template>
  
  <script lang="ts">
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style scoped>
  nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}
  </style>