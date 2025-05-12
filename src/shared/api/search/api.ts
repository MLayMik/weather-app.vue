import type { ApiEndpointsAndSchemas } from '../lib'
import { client } from '../lib'
import { normalizeSearchResult } from './normalizers'
import { SearchResultSchema } from './types'

const endpoints = {
  searchCity: {
    url: (name: string) => `/api/search?q=${name}`,
    method: 'get',
    schema: SearchResultSchema,
  },
} satisfies ApiEndpointsAndSchemas

export interface SearchCityParams { city: string }

export async function searchCity({ city }: SearchCityParams) {
  const { url, method, schema } = endpoints.searchCity
  const data = await client[method](url(city), schema)

  return normalizeSearchResult(data)
}
