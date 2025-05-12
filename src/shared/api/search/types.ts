import { z } from 'zod'

export const SearchResultSchema = z.array(z.object({
  name: z.string(),
  lat: z.number(),
  lon: z.number(),
  country: z.string(),
  state: z.string().optional(),
}))
