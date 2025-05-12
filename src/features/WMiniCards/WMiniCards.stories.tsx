import type { Meta, StoryObj } from '@storybook/vue3'
import { WMiniCards } from '.'

const meta = {
  title: 'Features/WMiniCards',
  component: WMiniCards,
} satisfies Meta<typeof WMiniCards>

export default meta

type Story = StoryObj<typeof WMiniCards>

export const Filled: Story = {
  name: 'Filled',
  args: {
    icon: 'https://openweathermap.org/img/wn/04d.png',
    date: new Date(),
    temp: 22,
  },
}
