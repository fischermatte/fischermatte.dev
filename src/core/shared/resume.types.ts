import {Period} from './common.types'

interface Job {
  employer: string
  location: string
  url?: string
  period: Period
}

interface Certificate {
  name: string
  url: string
  time: string
}

interface Education {
  title: string
  locations: EducationLocation[]
  url?: string
}

interface EducationLocation {
  location: string
  period: Period
}
export interface Resume {
  jobs: Job[]
  certificates: Certificate[]
  educations: Education[]
}

export interface ResumeItem {
  title: string
  subtitles: string[]
  url?: string
}
