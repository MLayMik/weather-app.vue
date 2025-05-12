<script setup lang="ts">
import { formatTime } from '@/shared/lib/utils'
import { toRefs } from 'vue'

interface Props {
  icon: string
  date: Date
  temp: number
}

const props = defineProps<Props>()
const { date } = toRefs<Props>(props)

const time = formatTime(date.value)
</script>

<template>
  <div class="mt-[50px] mb-[50px] flex justify-between">
    <div
      class="
        shadow-card_main relative flex h-32 w-28 flex-col items-center
        rounded-[25px]
        bg-[linear-gradient(120deg,_rgba(173,54,203,1)_10%,_rgba(51,51,51,1)_99%)]
      "
    >
      <div
        class="
          absolute bottom-0 left-0 h-20 w-28 flex-none rounded-[25px]
          bg-[linear-gradient(90deg,_rgba(55,51,51,1)_0%,_rgba(100,100,100,0.1)_100%)]
        "
      />
      <div
        class="
          font-poppins absolute my-3 h-full flex-col items-center
          justify-between text-center font-light text-amber-50
        "
      >
        <div>{{ time }}</div>
        <img :src="icon" alt="icon" class="size-14">
        <div class="text-[21px]">
          {{ temp }}°
        </div>
      </div>
    </div>
  </div>
</template>
