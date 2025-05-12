import type {
  CurrentWeatherByCityParams,
  CurrentWeatherByCoordsParams,
} from './api'
import { useQuery } from '@tanstack/vue-query'
import { getCurrentWeatherByCity, getCurrentWeatherByCoords } from './api'

const entity = 'weather'
const Scopes = {
  ByCity: 'by-city',
  ByCoords: 'by-coords',
} as const

const keys = {
  getCurrentWeatherByCity:
  (params: CurrentWeatherByCityParams) => [
    { entity, scope: Scopes.ByCity, ...params },
  ] as const,
  getCurrentWeatherByCoords:
  (params: CurrentWeatherByCoordsParams) => [
    { entity, scope: Scopes.ByCoords, ...params },
  ] as const,
} as const

export function
useCurrentWeatherByCity(params: CurrentWeatherByCityParams) {
  return useQuery({
    queryKey: keys.getCurrentWeatherByCity(params),
    queryFn: ({ queryKey: [{ city }] }) => getCurrentWeatherByCity({ city }),
  })
}

export function
useCurrentWeatherByCoords(params: CurrentWeatherByCoordsParams) {
  return useQuery({
    queryKey: keys.getCurrentWeatherByCoords(params),
    queryFn:
    ({ queryKey: [{ lat, lon }] }) => getCurrentWeatherByCoords({ lat, lon }),
  })
}
