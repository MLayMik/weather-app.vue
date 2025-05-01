import type { CurrentWeather } from '@/shared/types/models'
import type { z } from 'zod'
import type { CurrentWeatherSchema } from './types'
import { objectPick } from '@antfu/utils'

export function normalizeCurrentWeather(
  currentWeather: z.infer<typeof CurrentWeatherSchema>,
): CurrentWeather {
  return {
    ...objectPick(currentWeather, [
      'name',
      'timezone',
      'base',
      'id',
    ]),
    coord: objectPick(currentWeather.coord, ['lat', 'lon']),
    main: {
      temp: Math.round(currentWeather.main.temp),
      feelsLike: Math.round(currentWeather.main.feels_like),
      tempMin: Math.round(currentWeather.main.temp_min),
      tempMax: Math.round(currentWeather.main.temp_max),
      pressure: currentWeather.main.pressure,
      humidity: currentWeather.main.humidity,
    },
    dt: new Date(currentWeather.dt * 1000),
    wind: {
      speed: currentWeather.wind?.speed ?? 0,
      deg: currentWeather.wind?.deg,
      gust: currentWeather.wind?.gust,
    },
    clouds: objectPick(currentWeather.clouds, ['all']),
    visibility: currentWeather.visibility / 1000,
    rain: {
      '1h': currentWeather.rain?.['1h'] ?? 0,
    },
    sys: objectPick(currentWeather.sys, [
      'type',
      'id',
      'country',
      'sunrise',
      'sunset',
    ]),
    weather: currentWeather.weather.map(weather => ({
      id: weather.id,
      main: weather.main,
      description: weather.description,
      icon: `https://openweathermap.org/img/wn/${weather.icon}`,
    })),
  }
}
