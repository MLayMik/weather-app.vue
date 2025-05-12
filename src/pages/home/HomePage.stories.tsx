import type { Meta, StoryObj } from '@storybook/vue3'
import { HomePage } from '.'

const meta = {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HomePage>

export default meta

type Story = StoryObj<typeof HomePage>

export const Default: Story = {
  name: 'HomePage',
}
