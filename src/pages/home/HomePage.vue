<!-- eslint-disable max-len -->
<script setup lang="ts">
import { WMiniCards } from '@/features/WMiniCards'
import { WSearch } from '@/features/WSearch'
import { useCurrentWeatherByCity } from '@/shared/api/currentWeather'
import { formatTime } from '@/shared/lib/utils'
import logo from '@/shared/ui/assets/weather_logo.svg'
import { WCurrentWeatherCard } from '@/widgets/WCurrentWeatherCard'
import { onMounted, onUnmounted, ref } from 'vue'

const { data } = useCurrentWeatherByCity({ city: 'moscow' })

const currentTime = ref('')

let timer: number

onMounted(() => {
  currentTime.value = formatTime(new Date())

  timer = window.setInterval(() => {
    currentTime.value = formatTime(new Date())
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div
    class="font-poppins flex min-h-screen w-full bg-[#252323]"
  >
    <div
      class="
        mx-auto mt-2 w-full max-w-[1440px] p-5
        2xl:p-0
      "
    >
      <img :src="logo" alt="">
      <header class="flex justify-between">
        <div>
          <p class="text-7xl text-white">
            WeatherMe
          </p>
          <p class="text-right text-[19px] text-amber-50">
            {{ currentTime }}
          </p>
        </div>

        <div class="" />
      </header>
      <div class="mt-[45px] flex flex-col items-center justify-center">
        <!-- Input -->
        <WSearch />
        <WCurrentWeatherCard
          v-if="data && data.weather && data.main" :="data"
        />
      </div>
      <WMiniCards
        v-if="data && data.weather && data.main"
        :icon="data?.weather[0].icon"
        :date="data?.date"
        :temp="data?.main.temp"
      />
    </div>
  </div>
</template>
