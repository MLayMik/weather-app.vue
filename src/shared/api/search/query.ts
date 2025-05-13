import type { SearchCityKeyParams } from './api'
import { useQuery } from '@tanstack/vue-query'
import { paramsAnd } from '../lib'
import { searchCity } from './api'

const entity = 'search'
const Scopes = { ByCity: 'by-city' } as const

const keys = {
  getSearchCity:
  (params: SearchCityKeyParams) => [
    { entity, scope: Scopes.ByCity, ...params },
  ] as const,
} as const

export function useSearchCity(params: SearchCityKeyParams) {
  return useQuery({
    queryKey: keys.getSearchCity(params),
    queryFn: ({ queryKey: [{ city }] }) =>
      searchCity({ city: city! }),
    enabled: paramsAnd(params),
  })
}
