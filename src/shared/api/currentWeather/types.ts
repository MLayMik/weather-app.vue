import { z } from 'zod'
import { CoordSchema, MainSchema, WeatherSchema, WindSchema } from '../types'

export const CurrentWeatherSchema = z.object({
  coord: CoordSchema,
  weather: z.array(WeatherSchema),
  base: z.string(),
  wind: WindSchema.optional(),
  main: MainSchema,
  visibility: z.number().optional(),
  rain: z.object({
    '1h': z.number(),
  }).optional(),
  clouds: z.object({
    all: z.number(),
  }),
  dt: z.number(),
  sys: z.object({
    type: z.number().optional(),
    id: z.number().optional(),
    country: z.string(),
    sunrise: z.number(),
    sunset: z.number(),
  }),
  timezone: z.number(),
  id: z.number(),
  name: z.string(),
})
