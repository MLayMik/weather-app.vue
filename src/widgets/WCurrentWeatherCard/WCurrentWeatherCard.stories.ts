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
  city: 'London',
  date:
  new Date('Thu May 01 2025 19:50:14 GMT+0200 (Central European Summer Time)'),
  temperature: 20,
  icon: 'https://openweathermap.org/img/wn/11d@2x.png',
  humidity: 50,
  visibility: 10,
  airPressure: 1012,
  wind: 5,

}
