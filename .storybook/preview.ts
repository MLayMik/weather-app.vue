import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'

import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import '../src/style.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
}

export default preview

// Инициализируем queryClient
const queryClient = new QueryClient()

// Подключаем Vue Query к Storybook
setup((app) => {
  app.use(VueQueryPlugin, { queryClient })
})

export const parameters = {
  layout: 'fullscreen',
}
