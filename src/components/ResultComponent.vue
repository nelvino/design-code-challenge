<template>
  <div
    v-if="result !== null"
    class="bg-blue-100 text-blue-800 p-4 rounded-lg shadow-lg mt-4 text-center"
    data-cy="result"
  >
    <p class="font-bold text-xl">Result:</p>
    <p class="text-3xl font-bold mt-2">{{ result }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  result: {
    type: Number,
    required: true
  }
})
</script>
