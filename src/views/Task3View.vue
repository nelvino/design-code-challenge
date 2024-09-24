<template>
  <div>
    <h1>Task 3 - Business Days Between Two Dates (with rules)</h1>
    <div>
      <label>First Date:</label>
      <input v-model="firstDateInput" type="date" />
    </div>
    <div>
      <label>Second Date:</label>
      <input v-model="secondDateInput" type="date" />
    </div>
    <button @click="calculateBusinessDays">Calculate Business Days</button>
    <p>Business Days: {{ businessDays }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BusinessDaysBetweenTwoDatesWithRules } from '../helpers/businessDaysBetweenTwoDatesWithRules'
import { publicHolidayRules } from '../helpers/holidayRules'

const firstDateInput = ref('')
const secondDateInput = ref('')
const businessDays = ref(0)

const calculateBusinessDays = () => {
  const firstDate = new Date(firstDateInput.value)
  const secondDate = new Date(secondDateInput.value)

  if (!isNaN(firstDate.getTime()) && !isNaN(secondDate.getTime())) {
    businessDays.value = BusinessDaysBetweenTwoDatesWithRules(
      firstDate,
      secondDate,
      publicHolidayRules
    )
  } else {
    businessDays.value = 0 // Handle invalid dates
  }
}
</script>
