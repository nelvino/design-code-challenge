<script setup lang="ts">
import IconComponent from '../components/IconComponent.vue'
import HomePageContent from '../components/HomePageContent.vue'
import iconSrc from '@/assets/nico-elvino-icon.jpg';
</script>

<template>
  <main class="flex flex-col items-center min-h-screen p-4 md:mt-20">
    <IconComponent :src="iconSrc" alt="Nico Elvino Icon" />
    <HomePageContent />
  </main>
</template>
