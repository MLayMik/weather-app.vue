import type { WeatherForecastKeyParams } from './api'
import { useQuery } from '@tanstack/vue-query'
import { paramsAnd } from '../lib'
import { getWeatherForecast } from './api'

const entity = 'weather'
const Scopes = {
  Forecast: 'forecast',
} as const

const keys = {
  getWeatherForecast:
  (params: WeatherForecastKeyParams) => [
    { entity, scope: Scopes.Forecast, ...params },
  ],
} as const

export function
useWeatherForecast(params: WeatherForecastKeyParams) {
  return useQuery({
    queryKey: keys.getWeatherForecast(params),
    queryFn: ({ queryKey: [{ lat, lon }] }) =>
      getWeatherForecast({ lat: lat!, lon: lon! }),
    enabled: paramsAnd(params),
  })
}
