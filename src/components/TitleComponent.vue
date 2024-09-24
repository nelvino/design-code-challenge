<template>
  <h1 class="text-4xl text-gray-100 font-bold text-center mb-8" v-html="title"></h1>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>