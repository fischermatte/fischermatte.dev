import {Period} from './common.types'

function parseYear(date: string): string | undefined {
  if (!date) {
    return undefined
  }
  const year = new Date(date).getFullYear()
  if (isNaN(year)) {
    return date
  }
  return year.toString()
}

export const periodText = (period?: Period): string => {
  const from = parseYear(period?.from)
  const to = period?.to ? parseYear(period?.to) : undefined
  let result
  if (from !== to && !!to) {
    result = `${from} - ${to}`
  } else {
    result = from
  }
  return result
}
