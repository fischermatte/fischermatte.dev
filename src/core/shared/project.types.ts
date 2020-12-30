import {Period} from './common.types'

export interface Image {
  title: string
  url: string
  width: number
  height: number
}

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
  images?: Image[]
  links?: {title: string; url: string}[]
}
