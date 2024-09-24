<template>
  <div class="task-container">
    <h2 class="title">Business Days Between Two Dates (Excluding Holidays)</h2>
    <form @submit.prevent="calculateBusinessDays">
      <div class="field">
        <label class="label">Start Date</label>
        <input v-model="startDate" type="date" class="input" required />
      </div>
      <div class="field">
        <label class="label">End Date</label>
        <input v-model="endDate" type="date" class="input" required />
      </div>
      <div class="field">
        <button class="button is-link" type="submit">Calculate</button>
      </div>
    </form>
    <div v-if="result !== null" class="result">
      <h3 class="subtitle">Business Days: {{ result }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { businessDaysBetweenTwoDates } from '@/helpers/businessDays'

export default defineComponent({
  setup() {
    const startDate = ref('')
    const endDate = ref('')
    const result = ref<number | null>(null)

    const publicHolidays: Date[] = [
      new Date('2024-01-01'), // New Year's Day
      new Date('2024-01-26'), // Australia Day
      new Date('2024-04-25'), // ANZAC Day
      new Date('2024-12-25'), // Christmas Day
      new Date('2024-12-26') // Boxing Day
    ]

    const calculateBusinessDays = () => {
      if (startDate.value && endDate.value) {
        const start = new Date(startDate.value)
        const end = new Date(endDate.value)
        result.value = businessDaysBetweenTwoDates(start, end, publicHolidays)
      }
    }

    return { startDate, endDate, result, calculateBusinessDays }
  }
})
</script>

<style scoped>
.task-container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
