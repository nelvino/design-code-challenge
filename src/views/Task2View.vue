<template>
  <div class="p-5">
    <TitleComponent title="Business Days (fixed holidays)" />
    <FormComponent
      :startDate="firstDateInput"
      :endDate="secondDateInput"
      @submit="calculateBusinessDays"
    />
    <ResultComponent v-if="businessDays !== null" :startDate="firstDateInput" :endDate="secondDateInput" :result="businessDays" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FormComponent from '../components/FormComponent.vue'
import TitleComponent from '../components/TitleComponent.vue'
import ResultComponent from '../components/ResultComponent.vue';
import { BusinessDaysBetweenTwoDates } from '../helpers/businessDaysBetweenTwoDates'

export default defineComponent({
  components: {
    FormComponent,
    TitleComponent,
    ResultComponent
  },
  setup() {
    const firstDateInput = ref<string>('')
    const secondDateInput = ref<string>('')
    const businessDays = ref<number | null>(null)

    const calculateBusinessDays = (dates: { startDate: string; endDate: string }) => {
      const firstDate = new Date(dates.startDate)
      const secondDate = new Date(dates.endDate)

      if (!isNaN(firstDate.getTime()) && !isNaN(secondDate.getTime())) {
        businessDays.value = BusinessDaysBetweenTwoDates(firstDate, secondDate)
      } else {
        businessDays.value = 0 // Handle invalid dates
      }

      // Update the inputs to reflect the form submission
      firstDateInput.value = dates.startDate
      secondDateInput.value = dates.endDate
    }

    return {
      firstDateInput,
      secondDateInput,
      businessDays,
      calculateBusinessDays
    }
  }
})
</script>
