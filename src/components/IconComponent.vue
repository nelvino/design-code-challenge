<template>
    <img :src="src" :alt="alt" class="w-32 h-32 rounded-full mb-6 shadow-lg" />
  </template>
  
  <script setup lang="ts">
  defineProps({
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: 'Icon Image',
    },
  });
  </script>