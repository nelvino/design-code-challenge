<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

// State for toggling the mobile menu
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav class="bg-gray-900 text-white fixed top-0 left-0 w-full shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo / Brand name -->
        <div class="flex-shrink-0">
          <RouterLink to="/" class="text-2xl font-semibold text-white hover:text-gray-300">
            Design Code Challenge
          </RouterLink>
        </div>

        <div class="hidden md:flex space-x-8">
          <RouterLink class="hover:text-gray-300" to="/">Home</RouterLink>
          <RouterLink class="hover:text-gray-300" to="/task1">Task 1</RouterLink>
          <RouterLink class="hover:text-gray-300" to="/task2">Task 2</RouterLink>
          <RouterLink class="hover:text-gray-300" to="/task3">Task 3</RouterLink>
        </div>

        <div class="md:hidden flex items-center">
          <button
            @click="toggleMobileMenu"
            class="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <transition name="slide-fade">
      <div
        v-show="isMobileMenuOpen"
        class="fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center space-y-6"
      >
        <button
          @click="toggleMobileMenu"
          class="absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <RouterLink class="text-3xl hover:text-gray-400" to="/" @click="isMobileMenuOpen = false"
          >Home</RouterLink
        >
        <RouterLink
          class="text-3xl hover:text-gray-400"
          to="/task1"
          @click="isMobileMenuOpen = false"
          >Task 1</RouterLink
        >
        <RouterLink
          class="text-3xl hover:text-gray-400"
          to="/task2"
          @click="isMobileMenuOpen = false"
          >Task 2</RouterLink
        >
        <RouterLink
          class="text-3xl hover:text-gray-400"
          to="/task3"
          @click="isMobileMenuOpen = false"
          >Task 3</RouterLink
        >
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

nav a.router-link-exact-active {
  color: #fbbf24; /* Change color when the link is active */
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
