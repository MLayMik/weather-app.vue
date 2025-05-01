export function convertKeysToCamelCase<T>(obj: T): T {
  const newObj: Record<string, any> = {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
      newObj[newKey] = obj[key]
    }
  }

  return newObj as T
}
