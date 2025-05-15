<script setup lang="ts">
import type { CurrentWeather } from '@/shared/types'
import { formatDate } from '@/shared/lib/utils'
import { MapPin, Thermometer } from 'lucide-vue-next'
import { computed, toRefs } from 'vue'

type Props = Pick<CurrentWeather, 'weather'
  | 'base'
  | 'main'
  | 'wind'
  | 'visibility'
  | 'rain'
  | 'clouds'
  | 'date'
  | 'sys'
  | 'timezone'
  | 'id'
  | 'name'>

const props = defineProps<Props>()

const { weather } = toRefs<Props>(props)

const weatherFirst = computed(() => {
  if (weather.value.length > 0) {
    return weather.value[0]
  }
  return null
})

const currentCityKey = computed(() => props.name)
</script>

<template>
  <div
    v-if="weatherFirst"
    :key="currentCityKey"
    class="
      font-poppins shadow-card-combined h-[450px] w-full max-w-[820px]
      rounded-4xl
      bg-[linear-gradient(120deg,_rgba(173,54,203,1)_10%,_rgba(51,51,51,1)_99%)]
      text-white
    "
  >
    <div
      class="flex h-full flex-col justify-between px-7 pt-10 font-light"
    >
      <div
        class="flex items-center gap-1 text-3xl"
      >
        <p>
          {{ name }}
        </p>
        <MapPin class="size-8" />
      </div>

      <div>
        <div class="flex items-center justify-center gap-1 text-7xl">
          <Thermometer class="size-16" />
          <p>{{ main.temp }}°C</p>
          <img class="size-20" :src="weatherFirst?.icon" alt="weather icon">
        </div>
        <p class="text-xl font-medium underline">
          {{ formatDate({ date, options: { showYear: true } }) }}
        </p>
      </div>

      <div
        class="
          mx-8 mb-3 flex flex-col justify-between gap-3 text-xl font-medium
          uppercase
          sm:flex-row sm:gap-0
        "
      >
        <div class="flex flex-col items-center justify-center">
          <p>Humidity</p>
          <p>{{ main.humidity }}%</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p>Visiblity</p>
          <p v-if="visibility">
            {{ visibility }}kM
          </p>
          <p v-else>
            No data
          </p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p>Air Pressure</p>
          <p class="normal-case">
            {{ main.pressure }} hPa
          </p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p>Wind</p>
          <p v-if="wind">
            {{ wind.speed }} m/s
          </p>
          <p v-else>
            No data
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
