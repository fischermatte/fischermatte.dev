import {Period} from './common.types'

export const periodText = (period: Period): string => {
  const from = new Date(period.from).getFullYear()
  const to = period.to ? new Date(period.to).getFullYear() : undefined
  let result
  if (from !== to && !!to) {
    result = `${from} - ${to}`
  } else {
    result = from
  }
  return result
}
