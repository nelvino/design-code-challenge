<script setup lang="ts">
import TitleComponent from '../components/TitleComponent.vue'
import ContentComponent from '../components/ContentComponent.vue'
</script>

<template>
  <div class="text-center">
    <TitleComponent title="Welcome to the Design Code Challenge <br class='hidden sm:block' /> made by Nico Elvino" />
    <ContentComponent content="I created a simple Vue.js project to showcase my ability to implement solutions efficiently
      and to use best practices with a modern stack. I aimed to solve the 3 Tasks mentioned on the
      challenge, by implementing reusable components, styling them with Tailwind CSS, while writing
      clean, maintainable and tested code." />
  </div>
</template>
