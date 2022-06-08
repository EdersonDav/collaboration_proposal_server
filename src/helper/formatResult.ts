import { formatNumber } from './formatNumber'

export const formatResult = (values: any) => {
  let formatNumbers = {} as any
  for (const key in values) {
    const value = values[key]
    formatNumbers[key] = formatNumber(value)
  }

  return formatNumbers
}
