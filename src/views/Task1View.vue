<template>
  <div class="task1-container">
    <h2 class="text-xl font-bold mb-4">Task 1: Weekdays Between Two Dates</h2>
    <form @submit.prevent="calculateWeekdays" class="space-y-4">
      <div class="field">
        <label class="label">Start Date</label>
        <input type="date" v-model="startDate" class="input" />
      </div>
      <div class="field">
        <label class="label">End Date</label>
        <input type="date" v-model="endDate" class="input" />
      </div>
      <div class="control">
        <button type="submit" class="button is-primary">Calculate Weekdays</button>
      </div>
    </form>
    <div v-if="result !== null" class="notification is-info mt-4">
      Weekdays between {{ startDate }} and {{ endDate }}: {{ result }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { weekdaysBetweenTwoDates } from '@/utils/dateHelpers'

export default defineComponent({
  setup() {
    const startDate = ref<string>('')
    const endDate = ref<string>('')
    const result = ref<number | null>(null)

    const calculateWeekdays = () => {
      if (startDate.value && endDate.value) {
        const start = new Date(startDate.value)
        const end = new Date(endDate.value)
        result.value = weekdaysBetweenTwoDates(start, end)
      }
    }

    return {
      startDate,
      endDate,
      result,
      calculateWeekdays
    }
  }
})
</script>

<style scoped>
.task1-container {
  padding: 20px;
}
</style>
