import type { MaybeRef } from 'vue'
import type { z } from 'zod'
import { QueryClient } from '@tanstack/vue-query'
import { and } from '@vueuse/math'
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

// Query keys
type KeyParam<T = number> = MaybeRef<T | null | undefined>

export type ToKeyParams<T extends Record<string, unknown>> = {
  [K in keyof T]: KeyParam<T[K]>
}

export function paramsAnd(params: Record<string, KeyParam<unknown>>) {
  return and(...Object.values(params))
}
