import { z } from 'zod'
import { MainSchema, WeatherSchema, WindSchema } from '../types'

export const ForecastItem = z.object({
  dt: z.number(),
  main: MainSchema,
  weather: z.array(WeatherSchema),
  clouds: z.object({
    all: z.number(),
  }),
  wind: WindSchema.optional(),
  visibility: z.number().optional(),
  pop: z.number().optional(),
  rain: z.object({
    '3h': z.number(),
  }).optional(),
  snow: z.object({
    '3h': z.number().optional(),
  }).optional(),
  sys: z.object({
    pod: z.string(),
  }),
})

export const ForecastCity = z.object({
  id: z.number(),
  name: z.string(),
  coord: z.object({
    lat: z.number(),
    lon: z.number(),
  }),
  country: z.string(),
  timezone: z.number(),
  sunrise: z.number(),
  sunset: z.number(),
})

export const WeatherForecastSchema = z.object({
  list: z.array(ForecastItem),
  city: ForecastCity,
})
