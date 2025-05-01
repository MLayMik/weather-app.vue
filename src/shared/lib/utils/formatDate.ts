interface Params {
  date: Date
  options?: {
    showYear?: boolean
    numericMonth?: boolean
  }
}

export function formatDate({ date, options }: Params): string {
  return date.toLocaleString(
    'en',
    {
      day: 'numeric',
      month: options?.numericMonth ? 'numeric' : 'long',
      year: options?.showYear ? 'numeric' : undefined,
    },
  )
}
