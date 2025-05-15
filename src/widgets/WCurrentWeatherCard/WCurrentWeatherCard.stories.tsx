import type { Meta, StoryFn } from '@storybook/vue3'
import { WCurrentWeatherCard } from '.'

export default {
  title: 'Widgets/WCurrentWeatherCard',
  component: WCurrentWeatherCard,
} as Meta<typeof WCurrentWeatherCard>

const Template: StoryFn<typeof WCurrentWeatherCard> = args => ({
  components: { WCurrentWeatherCard },
  setup() {
    return { args }
  },
  template: '<WCurrentWeatherCard v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  weather: [{
    id: 800,
    main: 'Clear',
    description: 'clear sky',
    icon: 'https://openweathermap.org/img/wn/04d.png',
  }],
  base: 'stations',
  main: {
    temp: 280,
    feelsLike: 200,
    tempMin: 299,
    tempMax: 400,
    humidity: 100,
    pressure: 1000,
  },
  wind: {
    speed: 100,
    deg: 123,
  },
  visibility: 10000,
  rain: {
    '1h': 124,
  },
  clouds: {
    all: 1000,
  },
  date: new Date(),
  sys: {
    type: 12,
    id: 12,
    country: 'RU',
    sunrise: 1677721234,
    sunset: 1677721234,
  },
  timezone: 3600,
  id: 123456,
  name: 'Moscow',
}
