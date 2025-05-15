<script setup lang="ts">
import { WMiniCards } from '@/features/WMiniCards'
import { WSearch } from '@/features/WSearch'
import { useCurrentWeatherByCoords } from '@/shared/api/currentWeather'
import { useWeatherForecast } from '@/shared/api/weatherForecast'
import logo from '@/shared/ui/assets/weather_logo.svg'
import { WTime } from '@/shared/ui/WTime'
import { WCurrentWeatherCard } from '@/widgets/WCurrentWeatherCard'
import { ref } from 'vue'

const lat = ref<number | null>(44.34)
const lon = ref<number | null>(10.99)

function handleSearchResult(newLat: number, newLon: number) {
  lat.value = newLat
  lon.value = newLon
}

const { data: coordsData } = useCurrentWeatherByCoords({
  lat,
  lon,
})

const { data: forecastData } = useWeatherForecast({
  lat,
  lon,
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
          <p
            class="
              text-3xl text-white
              sm:text-7xl
            "
          >
            WeatherMe
          </p>
          <WTime />
        </div>
        <div class="" />
      </header>
      <div
        v-if="coordsData"
        class="mt-[45px] flex flex-col items-center justify-center"
      >
        <WSearch @search-result="handleSearchResult" />

        <WCurrentWeatherCard
          :="coordsData "
        />
      </div>
      <div
        v-if="forecastData"
        class="
          justify-between
          sm:flex
        "
      >
        <WMiniCards
          v-for="forecastItem in forecastData?.list"
          :key="forecastItem?.date?.toString()"
          :icon="forecastItem?.weather[0].icon"
          :date="forecastItem?.date"
          :temp="forecastItem?.main.temp"
        />
      </div>
    </div>
  </div>
</template>
