import { z } from 'zod'

export const CoordSchema = z.object({
  lat: z.number(),
  lon: z.number(),
})
export const WeatherSchema = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
})
export const MainSchema = z.object({
  temp: z.number(),
  feels_like: z.number(),
  temp_min: z.number(),
  temp_max: z.number(),
  pressure: z.number(),
  humidity: z.number(),
})
export const WindSchema = z.object({
  speed: z.number().optional(),
  deg: z.number().optional(),
  gust: z.number().optional(),
}).optional()

export const CurrentWeatherSchema = z.object({
  coord: CoordSchema,
  weather: z.array(WeatherSchema),
  base: z.string(),
  wind: WindSchema,
  main: MainSchema,
  visibility: z.number(),
  rain: z.object({
    '1h': z.number(),
  }).optional(),
  clouds: z.object({
    all: z.number(),
  }),
  dt: z.number(),
  sys: z.object({
    type: z.number(),
    id: z.number(),
    country: z.string(),
    sunrise: z.number(),
    sunset: z.number(),
  }),
  timezone: z.number(),
  id: z.number(),
  name: z.string(),
})
