<template>
    <p class="text-lg text-gray-400" v-html="content"></p>
  </template>
  
  <script setup lang="ts">
  defineProps({
    content: {
      type: String,
      required: true,
    },
  });
  </script>