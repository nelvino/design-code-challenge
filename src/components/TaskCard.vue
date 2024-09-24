<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
      <slot />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      title: String,
    },
  });
  </script>
  
  <style scoped>
  .card {
    @apply shadow-lg p-4;
  }
  </style>