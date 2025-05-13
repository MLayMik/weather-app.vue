import type {
  CurrentWeatherByCityKeyParams,
  CurrentWeatherByCoordsKeyParams,
} from './api'
import { useQuery } from '@tanstack/vue-query'
import { paramsAnd } from '../lib'
import { getCurrentWeatherByCity, getCurrentWeatherByCoords } from './api'

const entity = 'weather'
const Scopes = {
  ByCity: 'by-city',
  ByCoords: 'by-coords',
} as const

const keys = {
  getCurrentWeatherByCity:
  (params: CurrentWeatherByCityKeyParams) => [
    { entity, scope: Scopes.ByCity, ...params },
  ] as const,

  getCurrentWeatherByCoords:
  (params: CurrentWeatherByCoordsKeyParams) => [
    { entity, scope: Scopes.ByCoords, ...params },
  ] as const,
} as const

export function
useCurrentWeatherByCity(params: CurrentWeatherByCityKeyParams) {
  return useQuery({
    queryKey: keys.getCurrentWeatherByCity(params),
    queryFn: ({ queryKey: [{ city }] }) =>
      getCurrentWeatherByCity({ city: city! }),
  })
}

export function
useCurrentWeatherByCoords(params: CurrentWeatherByCoordsKeyParams) {
  return useQuery({
    queryKey: keys.getCurrentWeatherByCoords(params),
    queryFn: ({ queryKey: [{ lat, lon }] }) =>
      getCurrentWeatherByCoords({ lat: lat!, lon: lon! }),
    enabled: paramsAnd(params),
  })
}
