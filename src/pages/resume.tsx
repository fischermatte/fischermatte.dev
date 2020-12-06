import {LayoutComponent} from '../components/layout.component'
import * as React from 'react'
import {Resume} from '../shared/resume.types'
import {GetStaticProps} from 'next'
import {periodText} from '../shared/period.utils'
import ResumeItemsComponent from '../components/resume-items.component'

interface Props {
  resume: Resume
}
interface State {}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const m = await import('./api/resume')
  return {props: {resume: m.resume}}
}

export default class ResumeComponent extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <LayoutComponent>
        <h1>Resume</h1>
        <div className="flex flex-col space-y-14">
          <section>
            <h2>Work Experience</h2>
            <ResumeItemsComponent
              items={this.props.resume.jobs.map(j => {
                const subtitle = `${periodText(j.period)} | ${j.location}`
                return {
                  title: j.employer,
                  subtitles: [subtitle],
                }
              })}
            />
          </section>
          <section>
            <h2>Certificates</h2>
            <ResumeItemsComponent
              items={this.props.resume.certificates.map(c => {
                const subtitle = new Date(c.time).getFullYear().toString()
                return {
                  title: c.name,
                  subtitles: [subtitle],
                }
              })}
            />
          </section>
          <section>
            <h2>Education</h2>
            <ResumeItemsComponent
              items={this.props.resume.educations.map(e => {
                return {
                  title: e.title,
                  subtitles: e.locations.map(l => {
                    const period = periodText(l.period)
                    return `${period} | ${l.location}`
                  }),
                }
              })}
            />
          </section>
        </div>
      </LayoutComponent>
    )
  }
}
