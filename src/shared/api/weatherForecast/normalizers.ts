import type {
  CurrentWeather,
  ForecastCity,
  WeatherForecast,
} from '@/shared/types'
import type { z } from 'zod'
import type { WeatherForecastSchema } from './types'
import { objectPick } from '@antfu/utils'

export function normalizeWeatherForecast(
  weatherForecast: z.infer<typeof WeatherForecastSchema>,
): WeatherForecast {
  const { city: cityItem, list } = weatherForecast
  const city: ForecastCity = objectPick(cityItem, [
    'id',
    'name',
    'coord',
    'country',
    'timezone',
    'sunrise',
    'sunset',
  ])

  const normalizeForecastList: CurrentWeather[] = list.map(forecastItem => ({
    ...objectPick(forecastItem, [
      'wind',
      'clouds',
      'sys',
      'snow',
    ]),
    weather: forecastItem.weather.map(item => ({
      ...objectPick(item, ['description', 'id', 'main']),
      icon: `https://openweathermap.org/img/wn/${item.icon}.png`,
    })),
    main: {
      ...objectPick(forecastItem.main, ['pressure', 'humidity']),
      temp: Math.round(forecastItem.main.temp),
      feelsLike: Math.round(forecastItem.main.feels_like),
      tempMin: Math.round(forecastItem.main.temp_min),
      tempMax: Math.round(forecastItem.main.temp_max),
    },
    date: new Date(forecastItem.dt * 1000),
    visibility: forecastItem.visibility
      ? forecastItem.visibility / 1000
      : undefined,
    rain: {
      '3h': forecastItem.rain?.['3h'] ?? 0,
    },
  }))

  return {
    list: normalizeForecastList,
    city,
  }
}
