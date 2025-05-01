<script setup lang="ts">
import { formatDate } from '@/shared/lib/utils'
import { MapPin, Thermometer } from 'lucide-vue-next'

interface Props {
  city: string
  date: Date
  temperature: number
  icon: string
  humidity: number
  visibility: number
  airPressure: number
  wind: number
}

const {
  city,
  date,
  temperature,
  icon,
  humidity,
  visibility,
  airPressure,
  wind,
} = defineProps<Props>()
</script>

<template>
  <div
    class="
      font-poppins shadow-card-combined h-[450px] w-[820px] rounded-4xl
      bg-[linear-gradient(120deg,_rgba(173,54,203,1)_10%,_rgba(51,51,51,1)_99%)]
      text-white
    "
  >
    <div
      class="flex h-full flex-col justify-between px-7 pt-10 font-light"
    >
      <div class="flex items-center gap-1 text-3xl">
        <p>
          {{ city }}
        </p>
        <MapPin class="size-8" />
      </div>

      <div>
        <div class="flex items-center justify-center gap-1 text-7xl">
          <Thermometer class="size-16" />
          <p>{{ temperature }}°C</p>
          <img class="size-20" :src="icon">
        </div>
        <p class="text-xl font-medium underline">
          {{ formatDate({ date, options: { showYear: true } }) }}
        </p>
      </div>

      <div class="mx-8 mb-3 flex justify-between text-xl font-medium uppercase">
        <div class="flex flex-col items-center justify-center">
          <p>Humidity</p>
          <p>{{ humidity }}%</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p>Visiblity</p>
          <p>{{ visibility }}kM</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p>Air Pressure</p>
          <p class="normal-case">
            {{ airPressure }}hPa
          </p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p>Wind</p>
          <p>
            {{ wind }} m/s
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
