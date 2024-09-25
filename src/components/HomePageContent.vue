<script setup lang="ts">
import TitleComponent from '../components/TitleComponent.vue'
import ContentComponent from '../components/ContentComponent.vue'
</script>

<template>
  <div class="text-center">
    <TitleComponent
      title="Welcome to the Design Code Challenge <br class='hidden sm:block' /> made by Nico Elvino"
    />
    <ContentComponent
      content="I developed a Vue.js project to demonstrate efficient solution implementation using best practices and a modern tech stack. The project solves the 3 Tasks from the challenge by incorporating reusable components, Tailwind CSS for styling, and ensuring clean, maintainable, and tested code"
    />
  </div>
</template>
