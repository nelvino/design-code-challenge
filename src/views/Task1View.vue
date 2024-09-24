<template>
  <div class="p-5">
    <TitleComponent title="Weekdays Between Two Dates" />
    <FormComponent :startDate="startDate" :endDate="endDate" @submit="calculateWeekdays" />
    <ResultComponent v-if="result !== null" :startDate="startDate" :endDate="endDate" :result="result" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { weekdaysBetweenTwoDates } from '@/helpers/weekdays'
import FormComponent from '../components/FormComponent.vue'
import TitleComponent from '../components/TitleComponent.vue'
import ResultComponent from '../components/ResultComponent.vue';

export default defineComponent({
  components: {
    FormComponent,
    TitleComponent,
    ResultComponent
  },
  setup() {
    const startDate = ref<string>('')
    const endDate = ref<string>('')
    const result = ref<number | null>(null)

    const calculateWeekdays = (dates: { startDate: string; endDate: string }) => {
      const start = new Date(dates.startDate)
      const end = new Date(dates.endDate)
      result.value = weekdaysBetweenTwoDates(start, end)
      startDate.value = dates.startDate
      endDate.value = dates.endDate
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
