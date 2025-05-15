export interface Coord {
  lon: number
  lat: number
}
export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}
export interface Main {
  temp: number
  feelsLike: number
  tempMin: number
  tempMax: number
  pressure: number
  humidity: number
}
export interface Wind {
  speed?: number
  deg?: number
  gust?: number
}
export interface CurrentWeather {
  coord?: Coord
  weather: Weather[]
  base?: string
  main: Main
  wind?: Wind
  visibility?: number
  rain: {
    '1h'?: number
    '3h'?: number
  }
  snow?: {
    '3h'?: number
  }
  clouds: {
    all: number
  }
  date: Date
  sys: {
    type?: number
    id?: number
    country?: string
    sunrise?: number
    sunset?: number
    pod?: string
  }
  timezone?: number
  id?: number
  name?: string
  pop?: number
}

export interface ForecastCity {
  id: number
  name: string
  coord: {
    lat: number
    lon: number
  }
  country: string
  timezone: number
  sunrise: number
  sunset: number
}

export interface WeatherForecast {
  list: CurrentWeather[]
  city: ForecastCity
}

export interface SearchResult {
  name: string
  lat: number
  lon: number
  country: string
  state?: string
}
