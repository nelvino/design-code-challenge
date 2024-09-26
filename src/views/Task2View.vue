<template>
  <BusinessDaysView title="Business Days (fixed holidays)" :useHolidayRules="false" />
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
