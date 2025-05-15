/* eslint-disable ts/consistent-type-definitions */
import type { ApiEndpointsAndSchemas, ToKeyParams } from '../lib'
import { client } from '../lib'
import { normalizeWeatherForecast } from './normalizers'
import { WeatherForecastSchema } from './types'

const endpoints = {
  getWeatherForecast: {
    url: (lat: number, lon: number) => `/api/forecast?lat=${lat}&lon=${lon}`,
    method: 'get',
    schema: WeatherForecastSchema,
  },
} satisfies ApiEndpointsAndSchemas

export type WeatherForecastParams = { lat: number, lon: number }
export type WeatherForecastKeyParams =
ToKeyParams<WeatherForecastParams>

export async function
getWeatherForecast({ lat, lon }: WeatherForecastParams) {
  const { url, method, schema } = endpoints.getWeatherForecast

  const data = await client[method](url(lat, lon), schema)

  return normalizeWeatherForecast(data)
}
