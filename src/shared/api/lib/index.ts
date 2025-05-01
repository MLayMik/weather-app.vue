import type { z } from 'zod'
import { QueryClient } from '@tanstack/vue-query'
import { RestClient } from './RestClient'

export const queryClient = new QueryClient(
  { defaultOptions: { queries: { refetchOnWindowFocus: false } } },
)

export const client = new RestClient()

interface EndpointAndSchema {
  url: string | ((...args: any) => string)
  method: 'get' | 'post' | 'put' | 'patch' | 'delete'
  schema?: z.ZodTypeAny
}

export type ApiEndpointsAndSchemas = Record<string, EndpointAndSchema>
