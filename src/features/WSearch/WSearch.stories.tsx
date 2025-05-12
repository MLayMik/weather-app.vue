import type { Meta, StoryObj } from '@storybook/vue3'
import { WSearch } from '.'

const meta = {
  title: 'Features/WSearch',
  component: WSearch,
} satisfies Meta<typeof WSearch>

export default meta

type Story = StoryObj<typeof WSearch>

export const Default: Story = {
  name: 'Default',
}
