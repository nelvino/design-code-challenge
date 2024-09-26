<template>
  <BusinessDaysView title="Business Days (with public holiday rules)" :useHolidayRules="true" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BusinessDaysView from './BusinessDaysView.vue'

export default defineComponent({
  components: {
    BusinessDaysView
  }
})
</script>
