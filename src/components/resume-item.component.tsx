import * as React from 'react'
import {ResumeItem} from '../shared/resume.types'

interface Props {
  item: ResumeItem
}

export default class ResumeItemComponent extends React.Component<Props> {
  render(): JSX.Element {
    const item = this.props.item
    return (
      <div>
        <div className="mb-1">{item.title}</div>
        <div className="space-y-1">
          {item.subtitles.map(subtitle => (
            <div key={subtitle} className="opacity-60">
              {subtitle}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
