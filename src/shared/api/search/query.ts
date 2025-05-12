import type { Ref } from 'vue'
import type { SearchCityParams } from './api'
import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { searchCity } from './api'

const entity = 'search'
const Scopes = { ByCity: 'by-city' } as const

const keys = {
  getSearchCity:
  (params: SearchCityParams) => [
    { entity, scope: Scopes.ByCity, ...params },
  ] as const,
} as const

export function useSearchCity(params: { city: Ref<string> }) {
  return useQuery({
    queryKey: computed(() => keys.getSearchCity({ city: params.city.value })),
    queryFn: () => searchCity({ city: params.city.value }),
    enabled: computed(() => !!params.city.value.trim()),
  })
}
