<template>
    <div class="p-5">
      <TitleComponent :title="title" />
      <FormComponent
        :startDate="firstDateInput"
        :endDate="secondDateInput"
        @submit="calculateBusinessDays"
      />
      <ResultComponent
        v-if="businessDays !== null"
        :startDate="firstDateInput"
        :endDate="secondDateInput"
        :result="businessDays"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  import FormComponent from './FormComponent.vue'
  import TitleComponent from './TitleComponent.vue'
  import ResultComponent from './ResultComponent.vue'
  import { BusinessDaysBetweenTwoDates } from '../helpers/businessDaysBetweenTwoDates'
  import { getFixedHolidays, publicHolidayRules } from '../helpers/holidayRules'
  
  export default defineComponent({
    components: {
      FormComponent,
      TitleComponent,
      ResultComponent
    },
    props: {
      useHolidayRules: {
        type: Boolean,
        default: false // By default, use fixed holidays for Task 2
      },
      title: {
        type: String,
        default: 'Business Days Calculation'
      }
    },
    setup(props) {
      const firstDateInput = ref<string>('')
      const secondDateInput = ref<string>('')
      const businessDays = ref<number | null>(null)
  
      const calculateBusinessDays = (dates: { startDate: string; endDate: string }) => {
        const firstDate = new Date(dates.startDate)
        const secondDate = new Date(dates.endDate)
  
        let publicHolidays
        if (props.useHolidayRules) {
          publicHolidays = publicHolidayRules // Task 3 - Use holiday rules
        } else {
          // Task 2 - Use fixed holidays for both years if needed
          const firstYearHolidays = getFixedHolidays(firstDate.getFullYear())
          const secondYearHolidays = getFixedHolidays(secondDate.getFullYear())
  
          // Combine holidays across the two years
          publicHolidays = [...firstYearHolidays, ...secondYearHolidays]
        }
  
        if (!isNaN(firstDate.getTime()) && !isNaN(secondDate.getTime())) {
          businessDays.value = BusinessDaysBetweenTwoDates(firstDate, secondDate, publicHolidays)
        } else {
          businessDays.value = 0
        }
  
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