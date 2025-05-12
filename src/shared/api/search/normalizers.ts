import type { SearchResult } from '@/shared/types'
import type { z } from 'zod'
import type { SearchResultSchema } from './types'
import { objectPick } from '@antfu/utils'

export function normalizeSearchResult(
  searchResult: z.infer<typeof SearchResultSchema>,
): SearchResult[] {
  return searchResult.map(result => ({
    ...objectPick(result, [
      'name',
      'lat',
      'lon',
      'country',
      'state',
    ]),
  }))
}
