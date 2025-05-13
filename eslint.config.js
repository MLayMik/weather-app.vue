import antfu from '@antfu/eslint-config'
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'

export default antfu({
  plugins: {
    'readable-tailwind': eslintPluginReadableTailwind,
  },
  rules: {
    ...eslintPluginReadableTailwind.configs.warning.rules,
    ...eslintPluginReadableTailwind.configs.error.rules,
    'readable-tailwind/multiline': ['warn', { printWidth: 80 }],
    'max-len': ['warn', { code: 80 }],
    'vue/custom-event-name-casing': 'warn',
  },
})
