import type { ApiEndpointsAndSchemas } from '../lib'
import { client } from '../lib'
import { normalizeCurrentWeather } from './normalizers'
import { CurrentWeatherSchema } from './types'

const endpoints = {
  getCurrentWeatherByCity: {
    url: (city: string) => `/api/weather?q=${city}`,
    method: 'get',
    schema: CurrentWeatherSchema,
  },
  getCurrentWeatherByCoords: {
    url: (lat: number, lon: number) => `/api/weather?lat=${lat}&lon=${lon}`,
    method: 'get',
    schema: CurrentWeatherSchema,
  },
} satisfies ApiEndpointsAndSchemas

export interface CurrentWeatherByCityParams { city: string }
export interface CurrentWeatherByCoordsParams { lat: number, lon: number }

export async function
getCurrentWeatherByCity({ city }: CurrentWeatherByCityParams) {
  const { url, method, schema } = endpoints.getCurrentWeatherByCity
  const data = await client[method](url(city), schema)

  return normalizeCurrentWeather(data)
}

export async function
getCurrentWeatherByCoords({ lat, lon }: CurrentWeatherByCoordsParams) {
  const { url, method, schema } = endpoints.getCurrentWeatherByCoords
  const data = await client[method](url(lat, lon), schema)

  return normalizeCurrentWeather(data)
}
