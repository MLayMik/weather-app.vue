<script setup lang="ts">
import { useSearchCity } from '@/shared/api/search'
import { useDebounce } from '@vueuse/core'
import { SearchIcon } from 'lucide-vue-next'
import { ref } from 'vue'

defineEmits<{
  (e: 'search-result', lat: number, lon: number): void
}>()
const input = ref('')
const isFocused = ref(false)

const debouncedInput = useDebounce(input, 500)

const { data: suggestions } = useSearchCity({ city: debouncedInput })
</script>

<template>
  <div class="relative mb-[45px]">
    <div class="absolute inset-y-0 left-0 flex items-center pl-6">
      <SearchIcon class="size-10" />
    </div>
    <input
      id="inputSearch"
      v-model="input"
      type="text"
      placeholder="Search city"
      autocomplete="off"
      class="
        font-poppins min-h-[66px] min-w-[711px] rounded-[25px] bg-[#d9d9d9]
        pl-20 text-3xl
      "
      @focus="isFocused = true"
      @blur="isFocused = false"
    >

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <ul
        v-if="suggestions?.length && isFocused"
        class="absolute mt-3 w-full"
      >
        <li
          v-for="item in suggestions"
          :key="item.name + item.country"
          class="m-1 rounded-xl border-b bg-[#d9d9d9] p-4 text-xl"
          @click="$emit('search-result', item.lat, item.lon)"
        >
          {{ item.name }}, {{ item.country }}
          <span v-if="item.state">({{ item.state }})</span>
        </li>
      </ul>
    </transition>
  </div>
</template>
