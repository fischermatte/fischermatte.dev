import * as React from 'react'
import {ResumeItem} from '../shared/resume.types'
import ResumeItemComponent from './resume-item.component'

interface Props {
  items: ResumeItem[]
}

export default class ResumeItemsComponent extends React.Component<Props> {
  render(): JSX.Element {
    const items = this.props.items
    return (
      <div className="mt-7 space-y-7">
        {items.map(item => (
          <ResumeItemComponent item={item} key={item.title} />
        ))}
      </div>
    )
  }
}
