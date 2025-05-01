<script setup lang="ts">
import { watch } from 'vue'
import { useCurrentWeatherByCity } from './shared/api/weather'

const { data } = useCurrentWeatherByCity({ city: 'london' })
watch(
  () => data.value,
  (newValue) => {
    console.log('data changed', newValue)
  },
)
</script>

<template>
  <div class="text-red-600">
    text
    {{ data }}
    ==================================
  </div>
</template>

<style scoped>

</style>
