<template>
  <form @submit.prevent="onSubmit" class="bg-white p-6 rounded-lg shadow-md space-y-6">
    <div class="field">
      <label for="start-date" class="block text-sm font-medium text-gray-700 mb-2"
        >Start Date</label
      >
      <input
        id="start-date"
        type="date"
        v-model="localStartDate"
        data-cy="start-date"
        class="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <div class="field">
      <label for="end-date" class="block text-sm font-medium text-gray-700 mb-2">End Date</label>
      <input
        id="end-date"
        type="date"
        v-model="localEndDate"
        data-cy="end-date"
        class="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
    <div class="control">
      <button
        type="submit"
        data-cy="submit"
        class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition duration-200 ease-in-out"
      >
        Calculate
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: true
    },
    endDate: {
      type: String as PropType<string>,
      required: true
    }
  },
  emits: ['submit'],
  setup(props, { emit }) {
    const localStartDate = ref(props.startDate)
    const localEndDate = ref(props.endDate)

    const onSubmit = () => {
      if (localStartDate.value && localEndDate.value) {
        emit('submit', {
          startDate: localStartDate.value,
          endDate: localEndDate.value
        })
      }
    }

    return {
      localStartDate,
      localEndDate,
      onSubmit
    }
  }
})
</script>
