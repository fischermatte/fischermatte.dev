import * as React from 'react'
import {Project} from '../core/types'

interface Props {
  project: Project
}

export default class ProjectComponent extends React.Component<Props> {
  render(): JSX.Element {
    const project = this.props.project
    const period = periodText(project)
    return (
      <div className="mt-8 space-y-3">
        <h2 className="">
          {project.title}
          {/*{project.url && (*/}
          {/*  <span>*/}
          {/*    {' '}*/}
          {/*    <a className="link" href={project.url} target="_blank">*/}
          {/*      {project.url?.replace('https://', '')}*/}
          {/*    </a>*/}
          {/*  </span>*/}
          {/*)}*/}
        </h2>
        {project.customer && (
          <div className="text-base text-accent-normal opacity-70">
            {period}
            {' :: '}
            <a
              className="underline hover:text-accent-light "
              href={project.customer.url}
              target="_blank"
              rel="noreferrer"
            >
              {project.customer?.name}
            </a>
          </div>
        )}
        {project.tags && (
          <div className="text-sm opacity-50">
            {project.tags?.map(tag => (
              <span key={tag}>
                {'#'}
                {tag}{' '}
              </span>
            ))}
          </div>
        )}
        {/*{project.description && <div className="">{project.description}</div>}*/}
        {/*{project.links?.length > 0 && (*/}
        {/*  <div className="">*/}
        {/*    Links:{' '}*/}
        {/*    {project.links?.map(link => (*/}
        {/*      <a key={link.url} className="link mr-4" href={link.url} target="_blank">*/}
        {/*        {link.title}*/}
        {/*      </a>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    )
  }
}

function periodText(project: Project): string {
  const from = new Date(project.interval.from).getFullYear()
  const to = project.interval.to ? new Date(project.interval.to).getFullYear() : undefined
  let period
  if (from !== to && !!to) {
    period = `${from} - ${to}`
  } else {
    period = from
  }
  return period
}
