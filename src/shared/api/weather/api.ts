import type { ApiEndpointsAndSchemas } from '../lib'
import { client } from '../lib'
import { normalizeCurrentWeather } from './normalizers'
import { CurrentWeatherSchema } from './types'

const endpoints = {
  getCurrentWeatherByCity: {
    url: (city: string) => `/weather?q=${city}`,
    method: 'get',
    schema: CurrentWeatherSchema,
  },
} satisfies ApiEndpointsAndSchemas

export interface CurrentWeatherByCityParams { city: string }

export async function
getCurrentWeatherByCity({ city }: CurrentWeatherByCityParams) {
  const { url, method, schema } = endpoints.getCurrentWeatherByCity
  const data = await client[method](url(city), schema)

  return normalizeCurrentWeather(data)
}
