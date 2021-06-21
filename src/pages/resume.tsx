import React from 'react'
import {periodText} from '../core/client/period.utils'
import ResumeItemsComponent from '../components/resume-items.component'
import LayoutComponent from '../components/layout.component'
import {resume} from '../../content/resume'

interface Props {}

const Resume: React.FunctionComponent<Props> = () => {
  return (
    <LayoutComponent>
      <h1>Resume</h1>
      <div className="flex flex-col space-y-14">
        <section>
          <h2>Work Experience</h2>
          <ResumeItemsComponent
            items={resume.jobs.map(j => {
              const subtitle = `${periodText(j.period)} | ${j.location}`
              return {
                title: j.employer,
                subtitles: [subtitle],
                url: j.url,
              }
            })}
          />
        </section>
        <section>
          <h2>Certificates</h2>
          <ResumeItemsComponent
            items={resume.certificates.map(c => {
              const subtitle = new Date(c.time).getFullYear().toString()
              return {
                title: c.name,
                subtitles: [subtitle],
                url: c.url,
              }
            })}
          />
        </section>
        <section>
          <h2>Education</h2>
          <ResumeItemsComponent
            items={resume.educations.map(e => {
              return {
                title: e.title,
                subtitles: e.locations.map(l => {
                  const period = periodText(l.period)
                  return `${period} | ${l.location}`
                }),
                url: e.url,
              }
            })}
          />
        </section>
      </div>
    </LayoutComponent>
  )
}

export default Resume
