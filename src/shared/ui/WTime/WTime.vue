<script setup lang="ts">
import { formatTime } from '@/shared/lib/utils'
import { onMounted, onUnmounted, ref } from 'vue'

const time = ref('')
let timer: number

onMounted(() => {
  time.value = formatTime(new Date())

  timer = window.setInterval(() => {
    time.value = formatTime(new Date())
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <p class="text-right text-[19px] text-amber-50">
    {{ time }}
  </p>
</template>
