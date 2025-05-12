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
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  wind?: Wind
  visibility?: number
  rain: {
    '1h': number
  }
  clouds: {
    all: number
  }
  date: Date
  sys: {
    type?: number
    id?: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
}

export interface SearchResult {
  name: string
  lat: number
  lon: number
  country: string
  state?: string
}