import type { CurrentWeatherByCityParams } from './api'
import { queryOptions, useQuery } from '@tanstack/vue-query'
import { getCurrentWeatherByCity } from './api'

const entity = 'weather'
const Scopes = { ByCity: 'by-city' } as const

const keys = {
  getCurrentWeatherByCity:
  (params: CurrentWeatherByCityParams) => [
    { entity, scope: Scopes.ByCity, ...params },
  ] as const,
} as const

export function
useCurrentWeatherByCityQuery(params: CurrentWeatherByCityParams) {
  return queryOptions({
    queryKey: keys.getCurrentWeatherByCity(params),
    queryFn: ({ queryKey: [{ city }] }) => getCurrentWeatherByCity({ city }),
  })
}
export function useCurrentWeatherByCity(params: CurrentWeatherByCityParams) {
  return useQuery(useCurrentWeatherByCityQuery(params))
}
