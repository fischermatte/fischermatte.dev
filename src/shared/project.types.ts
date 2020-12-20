import {Period} from './common.types'

export interface Project {
  title: string
  description?: string
  url?: string
  customer: {
    name: string
    url?: string
  }
  period: Period
  tags?: string[]
  images?: {title: string; url: string}[]
  links?: {title: string; url: string}[]
}
